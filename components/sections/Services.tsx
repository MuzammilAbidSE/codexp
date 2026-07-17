"use client";

import Icon from "../Icon";
import { usePage, type PageId } from "@/lib/PageContext";

const SERVICES: { page: PageId; icon: string; title: string; text: string }[] = [
  {
    page: "ai-automation",
    icon: "bot",
    title: "AI Automation",
    text: "Intelligent process automation, chatbots, and ML models that eliminate repetitive work and unlock new capabilities.",
  },
  {
    page: "software-dev",
    icon: "code-2",
    title: "Software Development",
    text: "Scalable, cloud-native applications built with modern architectures and AI-ready infrastructure.",
  },
  {
    page: "mobile-apps",
    icon: "smartphone",
    title: "Mobile Applications",
    text: "AI-powered mobile experiences with on-device intelligence and seamless cross-platform performance.",
  },
  {
    page: "web-design",
    icon: "palette",
    title: "Website Designing",
    text: "Stunning, conversion-optimized web experiences with intelligent personalization and blazing performance.",
  },
  {
    page: "seo",
    icon: "trending-up",
    title: "SEO Services",
    text: "AI-driven SEO strategies that dominate search rankings and attract high-intent organic traffic.",
  },
  {
    page: "digital-marketing",
    icon: "rocket",
    title: "Digital Marketing",
    text: "Data-driven campaigns powered by predictive analytics and intelligent audience targeting.",
  },
];

export default function Services() {
  const { goToPage } = usePage();

  return (
    <section className="container">
      <div className="section-header reveal">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">
          Intelligent <span>Solutions</span>
        </h2>
        <p className="section-desc">
          From AI automation to full-stack development — we deliver end-to-end
          technology that powers the modern enterprise.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <button
            type="button"
            className="service-card reveal-scale"
            key={s.page}
            onClick={() => goToPage(s.page)}
          >
            <div className="service-icon">
              <Icon name={s.icon} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="learn-more">
              Learn more <Icon name="arrow-right" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
