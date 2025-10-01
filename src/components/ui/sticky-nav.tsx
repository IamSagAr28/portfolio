"use client";
import React, { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "extracurricular", label: "Extracurricular" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function StickyNav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target.id) setActive(visible.target.id);
      },
      { threshold: [0.4, 0.6], rootMargin: "-80px 0px -40% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              active === l.id ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
