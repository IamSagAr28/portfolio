"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

const skills = [
  "Data Structures & Algorithms",
  "DBMS",
  "OOP",
  "AI / ML",
  "Web Development",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "Node.js",
  "Express.js",
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full text-white py-20 overflow-hidden">
      <CloudsBackdrop intensity="high" layer="above" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
