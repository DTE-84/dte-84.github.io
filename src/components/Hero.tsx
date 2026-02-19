'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  const name = "Drew T Ernst";
  const words = name.split(" ");

  return (
    <section id="home" className="hero min-h-screen flex items-center justify-center text-center pt-[120px] md:pt-[100px] bg-transparent">
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
          Frontend Developer <span className="text-offset" style={{ color: 'var(--theme-offset)', textShadow: '0 0 10px rgba(var(--theme-offset-rgb), 0.3)' }}>{"//"}</span> Problem Solver
        </p>

        {/* Interaction Stack */}
        <div className="mt-20 flex flex-col items-center gap-14 md:gap-20 w-full">
          <div className="flex justify-center">
            <a 
              href="#projects" 
              className="tech-tab view-works-uplink scale-[1.25] md:scale-[1.4] relative overflow-hidden bg-accent/10 border-accent/40 shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.15)] z-[5] transition-all duration-[0.4s] hover:scale-[1.35] md:hover:scale-[1.55] hover:bg-accent/20 hover:shadow-[0_0_40px_rgba(var(--theme-accent-rgb),0.3)] font-orbitron" 
              style={{ width: '150px', height: '55px' }}
            >
              My Work
            </a>
          </div>

          {/* Tactical Tech Array */}
          <div className="w-full flex flex-col items-center gap-12 max-w-[1400px] mx-auto px-4">
            
            {/* Toolkit Header (Top) */}
            <div className="flex items-center justify-center gap-4 md:gap-8 py-4">
              <div 
                className="h-[1.5px] w-10 md:w-16 flex-shrink-0" 
                style={{ backgroundColor: 'var(--theme-offset)', boxShadow: '0 0 10px var(--theme-offset)' }}
              ></div>
              <h4 className="text-[14px] md:text-[18px] font-bold text-accent uppercase tracking-[6px] md:tracking-[10px] whitespace-nowrap flicker-animation font-space [text-shadow:0_0_10px_rgba(var(--theme-accent-rgb),0.4)]">
                My Toolkit
              </h4>
              <div 
                className="h-[1.5px] w-10 md:w-16 flex-shrink-0" 
                style={{ backgroundColor: 'var(--theme-offset)', boxShadow: '0 0 10px var(--theme-offset)' }}
              ></div>
            </div>

            {/* Language Icons Row (Bottom) */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-[1000px]">
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all hover:bg-accent/10" style={{ width: '125px', height: '48px' }}>
                <Icon icon="solar:atom-linear" className="tab-icon text-accent text-xl md:group-hover:hidden transition-all" />
                <span className="tab-text md:hidden md:group-hover:block transition-all text-accent text-[11px] font-bold uppercase tracking-widest">React</span>
              </div>
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all hover:bg-accent/10" style={{ width: '125px', height: '48px' }}>
                <Icon icon="solar:server-square-linear" className="tab-icon text-accent text-xl md:group-hover:hidden transition-all" />
                <span className="tab-text md:hidden md:group-hover:block transition-all text-accent text-[11px] font-bold uppercase tracking-widest">Next.js</span>
              </div>
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all hover:bg-accent/10" style={{ width: '125px', height: '48px' }}>
                <Icon icon="solar:pallete-2-linear" className="tab-icon text-accent text-xl md:group-hover:hidden transition-all" />
                <span className="tab-text md:hidden md:group-hover:block transition-all text-accent text-[11px] font-bold uppercase tracking-widest">Tailwind</span>
              </div>
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all hover:bg-accent/10" style={{ width: '125px', height: '48px' }}>
                <Icon icon="solar:layers-linear" className="tab-icon text-accent text-xl md:group-hover:hidden transition-all" />
                <span className="tab-text md:hidden md:group-hover:block transition-all text-accent text-[11px] font-bold uppercase tracking-widest">TypeScript</span>
              </div>
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all hover:bg-accent/10" style={{ width: '125px', height: '48px' }}>
                <Icon icon="solar:code-2-linear" className="tab-icon text-accent text-xl md:group-hover:hidden transition-all" />
                <span className="tab-text md:hidden md:group-hover:block transition-all text-accent text-[11px] font-bold uppercase tracking-widest">JavaScript</span>
              </div>
              <div className="tech-tab flex items-center justify-center gap-2 group cursor-pointer transition-all hover:bg-accent/10" style={{ width: '125px', height: '48px' }}>
                <Icon icon="solar:clapperboard-edit-linear" className="tab-icon text-accent text-xl md:group-hover:hidden transition-all" />
                <span className="tab-text md:hidden md:group-hover:block transition-all text-accent text-[11px] font-bold uppercase tracking-widest">CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
