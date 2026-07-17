"use client";

import Icon from "../Icon";

const FEATURES = [
  { icon: "target", title: "AI-First Approach", text: "Intelligence embedded in every solution" },
  { icon: "zap", title: "Rapid Deployment", text: "Agile AI delivery at enterprise scale" },
  { icon: "microscope", title: "Research-Backed", text: "Latest ML models and frameworks" },
  { icon: "lock", title: "Enterprise Security", text: "SOC 2 compliant AI infrastructure" },
];

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text reveal-left">
            <span className="section-label">About Code XP</span>
            <h2>
              Pioneering <span className="gradient-text">AI-Driven</span> Digital
              Transformation
            </h2>
            <p>
              We are a premier AI and software solutions company helping
              enterprises harness the power of artificial intelligence,
              automation, and cutting-edge technology to achieve unprecedented
              growth. We&apos;re also the team behind{" "}
              <a
                href="https://panoptixai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Panoptix AI
              </a>{" "}
              — our AI call center platform built for fleet and vehicle tracking
              companies.
            </p>
            <p>
              Our team of machine learning engineers, full-stack developers, and
              digital strategists partner with you to build intelligent systems
              that learn, adapt, and deliver measurable business outcomes.
            </p>
            <div className="intro-features">
              {FEATURES.map((f) => (
                <div className="intro-feature" key={f.title}>
                  <div className="feature-icon">
                    <Icon name={f.icon} />
                  </div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="intro-visual reveal-right">
            <div className="about-showcase">
              <div className="showcase-glow"></div>
              <div className="showcase-main">
                <div className="showcase-header">
                  <div className="showcase-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="showcase-title">
                    <Icon name="activity" /> AI Performance Hub
                  </span>
                </div>
                <div className="showcase-chart">
                  {[45, 72, 58, 85, 65, 92, 78].map((h, i) => (
                    <div
                      className="chart-bar"
                      key={i}
                      style={{ ["--h" as string]: `${h}%` }}
                    ></div>
                  ))}
                </div>
                <div className="showcase-line"></div>
                <div className="showcase-stats-row">
                  <div className="showcase-stat">
                    <span className="showcase-stat-val">98.7%</span>
                    <span className="showcase-stat-lbl">Accuracy</span>
                  </div>
                  <div className="showcase-stat">
                    <span className="showcase-stat-val">2.4M</span>
                    <span className="showcase-stat-lbl">Predictions/day</span>
                  </div>
                  <div className="showcase-stat">
                    <span className="showcase-stat-val">47ms</span>
                    <span className="showcase-stat-lbl">Latency</span>
                  </div>
                </div>
              </div>
              <div className="showcase-float showcase-float-1">
                <Icon name="brain" />
                <div>
                  <strong>Neural Engine</strong>
                  <span>Active & learning</span>
                </div>
              </div>
              <div className="showcase-float showcase-float-2">
                <Icon name="shield-check" />
                <div>
                  <strong>Secure Deploy</strong>
                  <span>SOC 2 compliant</span>
                </div>
              </div>
              <div className="showcase-float showcase-float-3">
                <Icon name="users" />
                <div>
                  <strong>50+ Experts</strong>
                  <span>AI & engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
