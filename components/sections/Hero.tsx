"use client";

import Icon from "../Icon";
import Counter from "../Counter";
import { usePage } from "@/lib/PageContext";

export default function Hero() {
  const { goToPage } = usePage();

  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-content">
        <div className="hero-badge">AI-First Technology Partner</div>
        <h1>
          Building the <span className="gradient-text">Intelligent Future</span> of
          Your Business
        </h1>
        <p>
          Premium AI automation, custom software, and digital solutions that
          transform how enterprises operate, scale, and compete in the age of
          artificial intelligence.
        </p>
        <div className="hero-buttons">
          <button type="button" className="cta-button" onClick={() => goToPage("contact")}>
            Start Your AI Journey <Icon name="arrow-right" />
          </button>
          <button
            type="button"
            className="cta-button cta-button-outline"
            onClick={() => goToPage("ai-automation")}
          >
            Explore AI Solutions
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <h3>
              <Counter target={500} suffix="+" />
            </h3>
            <p>Projects Delivered</p>
          </div>
          <div className="hero-stat">
            <h3>
              <Counter target={120} suffix="+" />
            </h3>
            <p>Happy Clients</p>
          </div>
          <div className="hero-stat">
            <h3>
              <Counter target={98} suffix="%" />
            </h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="hero-stat">
            <h3>
              <Counter target={50} suffix="+" />
            </h3>
            <p>AI Experts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
