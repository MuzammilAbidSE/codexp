"use client";

import Icon from "../Icon";

const BADGES = [
  { icon: "badge-check", title: "ISO 27001", text: "Information Security" },
  { icon: "lock-keyhole", title: "GDPR Compliant", text: "Data Privacy First" },
  { icon: "star", title: "4.9/5 Rated", text: "120+ Client Reviews" },
  { icon: "award", title: "AI Excellence 2025", text: "Industry Recognition" },
];

export default function Trust() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Trust & Compliance</span>
          <h2 className="section-title">
            Enterprise-Grade <span>Standards</span>
          </h2>
        </div>
        <div className="trust-badges">
          {BADGES.map((b) => (
            <div className="trust-badge reveal-scale" key={b.title}>
              <div className="badge-icon">
                <Icon name={b.icon} />
              </div>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
