// Menyalin library ke app/vendor supaya aplikasi bisa jalan tanpa internet
const fs = require('fs'), path = require('path');
const map = [
  ['xlsx/dist/xlsx.full.min.js', 'xlsx.full.min.js'],
  ['exceljs/dist/exceljs.min.js', 'exceljs.min.js'],
  ['jspdf/dist/jspdf.umd.min.js', 'jspdf.umd.min.js'],
  ['jspdf-autotable/dist/jspdf.plugin.autotable.min.js', 'jspdf.plugin.autotable.min.js']
];
const out = path.join(__dirname, '..', 'app', 'vendor');
fs.mkdirSync(out, { recursive: true });
for (const [s, d] of map) {
  const src = path.join(__dirname, '..', 'node_modules', s);
  if (!fs.existsSync(src)) { console.error('Tidak ditemukan: ' + src); process.exit(1); }
  fs.copyFileSync(src, path.join(out, d));
}
console.log('Library offline disalin ke app/vendor');
