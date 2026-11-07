# Rekap Komisi Dokter (aplikasi desktop)
Copyright © 2026 by Dims

## Cara 1: build di komputer Windows
1. Install Node.js LTS dari https://nodejs.org
2. Klik dua kali `build.bat` (butuh internet, sekitar beberapa menit)
3. Hasilnya di folder `dist`:
   - `RekapKomisiDokter-1.0.0-portable.exe` : langsung jalan, tanpa install
   - `RekapKomisiDokter-Setup-1.0.0.exe`    : installer

Untuk mencoba tanpa membuat exe: buka terminal di folder ini, jalankan `npm install` lalu `npm start`.

## Cara 2: build otomatis lewat GitHub (tanpa install apa pun)
1. Buat repository baru di GitHub, upload semua isi folder ini (termasuk folder `.github`).
2. Buka tab Actions, pilih "Build EXE Windows", klik Run workflow.
3. Setelah selesai, buka hasil run tersebut dan unduh artifact `RekapKomisiDokter-exe`.

Setelah dibuat, aplikasi berjalan offline. Library Excel dan PDF sudah ikut di dalamnya.
Windows mungkin menampilkan peringatan SmartScreen karena aplikasi belum ditandatangani: klik "More info" lalu "Run anyway".
