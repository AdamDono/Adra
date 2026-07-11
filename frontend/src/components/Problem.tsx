"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, Palette } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "No time",
    description:
      "You're running a business, not a creative agency. Spending 3 hours in Canva every week isn't a strategy — it's a tax on your growth.",
    stat: "3h/week",
    statLabel: "avg. time spent on content",
    color: "#C5A880",
    colorFaded: "rgba(197, 168, 128, 0.05)",
    colorBorder: "rgba(197, 168, 128, 0.12)",
  },
  {
    icon: DollarSign,
    title: "No budget",
    description:
      "Hiring a designer costs R8,000–R25,000/month. Freelancers take days. Ad agencies want a retainer. None of it makes sense at your scale.",
    stat: "R15,000",
    statLabel: "avg. monthly agency retainer",
    color: "#A88C64",
    colorFaded: "rgba(168, 140, 100, 0.05)",
    colorBorder: "rgba(168, 140, 100, 0.12)",
  },
  {
    icon: Palette,
    title: "No designer",
    description:
      "Generic templates make you look like everyone else. Brand consistency matters. But without a designer, maintaining it is nearly impossible.",
    stat: "67%",
    statLabel: "of SMBs have inconsistent branding",
    color: "#8C6D3F",
    colorFaded: "rgba(140, 109, 63, 0.05)",
    colorBorder: "rgba(140, 109, 63, 0.12)",
  },
];

export default function Problem() {
  return (
    <section className="section" id="problem">
      {/* Divider */}
      <div className="divider" style={{ marginBottom: 100 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="pill" style={{ marginBottom: 20, display: "inline-flex" }}>
            The problem
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              color: "var(--text-primary)",
            }}
          >
            Great marketing is out of reach{" "}
            <span className="gradient-text">for most businesses.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            The tools exist. The talent exists. The budgets don&apos;t. Until now.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="glass-card"
                style={{ borderRadius: 20, padding: 32, position: "relative", overflow: "hidden" }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${pain.color}, transparent)`,
                  }}
                />

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: pain.colorFaded,
                    border: `1px solid ${pain.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <Icon size={24} color={pain.color} />
                </div>

                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {pain.title}
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  {pain.description}
                </p>

                {/* Stat */}
                <div
                  style={{
                    padding: "14px 20px",
                    background: pain.colorFaded,
                    border: `1px solid ${pain.colorBorder}`,
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 24, fontWeight: 800, color: pain.color, letterSpacing: "-0.02em" }}>
                    {pain.stat}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
                    {pain.statLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
