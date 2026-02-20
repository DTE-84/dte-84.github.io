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
  metadataBase: new URL("https://dte-84.github.io"),
  title: "Drew Ernst | Frontend Developer & UI Designer",
  description: "Specialized in secure, high-fidelity healthcare and fintech solutions. Expert in bridging complex logic with intuitive digital design using React and Next.js.",
  keywords: ["Frontend Developer", "UI Designer", "UX Design", "React Developer", "Next.js", "Healthcare Tech", "Product Design", "HIPAA-Safe Design"],
  authors: [{ name: "Drew Ernst" }],
  openGraph: {
    title: "Drew Ernst | Portfolio V2.2",
    description: "Frontend Developer specializing in high-fidelity architecture and immersive user experiences. Featured: PCSP Assistant Pro.",
    images: [{
      url: "https://dte-84.github.io/assets/mypage1.png",
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
    images: ["https://dte-84.github.io/assets/mypage1.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
