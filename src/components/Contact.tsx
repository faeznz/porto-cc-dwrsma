"use client";

import {
  Mail,
  MapPin,
  Globe,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { profile } from "@/data/profile";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: profile.socials.email,
    href: `mailto:${profile.socials.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0813-2505-5309",
    href: profile.socials.whatsapp,
  },
  {
    icon: Globe,
    label: "Instagram",
    value: "@dewirismawati",
    href: profile.socials.instagram,
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Cilacap, Jawa Tengah",
    href: "#",
  },
];

export default function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Let's Work Together"
      subtitle="Have a project in mind? Let's make it happen"
      className="bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.label} delay={index * 0.1}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-dark">{item.value}</p>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="text-center mt-10">
          <a
            href={`mailto:${profile.socials.email}?subject=Collaboration Inquiry`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
          >
            Let&apos;s Work Together
            <Mail size={20} />
          </a>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
