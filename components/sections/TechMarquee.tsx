"use client";

import Icon from "../Icon";

const TECH_ITEMS = [
  { icon: "bot", label: "Machine Learning" },
  { icon: "brain", label: "Deep Learning" },
  { icon: "message-square", label: "NLP & LLMs" },
  { icon: "eye", label: "Computer Vision" },
  { icon: "cloud", label: "Cloud AI" },
  { icon: "zap", label: "Process Automation" },
  { icon: "bar-chart-3", label: "Predictive Analytics" },
  { icon: "link", label: "API Integration" },
  { icon: "shield", label: "AI Security" },
  { icon: "smartphone", label: "Mobile AI" },
];

export default function TechMarquee() {
  const items = [...TECH_ITEMS, ...TECH_ITEMS];
  return (
    <div className="tech-marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="tech-item" key={i}>
            <Icon name={item.icon} /> {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
