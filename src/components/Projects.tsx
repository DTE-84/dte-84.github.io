"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const Projects: React.FC = () => {
  const projects = [
    {
      id: "2026_PCSP_PRO",
      title: "PCSP Assistant Pro",
      category: "Healthcare Design & Dev",
      year: "2026",
      description:
        "A user-centric clinical drafting engine designed for MCSDD (Missouri DMH), streamlining complex PCSP documentation through intuitive UI and HIPAA-safe logic.",
      tags: ["UI/UX", "Vanilla JS", "HIPAA-Safe"],
      image: "/assets/pcsp1.png",
      link: "https://dte-84.github.io/MCSDD-APP/",
      caseStudy: "/case-study-isp",
      featured: true,
    },
    {
      id: "CRYPTOLIVE",
      title: "CryptoLive Engine",
      category: "Fintech",
      year: "2026",
      description:
        "High-performance websocket implementation for real-time market data visualization and asynchronous price-feed synchronization.",
      tags: ["React", "Socket.io", "Chart.js"],
      image: "/assets/cryptolive (2).png",
      link: "https://cryptolive-5jmo.onrender.com/",
      featured: false,
    },
    {
      id: "KEANO_MODELING",
      title: "Keano Modeling",
      category: "Editorial Design",
      year: "2026",
      description:
        "Immersive visual architecture for a high-end creative portfolio, focusing on fluid navigation and zero-latency media loading.",
      tags: ["Next.js", "Motion", "Tailwind"],
      image: "/assets/keymodeling.png",
      link: "https://kw-portfolio-kappa.vercel.app/",
      featured: false,
    },
    {
      id: "TONYS_LANDSCAPING",
      title: "Landscaping Logic",
      category: "Commercial UI",
      year: "2026",
      description:
        "Service-oriented architecture featuring a custom interactive engine for visual data comparison and conversion-optimized storytelling.",
      tags: ["Vanilla JS", "UI/UX", "GSAP"],
      image: "/assets/tonybna.png",
      link: "https://tonyslandscapingllc.com",
      featured: false,
    },
    {
      id: "CARSALES",
      title: "Inventory Discovery",
      category: "Automotive SaaS",
      year: "2025",
      description:
        "Automotive marketplace interface optimized for complex search heuristics and high-speed inventory filtering.",
      tags: ["React", "REST API", "UX Design"],
      image: "/assets/santishowroom.png",
      link: "https://dte-84.github.io/Car-Sales-Marketing/",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-[100px] mb-48">
      <div className="container-main">
        <div className="flex items-center gap-6 mb-32">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
            <span style={{ color: "var(--theme-offset)", opacity: 0.8 }}>
              02 //
            </span>{" "}
            Exploratory Case Study
          </h2>
          <div className="h-[1px] flex-grow bg-[var(--theme-offset)]/40"></div>
        </div>

        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <div key={project.id} className="group relative mb-48">
              <div className="mb-0.5 flex flex-col pl-4">
                <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-[pulse-fast_1.5s_infinite]"></span>
                  <span className="glowingtext">Featured Project</span>
                </span>
                <span className="text-[10px] font-mono text-white/80 tracking-[0.2em] ml-4">
                  REF_ID: {project.id}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative rounded-none border border-transparent bg-accent/5 backdrop-blur-md aspect-video group-hover:border-offset transition-all duration-700 p-4 md:p-6 thumbnail-glow">
                  {/* Tactical Brackets - Positioned at corners of the container */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity z-30"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity z-30"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity z-30"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity z-30"></div>

                  <div className="relative w-full h-full overflow-hidden rounded-sm z-10 shadow-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={80}
                      className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-1/2 w-full -top-full group-hover:top-full transition-all duration-[2000ms] pointer-events-none z-40"></div>
                  </div>
                </div>

                <div className="relative border-l-4 border-accent pl-10 py-8 bg-accent/[0.03] backdrop-blur-sm rounded-r-2xl group-hover:bg-accent/[0.05] transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-2 py-1 category-badge rounded-none text-[9px] font-bold border border-[var(--theme-offset)]/40 text-[var(--theme-offset)] bg-[var(--theme-offset)]/5 tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono tracking-[0.2em]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-accent transition-colors uppercase tracking-widest leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10 text-[var(--theme-offset)] font-bold">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] bg-[var(--theme-offset)]/10 px-2 py-1 rounded-none uppercase tracking-widest border border-[var(--theme-offset)]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-8">
                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center text-sm font-bold text-accent border-b-2 border-accent pb-1 hover:border-white hover:text-white transition-all uppercase tracking-widest"
                    >
                      Launch Terminal{" "}
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        className="ml-2"
                      />
                    </a>
                    {project.caseStudy && (
                      <Link
                        href={project.caseStudy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-bold text-[var(--theme-offset)] border-b-2 border-[var(--theme-offset)] pb-1 hover:border-white hover:text-white transition-all uppercase tracking-widest"
                      >
                        Read Research{" "}
                        <Icon
                          icon="solar:document-text-linear"
                          className="ml-2"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className="flex items-center gap-6 mb-32">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
            <span style={{ color: "var(--theme-offset)", opacity: 0.8 }}>
              03 //
            </span>{" "}
            The Archives
          </h2>
          <div className="h-[1px] flex-grow bg-[var(--theme-offset)]/40"></div>
        </div>

        <div className="space-y-48">
          {projects
            .filter((p) => !p.featured)
            .map((project, idx) => (
              <div
                key={project.id}
                className="group grid md:grid-cols-2 gap-16 items-center"
              >
                <div
                  className={`relative rounded-none border border-transparent bg-white/5 backdrop-blur-sm aspect-video group-hover:border-offset/60 transition-all duration-700 p-4 md:p-6 thumbnail-glow ${idx % 2 !== 0 ? "md:order-2" : ""}`}
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-offset opacity-40 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative w-full h-full overflow-hidden rounded-sm z-10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent z-10 pointer-events-none"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={80}
                      className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
                    />
                  </div>
                </div>
                <div className={idx % 2 !== 0 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-2 py-1 category-badge rounded-none text-[9px] font-bold border border-[var(--theme-offset)]/40 text-[var(--theme-offset)] bg-[var(--theme-offset)]/5 tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono tracking-[0.2em]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors uppercase tracking-widest">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10 text-[var(--theme-offset)] font-bold">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 tech-tag-chip rounded-none text-[9px] font-bold border border-[var(--theme-offset)]/30 text-[var(--theme-offset)] bg-[var(--theme-offset)]/5 tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center text-sm font-bold text-accent border-b-2 border-accent pb-1 hover:border-white hover:text-white transition-all uppercase tracking-widest"
                  >
                    Uplink Project{" "}
                    <Icon icon="solar:arrow-right-up-linear" className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
