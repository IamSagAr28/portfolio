"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full text-white py-20 overflow-hidden">
      <CloudsBackdrop intensity="high" layer="above" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="rounded-xl border border-white/10 p-5 bg-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-medium">Walmart Global Tech</h3>
            <span className="text-white/60 text-sm">July 2025 • Remote</span>
          </div>
          <p className="text-white/80 text-sm mt-3">
            Advanced Software Engineering Virtual Internship (Forage). Completed tasks in
            Data Structures, Software Architecture, Relational Database Design, and Data
            Munging; simulated large‑scale backend workflows.
          </p>
          <a
            className="inline-block mt-3 text-sm underline underline-offset-4"
            href="https://drive.google.com/file/d/1yMIt1Ex-ZTxN8gm5mqSpBUF9t_T8v8Sn/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}
