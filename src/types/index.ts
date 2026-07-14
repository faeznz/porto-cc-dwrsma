export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  story: string;
  photo: string;
  stats: Stat[];
  socials: Socials;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Socials {
  instagram: string;
  tiktok: string;
  youtube: string;
  email: string;
  whatsapp: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  client: string;
  image: string;
  instagram?: string;
  youtube?: string;
}

export type PortfolioCategory = "All" | "Data Analyst Intern" | "Student Employee – Tim Kreatif" | "Staff Humas, Publikasi, & Dokumentasi (HPD)" | "Assistant Director (Visual)";

export interface InstagramPost {
  id: number;
  image: string;
  link: string;
  caption: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}
