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
  const [promptInput, setPromptInput] = useState("A professional studio photo of a luxury watch, elegant dark golden lighting, highly detailed");
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const handleGenerate = async () => {
    if (!promptInput) return;
    setIsGenerating(true);
    setGeneratedImage(null);

    const formData = new FormData();
    formData.append("prompt", promptInput);
    if (selectedLogo) {
      formData.append("logo", selectedLogo);
    }

    try {
      const response = await fetch("http://localhost:8000/api/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to generate image from backend.");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error("Generation error:", error);
      alert("Error generating ad creative. Make sure the backend server is running on port 8000.");
    } finally {
      setIsGenerating(false);
    }
  };

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
      {/* Background elements */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "15%",
          top: "15%",
          width: 400,
          height: 400,
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
            letterSpacing: "-0.04em",
            marginBottom: 24,
            color: "var(--text-primary)",
          }}
        >
          Generate on-brand
          <br />
          <span className="gradient-text">ads in seconds.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Stop spending hours on manual design. Upload your brand kit, describe your product, and watch the AI do the work.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <a href="#waitlist" className="btn-primary" style={{ fontSize: 17, padding: "16px 32px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              Join the waitlist — it&apos;s free <ArrowRight size={18} />
            </span>
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 72,
          }}
        >
          <div style={{ display: "flex", marginLeft: 10 }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: i === 0 || i === 3 ? "var(--gradient-accent)" : "rgba(255,255,255,0.1)",
                  border: "2px solid var(--bg-primary)",
                  marginLeft: i === 0 ? 0 : -8,
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
              {[1, 2, 3, 4, 5].map((i) => (
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

        {/* Hero image preview (Interactive Mockup) */}
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
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header / Mac controls */}
            <div
              style={{
                height: 48,
                background: "var(--bg-card)",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 8,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#4A4A4F" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#5A5A60" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#7A7A80" }} />
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
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "left" }}>
                  Your prompt
                </div>
                <textarea
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  disabled={isGenerating}
                  placeholder="Describe your ad creative..."
                  style={{
                    background: "rgba(255,255,255,0.01)",
                    border: "1px solid var(--border-hover)",
                    borderRadius: 12,
                    padding: 16,
                    fontSize: 15,
                    color: "var(--text-primary)",
                    lineHeight: 1.6,
                    flexGrow: 1,
                    minHeight: 120,
                    resize: "none",
                    outline: "none",
                    fontFamily: "inherit",
                    textAlign: "left"
                  }}
                />
                
                {/* Logo Uploader */}
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <label
                    style={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 14px",
                      borderRadius: 10,
                      border: "1px dashed var(--border)",
                      cursor: isGenerating ? "not-allowed" : "pointer",
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      transition: "all 0.2s",
                      textAlign: "center"
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedLogo(e.target.files[0]);
                        }
                      }}
                      disabled={isGenerating}
                      style={{ display: "none" }}
                    />
                    {selectedLogo ? `✓ Logo: ${selectedLogo.name.substring(0, 12)}...` : "+ Upload Logo (optional)"}
                  </label>
                  {selectedLogo && (
                    <button
                      onClick={() => setSelectedLogo(null)}
                      disabled={isGenerating}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "none",
                        color: "#EF4444",
                        padding: "10px 14px",
                        borderRadius: 10,
                        cursor: "pointer",
                        fontSize: 13
                      }}
                    >
                      Clear
                    </button>
                  )}
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !promptInput}
                  className="btn-primary" 
                  style={{ 
                    justifyContent: "center", 
                    cursor: isGenerating ? "not-allowed" : "pointer",
                    width: "100%",
                    border: "none",
                    outline: "none"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {isGenerating ? (
                      <>
                        <div
                          style={{
                            width: 16,
                            height: 16,
                            border: "2px solid rgba(6,6,8,0.3)",
                            borderTopColor: "#060608",
                            borderRadius: "50%",
                            animation: "spin-slow 0.8s linear infinite",
                          }}
                        />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} /> Generate Creative
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Right: Generated images */}
              <div className="mockup-images" style={{ flex: 2 }}>
                {[
                  { bg: "linear-gradient(135deg, rgba(197,168,128,0.1), rgba(140,109,63,0.05))", label: "Variant 1", active: true },
                  { bg: "rgba(255,255,255,0.01)", label: "Variant 2", active: false },
                  { bg: "rgba(255,255,255,0.01)", label: "Variant 3", active: false },
                ].map((card, idx) => (
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
                      minHeight: 220,
                    }}
                  >
                    {idx === 0 && isGenerating ? (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            border: "3px solid rgba(197, 168, 128, 0.2)",
                            borderTopColor: "var(--accent)",
                            borderRadius: "50%",
                            animation: "spin-slow 0.8s linear infinite",
                          }}
                        />
                        <span style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>Creating...</span>
                      </div>
                    ) : idx === 0 && generatedImage ? (
                      <img
                        src={generatedImage}
                        alt="AI Generated Creative"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <>
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
                      </>
                    )}
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
