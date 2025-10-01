"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

const projects = [
  {
    title: "Medi‑Care",
    stack: ["HTML", "CSS", "JS", "Express.js", "MongoDB", "REST"],
    desc:
      "Role‑based medical web portal with login, encrypted storage in MongoDB, Gemini AI suggestions, and REST APIs for patient records.",
    links: [
      { label: "Live site here", href: "https://medi-care1528-4b4f90.netlify.app/" },
    ],
  },
  {
    title: "Government‑Schemes",
    stack: ["MERN", "Gemini AI", "REST"],
    desc:
      "MERN web app to discover personalized government schemes using user input and MongoDB; integrates Gemini AI for recommendations.",
    links: [
      { label: "Live site here", href: "https://yogeshs347.github.io/government_schemes_frontend/" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full text-white py-20 overflow-hidden">
      <CloudsBackdrop intensity="high" layer="above" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 p-5 bg-white/5">
              <h3 className="text-xl font-medium mb-2">{p.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-sm mb-4">{p.desc}</p>
              <div className="flex gap-3">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-sm underline underline-offset-4">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
