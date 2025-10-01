"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="relative w-full text-white py-20">
      <CloudsBackdrop intensity="high" />
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Extracurricular</h2>
        <div className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h3 className="text-xl font-medium mb-2">IEEE Computer Society, DSATM</h3>
          <p className="text-white/80 text-sm mb-3">Student Volunteer – SYNTHACK Hackathon</p>
          <a
            className="inline-block text-sm underline underline-offset-4"
            href="https://drive.google.com/file/d/1rrpSIuntCgt9gtLu6DebTNCvjOjxe3j3/view?usp=drive_link"
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
