"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import { PageProvider, usePage } from "@/lib/PageContext";
import { SERVICE_DETAILS } from "@/lib/servicesData";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useHeroAnimation } from "@/lib/useHeroAnimation";

function SiteContent() {
  const { page } = usePage();
  useScrollReveal([page]);
  useHeroAnimation(page === "home");

  const serviceData = SERVICE_DETAILS[page];

  return (
    <>
      <Navbar />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {serviceData && <ServiceDetail id={page} data={serviceData} />}
      <Footer />
    </>
  );
}

export default function SiteApp() {
  return (
    <PageProvider>
      <SiteContent />
    </PageProvider>
  );
}
