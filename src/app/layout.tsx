import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Drew Ernst | Frontend Developer & UI Designer",
  description: "Creative Frontend Developer and UI Designer specializing in high-fidelity healthcare applications and immersive digital experiences. Expert in React, Next.js, and user-centric design.",
  keywords: ["Frontend Developer", "UI Designer", "UX Design", "React Developer", "Next.js", "Healthcare Tech", "Product Design", "Web Development"],
  authors: [{ name: "Drew Ernst" }],
  openGraph: {
    title: "Drew Ernst | Portfolio V2.2",
    description: "Frontend Developer specializing in high-fidelity architecture and immersive user experiences. Featured: PCSP Assistant Pro.",
    images: [{
      url: "/assets/pcsp1.png",
      width: 1200,
      height: 630,
      alt: "Drew Ernst Portfolio - PCSP Assistant Pro",
    }],
    url: "https://dte-84.github.io/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Ernst | Portfolio V2.2",
    description: "Frontend Architect specializing in high-performance healthcare solutions.",
    images: ["/assets/pcsp1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0f172a] text-[#d7e3fc] antialiased">
        {children}
      </body>
    </html>
  );
}
