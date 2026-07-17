"use client";

import Hero from "../sections/Hero";
import TechMarquee from "../sections/TechMarquee";
import Panoptix from "../sections/Panoptix";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import WhyUs from "../sections/WhyUs";
import Process from "../sections/Process";
import Trust from "../sections/Trust";
import Testimonials from "../sections/Testimonials";
import CtaSection from "../sections/CtaSection";

export default function Home() {
  return (
    <div id="home" className="page active">
      <Hero />
      <TechMarquee />
      <Panoptix />
      <Intro />
      <Services />
      <WhyUs />
      <Process />
      <Trust />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
