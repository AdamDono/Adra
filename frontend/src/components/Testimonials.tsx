"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const quotes = [
  {
    quote: "I used to spend 5 hours a week in Canva trying to keep our social ads on-brand. With Adra, I uploaded our logo and brand colors once, and now I generate our weekly creative assets in under 2 minutes.",
    author: "Sarah Jenkins",
    role: "Founder, Bloom Bakery",
    rating: 5,
  },
  {
    quote: "Keeping client branding consistent across dozens of accounts is incredibly challenging. Adra's Brand Kit Memory is a lifesaver. The tone of voice settings actually match each client's unique brand personality.",
    author: "Devon Ndlovu",
    role: "Social Media Director, Velo Agency",
    rating: 5,
  },
  {
    quote: "The background removal combined with custom prompt generation is brilliant. We uploaded flat product shots and got back studio-quality ad creatives with our logo perfectly composited. Highly recommend early access.",
    author: "Marcus Vance",
    role: "Head of Marketing, Sol Streetwear",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" style={{ position: "relative" }}>
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "40%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(197,168,128,0.02) 0%, transparent 70%)",
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
            Testimonials
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
            What early founders{" "}
            <span className="gradient-text">are saying.</span>
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
            Real feedback from our closed beta testers.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {quotes.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card"
              style={{
                borderRadius: 24,
                padding: 36,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid var(--border)",
              }}
            >
              {/* Quote icon watermarked */}
              <Quote
                size={48}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 28,
                  opacity: 0.02,
                  color: "var(--accent)",
                }}
              />

              <div>
                {/* Rating stars */}
                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} size={15} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>

                {/* Quote text */}
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                    marginBottom: 28,
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(197, 168, 128, 0.08)",
                    border: "1px solid rgba(197, 168, 128, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontSize: 14,
                  }}
                >
                  {item.author[0]}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {item.author}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      margin: 0,
                      marginTop: 2,
                    }}
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
