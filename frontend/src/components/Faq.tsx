"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Adra and how does it work?",
    answer:
      "Adra is an AI-powered creative studio that generates high-converting ad creatives and social copy. You set up your Brand Kit once (logo, colors, voice), and our model automatically enriches your prompts and product images to output ready-to-post on-brand assets in under 30 seconds.",
  },
  {
    question: "Is it really free to join the waitlist?",
    answer:
      "Yes, joining the waitlist is completely free and requires no credit card. As a thank you for joining early, the first 100 users will receive 50 free generation credits automatically when early access opens.",
  },
  {
    question: "How does the Brand Kit Memory keep my ads consistent?",
    answer:
      "Unlike generic AI tools that require you to re-type instructions every time, Adra saves your logo, tagline, font preferences, and color palette. When you generate an ad, we composite your logo natively, apply your brand colors, and prompt the model to adhere specifically to your defined brand voice guidelines.",
  },
  {
    question: "What kind of content can I generate?",
    answer:
      "For our initial release, Adra supports text-prompt-to-image generation, product-photo-to-staged ad creative, background removal, logo compositing, and multi-platform copywriting (optimized captions for Instagram, TikTok, Facebook, and LinkedIn). AI Video and Voiceover tools are scheduled for Phase 2.",
  },
  {
    question: "When will I get access to the platform?",
    answer:
      "We are rolling out early access in weekly cohorts starting next month. Waitlist position is determined by sign-up order. You will receive an email invitation with instructions on how to set up your account as soon as your slot is ready.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" style={{ position: "relative" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          right: "10%",
          bottom: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(197,168,128,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="pill" style={{ marginBottom: 20, display: "inline-flex" }}>
            FAQ
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
            Frequently Asked{" "}
            <span className="gradient-text">Questions.</span>
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
            Got questions? We have answers.
          </p>
        </motion.div>

        {/* Accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card"
                style={{
                  borderRadius: 16,
                  border: isOpen ? "1px solid var(--border-hover)" : "1px solid var(--border)",
                  background: isOpen ? "rgba(255,255,255,0.03)" : "var(--bg-card)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 28px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontSize: 17,
                    fontWeight: 600,
                    outline: "none",
                  }}
                >
                  <span>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: "var(--accent)" }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div
                        style={{
                          padding: "0 28px 24px 28px",
                          fontSize: 15,
                          lineHeight: 1.7,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
