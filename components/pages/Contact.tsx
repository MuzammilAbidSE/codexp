"use client";

import { useRef } from "react";
import Icon from "../Icon";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    formRef.current?.reset();
  }

  return (
    <div id="contact" className="page">
      <div className="page-hero">
        <h1>Get In Touch</h1>
        <p>Let&apos;s Build Your AI-Powered Future Together</p>
      </div>
      <div className="container">
        <div className="contact-container">
          <div className="contact-form reveal-left">
            <h2>Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service">
                  <option value="">Select a service</option>
                  <option value="ai">AI Automation</option>
                  <option value="software">Software Development</option>
                  <option value="web">Website Designing</option>
                  <option value="seo">SEO Services</option>
                  <option value="mobile">Mobile Applications</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Icon name="send" />
              </button>
            </form>
          </div>
          <div className="contact-info reveal-right">
            <h3>Contact Information</h3>
            <div className="info-item">
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@codexp.com">info@codexp.com</a>
              <br />
              <a href="mailto:support@codexp.com">support@codexp.com</a>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <br />
              +1 (774) 459-3054
            </div>
            <div className="info-item">
              <strong>Address:</strong>
              <br />
              1250 Market Street
              <br />
              San Francisco, CA 94103
            </div>
            <div className="info-item">
              <strong>Hours:</strong>
              <br />
              Mon–Fri: 9:00 AM – 6:00 PM
              <br />
              Sat: 10:00 AM – 4:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
