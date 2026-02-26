# Bukber Yuk - Next.js App Router

Web sederhana dengan nuansa macOS modern: ada card seperti window, tombol interaktif yang playful, GIF saat menerima ajakan, confetti ringan, lalu auto-redirect ke Twitter Intent.

## Fitur

- Next.js 14 + App Router, siap deploy ke Vercel.
- Tampilan minimalis Apple-like (system font, shadow halus, rounded corners).
- Tombol **Males** berpindah random saat hover/touch dan tetap di dalam area window.
- Tombol **Ayo** membesar bertahap saat tombol **Males** berpindah.
- Saat klik **Ayo**:
  - Menampilkan GIF lucu/romantis.
  - Menampilkan teks: `Asik! Siap-siap ya 😆`.
  - Menyalakan confetti ringan berbasis CSS.
  - Redirect otomatis 1.5 detik ke `https://twitter.com/intent/tweet?text=Ayo`.

## Install

```bash
npm install
```

## Menjalankan di lokal

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Build production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

### Opsi 1: via dashboard Vercel

1. Push repo ke Git provider (GitHub/GitLab/Bitbucket).
2. Buka [https://vercel.com/new](https://vercel.com/new).
3. Import repository.
4. Framework otomatis terdeteksi sebagai Next.js.
5. Klik **Deploy**.

### Opsi 2: via Vercel CLI

```bash
npm i -g vercel
vercel
```

Ikuti prompt sampai selesai. Untuk production deploy:

```bash
vercel --prod
```
