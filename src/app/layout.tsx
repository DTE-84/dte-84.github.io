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
  title: "DTE E-Portfolio",
  description: "Frontend Developer specializing in high-fidelity architecture and immersive user experiences.",
  openGraph: {
    title: "Drew T Ernst | Port_V.22",
    description: "Frontend Developer specializing in high-fidelity architecture and immersive user experiences.",
    images: ["/assets/og-image.png"],
    url: "https://dte-84.github.io/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew T Ernst | Port_V.22",
    description: "Frontend Developer specializing in high-fidelity architecture and immersive user experiences.",
    images: ["/assets/og-image.png"],
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
