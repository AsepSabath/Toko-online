# Toko Online Sederhana (Next.js)

Website toko online sederhana menggunakan Next.js, Tailwind CSS, dan mock data produk. Siap untuk dikembangkan dan dideploy ke Vercel.

## Struktur Project
- Halaman utama: daftar produk
- Halaman detail produk: /produk/[id]
- Data produk: src/data/products.js
- Gambar produk: public/

## Cara Menjalankan Lokal
1. Install dependencies:
	```bash
	npm install
	```
2. Jalankan development server:
	```bash
	npm run dev
	```
3. Buka browser ke http://localhost:3000

## Edit Produk
- Edit file `src/data/products.js` untuk menambah/mengubah produk.
- Tambahkan gambar produk ke folder `public/`.

## Deploy ke Vercel
1. Push project ke GitHub.
2. Buka https://vercel.com/import dan hubungkan repo GitHub kamu.
3. Ikuti instruksi deploy (otomatis build & deploy).

---

> Ganti mock data/gambar sesuai kebutuhanmu. Untuk fitur lebih lanjut (keranjang, checkout, dsb.), tambahkan sesuai keinginan.
