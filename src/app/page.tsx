"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import BgAnimation from "../components/BgAnimation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import VersionSelector from "../components/VersionSelector";
import ContactModal from "../components/ContactModal";
import ScrollNav from "../components/ScrollNav";
import { Icon } from "@iconify/react";

export default function Home() {
        const [theme, setTheme] = useState("blue");
        const [isGatewayOpen, setIsGatewayOpen] = useState(false);
        const [isContactOpen, setIsContactOpen] = useState(false);

        const toggleGateway = () => setIsGatewayOpen(!isGatewayOpen);

        const toggleTheme = () => {
                const newTheme = theme === "blue" ? "yellow" : "blue";
                setTheme(newTheme);
                document.documentElement.setAttribute("data-theme", newTheme === "blue" ? "default" : "yellow");
        };

        useEffect(() => {
                document.documentElement.setAttribute("data-theme", "default");
        }, []);

        return (
                <div className="min-h-screen relative overflow-hidden selection:bg-accent/30 font-space selection:text-white">
                        {/* Background Layer */}
                        <div className="fixed inset-0 bg-black -z-20" />
                        <BgAnimation />
                        <ScrollNav />

                        {/* HIGH-FIDELITY NAVBAR */}
                        <Navbar onContactClick={() => setIsContactOpen(true)} theme={theme} onThemeToggle={toggleTheme} />

                        <main id="main-content" className="relative z-10 bg-transparent">
                                <Hero />
                                
                                {/* Behavioral Interface Preview */}
                                <section className="pb-32 px-8 max-w-6xl mx-auto -mt-10 relative z-20">
                                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-[32px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative group">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                                <video 
                                                        autoPlay 
                                                        loop 
                                                        muted 
                                                        playsInline 
                                                        className="w-full h-auto rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                                                >
                                                        <source src="/pulse.mp4" type="video/mp4" />
                                                </video>
                                                
                                                {/* Interface Deco */}
                                                <div className="absolute top-6 left-6 flex gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                                                        <div className="w-2 h-2 rounded-full bg-amber-500/40"></div>
                                                        <div className="w-2 h-2 rounded-full bg-accent/40"></div>
                                                </div>
                                                <div className="absolute bottom-6 right-8 font-mono text-[8px] uppercase tracking-[0.4em] text-white/20 italic">Behavioral Stream Active</div>
                                        </div>
                                </section>

                                <About />
                                <Projects />
                        </main>

                        <Footer onGatewayClick={toggleGateway} onContactClick={() => setIsContactOpen(true)} />

                        <VersionSelector isOpen={isGatewayOpen} onClose={toggleGateway} />

                        {isContactOpen && (
                                <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
                        )}
                </div>
        );
}
