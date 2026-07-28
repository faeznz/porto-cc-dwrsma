import { Profile, Experience } from "@/types";

export const profile: Profile = {
  name: "Dewi Rismawati",
  role: "Content Creator",
  tagline: "Video • Desain • Konten Kreatif",
  bio: [
    "Halo! Saya Dewi Rismawati, content creator yang berpengalaman dalam pembuatan konten untuk institusi pendidikan, kepanitiaan kampus, dan instansi pemerintah.",
    "Terbiasa dalam proses produksi konten dari riset tren, penyusunan konsep dan skrip, produksi video, hingga proses editing. Siap berkolaborasi dalam tim kreatif untuk menghasilkan konten yang berdampak.",
  ],
  story: "Perjalanan saya dimulai dari latar belakang Multimedia di SMK yang kemudian berkembang melalui berbagai pengalaman organisasi dan kepanitiaan di kampus. Dari menjadi Staff Humas, Publikasi, dan Dokumentasi hingga terlibat dalam proyek company profile instansi pemerintah, setiap pengalaman memperkuat kemampuan saya dalam berpikir kreatif dan terstruktur.",
  photo: "/riss-pink.png",
  stats: [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "4+", label: "Proyek Besar" },
    { value: "2", label: "Instansi" },
    { value: "30+", label: "Konten" },
  ],
  socials: {
    instagram: "https://instagram.com/dwrsmaaa",
    tiktok: "https://tiktok.com/@dewirismawati",
    youtube: "https://youtube.com/@dewirismawati",
    email: "dewirismawati9702@gmail.com",
    whatsapp: "https://wa.me/6281325055309",
  },
};

export const experiences: Experience[] = [
  {
    year: "2025",
    title: "Data Analyst Intern",
    company: "Lembaga Administrasi Negara RI (LAN RI)",
    description: "Ditugaskan memproduksi video company profile—menyusun konsep, menulis skrip, pengambilan gambar sebagai videografer. Berkoordinasi dengan tim konten dan memberikan masukan teknis untuk pengembangan konten media sosial instansi.",
  },
  {
    year: "2024",
    title: "Student Employee – Tim Kreatif",
    company: "Program Studi Matematika, Universitas Ahmad Dahlan",
    description: "Merencanakan, membuat, dan mempublikasikan konten video serta desain visual untuk Instagram dan TikTok Prodi Matematika. Menghasilkan konten yang selaras dengan identitas prodi untuk mendukung promosi dan informasi.",
  },
  {
    year: "2023",
    title: "Staff Humas, Publikasi, & Dokumentasi (HPD)",
    company: "P2K, Universitas Ahmad Dahlan",
    description: "Melakukan riset tren media sosial, menyusun konsep konten, dan melakukan pengambilan gambar serta editing video untuk publikasi acara P2K.",
  },
  {
    year: "2023",
    title: "Assistant Director (Visual)",
    company: "Company Profile Project",
    description: "Mendukung penyutradaraan visual melalui pengembangan konsep artistik dan komposisi video. Memberikan rekomendasi pergerakan kamera, pencahayaan, dan sudut pengambilan gambar. Menjembatani ide kreatif antara pihak perpustakaan dengan tim produksi teknis.",
  },
];
