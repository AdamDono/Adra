"use client";

import { Zap, Globe, Send, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px",
        background: "rgba(255,255,255,0.01)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={17} color="white" fill="white" />
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#F8FAFC",
              letterSpacing: "-0.02em",
            }}
          >
            adra
          </span>
          <span
            style={{
              fontSize: 12,
              color: "rgba(148,163,184,0.4)",
              marginLeft: 4,
            }}
          >
            AI Creative Studio
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {["Features", "How it works", "Pricing", "Privacy", "Terms"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              style={{
                fontSize: 14,
                color: "rgba(148,163,184,0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F8FAFC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(148,163,184,0.6)")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social + copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {[
            { Icon: Globe, href: "#", label: "Website" },
            { Icon: Send, href: "#", label: "Twitter / X" },
            { Icon: Share2, href: "#", label: "LinkedIn" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(148,163,184,0.6)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#A855F7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(148,163,184,0.6)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "24px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.04)",
          textAlign: "center",
          fontSize: 13,
          color: "rgba(148,163,184,0.4)",
        }}
      >
        © {new Date().getFullYear()} Adra. Built in South Africa. 🇿🇦
      </div>
    </footer>
  );
}
