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
  description?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  tiktokThumbnail?: boolean;
  orientation?: "landscape" | "portrait";
  imageAspectRatio?: string;
}

export type PortfolioCategory = "Videography" | "Design" | "Photography";

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
