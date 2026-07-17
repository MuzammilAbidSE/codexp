"use client";

import Icon from "../Icon";

export default function Panoptix() {
  return (
    <section className="product-section" id="panoptix">
      <div className="container">
        <div className="product-content">
          <div className="product-visual reveal-left">
            <div className="product-showcase">
              <div className="product-showcase-glow"></div>
              <div className="product-call-dashboard">
                <div className="call-dashboard-header">
                  <div className="showcase-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="call-dashboard-title">
                    <Icon name="headphones" /> Panoptix AI Call Center
                  </span>
                </div>
                <div className="call-active">
                  <div className="call-avatar">
                    <Icon name="bot" />
                  </div>
                  <div className="call-info">
                    <strong>AI Agent · Live Call</strong>
                    <span>Fleet dispatch — Vehicle Unit #2847</span>
                  </div>
                  <div className="call-wave">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="fleet-map-mini">
                  <div className="map-grid"></div>
                  <div className="fleet-pin pin-1">
                    <Icon name="truck" />
                  </div>
                  <div className="fleet-pin pin-2">
                    <Icon name="truck" />
                  </div>
                  <div className="fleet-pin pin-3">
                    <Icon name="map-pin" />
                  </div>
                  <div className="fleet-route"></div>
                </div>
                <div className="call-stats-row">
                  <div className="call-stat-item">
                    <span className="call-stat-val">142</span>
                    <span className="call-stat-lbl">Calls today</span>
                  </div>
                  <div className="call-stat-item">
                    <span className="call-stat-val">98%</span>
                    <span className="call-stat-lbl">Resolution</span>
                  </div>
                  <div className="call-stat-item">
                    <span className="call-stat-val">24/7</span>
                    <span className="call-stat-lbl">AI coverage</span>
                  </div>
                </div>
              </div>
              <div className="product-badge-float">
                <Icon name="truck" />
                <span>Fleet & Vehicle Tracking</span>
              </div>
            </div>
          </div>
          <div className="product-text reveal-right">
            <span className="section-label">Built by Code XP</span>
            <h2 className="product-name">
              Panoptix <span className="gradient-text">AI</span>
            </h2>
            <p className="product-tagline">
              AI-powered call center for fleet & vehicle tracking companies
            </p>
            <p>
              Panoptix AI is our flagship product — an intelligent call center
              solution built specifically for fleet operators and vehicle tracking
              businesses. It handles inbound and outbound calls with AI agents that
              understand dispatch workflows, vehicle status, and customer
              inquiries — so your team can focus on keeping fleets moving.
            </p>
            <ul className="product-features">
              <li>
                <Icon name="phone-call" /> AI-driven inbound & outbound call handling
              </li>
              <li>
                <Icon name="truck" /> Built for fleet & vehicle tracking companies
              </li>
              <li>
                <Icon name="map-pin" /> Real-time vehicle location & dispatch support
              </li>
              <li>
                <Icon name="clock" /> 24/7 automated call coverage
              </li>
            </ul>
            <div className="product-actions">
              <a
                href="https://panoptixai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Visit panoptixai.com <Icon name="external-link" />
              </a>
              <span className="product-status">
                <Icon name="headphones" /> Powering fleet call centers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
