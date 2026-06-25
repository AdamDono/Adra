"use client";

import { motion } from "framer-motion";
import { Upload, Wand2, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Set up your brand kit",
    description:
      "Upload your logo, pick your brand colours, enter your brand name and choose your tone of voice. Takes less than 3 minutes. Do it once, use it forever.",
    detail: "Logo · Colors · Voice · Tagline",
    color: "#7C3AED",
    colorFaded: "rgba(124,58,237,0.1)",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Describe what you need",
    description:
      "Type a prompt like \"Instagram post for my coffee shop summer promotion\" or upload a product photo. Adra's AI does the rest — brand context injected automatically.",
    detail: "Text prompt · Product upload",
    color: "#06B6D4",
    colorFaded: "rgba(6,182,212,0.1)",
  },
  {
    number: "03",
    icon: Download,
    title: "Download and post",
    description:
      "Get 3 on-brand image variants and AI-generated captions for each in under 15 seconds. Pick your favourite, copy the caption, and post. Done.",
    detail: "3 variants · AI captions · 1-click download",
    color: "#10B981",
    colorFaded: "rgba(16,185,129,0.1)",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="divider" style={{ marginBottom: 100 }} />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="pill" style={{ marginBottom: 20, display: "inline-flex" }}>
            How it works
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              color: "#F8FAFC",
            }}
          >
            From blank canvas to{" "}
            <span className="gradient-text">ready-to-post</span>
            <br />in 3 simple steps.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(148,163,184,0.8)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            No design skills. No agency. No budget required. Just your brand and a prompt.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            position: "relative",
          }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ position: "relative" }}
              >
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: 32,
                      left: "calc(100% - 16px)",
                      width: "calc(32px + 16px)",
                      height: 2,
                      background: `linear-gradient(90deg, ${step.color}60, ${steps[i + 1].color}60)`,
                      zIndex: 1,
                      display: "none", // hidden on small screens
                    }}
                    className="step-line"
                  />
                )}

                <div
                  className="glass-card"
                  style={{
                    borderRadius: 20,
                    padding: 32,
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Step number watermark */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 24,
                      fontSize: 64,
                      fontWeight: 900,
                      color: "rgba(255,255,255,0.03)",
                      lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      boxShadow: `0 8px 24px ${step.color}40`,
                    }}
                  >
                    <Icon size={26} color="white" />
                  </div>

                  {/* Step label */}
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: step.color,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    Step {step.number}
                  </div>

                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#F8FAFC",
                      marginBottom: 14,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(148,163,184,0.8)",
                      lineHeight: 1.7,
                      marginBottom: 24,
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Detail tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {step.detail.split(" · ").map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: 6,
                          background: step.colorFaded,
                          color: step.color,
                          border: `1px solid ${step.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Time callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: "center",
            marginTop: 56,
            padding: "28px 40px",
            background: "rgba(124,58,237,0.08)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: 16,
            display: "inline-block",
            width: "100%",
          }}
        >
          <p style={{ color: "rgba(148,163,184,0.9)", fontSize: 16, margin: 0 }}>
            ⚡{" "}
            <strong style={{ color: "#F8FAFC" }}>Total time from sign-up to first post:</strong>{" "}
            <span className="gradient-text" style={{ fontWeight: 700, fontSize: 18 }}>
              under 5 minutes
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
