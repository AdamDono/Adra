"use client";

import { motion } from "framer-motion";
import { ImageIcon, FileText, Brain, Layers, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Brand Kit Memory",
    description:
      "Upload your logo, colours, fonts, and brand voice once. Every generation is automatically on-brand — no re-entering context every time.",
    color: "#C5A880",
    colorFaded: "rgba(197, 168, 128, 0.08)",
    highlight: true,
  },
  {
    icon: ImageIcon,
    title: "AI Image Generation",
    description:
      "Get 3 on-brand image variants per prompt. Photorealistic, illustrated, minimal — choose your style. Logo composited in automatically.",
    color: "#A88C64",
    colorFaded: "rgba(168, 140, 100, 0.08)",
    highlight: false,
  },
  {
    icon: FileText,
    title: "AI Caption Generator",
    description:
      "Platform-native captions for Instagram, TikTok, LinkedIn and more. Hashtags included. Tone matches your brand voice perfectly.",
    color: "#8C6D3F",
    colorFaded: "rgba(140, 109, 63, 0.08)",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Background Removal",
    description:
      "Upload a product photo with a messy background. Adra removes it instantly and builds a professional creative around your product.",
    color: "#C5A880",
    colorFaded: "rgba(197, 168, 128, 0.08)",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Content Library",
    description:
      "Every generation saved to your library. Browse, filter by platform, re-generate variations, or download originals at any time.",
    color: "#A88C64",
    colorFaded: "rgba(168, 140, 100, 0.08)",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Multi-Platform Ready",
    description:
      "Generate content sized for Instagram (1:1), TikTok (9:16), LinkedIn (1.91:1), and more — all from the same prompt.",
    color: "#8C6D3F",
    colorFaded: "rgba(140, 109, 63, 0.08)",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="divider" style={{ marginBottom: 100 }} />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "30%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(197,168,128,0.03) 0%, transparent 70%)",
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
            Features
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
            Everything you need to{" "}
            <span className="gradient-text">create at scale.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A full AI creative suite, not just a one-shot generator.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-card"
                style={{
                  borderRadius: 20,
                  padding: 28,
                  position: "relative",
                  overflow: "hidden",
                  border: feat.highlight
                    ? "1px solid var(--border-hover)"
                    : "1px solid var(--border)",
                  background: feat.highlight
                    ? "linear-gradient(135deg, rgba(197,168,128,0.06), rgba(140,109,63,0.02))"
                    : "rgba(255,255,255,0.01)",
                }}
              >
                {feat.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: -1,
                      left: 24,
                      background: "var(--gradient-accent)",
                      color: "#060608",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "0 0 8px 8px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Core feature
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: feat.colorFaded,
                      border: `1px solid ${feat.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: feat.highlight ? 16 : 0,
                    }}
                  >
                    <Icon size={22} color={feat.color} />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 8,
                        letterSpacing: "-0.01em",
                        marginTop: feat.highlight ? 16 : 0,
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {feat.description}
                    </p>
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
