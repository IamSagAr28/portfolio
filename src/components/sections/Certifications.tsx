"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

const certs = [
  {
    name: "Web 3.0 Hackathon – BITS Pilani (Apogee '25)",
    date: "Apr 02, 2025",
    href: "https://drive.google.com/file/d/1fy2zd3molO2tP4hfYBCEo_c7cjs6vRB7/view?usp=drive_link",
  },
  {
    name: "ByteVerse 7.0 Hackathon – NIT Patna",
    date: "Apr 30, 2025",
    href: "https://drive.google.com/file/d/1BmR6vGqDO-7tOV5TDZ3qzsO_YaeAa1Eu/view?usp=drive_link",
  },
  {
    name: "Microsoft SQL – Triggers (OnWingspan)",
    date: "May 29, 2025",
    href: "https://drive.google.com/file/d/1KV78Oal054QLaD8NTot-WIl0yfgMyqOl/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full text-white py-20">
      <CloudsBackdrop />
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
        <ul className="space-y-4">
          {certs.map((c) => (
            <li key={c.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-3">
              <div className="text-white/90">{c.name}</div>
              <div className="flex items-center gap-3">
                <span className="text-white/60 text-sm">{c.date}</span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/10"
                >
                  View Certificate
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
