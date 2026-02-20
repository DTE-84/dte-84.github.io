"use client";

import React from "react";
import { Icon } from "@iconify/react";

const Hero: React.FC = () => {
  const name = "Drew T Ernst";
  const words = name.split(" ");

  return (
    <section
      id="home"
      className="hero min-h-screen flex items-center justify-center text-center pt-[120px] md:pt-[100px] bg-transparent"
    >
      <div className="container-main hero-content">
        <h1 className="text-white font-bold uppercase leading-none mb-4 text-[clamp(2.2rem,10vw,6rem)] tracking-[clamp(4px,2vw,8px)] relative inline-block z-10 w-full flicker-animation">
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0"
            >
              {word.split("").map((char, charIndex) => {
                // Calculate global index for animation delay
                const globalIndex = name.indexOf(word) + charIndex;
                return (
                  <span
                    key={charIndex}
                    className="hero-letter inline-block animate-[hero-wave-breathe_4s_ease-in-out_infinite] blur-[0.5px]"
                    style={{ animationDelay: `${globalIndex * 0.1}s` }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>
        <p
          className="typewriter text-lg md:text-xl font-mono uppercase tracking-[0.3em]"
          style={{ color: "var(--theme-accent)" }}
        >
          <br />
          Frontend Developer{" "}
          <span
            className="text-offset"
            style={{
              color: "var(--theme-offset)",
              textShadow: "0 0 10px rgba(var(--theme-offset-rgb), 0.3)",
            }}
          >
            {"//"}
          </span>{" "}
          UI Designer
        </p>

        {/* Interaction Stack */}
        <div className="mt-20 flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <a
              href="#projects"
              className="tech-tab group relative flex items-center justify-center gap-3 bg-accent/5 border-accent/30 text-accent font-orbitron text-[13px] tracking-[3px] transition-all duration-300 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_25px_rgba(var(--theme-accent-rgb),0.2)]"
              style={{ width: "180px", height: "52px" }}
            >
              <Icon
                icon="solar:clapperboard-edit-linear"
                className="text-xl group-hover:scale-110 transition-transform"
              />
              My Work
            </a>

            <a
              href="/asseTS/DTERESUME.pdf"
              download
              className="tech-tab group relative flex items-center justify-center gap-3 bg-white/5 border-white/20 text-white/70 font-orbitron text-[13px] tracking-[3px] transition-all duration-300 hover:bg-white/10 hover:border-white hover:text-white"
              style={{ width: "180px", height: "52px" }}
            >
              <Icon
                icon="solar:file-download-linear"
                className="text-xl group-hover:scale-110 transition-transform"
              />
              Download CV
            </a>
          </div>

          {/* Tactical Tech Array */}
          {/* Tactical Tech Array */}
          <div className="w-full flex flex-col items-center gap-8 max-w-[1400px] mx-auto px-4">
            {/* Toolkit Header */}
            <div className="flex items-center justify-center gap-4 md:gap-8 py-4">
              <div className="h-[1px] w-8 md:w-12 bg-accent/40 shadow-[0_0_10px_var(--theme-accent)]"></div>
              <h4 className="text-[12px] md:text-[14px] font-bold text-accent uppercase tracking-[4px] md:tracking-[6px] whitespace-nowrap font-space">
                Technical Arsenal
              </h4>
              <div className="h-[1px] w-8 md:w-12 bg-accent/40 shadow-[0_0_10px_var(--theme-accent)]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full">
              {/* Engineering Cluster */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[3px] text-white/40">
                  Core Engineering
                </span>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[400px]">
                  {["React", "Next.js", "TypeScript", "JavaScript"].map(
                    (tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 bg-accent/5 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest font-space hover:bg-accent/10 transition-all cursor-default"
                      >
                        {tech}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Separator for mobile/desktop */}
              <div className="w-16 h-[1px] bg-white/10 md:w-[1px] md:h-16"></div>

              {/* Design Cluster */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[3px] text-white/40">
                  UI/UX & Design
                </span>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[400px]">
                  {["Tailwind", "CSS3", "Figma", "Motion"].map((tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold uppercase tracking-widest font-space hover:bg-white/10 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
