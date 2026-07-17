"use client";

import Icon from "../Icon";

const REASONS = [
  { icon: "trophy", title: "Award-Winning AI Team", text: "Certified ML engineers and data scientists with proven track records across Fortune 500 deployments." },
  { icon: "sparkles", title: "Cutting-Edge Innovation", text: "We leverage GPT, Claude, custom LLMs, and the latest open-source models to stay ahead of the curve." },
  { icon: "coins", title: "Transparent Pricing", text: "Clear project scopes, milestone-based billing, and ROI projections you can trust from day one." },
  { icon: "timer", title: "Rapid Time-to-Value", text: "Our AI accelerator framework delivers working prototypes in weeks, not months." },
  { icon: "sliders-horizontal", title: "Custom AI Solutions", text: "No off-the-shelf shortcuts — every model and pipeline is tailored to your unique data and goals." },
  { icon: "headphones", title: "24/7 AI Operations", text: "Round-the-clock monitoring, model retraining, and support for mission-critical AI systems." },
  { icon: "shield-check", title: "Responsible AI", text: "Ethical AI practices, bias detection, and compliance with global AI governance frameworks." },
  { icon: "line-chart", title: "Measurable Impact", text: "Every AI deployment includes KPI dashboards, A/B testing, and continuous performance optimization." },
];

export default function WhyUs() {
  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Why Code XP</span>
          <h2 className="section-title">
            The <span>AI Advantage</span>
          </h2>
          <p className="section-desc">
            We combine deep technical expertise with business acumen to deliver
            AI solutions that create real competitive advantage.
          </p>
        </div>
        <div className="why-us-grid">
          {REASONS.map((r) => (
            <div className="why-us-card reveal" key={r.title}>
              <div className="why-us-icon">
                <Icon name={r.icon} />
              </div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
