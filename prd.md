# PRD - Personal Portfolio Website (Content Creator)

## 1. Overview

### Project Name

**Creator Portfolio**

### Objective

Membangun website portfolio personal yang modern, interaktif, dan responsif untuk seorang content creator. Website akan menjadi media untuk memperlihatkan identitas, pengalaman, serta karya-karya yang pernah dibuat sehingga mudah dibagikan kepada calon klien maupun brand.

Website menggunakan konsep **Single Page Application (SPA)** sehingga seluruh informasi dapat diakses dengan smooth scrolling tanpa perpindahan halaman.

---

# 2. Goals

* Memperkenalkan personal branding.
* Menampilkan pengalaman kerja.
* Menampilkan portofolio konten.
* Menampilkan feed Instagram terbaru.
* Memudahkan calon client menghubungi creator.
* Mobile First.
* SEO Friendly.
* Cepat diakses (Core Web Vitals).

---

# 3. Target User

* Brand
* Agency
* UMKM
* Event Organizer
* Calon client
* HR
* Pengunjung umum

---

# 4. Technology Stack

## Framework

* Next.js 15 (App Router)
* TypeScript

---

## Styling

* TailwindCSS
* shadcn/ui
* clsx
* tailwind-merge

---

## Animation

* Framer Motion
* Lenis (Smooth Scroll)
* GSAP (optional untuk efek tertentu)

---

## Icons

* lucide-react

---

## Image

* next/image

---

## Fonts

Google Fonts

Misalnya:

* Poppins
* Outfit
* Plus Jakarta Sans

---

## Carousel

Embla Carousel

---

## Gallery

Lightbox

* yet-another-react-lightbox

---

## Deployment

* Vercel

---

# 5. Theme

## Style

Modern

Minimal

Playful

Bright

Clean

Professional

---

## Primary Color

```text
#FF6B6B
```

---

## Secondary

```text
#4ECDC4
```

---

## Accent

```text
#FFE66D
```

---

## Background

```text
#FAFAFA
```

---

## Dark Text

```text
#222222
```

---

# 6. Website Structure

```
Hero

↓

About Me

↓

Experience

↓

Skills

↓

Portfolio

↓

Instagram Feed

↓

Testimonials (optional)

↓

Contact

↓

Footer
```

---

# 7. Detail Section

---

## Hero

Isi:

* Foto besar
* Nama
* Profession

Contoh

```
Hi!

I'm Sarah

Content Creator
Lifestyle • Beauty • Travel
```

Button

* View Portfolio
* Contact Me

Background:

Animated Gradient

Animasi

* Fade Up
* Floating Blob
* Mouse Parallax

---

## About

Isi

* Foto
* Biodata singkat
* Story

Card kecil

```
3+
Years Experience

120+
Projects

80K
Followers

30+
Brands
```

Animasi

* Fade Left
* Counter Animation

---

## Experience

Timeline

```
2024

Content Creator

↓

2023

Freelance Videographer

↓

2022

Social Media Specialist
```

Animasi

Scroll Reveal

---

## Skills

Grid

```
Instagram

TikTok

Photography

Videography

Editing

Canva

CapCut

Premiere

Lightroom
```

Hover

Glow Card

---

# Portfolio

Section terbesar.

Layout

Masonry Gallery

```
□ □
 □□□
□ □
```

Setiap card

* Thumbnail
* Judul
* Kategori
* Client

Hover

* Zoom
* Overlay
* View Detail

Klik

Open Lightbox

---

Kategori

* Beauty
* Fashion
* Travel
* Food
* Event
* Commercial

Filter

```
All

Beauty

Travel

Food

Event
```

---

# Instagram Feed

Menggunakan embed Instagram.

Pilihan:

## Cara 1

Instagram Embed

```
iframe
```

Menampilkan beberapa post.

---

## Cara 2 (Recommended)

Menggunakan API atau layanan seperti:

* Elfsight
* SnapWidget
* LightWidget

karena Instagram tidak mengizinkan embed feed penuh hanya dengan iframe biasa.

