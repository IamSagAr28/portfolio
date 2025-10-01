"use client";
import React from "react";
import CloudsBackdrop from "@/components/ui/clouds";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full text-white py-20">
      <CloudsBackdrop intensity="high" />
      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="space-y-2 text-white/80">
          <div>Email: <a className="underline" href="mailto:1dt23cs242@dsatm.edu.in">1dt23cs242@dsatm.edu.in</a></div>
          <div>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/vidyasagar-shetkar-93a89034b" target="_blank" rel="noreferrer">vidyasagar-shetkar</a></div>
          <div>GitHub: <a className="underline" href="https://github.com/IamSagAr28" target="_blank" rel="noreferrer">IamSagAr28</a></div>
          <div>Phone: <a className="underline" href="tel:+919380310456">+91-9380310456</a></div>
        </div>
      </div>
    </section>
  );
}
