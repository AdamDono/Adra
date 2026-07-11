"use client";

import { Zap, Globe, Send, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
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
              background: "var(--gradient-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap size={17} color="#060608" fill="#060608" />
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            adra
          </span>
          <span
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
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
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
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
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(197, 168, 128, 0.15)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.02)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
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
          borderTop: "1px solid var(--border)",
          textAlign: "center",
          fontSize: 13,
          color: "var(--text-muted)",
        }}
      >
        © {new Date().getFullYear()} Adra. All rights reserved.
      </div>
    </footer>
  );
}
