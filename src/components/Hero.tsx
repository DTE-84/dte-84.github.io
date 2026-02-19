'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  const name = "Drew T Ernst";
  const words = name.split(" ");

  return (
    <section id="home" className="hero min-h-screen flex items-center justify-center text-center pt-[100px] bg-transparent">
      <div className="container-main hero-content">
        <h1 className="text-white font-bold uppercase leading-none mb-4 text-[clamp(2.2rem,10vw,6rem)] tracking-[clamp(4px,2vw,8px)] relative inline-block z-10 w-full flicker-animation">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
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
          style={{ color: 'var(--theme-accent)' }}
        >
          <br />
          Frontend Developer<span className="slashblue text-accent"> //</span> Problem Solver
        </p>

        {/* Interaction Stack */}
        <div className="mt-20 flex flex-col items-center gap-12">
          {/* My Toolkit Header */}
          <div className="toolkit-header">
            My Toolkit
          </div>

          {/* Tactical Tech Array */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left Wing */}
            <div className="flex items-center gap-6 relative">
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all">
                <Icon icon="solar:atom-linear" className="tab-icon text-accent text-xl group-hover:hidden transition-all" />
                <span className="tab-text hidden group-hover:block transition-all text-accent">React</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all">
                  <Icon icon="solar:server-square-linear" className="tab-icon text-accent text-xl group-hover:hidden transition-all" />
                  <span className="tab-text hidden group-hover:block transition-all text-accent">Next.js</span>
                </div>
                <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all">
                  <Icon icon="solar:pallete-2-linear" className="tab-icon text-accent text-xl group-hover:hidden transition-all" />
                  <span className="tab-text hidden group-hover:block transition-all text-accent">Tailwind</span>
                </div>
              </div>
              <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-accent/20 hidden md:block"></div>
            </div>

            {/* Center */}
            <div className="flex justify-center my-8 md:my-0">
              <a href="#projects" className="tech-tab view-works-uplink scale-150 relative overflow-hidden bg-accent/10 border-accent/40 shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.15)] z-[5] transition-all duration-[0.4s] hover:scale-[1.7] hover:bg-accent/20 hover:shadow-[0_0_40px_rgba(var(--theme-accent-rgb),0.4)] font-orbitron" style={{ width: '160px', height: '60px' }}>
                My Work
              </a>
            </div>

            {/* Right Wing */}
            <div className="flex items-center gap-6 relative">
              <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-accent/20 hidden md:block"></div>
              <div className="flex flex-col gap-4">
                <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all">
                  <Icon icon="solar:layers-linear" className="tab-icon text-accent text-xl group-hover:hidden transition-all" />
                  <span className="tab-text hidden group-hover:block transition-all text-accent">TypeScript</span>
                </div>
                <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all">
                  <Icon icon="solar:code-2-linear" className="tab-icon text-accent text-xl group-hover:hidden transition-all" />
                  <span className="tab-text hidden group-hover:block transition-all text-accent">JavaScript</span>
                </div>
              </div>
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all">
                <Icon icon="solar:clapperboard-edit-linear" className="tab-icon text-accent text-xl group-hover:hidden transition-all" />
                <span className="tab-text hidden group-hover:block transition-all text-accent">CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
