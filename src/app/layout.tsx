import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://dte-solutions.icu"),
  title: "DTE - Portfolio",
  description:
    "Data Analyst | Software Engineer. Specialized in solving world problems with sophisticated applications and programs.",
  openGraph: {
    title: "DTE - Portfolio",
    description: "Data Analyst | Software Engineer",
    images: ["/DTE-E-Portfolio/assets/DTE84resume.png"],
  },
  keywords: [
    "Frontend Developer",
    "UI Designer",
    "UX Design",
    "React Developer",
    "Next.js",
    "Healthcare Tech",
    "Product Design",
    "HIPAA-Safe Design",
  ],
  authors: [{ name: "Drew Ernst" }],
  twitter: {
    card: "summary_large_image",
    title: "DTE - Portfolio",
    description:
      "Data Analyst | Software Engineer. Specialized in solving world problems with sophisticated applications.",
    images: ["/DTE-E-Portfolio/assets/DTE84resume.png"],
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
      <body className="antialiased">
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}


