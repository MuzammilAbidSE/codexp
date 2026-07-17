"use client";

import Icon from "../Icon";
import { usePage } from "@/lib/PageContext";

export default function CtaSection() {
  const { goToPage } = usePage();

  return (
    <section className="cta-section reveal">
      <h2>Ready to Lead with AI?</h2>
      <p>Join 120+ companies that have transformed their business with Code XP Solutions.</p>
      <div className="cta-buttons">
        <button type="button" className="cta-button" onClick={() => goToPage("contact")}>
          Start Your Project <Icon name="arrow-right" />
        </button>
        <button
          type="button"
          className="cta-button cta-button-outline"
          onClick={() => goToPage("about")}
        >
          Learn About Us
        </button>
      </div>
    </section>
  );
}
