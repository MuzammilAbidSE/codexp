"use client";

import { usePage } from "@/lib/PageContext";

export default function Footer() {
  const { goToPage } = usePage();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-logo">
            Code<span className="logo-accent">XP</span> Solutions
          </h4>
          <p>
            Transforming businesses through AI-powered technology and intelligent
            digital solutions. Building the future, one innovation at a time.
          </p>
        </div>
        <div className="footer-section">
          <h4>Our Product</h4>
          <a href="https://panoptixai.com" target="_blank" rel="noopener noreferrer">
            Panoptix AI
          </a>
          <p style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
            AI call center for fleet & vehicle tracking
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <button className="footer-link" type="button" onClick={() => goToPage("home")}>
            Home
          </button>
          <button className="footer-link" type="button" onClick={() => goToPage("about")}>
            About Us
          </button>
          <button className="footer-link" type="button" onClick={() => goToPage("contact")}>
            Contact
          </button>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <button
            className="footer-link"
            type="button"
            onClick={() => goToPage("ai-automation")}
          >
            AI Automation
          </button>
          <button
            className="footer-link"
            type="button"
            onClick={() => goToPage("software-dev")}
          >
            Software Development
          </button>
          <button
            className="footer-link"
            type="button"
            onClick={() => goToPage("mobile-apps")}
          >
            Mobile Applications
          </button>
          <button className="footer-link" type="button" onClick={() => goToPage("web-design")}>
            Website Design
          </button>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@codexp.com</p>
          <p>Phone: +1 (774) 459-3054</p>
          <p>
            1250 Market Street
            <br />
            San Francisco, CA 94103
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Code XP Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
