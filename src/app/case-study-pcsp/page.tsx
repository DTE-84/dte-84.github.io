"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function CaseStudyISP() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.getAttribute("id");
            // Group conclusion with appendix for TOC highlighting
            if (id === "conclusion") id = "appendix";

            document.querySelectorAll(".toc-item").forEach((item) => {
              item.classList.toggle(
                "active",
                item.getAttribute("data-section") === id,
              );
            });
          }
        });
      },
      { threshold: 0, rootMargin: "-20% 0px -70% 0px" },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0c] min-h-screen text-white font-space selection:bg-[#00ffcc] selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#00ffcc11_0%,_transparent_50%)]"></div>
      </div>

      {/* Table of Contents */}
      <nav className="toc-nav fixed left-10 top-1/2 -translate-y-1/2 w-[180px] z-[100] hidden xl:block">
        <ul className="toc-list list-none pl-0 border-l border-[#00ffcc]/10">
          <li
            className="toc-item relative py-2.5 pl-5 transition-all active"
            data-section="challenge"
          >
            <a
              href="#challenge"
              className="toc-link text-white/40 no-underline text-[0.7rem] font-orbitron uppercase tracking-[0.15em] block transition-all hover:text-[#00ffcc]"
            >
              01 // The Challenge
            </a>
          </li>
          <li
            className="toc-item relative py-2.5 pl-5 transition-all"
            data-section="solution"
          >
            <a
              href="#solution"
              className="toc-link text-white/40 no-underline text-[0.7rem] font-orbitron uppercase tracking-[0.15em] block transition-all hover:text-[#00ffcc]"
            >
              02 // The Solution
            </a>
          </li>
          <li
            className="toc-item relative py-2.5 pl-5 transition-all"
            data-section="execution"
          >
            <a
              href="#execution"
              className="toc-link text-white/40 no-underline text-[0.7rem] font-orbitron uppercase tracking-[0.15em] block transition-all hover:text-[#00ffcc]"
            >
              03 // The Execution
            </a>
          </li>
          <li
            className="toc-item relative py-2.5 pl-5 transition-all"
            data-section="impact"
          >
            <a
              href="#impact"
              className="toc-link text-white/40 no-underline text-[0.7rem] font-orbitron uppercase tracking-[0.15em] block transition-all hover:text-[#00ffcc]"
            >
              04 // The Impact
            </a>
          </li>
          <li
            className="toc-item relative py-2.5 pl-5 transition-all"
            data-section="appendix"
          >
            <a
              href="#appendix"
              className="toc-link text-white/40 no-underline text-[0.7rem] font-orbitron uppercase tracking-[0.15em] block transition-all hover:text-[#00ffcc]"
            >
              05 // Appendix
            </a>
          </li>
        </ul>
      </nav>

      <div className="max-w-5xl mx-auto relative p-4 md:p-12">
        <header className="mb-12">
          <div className="flex justify-between items-start mb-12">
            <Link
              href="/"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00ffcc]/60 hover:text-[#00ffcc] transition-colors flex items-center gap-2"
            >
              <Icon icon="solar:arrow-left-linear" /> Return
            </Link>
            <div className="text-right">
              <span className="block text-[7px] font-mono text-[#00ffcc]/40 mb-1 uppercase tracking-widest">
                ARCHIVE_ID: 2026_ISP_PRO
              </span>
              <div className="inline-block px-3 py-1 rounded-full border border-[#00ffcc]/20 bg-[#00ffcc]/5 text-[#00ffcc] text-[9px] font-black uppercase tracking-[0.4em]">
                CASE STUDY
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="lg:order-2 text-right">
              <h1 className="text-5xl md:text-7xl font-orbitron uppercase leading-none mb-8 glow-text tracking-normal text-white">
                PCSP Assistant <br />
                <span className="text-[#00ffcc] italic">Pro</span>
              </h1>

              <div className="flex flex-wrap justify-end gap-x-8 gap-y-4 pt-8 border-t border-[#00ffcc]/20">
                <div className="text-right">
                  <span className="block text-[10px] font-black text-[#00ffcc]/50 uppercase tracking-widest mb-1">
                    Role
                  </span>
                  <span className="text-sm font-bold uppercase tracking-tight text-white/90">
                    Product Designer
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-black text-[#00ffcc]/50 uppercase tracking-widest mb-1">
                    Client
                  </span>
                  <span className="text-sm font-bold uppercase tracking-tight text-white/90">
                    MCSDD (MO DMH)
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-black text-[#00ffcc]/50 uppercase tracking-widest mb-1">
                    Security
                  </span>
                  <span className="text-sm font-bold uppercase tracking-tight text-red-400">
                    HIPAA
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-black text-[#00ffcc]/50 uppercase tracking-widest mb-1">
                    Stack
                  </span>
                  <span className="text-sm font-bold uppercase tracking-tight text-white/90">
                    Vanilla JS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image Section */}
        <div className="mb-32 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ffcc]/20 to-transparent blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative rounded-2xl overflow-hidden border border-[#00ffcc]/40 bg-black aspect-[21/9]">
            <Image
              src="/assets/pcsp1.png"
              alt="PCSP Assistant Pro Hero"
              fill
              quality={80}
              priority
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00ffcc] animate-pulse"></span>
                <span className="text-[12px] font-mono text-[#00ffcc] uppercase tracking-[0.3em]">
                  System Active // Missouri DMH Engine
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-32">
          {/* ── 01 // THE CHALLENGE ── */}
          <section
            id="challenge"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">01 //</span> The{" "}
                <span className="text-[#00ffcc]">Challenge</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <p className="text-lg text-white/95 font-medium leading-relaxed">
                Marion County Services for the Developmentally Disabled (MCSDD)
                was struggling with an outdated, narrative-heavy Person Centered
                Service Plan (PCSP) process that placed immense burden on
                frontline staff.
              </p>
              <div className="grid gap-6">
                <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5 backdrop-blur-sm">
                  <h4 className="text-[#00ffcc] text-[14px] font-black uppercase tracking-widest mb-3 font-orbitron">
                    The Administrative Burden
                  </h4>
                  <p className="text-base text-white/85">
                    Case Managers (CMs) spent 40% of their week on manual data
                    entry, leading to extreme &quot;click-fatigue&quot; and
                    organizational burnout. Each plan required documenting
                    demographics, communication profiles, personal preferences,
                    relationships, health risk, and measurable outcomes — all by
                    hand, across multiple disconnected systems.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5 backdrop-blur-sm">
                  <h4 className="text-[#00ffcc] text-[14px] font-black uppercase tracking-widest mb-3 font-orbitron">
                    The Compliance Gap
                  </h4>
                  <p className="text-base text-white/85">
                    State auditors require rigorous &quot;Active Treatment&quot;
                    language, structured communication profiles, and documented
                    person-centered supports. Vague phrasing, missing
                    communication barriers, or undocumented important
                    relationships led to rejected plans, delayed services, and
                    high audit risk.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5 backdrop-blur-sm border-red-500/20">
                  <h4 className="text-red-400 text-[14px] font-black uppercase tracking-widest mb-3 font-orbitron">
                    The HIPAA Constraint
                  </h4>
                  <p className="text-base text-white/85">
                    Standard cloud tools (Notion, Google Docs) were prohibited
                    due to lack of BAAs and strict patient confidentiality laws.
                    Any solution had to process sensitive PHI without
                    transmitting it to any external server.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 02 // THE SOLUTION ── */}
          <section
            id="solution"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">02 //</span> The{" "}
                <span className="text-[#00ffcc]">Solution</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <p className="text-lg text-white/95 font-medium leading-relaxed">
                I engineered a Zero-Footprint Logic Engine — a client-side web
                application that acts as a clinical &quot;narrative
                calculator.&quot; This tool bridges the gap between raw client
                information and Missouri-mandated PCSP clinical markers,
                covering every required domain from demographics to measurable
                outcomes in a single unified workspace.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-[#00ffcc]/20 bg-[#00ffcc]/5 p-2 aspect-video">
                <Image
                  src="/assets/pcsp2.png"
                  alt="PCSP Workflow"
                  fill
                  quality={80}
                  className="rounded-xl opacity-80 shadow-2xl w-full h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                    <Icon
                      icon="solar:widget-add-linear"
                      className="text-[#00ffcc]"
                    />{" "}
                    Modular Builder
                  </h4>
                  <p className="text-sm text-white/85 leading-loose">
                    Uses a dropdown-driven &quot;Building Block&quot; approach
                    to turn casual goals into standardized SMART goals
                    instantly. Each of the nine PCSP sections is self-contained
                    and collapses cleanly for focused drafting.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                    <Icon
                      icon="solar:library-linear"
                      className="text-[#00ffcc]"
                    />{" "}
                    Clinical Word Bank
                  </h4>
                  <p className="text-sm text-white/85 leading-loose">
                    Pre-loaded with MO-approved active verbs (Model, Facilitate,
                    Educate) to ensure audit-readiness on the first draft.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                    <Icon
                      icon="solar:chat-square-like-linear"
                      className="text-[#00ffcc]"
                    />{" "}
                    Communication Profiling
                  </h4>
                  <p className="text-sm text-white/85 leading-loose">
                    A full communication section captures primary language, sign
                    language type, method checkboxes, evaluation status,
                    identified barriers, and a dynamic chart mapping behaviors
                    to staff responses — all per Missouri DD guidelines.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                    <Icon
                      icon="solar:users-group-rounded-linear"
                      className="text-[#00ffcc]"
                    />{" "}
                    Person-Centered Supports
                  </h4>
                  <p className="text-sm text-white/85 leading-loose">
                    Dedicated sections capture what the individual likes and
                    dislikes, plus an unlimited dynamic roster of important
                    people — each with their relationship, shared activities,
                    and frequency of contact.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                    <Icon
                      icon="solar:diskette-linear"
                      className="text-[#00ffcc]"
                    />{" "}
                    Portable File System
                  </h4>
                  <p className="text-sm text-white/85 leading-loose">
                    Plans are saved as encrypted{" "}
                    <span className="text-[#00ffcc] font-mono">.pcsp</span>{" "}
                    files locally, opened and auto-filled on demand, printed as
                    clean PDFs, or kept as browser drafts — zero cloud
                    dependency.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 font-orbitron">
                    <Icon
                      icon="solar:shield-keyhole-linear"
                      className="text-[#00ffcc]"
                    />{" "}
                    HIPAA Privacy Mode
                  </h4>
                  <p className="text-sm text-white/85 leading-loose">
                    A toggle instantly masks all PHI in the live preview with
                    anonymized placeholders, allowing safe screen-sharing during
                    team meetings without ever exposing client data.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── 03 // THE EXECUTION ── */}
          <section
            id="execution"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">03 //</span> The{" "}
                <span className="text-[#00ffcc]">Execution</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic">
                    01
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-base mb-2 font-orbitron">
                      Regulatory Discovery
                    </h4>
                    <p className="text-sm text-white/95">
                      Deep-dive analysis of Missouri 9 CSR 45-3.010 and the
                      &quot;Good Life&quot; Framework to identify required
                      clinical triggers. This included mapping the full PCSP
                      domain structure — demographics, communication profiling,
                      person-centered preferences, vision, health and risk,
                      legal rights, and measurable outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic">
                    02
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-base mb-2 font-orbitron">
                      Zero-Knowledge Architecture
                    </h4>
                    <p className="text-sm text-white/95">
                      Opted for a single-file HTML/JS deployment. By processing
                      data only in the browser&apos;s volatile RAM, I bypassed
                      the need for IT server infrastructure while maintaining
                      100% HIPAA compliance. No POST requests. No databases. No
                      third-party dependencies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic">
                    03
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-base mb-2 font-orbitron">
                      Communication Module
                    </h4>
                    <p className="text-sm text-white/95">
                      Built a structured communication profiling system covering
                      primary language, sign language type selection, a
                      multi-select method checklist (Verbal, AAC Device, PECS,
                      Gestures, Eye Gaze, and more), evaluation status with
                      conditional barrier documentation, and a fully dynamic
                      Communication Chart. Each chart row maps a specific
                      situation or behavior to its meaning and the correct staff
                      response — a direct Missouri DD compliance requirement.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic">
                    04
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-base mb-2 font-orbitron">
                      Likes, Dislikes &amp; Person-Centered Supports
                    </h4>
                    <p className="text-sm text-white/95">
                      Designed dedicated form sections for capturing what the
                      individual genuinely enjoys — favorite activities, foods,
                      and places — alongside dislikes, triggers, and sensory
                      sensitivities. This feeds directly into the narrative and
                      ensures plans reflect the individual&apos;s actual life,
                      not just clinical boilerplate.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic">
                    05
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-base mb-2 font-orbitron">
                      Important People Engine
                    </h4>
                    <p className="text-sm text-white/95">
                      Engineered a dynamic multi-entry system for documenting
                      the people who matter most to the individual. Each entry
                      captures name, relationship, and an unlimited list of
                      shared activities with frequency of contact. Staff can add
                      or remove people and activities on the fly — the narrative
                      auto-updates in real time. This satisfies the
                      &quot;Natural Supports&quot; documentation requirement
                      without requiring a separate system.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-[#00ffcc] font-black font-space text-3xl opacity-20 italic">
                    06
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-base mb-2 font-orbitron">
                      Portable File System (.pcsp)
                    </h4>
                    <p className="text-sm text-white/95">
                      Implemented a complete save/restore pipeline using a
                      custom{" "}
                      <span className="text-[#00ffcc] font-mono">.pcsp</span>{" "}
                      file format. On export, the full plan state — including
                      all dynamic entries like legal reps, communication chart
                      rows, important people, checkboxes, and narrative — is
                      serialized to a locally stored JSON file. On import, a
                      single file upload auto-fills the entire form in seconds.
                      Plans can also be printed to PDF via a dedicated print
                      stylesheet that strips all UI chrome and renders only the
                      clean PCSP document.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#00ffcc]/20 bg-[#00ffcc]/5 p-2 aspect-video">
                <Image
                  src="/assets/pcsp3.png"
                  alt="Clinical Logic Builder"
                  fill
                  quality={80}
                  className="rounded-xl opacity-80 shadow-2xl w-full h-full object-cover hover:scale-105 transition-all duration-700 cursor-pointer"
                />
              </div>

              {/* Feature Architecture Callout */}
              <div className="p-6 rounded-xl border border-[#00ffcc]/20 bg-white/5">
                <h4 className="text-[#00ffcc] text-[13px] font-black uppercase tracking-widest mb-6 font-orbitron">
                  Full Section Architecture — 9 PCSP Domains
                </h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { num: "01", label: "Demographics & Legal" },
                    { num: "02", label: "Communication Profile" },
                    { num: "03", label: "Likes & Dislikes" },
                    { num: "04", label: "Important People" },
                    { num: "05", label: "Vision for a Good Life" },
                    { num: "06", label: "Health, Safety & Risk" },
                    { num: "07", label: "Legal Rights & Satisfaction" },
                    { num: "08", label: "Contributors & Admin" },
                    { num: "09", label: "Measurable Outcomes" },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5"
                    >
                      <span className="text-[#00ffcc]/30 font-mono text-[11px] font-black">
                        {item.num}
                      </span>
                      <span className="text-white/80 text-[12px] font-bold uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 04 // THE IMPACT ── */}
          <section
            id="impact"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">04 //</span> The{" "}
                <span className="text-[#00ffcc]">Impact</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-separate border-spacing-y-2">
                  <thead>
                    <tr>
                      <th className="text-[#00ffcc] uppercase text-[0.7rem] tracking-[0.2em] p-3 font-orbitron">
                        Metric
                      </th>
                      <th className="text-[#00ffcc] uppercase text-[0.7rem] tracking-[0.2em] p-3 font-orbitron">
                        Pre-Deployment
                      </th>
                      <th className="text-[#00ffcc] uppercase text-[0.7rem] tracking-[0.2em] p-3 font-orbitron">
                        Post-Deployment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        Drafting Time
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        ~15-20 Minutes / Goal
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        &lt; 2 Minutes
                      </td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        Audit Compliance
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        High Risk (Passive)
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        100% Active Phrasing
                      </td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        IT Overhead
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        Complex Security Reqs
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        Zero (Browser Only)
                      </td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        Revision Cycles
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        Frequent Rejections
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        First-Pass Approval
                      </td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        Communication Docs
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        Inconsistent / Missing
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        Structured + Charted
                      </td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        Plan Portability
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        Locked to One Machine
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        .pcsp File / PDF
                      </td>
                    </tr>
                    <tr className="bg-white/[0.02]">
                      <td className="p-4 border-t border-b border-l border-white/5 rounded-l-lg font-bold text-white">
                        Person-Centered Data
                      </td>
                      <td className="p-4 border-t border-b border-white/5 text-white/85 italic">
                        Freeform / Overlooked
                      </td>
                      <td className="p-4 border-t border-b border-r border-white/5 rounded-r-lg text-[#00ffcc] font-black uppercase tracking-widest">
                        Structured Profiles
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 05 // TECHNICAL APPENDIX ── */}
          <section
            id="appendix"
            className="grid lg:grid-cols-3 gap-12 pt-[100px]"
          >
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black uppercase tracking-tight sticky top-12 font-orbitron">
                <span className="text-[#00ffcc]/40">05 //</span> Technical{" "}
                <span className="text-[#00ffcc]">Appendix</span>
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-8">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-[#00ffcc]/40 pb-2 font-orbitron">
                  I. Data Lifecycle Management
                </h3>
                <p className="text-sm text-white/95">
                  The primary security feature is its{" "}
                  <span className="text-white font-bold">
                    Stateless Architecture
                  </span>
                  . Unlike SaaS platforms, this tool functions as a
                  &quot;Client-Side Processor.&quot;
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20">
                    <span className="text-[#00ffcc] text-[14px] font-black uppercase block mb-2 font-orbitron">
                      Zero-Persistence
                    </span>
                    <p className="text-[14px] text-white/85">
                      All logic executes in the browser RAM. Data never leaves
                      Volatile Memory during a live session.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20">
                    <span className="text-[#00ffcc] text-[14px] font-black uppercase block mb-2 font-orbitron">
                      The &quot;Refresh&quot; Wipe
                    </span>
                    <p className="text-[14px] text-white/85">
                      Closing the tab instantly purges all session data. No
                      database, no POST requests.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20">
                    <span className="text-[#00ffcc] text-[14px] font-black uppercase block mb-2 font-orbitron">
                      .pcsp Export
                    </span>
                    <p className="text-[14px] text-white/85">
                      When persistence is needed, the full plan state serializes
                      to a local <span className="font-mono">.pcsp</span> file.
                      The CM controls where it lives — agency drive, encrypted
                      USB, or secure folder.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20">
                    <span className="text-[#00ffcc] text-[14px] font-black uppercase block mb-2 font-orbitron">
                      Browser Drafts
                    </span>
                    <p className="text-[14px] text-white/85">
                      Up to 10 in-progress drafts are stored in localStorage on
                      the local machine only — never synced, never transmitted.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-[#00ffcc]/40 pb-2 font-orbitron">
                  II. Missouri Clinical Logic
                </h3>
                <div className="p-6 rounded-xl bg-black border border-[#00ffcc]/40 font-mono text-sm">
                  <span className="text-purple-400">const</span> narrative ={" "}
                  <span className="text-yellow-200">
                    \ will work toward their goal to \
                  </span>
                  ;<br />
                  <span className="text-zinc-400">Staff will </span>
                  <span className="text-yellow-200">\</span>
                  <span className="text-zinc-400">
                    {" "}
                    the necessary steps to ensure success.
                  </span>
                  <br />
                  <span className="text-zinc-400">
                    Progress will be monitored{" "}
                  </span>
                  <span className="text-yellow-200">\</span>
                  <span className="text-zinc-400">.</span>
                </div>
                <p className="text-xs text-white/85 italic">
                  Variable Sanitization: Logic encourages initials for
                  De-Identification.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-[#00ffcc]/40 pb-2 font-orbitron">
                  III. Dynamic Data Architecture
                </h3>
                <p className="text-sm text-white/95">
                  Several sections of the PCSP require an unbounded number of
                  entries — legal representatives, communication chart rows, and
                  important people with their activities. These are managed via
                  in-memory JavaScript arrays rendered to the DOM on each state
                  change, with full capture and restore on{" "}
                  <span className="font-mono text-[#00ffcc]">.pcsp</span> export
                  and import.
                </p>
                <div className="p-6 rounded-xl bg-black border border-[#00ffcc]/40 font-mono text-sm space-y-1">
                  <div>
                    <span className="text-purple-400">legalReps</span>
                    <span className="text-zinc-400"> = [] </span>
                    <span className="text-zinc-500">
                      // guardians, POA, custodians
                    </span>
                  </div>
                  <div>
                    <span className="text-purple-400">commChartRows</span>
                    <span className="text-zinc-400"> = [] </span>
                    <span className="text-zinc-500">
                      // behavior → meaning → response
                    </span>
                  </div>
                  <div>
                    <span className="text-purple-400">importantPeople</span>
                    <span className="text-zinc-400"> = [] </span>
                    <span className="text-zinc-500">
                      // person → relationship → activities[]
                    </span>
                  </div>
                  <div className="pt-2 text-zinc-500">
                    // all arrays serialize into .pcsp on export
                  </div>
                  <div className="text-zinc-500">
                    // and restore with full fidelity on import
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-[#00ffcc]/40 pb-2 font-orbitron">
                  IV. Output Pipeline
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20 text-center">
                    <Icon
                      icon="solar:printer-linear"
                      className="text-[#00ffcc] text-2xl mx-auto mb-2"
                    />
                    <span className="text-[#00ffcc] text-[13px] font-black uppercase block mb-2 font-orbitron">
                      Print / PDF
                    </span>
                    <p className="text-[12px] text-white/75">
                      Dedicated print stylesheet strips all UI chrome. Outputs a
                      clean, PCSP-formatted document ready for signature or
                      filing.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20 text-center">
                    <Icon
                      icon="solar:diskette-linear"
                      className="text-[#00ffcc] text-2xl mx-auto mb-2"
                    />
                    <span className="text-[#00ffcc] text-[13px] font-black uppercase block mb-2 font-orbitron">
                      .pcsp File
                    </span>
                    <p className="text-[12px] text-white/75">
                      Full plan state exported as a portable JSON-based file.
                      Auto-fills every field — including dynamic entries — on
                      re-import.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-[#00ffcc]/20 text-center">
                    <Icon
                      icon="solar:copy-linear"
                      className="text-[#00ffcc] text-2xl mx-auto mb-2"
                    />
                    <span className="text-[#00ffcc] text-[13px] font-black uppercase block mb-2 font-orbitron">
                      Clipboard
                    </span>
                    <p className="text-[12px] text-white/75">
                      One-click copy of the full narrative summary to paste
                      directly into CIMOR, MOEDIWEB, or any agency system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-white font-bold uppercase tracking-widest text-base border-b border-[#00ffcc]/40 pb-2 font-orbitron">
                  V. Deployment Strategy
                </h3>
                <p className="text-base text-white/95">
                  Hosted on the agency&apos;s{" "}
                  <span className="text-white font-bold">internal drive</span>.
                  It inherits existing Windows Active Directory permissions,
                  removing the need for a separate login system. Staff open the
                  file in any modern browser — no installation, no IT ticket, no
                  licensing cost.
                </p>
              </div>
            </div>
          </section>

          {/* ── 06 // CONCLUSION ── */}
          <section id="conclusion" className="pb-32">
            <div className="circuit-border p-12 bg-[#00ffcc]/5 rounded-2xl text-center border border-[#00ffcc]/20">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8 font-orbitron">
                <span className="text-[#00ffcc]/40">06 //</span> Conclusion
              </h2>
              <p className="text-xl font-space text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
                &quot;By leveraging a client-side JavaScript architecture, I
                provided the Marion County Department of Mental Health with a
                modern, high-speed drafting tool that satisfies the
                &apos;Security Rule&apos; of HIPAA. The tool covers all nine
                Missouri PCSP domains — including structured communication
                profiling, person-centered likes and dislikes, and a dynamic
                important people roster — without a single line of data ever
                leaving the user&apos;s machine. This project demonstrates my
                ability to build high-impact clinical tools within highly
                regulated environments where traditional cloud solutions are
                often prohibited.&quot;
              </p>
              <div className="flex justify-center gap-8">
                <a
                  href="https://dte-84.github.io/PCSP-assistant-PRO/"
                  target="_blank"
                  className="px-8 py-4 bg-[#00ffcc] text-[#0a0a0c] font-bold uppercase tracking-widest text-xs rounded hover:scale-105 transition-all"
                >
                  Launch Live App
                </a>
                <Link
                  href="/"
                  className="px-8 py-4 border border-[#00ffcc]/20 text-[#00ffcc] font-black uppercase tracking-widest text-xs rounded hover:bg-[#00ffcc]/5 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="py-12 border-t border-[#00ffcc]/20 text-center">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-40 text-[#00ffcc]">
          Portfolio 2025 // Marion County DMH Solution
        </p>
      </footer>
    </div>
  );
}
