"use client";

import React, { useState } from "react";
import BgAnimation from "@/components/BgAnimation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollNav from "@/components/ScrollNav";
import { Icon } from "@iconify/react";

// Trigger redeploy to sync local and remote versions
export default function Home() {
  const [theme, setTheme] = useState("blue");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleTheme = () => {
    const newTheme = theme === "blue" ? "yellow" : "blue";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    if (!isNavActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeNav = () => {
    setIsNavActive(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="relative overflow-hidden selection:bg-accent selection:text-black">
      <BgAnimation />
      <ScrollNav />
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />

      {/* Click-away overlay for mobile nav */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-opacity duration-300 lg:hidden ${isNavActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeNav}
      />

      <nav className="circuit-nav fixed top-0 left-0 w-full h-[clamp(80px,10vh,100px)] flex items-center z-[1000] bg-[rgba(10,10,10,0.9)] backdrop-blur-[20px] border-b border-accent/30">
        <div className="nav-container w-full px-5 md:px-10 flex justify-between items-center">
          <div className="nav-section-left flex-1 flex items-center gap-4">
            <div className="tech-logo">
              <div className="logo-hex bg-accent/10 border border-accent px-4 py-2 [clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] transition-all hover:skew-x-[-5deg]">
                <span className="logo-text font-space text-[22px] font-black text-white tracking-[2.5px] [text-shadow:0_0_10px_rgba(var(--theme-accent-rgb),0.5)]">
                  DTE
                </span>
              </div>
            </div>
            <div className="brand-info flex flex-col">
              <span className="brand-text text-[14px] font-bold text-accent tracking-[2px]">
                Port_V2.2
              </span>
              <div className="system-status flex items-center gap-2">
                <span className="status-dot w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_var(--theme-accent)] animate-[status-pulse_2s_infinite_ease-in-out]"></span>
                <span className="status-text text-[10px] opacity-50 uppercase tracking-widest font-black">
                  Live
                </span>
              </div>
            </div>
          </div>

          <div className="nav-section-center flex-1 flex justify-center">
            <ul
              className={`nav-links flex gap-6 md:gap-10 list-none transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isNavActive ? "active fixed top-[clamp(80px,10vh,100px)] left-0 w-full h-auto bg-[rgba(10,10,10,0.98)] flex-col justify-center items-center py-16 border-b border-accent opacity-100 translate-y-0" : "hidden lg:flex lg:opacity-100 lg:translate-y-0 opacity-0 -translate-y-10"}`}
            >
              <li>
                <a
                  href="#home"
                  className="nav-item-link text-[13px] font-bold uppercase tracking-[3px] text-accent hover:text-white transition-colors"
                  onClick={closeNav}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-item-link text-[13px] font-bold uppercase tracking-[3px] text-accent hover:text-white transition-colors"
                  onClick={closeNav}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="nav-item-link text-[13px] font-bold uppercase tracking-[3px] text-accent hover:text-white transition-colors"
                  onClick={closeNav}
                >
                  Projects
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleModal();
                    closeNav();
                  }}
                  className="nav-item-link text-[13px] font-bold uppercase tracking-[3px] text-accent hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li className="lg:ml-4 lg:pl-6 lg:border-l lg:border-white/10">
                <a
                  href="/assets/DTEresume.pdf"
                  download
                  className="flex items-center text-[11px] font-black uppercase tracking-[2px] text-accent/80 hover:text-white transition-all group"
                  onClick={closeNav}
                >
                  <Icon
                    icon="solar:file-download-linear"
                    className="mr-2 text-base group-hover:-translate-y-0.5 transition-transform"
                  />
                  Download CV
                </a>
              </li>
            </ul>

            <div
              id="hamburger-trigger"
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer z-[1001] w-8 h-8 justify-center items-center"
              onClick={toggleNav}
            >
              <span
                className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isNavActive ? "rotate-45 translate-y-[4px] w-5" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isNavActive ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-accent transition-all duration-300 ${isNavActive ? "-rotate-45 -translate-y-[4px] w-5" : ""}`}
              ></span>
            </div>
          </div>

          <div className="nav-section-right flex-1 flex justify-end">
            <div
              className="protocol-switch flex items-center gap-3 cursor-pointer"
              onClick={toggleTheme}
            >
              <div className="slider w-9 h-[18px] bg-[#222] rounded-[20px] relative border border-accent">
                <div
                  className={`dot absolute w-3 h-3 top-0.5 bg-accent rounded-full transition-transform duration-300 ${theme === "yellow" ? "translate-x-[18px]" : "translate-x-0.5"}`}
                ></div>
              </div>
              <span className="protocol-label text-[14px] font-bold text-accent tracking-widest uppercase font-space hidden md:block">
                Protocol
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer onContactClick={toggleModal} />

      <button
        className="tech-tab fixed bottom-[30px] right-[30px] !w-[60px] !h-[60px] bg-[#1e293b]/80 backdrop-blur-sm z-[1000] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        onClick={toggleModal}
        aria-label="Contact me"
      >
        <Icon icon="fa-solid:envelope" width="28" height="28" />
      </button>
    </div>
  );
}
