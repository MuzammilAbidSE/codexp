"use client";

const STEPS = [
  { title: "Discovery", text: "AI readiness assessment and use-case identification" },
  { title: "Strategy", text: "Data audit, model selection, and roadmap planning" },
  { title: "Build", text: "Agile development with continuous model training" },
  { title: "Validate", text: "Rigorous testing, bias checks, and accuracy tuning" },
  { title: "Deploy", text: "Production rollout with MLOps infrastructure" },
  { title: "Optimize", text: "Continuous learning, monitoring, and improvement" },
];

export default function Process() {
  return (
    <section className="container">
      <div className="section-header reveal">
        <span className="section-label">How We Work</span>
        <h2 className="section-title">
          Our AI Delivery <span>Process</span>
        </h2>
        <p className="section-desc">
          A proven methodology that takes you from AI strategy to production
          deployment with confidence.
        </p>
      </div>
      <div className="process-timeline">
        {STEPS.map((s, i) => (
          <div className="process-step" key={s.title}>
            <div className="step-number">{i + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
