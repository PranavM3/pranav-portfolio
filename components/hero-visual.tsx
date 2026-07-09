"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroVisual() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-animate-hero]");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(122,31,45,0.16),_transparent_47%)]" />
      <div className="absolute -right-8 top-8 h-36 w-36 rounded-full bg-[#f4b6c2]/60 blur-3xl" />
      <div className="relative grid gap-6">
        <div className="rounded-2xl border border-white/70 bg-zinc-950/90 p-6 text-white">
          <p data-animate-hero className="text-sm uppercase tracking-[0.32em] text-[#f4b6c2]">
            Product craft
          </p>
          <h3 data-animate-hero className="mt-4 text-2xl font-semibold">
            Designing premium experiences with speed and discipline.
          </h3>
          <p data-animate-hero className="mt-3 max-w-xl text-sm leading-7 text-zinc-300">
            From first impressions to repeatable design systems, every detail is shaped around clarity, trust, and momentum.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div data-animate-hero className="rounded-2xl border border-[#7a1f2d]/10 bg-[#fff6f7] p-5">
            <p className="text-sm font-semibold text-[#7a1f2d]">Core focus</p>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              Frontend architecture, visual systems, and polished product storytelling.
            </p>
          </div>
          <div data-animate-hero className="rounded-2xl border border-white/70 bg-white/80 p-5">
            <p className="text-sm font-semibold text-zinc-900">Impact</p>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              Improving activation, trust, and conversion across every launch I touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
