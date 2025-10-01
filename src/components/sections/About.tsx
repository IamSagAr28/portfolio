"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

export default function About() {
  return (
    <section id="about" className="relative w-full text-white py-20 overflow-hidden">
      <CloudsBackdrop intensity="medium" layer="above" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-white/80 leading-7">
          Computer Science undergraduate with strong skills in Data Structures, Algorithms, and full‑stack Web Development,
          complemented by growing expertise in Machine Learning. Experienced in building scalable, responsive applications
          and data‑driven intelligent solutions.
        </p>
      </div>
    </section>
  );
}
