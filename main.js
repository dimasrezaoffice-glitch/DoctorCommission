const { app, BrowserWindow, protocol, net, Menu, dialog } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true } }
]);

const ROOT = path.join(__dirname, 'app');

function createWindow() {
  const win = new BrowserWindow({
    width: 1366, height: 850, title: 'Rekap Komisi Dokter', backgroundColor: '#f6f7f9',
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: 'File', submenu: [{ role: 'reload', label: 'Muat ulang' }, { role: 'quit', label: 'Keluar' }] },
    { label: 'Tampilan', submenu: [{ role: 'zoomIn', label: 'Perbesar' }, { role: 'zoomOut', label: 'Perkecil' },
      { role: 'resetZoom', label: 'Ukuran normal' }, { role: 'togglefullscreen', label: 'Layar penuh' }] },
    { label: 'Bantuan', submenu: [{ label: 'Tentang', click: () => dialog.showMessageBox(win, {
      type: 'info', title: 'Tentang', message: 'Rekap Komisi Dokter',
      detail: 'Versi ' + app.getVersion() + '\nCopyright © 2026 by Dims' }) }] }
  ]));
  win.loadURL('app://local/index.html');
}

app.whenReady().then(() => {
  protocol.handle('app', (req) => {
    const rel = decodeURIComponent(new URL(req.url).pathname);
    const file = path.normalize(path.join(ROOT, rel));
    if (!file.startsWith(ROOT)) return new Response('Forbidden', { status: 403 });
    return net.fetch(pathToFileURL(file).toString());
  });
  createWindow();
});
app.on('window-all-closed', () => app.quit());
