"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch((err) => console.error("Error fetching waitlist count:", err));
  }, []);
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      {/* Background grid */}
      <div
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
        }}
      />

      {/* Radial glow — center accent */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(197,168,128,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow — right accent */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(197,168,128,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating orbs */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(197,168,128,0.15), rgba(140,109,63,0.08))",
          filter: "blur(20px)",
        }}
      />
      <div
        className="animate-float-delayed"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(197,168,128,0.1), rgba(140,109,63,0.05))",
          filter: "blur(25px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{ marginBottom: 28 }}
        >
          <span className="pill">
            <Sparkles size={12} />
            AI-powered ad creative
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          style={{
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            color: "var(--text-primary)",
          }}
        >
          Your brand deserves{" "}
          <span className="gradient-text text-glow">
            world-class ads.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "0 auto 40px",
            fontWeight: 400,
          }}
        >
          Adra generates professional ad creatives and social media content in{" "}
          <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>under 30 seconds</strong>.
          Upload your brand kit once. Get stunning outputs forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <a href="#waitlist" className="btn-primary" style={{ fontSize: 17, padding: "16px 32px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              Join the waitlist — it&apos;s free <ArrowRight size={18} />
            </span>
          </a>
          <a href="#how-it-works" className="btn-secondary" style={{ fontSize: 17, padding: "16px 32px" }}>
            See how it works
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          {/* Avatars */}
          <div style={{ display: "flex" }}>
            {["#C5A880", "#8C6D3F", "#5A4A35", "#9E9EA7", "#3A3A40"].map((color, i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${color}, ${color}99)`,
                  border: "2px solid var(--bg-primary)",
                  marginLeft: i === 0 ? 0 : -10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: i === 0 || i === 3 ? "#060608" : "white",
                }}
              >
                {["S", "M", "A", "T", "K"][i]}
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} fill="#C5A880" color="#C5A880" />
              ))}
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>
              <strong style={{ color: "var(--text-primary)" }}>
                {count !== null ? count : "..."} founders
              </strong>{" "}
              already on the waitlist
            </p>
          </div>
        </motion.div>

        {/* Hero image preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginTop: 72 }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: 900,
              margin: "0 auto",
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,0.01)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 60px var(--glow)",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                padding: "14px 20px",
                background: "rgba(255,255,255,0.02)",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#4A4A4F" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#5A5A60" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#7A7A80" }} />
              <div
                style={{
                  flex: 1,
                  height: 28,
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 6,
                  marginLeft: 12,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 12,
                }}
              >
                <span style={{ color: "var(--text-muted)", fontSize: 13 }}>app.adra.ai/create</span>
              </div>
            </div>

            {/* App UI mockup */}
            <div
              className="mockup-container"
              style={{
                padding: 32,
                background: "linear-gradient(180deg, rgba(12,12,15,0.8) 0%, var(--bg-primary) 100%)",
                minHeight: 360,
              }}
            >
              {/* Left: Prompt panel */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Your prompt
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid var(--border-hover)",
                    borderRadius: 12,
                    padding: 16,
                    fontSize: 15,
                    color: "var(--text-primary)",
                    lineHeight: 1.6,
                    flexGrow: 1,
                    textAlign: "left",
                  }}
                >
                  Instagram post for my coffee shop&apos;s summer iced drinks promotion
                  <span
                    style={{
                      display: "inline-block",
                      width: 2,
                      height: 18,
                      background: "var(--accent)",
                      marginLeft: 2,
                      verticalAlign: "middle",
                      animation: "pulse-glow 1s ease-in-out infinite",
                    }}
                  />
                </div>
                <div className="btn-primary" style={{ justifyContent: "center", cursor: "default" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Sparkles size={16} /> Generate 3 variants
                  </span>
                </div>
              </div>

              {/* Right: Generated images */}
              <div className="mockup-images" style={{ flex: 2 }}>
                {[
                  { bg: "linear-gradient(135deg, rgba(197,168,128,0.1), rgba(140,109,63,0.05))", label: "Variant 1", active: true },
                  { bg: "rgba(255,255,255,0.01)", label: "Variant 2", active: false },
                  { bg: "rgba(255,255,255,0.01)", label: "Variant 3", active: false },
                ].map((card) => (
                  <div
                    key={card.label}
                    style={{
                      flex: 1,
                      borderRadius: 12,
                      border: card.active
                        ? "1.5px solid var(--accent)"
                        : "1px solid var(--border)",
                      background: card.bg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: 16,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {card.active && (
                      <div
                        style={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          background: "var(--gradient-accent)",
                          borderRadius: 6,
                          padding: "2px 8px",
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#060608",
                        }}
                      >
                        Selected
                      </div>
                    )}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: card.active
                          ? "var(--gradient-accent)"
                          : "rgba(255,255,255,0.03)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Sparkles size={22} color={card.active ? "#060608" : "rgba(255,255,255,0.2)"} />
                    </div>
                    <span style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom glow under mockup */}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, var(--border-hover), transparent)",
              marginTop: -1,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
