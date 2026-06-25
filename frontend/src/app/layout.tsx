import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adra — AI Creative Studio for Modern Businesses",
  description: "Generate professional ad creatives, social media content, and marketing copy in seconds. Powered by AI, built for your brand.",
  keywords: ["AI marketing", "ad creative generator", "social media content", "brand kit", "AI copywriting"],
  openGraph: {
    title: "Adra — AI Creative Studio",
    description: "Generate professional ad creatives in seconds. No design skills needed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
