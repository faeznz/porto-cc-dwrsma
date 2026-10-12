import { Profile, Experience } from "@/types";

export const profile: Profile = {
  name: "Dewi Rismawati",
  role: "Content Creator",
  tagline: "Video • Desain • Konten Kreatif",
  bio: [
    "Halo! Saya Dewi Rismawati, content creator yang berpengalaman dalam pembuatan konten untuk institusi pendidikan, kepanitiaan kampus, dan instansi pemerintah.",
    "Memiliki ketertarikan pada dunia **Fotografi** dan **Videografi**, serta terbiasa menjalani proses produksi konten mulai dari riset tren, penyusunan konsep dan skrip, produksi video, hingga tahap editing. Saya senang mengeksplorasi ide kreatif dan mengemasnya menjadi konten yang menarik, komunikatif, dan berdampak. Siap berkolaborasi dalam tim kreatif untuk menghasilkan karya yang berkualitas.",
  ],
  story: "Perjalanan saya dimulai dari latar belakang Multimedia di SMK, yang kemudian berkembang melalui berbagai pengalaman organisasi dan kepanitiaan di kampus. Dari menjadi Staff Humas, Publikasi, dan Dokumentasi hingga terlibat dalam proyek company profile instansi pemerintah, setiap pengalaman memperkuat kemampuan saya dalam berpikir kreatif, menyusun konsep, dan bekerja secara terstruktur.",
  photo: "/images/risma-5.webp",
  stats: [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "4+", label: "Proyek Besar" },
    { value: "2", label: "Instansi" },
    { value: "30+", label: "Konten" },
  ],
  socials: {
    instagram: "https://instagram.com/dwrsmaaa",
    tiktok: "https://www.tiktok.com/@llabooo?_r=1&_t=ZS-9ASf5kLlyke",
    youtube: "https://youtube.com/@dewirismawati",
    email: "dwrsmaaa@gmail.com",
    whatsapp: "https://wa.me/6281325055309",
  },
};

export const experiences: Experience[] = [
  {
    year: "2025",
    title: "Data Analyst Intern",
    company: "Lembaga Administrasi Negara RI (LAN RI)",
    description: "Di luar tugas utama sebagai Data Analyst Intern, saya **berkontribusi** dalam produksi video **company profile** instansi pemerintah sebagai **videografer**, **penyusun konsep**, dan **penulis naskah**. Saya juga terlibat dalam produksi konten harian media sosial sebagai **talent**. Seluruh proses dilakukan melalui kolaborasi dengan tim magang untuk menghasilkan konten yang informatif, menarik, dan sesuai dengan kebutuhan instansi.",
  },
  {
    year: "2025",
    title: "Assistant Director (Visual)",
    company: "Company Profile Project",
    description: "Mendukung **penyutradaraan visual** melalui pengembangan konsep artistik dan komposisi video. Memberikan rekomendasi **pergerakan kamera**, **pencahayaan**, dan **sudut pengambilan gambar**. Menjembatani ide kreatif antara pihak perpustakaan dengan tim produksi teknis.",
  },
  {
    year: "2024",
    title: "Student Employee – Tim Kreatif",
    company: "Program Studi Matematika, Universitas Ahmad Dahlan",
    description: "Merencanakan, membuat, dan mempublikasikan **konten video** serta **desain visual** untuk Instagram dan TikTok Prodi Matematika. Menghasilkan konten yang selaras dengan identitas prodi untuk mendukung **promosi** dan **informasi**.",
  },
  {
    year: "2023",
    title: "Staff Humas, Publikasi, & Dokumentasi (HPD)",
    company: "P2K, Universitas Ahmad Dahlan",
    description: "Melakukan **riset tren** media sosial, menyusun **konsep konten**, dan melakukan pengambilan footage serta editing video untuk publikasi acara P2K.",
  },
];