Layout

```
□□□□

□□□□
```

Button

```
Follow on Instagram
```

---

# Gallery

Upload manual

Bisa berupa

* JPG
* PNG
* WEBP

Klik

Lightbox

Zoom

Swipe Mobile

---

# Contact

Card

Instagram

Email

WhatsApp

Location

Button

```
Let's Work Together
```

---

Footer

Logo

Social Media

Copyright

---

# 8. Responsive

Breakpoint

Mobile

Tablet

Laptop

Desktop

---

Layout

Desktop

```
2 Column

Hero

Image | Text
```

Tablet

```
Stack
```

Mobile

```
Single Column
```

Semua card berubah menjadi 1 kolom.

---

# 9. Animation

Menggunakan Framer Motion.

Hero

* Fade
* Scale

Section

* Fade Up

Card

* Hover Scale
* Rotate sedikit

Gallery

* Stagger Animation

Timeline

* Reveal saat scroll

Counter

* Count Up

Image

* Floating

Background

Animated Gradient

---

# 10. Performance

Gunakan

* next/image
* lazy loading
* dynamic import
* metadata API
* ISR bila diperlukan

Target

Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practice

100

---

# 11. SEO

Title

```
Sarah | Content Creator Portfolio
```

Description

```
Professional Content Creator specializing in Beauty, Lifestyle, Travel and Commercial Content.
```

OpenGraph

Twitter Card

Sitemap

robots.txt

Schema.org Person

---

# 12. Accessibility

Alt Image

Keyboard Navigation

ARIA Label

Contrast

Focus Ring

---

# 13. Folder Structure

```
src/
│
├── app/
│
├── components/
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── skills/
│   ├── portfolio/
│   ├── instagram/
│   ├── contact/
│   └── ui/
│
├── lib/
│
├── hooks/
│
├── data/
│
├── types/
│
├── utils/
│
└── assets/
```

---

# 14. Data Structure

Contoh sederhana agar konten mudah diperbarui tanpa mengubah komponen:

```ts
export const profile = {
  name: "Sarah",
  role: "Content Creator",
  bio: "...",
  experience: [...],
  skills: [...],
  socials: {
    instagram: "",
    tiktok: "",
    youtube: "",
  },
};
```

```ts
export const portfolio = [
  {
    id: 1,
    title: "Wardah Campaign",
    category: "Beauty",
    client: "Wardah",
    image: "/portfolio/wardah.webp",
    instagram: "https://instagram.com/p/xxxxx"
  }
]
```

---

# 15. Future Enhancement

* CMS (Sanity/Contentful/Notion) untuk mengelola konten tanpa deploy ulang.
* Integrasi Instagram Graph API agar feed selalu otomatis diperbarui (dibanding iframe yang terbatas).
* Mode gelap (Dark Mode).
* Dukungan multi-bahasa (Indonesia/English).
* Halaman studi kasus (Case Study) untuk setiap proyek.
* Blog sederhana untuk berbagi tips dan pengalaman.

## Catatan Penting tentang Instagram

Saya **tidak menyarankan menggunakan `<iframe>` langsung ke URL Instagram**, karena Instagram umumnya memblokir embed iframe untuk profil/feed dan hanya mendukung embed post tertentu. Untuk hasil yang stabil dan profesional, urutan rekomendasinya adalah:

1. **Instagram Graph API** (terbaik, memerlukan akun bisnis dan konfigurasi Meta).
2. **LightWidget, SnapWidget, atau Elfsight** untuk menampilkan feed.
3. **Embed post individual** jika hanya ingin menampilkan beberapa postingan.
4. Menyimpan thumbnail secara lokal dan mengarahkan pengguna ke posting Instagram saat diklik (paling cepat dan SEO-friendly).

Dengan spesifikasi di atas, hasil akhirnya akan terasa modern seperti portfolio kreatif masa kini: animasi halus dengan Framer Motion, tata letak masonry yang menarik, warna cerah, responsif di semua perangkat, dan performa yang tetap tinggi berkat Next.js serta optimasi gambar.