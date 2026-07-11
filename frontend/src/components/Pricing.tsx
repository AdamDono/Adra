"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "forever",
    description: "Perfect for trying Adra and generating your first creatives.",
    credits: "20 credits/month",
    features: [
      "20 AI image generations",
      "20 AI captions",
      "1 brand kit",
      "PNG download",
      "Content library (30 days)",
    ],
    cta: "Join waitlist",
    ctaHref: "#waitlist",
    popular: false,
    color: "rgba(255,255,255,0.02)",
    borderColor: "var(--border)",
  },
  {
    name: "Growth",
    price: "R499",
    priceNote: "/month",
    description: "For founders and social media managers who post consistently.",
    credits: "200 credits/month",
    features: [
      "200 AI image generations",
      "200 AI captions",
      "3 brand kits",
      "All aspect ratios",
      "Background removal",
      "Content library (unlimited)",
      "Priority generation",
    ],
    cta: "Join waitlist",
    ctaHref: "#waitlist",
    popular: true,
    color: "linear-gradient(135deg, rgba(197, 168, 128, 0.08), rgba(140, 109, 63, 0.03))",
    borderColor: "var(--border-hover)",
  },
  {
    name: "Pro",
    price: "R1,299",
    priceNote: "/month",
    description: "For agencies and power users generating content at scale.",
    credits: "Unlimited credits",
    features: [
      "Unlimited generations",
      "Unlimited brand kits",
      "All aspect ratios",
      "Video generation (Phase 2)",
      "AI voiceover (Phase 2)",
      "White-label exports",
      "Priority support",
      "API access",
    ],
    cta: "Join waitlist",
    ctaHref: "#waitlist",
    popular: false,
    color: "rgba(255,255,255,0.01)",
    borderColor: "var(--border)",
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="divider" style={{ marginBottom: 100 }} />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          top: "20%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(197,168,128,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="pill" style={{ marginBottom: 20, display: "inline-flex" }}>
            Pricing
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
            Simple pricing.{" "}
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                borderRadius: 24,
                padding: 32,
                background: plan.color,
                border: `1px solid ${plan.borderColor}`,
                position: "relative",
                overflow: "hidden",
                transform: plan.popular ? "scale(1.02)" : "scale(1)",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--gradient-accent)",
                    color: "#060608",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "5px 18px",
                    borderRadius: "0 0 10px 10px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ marginTop: plan.popular ? 20 : 0 }}>
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      fontSize: 44,
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 16, color: "var(--text-secondary)", opacity: 0.7, marginLeft: 4 }}>
                    {plan.priceNote}
                  </span>
                </div>

                {/* Credits */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(197, 168, 128, 0.06)",
                    border: "1px solid rgba(197, 168, 128, 0.15)",
                    borderRadius: 8,
                    padding: "5px 12px",
                    marginBottom: 28,
                  }}
                >
                  <Zap size={13} color="var(--accent)" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent)" }}>
                    {plan.credits}
                  </span>
                </div>

                {/* Divider */}
                <div className="divider" style={{ marginBottom: 24 }} />

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 14,
                        color: "var(--text-primary)",
                        opacity: 0.9,
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: 6,
                          background: "rgba(197, 168, 128, 0.08)",
                          border: "1px solid rgba(197, 168, 128, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} color="var(--accent)" strokeWidth={3} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={plan.popular ? "btn-primary" : "btn-secondary"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <span>{plan.cta}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 14,
            color: "var(--text-secondary)",
            opacity: 0.6,
          }}
        >
          💳 No credit card required to join the waitlist. Pricing is indicative and may change before launch.
        </motion.p>
      </div>
    </section>
  );
}
