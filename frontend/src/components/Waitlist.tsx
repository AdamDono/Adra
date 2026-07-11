"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ArrowRight, Check, Sparkles } from "lucide-react";

type FormData = {
  email: string;
  business: string;
};

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setApiError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to join waitlist. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="waitlist" style={{ paddingBottom: 0 }}>
      <div className="divider" style={{ marginBottom: 100 }} />

      {/* Large radial glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(197,168,128,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 24px 120px",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="pill" style={{ marginBottom: 24, display: "inline-flex" }}>
            <Sparkles size={12} />
            Limited early access
          </span>

          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Be the first to create
            <br />
            <span className="gradient-text">with Adra.</span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 48,
              maxWidth: 500,
              margin: "0 auto 48px",
            }}
          >
            Join the waitlist and get early access when we launch. First 100 users get{" "}
            <strong style={{ color: "var(--accent)" }}>50 free credits</strong> on signup.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: "40px 48px",
                background: "rgba(197, 168, 128, 0.04)",
                border: "1px solid var(--border-hover)",
                borderRadius: 20,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(197, 168, 128, 0.1)",
                  border: "2px solid rgba(197, 168, 128, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Check size={28} color="var(--accent)" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>
                You&apos;re on the list! 🎉
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: 16, margin: 0 }}>
                We&apos;ll email you as soon as early access opens. Expect something special.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 16 }}>
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="Your email address"
                    className="input-field"
                    id="waitlist-email"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p style={{ color: "#EF4444", fontSize: 13, marginTop: 6, textAlign: "left" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("business", { required: "Tell us about your business" })}
                    type="text"
                    placeholder="What type of business do you run?"
                    className="input-field"
                    id="waitlist-business"
                  />
                  {errors.business && (
                    <p style={{ color: "#EF4444", fontSize: 13, marginTop: 6, textAlign: "left" }}>
                      {errors.business.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  id="waitlist-submit"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: 17,
                    padding: "18px 32px",
                    opacity: loading ? 0.8 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {loading ? (
                      <>
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            border: "2px solid rgba(6,6,8,0.3)",
                            borderTopColor: "#060608",
                            borderRadius: "50%",
                            animation: "spin-slow 0.8s linear infinite",
                          }}
                        />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join the waitlist <ArrowRight size={18} />
                      </>
                    )}
                  </span>
                </button>
              </div>

              {apiError && (
                <p style={{ color: "#EF4444", fontSize: 14, marginTop: 12, marginBottom: 12, fontWeight: 500 }}>
                  {apiError}
                </p>
              )}

              <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
                No spam. No credit card. Unsubscribe anytime.
              </p>
            </form>
          )}

          {/* Trust signals */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 56,
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "200+", label: "on waitlist" },
              { value: "R0", label: "to get started" },
              { value: "< 30s", label: "to first creative" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  className="gradient-text"
                  style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.02em" }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
