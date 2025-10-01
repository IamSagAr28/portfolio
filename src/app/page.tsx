"use client";
import { HeroSection } from "@/components/ui/hero-odyssey";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Extracurricular from "@/components/sections/Extracurricular";
import CloudsBackdrop from "@/components/ui/clouds";
import StickyNav from "@/components/ui/sticky-nav";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      <section className="relative w-full h-screen">
        <div className="fixed top-2 left-2 z-50 rounded bg-black/60 text-white px-2 py-1 text-xs">Home rendering</div>
        <div className="flex w-full h-full justify-center items-center">
          <HeroSection />
        </div>
      </section>
      <StickyNav />
      <section className="relative">
        <CloudsBackdrop />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Extracurricular />
        <Certifications />
        <Contact />
      </section>
    </main>
  );
}
