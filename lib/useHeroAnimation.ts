"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function useHeroAnimation(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 30, duration: 0.6 })
        .from(".hero h1", { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
        .from(".hero p", { opacity: 0, y: 30, duration: 0.7 }, "-=0.4")
        .from(".hero-buttons", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
        .from(
          ".hero-stat",
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.15 },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, [active]);
}
