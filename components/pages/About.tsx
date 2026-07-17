"use client";

import Counter from "../Counter";

export default function About() {
  return (
    <div id="about" className="page">
      <div className="page-hero">
        <h1>About Code XP Solutions</h1>
        <p>Your Partner in AI-Powered Digital Transformation</p>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="about-text reveal-left">
            <h3>Who We Are</h3>
            <p>
              Code XP Solutions is a leading AI and digital services company
              dedicated to helping businesses thrive in the intelligence age. We
              combine deep ML expertise, creative innovation, and strategic
              thinking to deliver solutions that drive real business results.
            </p>
            <p>
              Founded by passionate AI researchers and technologists, we&apos;ve
              grown into a trusted partner for enterprises seeking to leverage
              artificial intelligence and digital innovation.
            </p>
            <h3 style={{ marginTop: "1.5rem" }}>Our Product — Panoptix AI</h3>
            <p>
              Beyond client services, we build our own AI products.{" "}
              <a
                href="https://panoptixai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Panoptix AI
              </a>{" "}
              is our intelligent call center solution designed for fleet
              operators and vehicle tracking companies — automating customer
              calls, dispatch inquiries, and fleet support with AI agents that
              work around the clock.
            </p>
          </div>
          <div className="about-text reveal-right">
            <h3>Our Mission</h3>
            <p>
              To democratize enterprise AI and empower businesses with
              intelligent technology solutions that unlock their full potential.
            </p>
            <h3 style={{ marginTop: "1.5rem" }}>Our Vision</h3>
            <p>
              To be the world&apos;s most trusted AI solutions partner,
              recognized for technical excellence, ethical AI practices, and
              unwavering commitment to client success.
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="stat-box reveal-scale">
            <h4>
              <Counter target={500} suffix="+" />
            </h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box reveal-scale">
            <h4>
              <Counter target={98} suffix="%" />
            </h4>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-box reveal-scale">
            <h4>
              <Counter target={50} suffix="+" />
            </h4>
            <p>AI Experts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
