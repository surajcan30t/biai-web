"use client";
import Hero from "@/components/Hero";
import { ReactLenis } from "lenis/react";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="relative flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-baumans)]">
        <div className="relative min-h-screen">
          <Hero />
        </div>
        <div className="flex justify-center items-center">
          <About />
        </div>
        <div className="flex justify-center items-center">
          <Services />
        </div>
        <div className="flex justify-center items-center">
          <Technologies />
        </div>
        <div className="flex justify-center items-center">
          <Teams />
        </div>
      </div>
    </ReactLenis>
  );
}
