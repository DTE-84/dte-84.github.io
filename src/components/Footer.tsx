"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer
      id="footer"
      className="relative border-t border-accent/10 bg-black/40 backdrop-blur-md overflow-hidden mt-80"
    >
      <div className="container-main pt-[200px] pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-24 mt-20">
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-none">
                Let&apos;s build the{" "}
                <span className="text-accent italic">Future</span> together.
              </h2>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                Have a project in mind or just want to discuss high-fidelity
                frontend architecture? My uplink is always active.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-12">
              <a
                href="mailto:drew.t.ernst@gmail.com"
                className="flex items-center gap-4 text-white group hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-none border border-accent/40 flex items-center justify-center group-hover:border-accent/50 transition-all">
                  <Icon icon="solar:letter-linear" className="text-xl" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest">
                  drew.t.ernst@gmail.com
                </span>
              </a>
              <a
                href="/assets/DTEresume.pdf"
                target="_blank"
                className="flex items-center gap-4 text-white group hover:text-accent transition-colors"
              >
                <div className="w-10 h-10 rounded-none border border-accent/40 flex items-center justify-center group-hover:border-accent/50 transition-all">
                  <Icon icon="solar:document-linear" className="text-xl" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest">
                  Download Resume // PDF
                </span>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-none border border-accent/40 flex items-center justify-center">
                  <Icon icon="solar:map-point-linear" className="text-xl" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest">
                  Available Remotely // CST
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col">
            <div className="absolute -inset-4 bg-accent/5 blur-2xl rounded-full opacity-50"></div>
            <form className="relative flex-grow bg-white/5 border border-accent/40 p-8 md:p-10 rounded-none backdrop-blur-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form__item">
                    <label className="block text-[9px] font-bold uppercase mb-2 text-accent tracking-[0.2em]">
                      Full Name
                    </label>
                    <input
                      className="w-full p-4 bg-white/5 border border-accent/40 rounded-none text-white font-bold outline-none font-mono text-xs uppercase placeholder:text-white/20 focus:border-accent/50 transition-all"
                      placeholder="NAME"
                      name="user_name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="form__item">
                    <label className="block text-[9px] font-bold uppercase mb-2 text-accent tracking-[0.2em]">
                      Email Address
                    </label>
                    <input
                      className="w-full p-4 bg-white/5 border border-accent/40 rounded-none text-white font-bold outline-none font-mono text-xs uppercase placeholder:text-white/20 focus:border-accent/50 transition-all"
                      placeholder="EMAIL"
                      name="user_email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="form__item">
                  <label className="block text-[9px] font-bold uppercase mb-2 text-accent tracking-[0.2em]">
                    Message
                  </label>
                  <textarea
                    className="w-full p-4 bg-white/5 border border-accent/40 rounded-none text-white font-bold outline-none h-24 font-mono text-xs uppercase placeholder:text-white/20 focus:border-accent/50 transition-all resize-none"
                    placeholder="MESSAGE..."
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
              <button className="group relative w-full py-4 mt-6 bg-accent text-black font-bold uppercase tracking-[0.2em] text-xs rounded-none overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span className="relative z-10">Initialize Transmission</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-accent/20 gap-8">
          <div className="flex items-center gap-4">
            <div className="tech-logo">
              <div className="logo-hex bg-accent/10 border border-accent px-4 py-2 [clip-path:polygon(15%_0,100%_0,85%_100%,0%_100%)] transition-all hover:skew-x-[-5deg]">
                <span className="logo-text font-space text-[22px] font-black text-white tracking-[2.5px] [text-shadow:0_0_10px_rgba(var(--theme-accent-rgb),0.5)]">
                  DTE
                </span>
              </div>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
              Portfolio 2025
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="https://github.com/dte-84"
              target="_blank"
              className="text-white/40 hover:text-accent transition-colors text-xl"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              href="https://www.linkedin.com/in/dte84"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-xl"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <button
              onClick={onContactClick}
              className="text-white/40 hover:text-accent transition-colors text-xl"
            >
              <Icon icon="mdi:email" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
