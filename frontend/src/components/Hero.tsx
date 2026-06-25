"use client";

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

      {/* Radial glow — violet */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow — cyan */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
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
          background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(6,182,212,0.2))",
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
          background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(124,58,237,0.2))",
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
            AI-powered ad creative — built for Africa
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
            color: "#F8FAFC",
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
            color: "rgba(148,163,184,0.9)",
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "0 auto 40px",
            fontWeight: 400,
          }}
        >
          Adra generates professional ad creatives and social media content in{" "}
          <strong style={{ color: "#F8FAFC", fontWeight: 600 }}>under 30 seconds</strong>.
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
            {["#7C3AED", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"].map((color, i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${color}, ${color}99)`,
                  border: "2px solid #0D0D12",
                  marginLeft: i === 0 ? 0 : -10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {["S", "M", "A", "T", "K"][i]}
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p style={{ fontSize: 13, color: "rgba(148,163,184,0.8)", margin: 0 }}>
              <strong style={{ color: "#F8FAFC" }}>200+ founders</strong> already on the waitlist
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
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.15)",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                padding: "14px 20px",
                background: "rgba(255,255,255,0.04)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10B981" }} />
              <div
                style={{
                  flex: 1,
                  height: 28,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 6,
                  marginLeft: 12,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 12,
                }}
              >
                <span style={{ color: "rgba(148,163,184,0.6)", fontSize: 13 }}>app.adra.ai/create</span>
              </div>
            </div>

            {/* App UI mockup */}
            <div
              style={{
                padding: 32,
                background: "linear-gradient(180deg, rgba(18,18,26,0.8) 0%, rgba(13,13,18,0.95) 100%)",
                minHeight: 360,
                display: "flex",
                gap: 24,
                alignItems: "stretch",
              }}
            >
              {/* Left: Prompt panel */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(148,163,184,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Your prompt
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(124,58,237,0.4)",
                    borderRadius: 12,
                    padding: 16,
                    fontSize: 15,
                    color: "#F8FAFC",
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  Instagram post for my coffee shop&apos;s summer iced drinks promotion
                  <span
                    style={{
                      display: "inline-block",
                      width: 2,
                      height: 18,
                      background: "#7C3AED",
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
              <div style={{ flex: 2, display: "flex", gap: 12 }}>
                {[
                  { bg: "linear-gradient(135deg, #7C3AED22, #06B6D422)", label: "Variant 1", active: true },
                  { bg: "linear-gradient(135deg, #7C3AED11, #10B98111)", label: "Variant 2", active: false },
                  { bg: "linear-gradient(135deg, #06B6D411, #F59E0B11)", label: "Variant 3", active: false },
                ].map((card) => (
                  <div
                    key={card.label}
                    style={{
                      flex: 1,
                      borderRadius: 12,
                      border: card.active
                        ? "1.5px solid rgba(124,58,237,0.6)"
                        : "1px solid rgba(255,255,255,0.06)",
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
                          background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                          borderRadius: 6,
                          padding: "2px 8px",
                          fontSize: 10,
                          fontWeight: 700,
                          color: "white",
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
                          ? "linear-gradient(135deg, #7C3AED, #06B6D4)"
                          : "rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Sparkles size={22} color={card.active ? "white" : "rgba(255,255,255,0.3)"} />
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(148,163,184,0.6)", fontWeight: 500 }}>
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
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(6,182,212,0.4), transparent)",
              marginTop: -1,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
