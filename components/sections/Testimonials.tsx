"use client";

import { useMemo, useState } from "react";
import Icon from "../Icon";
import {
  generateTestimonials,
  SERVICES,
  type Testimonial,
} from "@/lib/testimonialsData";

const FILTERS = ["all", ...SERVICES];
const FILTER_LABELS: Record<string, string> = {
  all: "All Services",
  "AI Automation": "AI Automation",
  "Software Development": "Software Dev",
  "Mobile Applications": "Mobile Apps",
  "SEO Services": "SEO",
  "Digital Marketing": "Marketing",
  "Website Designing": "Web Design",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={i < rating ? "" : "star-empty"} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="testimonial-card">
      <Stars rating={t.rating} />
      <p className="testimonial-text">&quot;{t.quote}&quot;</p>
      <div className="testimonial-author">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="author-avatar"
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          width={48}
          height={48}
        />
        <div className="author-info">
          <h4>{t.name}</h4>
          <p>
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ALL_TESTIMONIALS = useMemo(() => generateTestimonials(120), []);
  const [visibleCount, setVisibleCount] = useState(24);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const marqueeRow1 = useMemo(() => ALL_TESTIMONIALS.slice(0, 20), [ALL_TESTIMONIALS]);
  const marqueeRow2 = useMemo(() => ALL_TESTIMONIALS.slice(20, 40), [ALL_TESTIMONIALS]);

  const filtered = useMemo(() => {
    let list = ALL_TESTIMONIALS;
    if (filter !== "all") {
      list = list.filter((t) => t.service === filter);
    }
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.company.toLowerCase().includes(q) ||
          t.quote.toLowerCase().includes(q)
      );
    }
    return list;
  }, [ALL_TESTIMONIALS, filter, search]);

  const visible = filtered.slice(0, visibleCount);
  const remaining = Math.min(24, filtered.length - visibleCount);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <div className="testimonial-counter">
            <Icon name="badge-check" /> <span>{filtered.length}+</span> Verified
            Client Reviews
          </div>
          <h2 className="section-title">
            Trusted by <span>Industry Leaders</span>
          </h2>
          <p className="section-desc">
            Over 120 companies worldwide trust Code XP Solutions to power their AI
            and digital transformation journeys.
          </p>
        </div>

        <div className="testimonial-marquee-wrap reveal">
          <div className="testimonial-marquee">
            {[...marqueeRow1, ...marqueeRow1].map((t, i) => (
              <TestimonialCard t={t} key={`${t.id}-${i}`} />
            ))}
          </div>
        </div>
        <div className="testimonial-marquee-wrap reveal">
          <div className="testimonial-marquee reverse">
            {[...marqueeRow2, ...marqueeRow2].map((t, i) => (
              <TestimonialCard t={t} key={`${t.id}-${i}`} />
            ))}
          </div>
        </div>

        <div className="testimonial-search reveal">
          <Icon name="search" className="search-icon" />
          <input
            type="text"
            placeholder="Search testimonials by name, company, or keyword..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(24);
            }}
          />
        </div>

        <div className="testimonial-controls reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`filter-btn${filter === f ? " active" : ""}`}
              onClick={() => {
                setFilter(f);
                setVisibleCount(24);
              }}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        <div className="testimonial-grid">
          {visible.map((t) => (
            <TestimonialCard t={t} key={t.id} />
          ))}
        </div>

        <div className="testimonial-controls">
          {visibleCount < filtered.length && (
            <button
              className="load-more-btn"
              type="button"
              onClick={() => setVisibleCount((c) => c + 24)}
            >
              Load More ({remaining} remaining)
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
