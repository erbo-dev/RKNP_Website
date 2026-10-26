"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Shield, Cpu, Activity, ExternalLink, Menu, X } from "lucide-react";

export default function PrecisionBaseline() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] text-[#d7e2e9] selection:bg-[#d7e2e9]/20 selection:text-white">
      {/* 1. Header & Navigation (Fixed backdrop blur) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050608]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-white/20 bg-white/5 flex items-center justify-center font-mono text-xs font-bold text-white tracking-widest">
              P
            </div>
            <span className="font-mono text-sm tracking-[0.2em] font-semibold text-white uppercase">
              Precision
            </span>
            <span className="text-xs font-mono text-[#757575] border-l border-white/15 pl-3 hidden sm:inline">
              Baseline Blueprint
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-[#9ba3af]">
            <a href="#hero" className="hover:text-white transition-colors">
              Technology
            </a>
            <a href="#reveal" className="hover:text-white transition-colors">
              Layer 7
            </a>
            <a href="#challenge" className="hover:text-white transition-colors">
              Clinical
            </a>
            <a href="#impact" className="hover:text-white transition-colors">
              Impact
            </a>
            <a href="#news" className="hover:text-white transition-colors">
              News
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-mono tracking-wider text-white hover:bg-white hover:text-black transition-all">
              Partner With Us
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0c0e12] border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-mono text-xs tracking-wider">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#9ba3af] hover:text-white">
              Technology
            </a>
            <a href="#reveal" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#9ba3af] hover:text-white">
              Layer 7
            </a>
            <a href="#challenge" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#9ba3af] hover:text-white">
              Clinical
            </a>
            <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#9ba3af] hover:text-white">
              Impact
            </a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)} className="py-2 text-[#9ba3af] hover:text-white">
              News
            </a>
            <button className="mt-2 w-full py-3 rounded-full border border-white/20 text-center text-white">
              Partner With Us
            </button>
          </div>
        )}
      </header>

      {/* 2. Group 0: Hero Section */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono tracking-widest text-[#9ba3af] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          The future of cortical interfaces
        </div>

        <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] leading-[1.05] text-white mb-8">
          The brain-computer interface that will change everything
        </h1>

        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#9ba3af] font-light leading-relaxed mb-12">
          A direct, high-bandwidth connection between the human brain and the digital world, engineered to restore physical agency and communication.
        </p>

        {/* Central 3D Cortical Hardware Wireframe Placeholder */}
        <div className="relative w-full max-w-4xl h-72 sm:h-96 my-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,226,233,0.08)_0%,transparent_70%)]" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/25 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-white/40" />
            </div>
            <div className="font-mono text-xs tracking-widest text-[#757575] uppercase">
              [LAYER 7 CORTICAL INTERFACE // 1,024 MICRO-ELECTRODES]
            </div>
          </div>
          <div className="absolute bottom-4 left-6 right-6 flex justify-between font-mono text-[10px] text-[#757575]">
            <span>SUB-DURAL SURFACE ARRAY</span>
            <span>ZERO INTRACEREBRAL PENETRATION</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#757575] tracking-widest uppercase">
          <span>Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* 3. Group 1: Reveal Section ("Introducing") */}
      <section
        id="reveal"
        className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10"
      >
        <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
          Introducing
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white max-w-4xl leading-tight mb-12">
          A medical-grade neural interface thinner than a human hair, safely deployed without damaging brain tissue.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#0c0e12]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-4 tracking-wider">
              01 // Conformable Micro-Array
            </div>
            <h3 className="text-xl sm:text-2xl text-white font-medium mb-4">
              Flexible Polyimide Substrate
            </h3>
            <p className="text-[#9ba3af] text-sm sm:text-base leading-relaxed">
              Precision’s Layer 7 conforms smoothly across cortical gyri and sulci, maintaining continuous electrode contact without piercing the delicate parenchymal surface.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#0c0e12]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-4 tracking-wider">
              02 // Reversible Implantation
            </div>
            <h3 className="text-xl sm:text-2xl text-white font-medium mb-4">
              Cranial Slit Insertion
            </h3>
            <p className="text-[#9ba3af] text-sm sm:text-base leading-relaxed">
              Designed for minimally invasive insertion through a sub-millimeter cranial opening, reducing surgical risks and preserving the integrity of the dura mater.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Group 2: The Problem & Current State */}
      <section
        id="challenge"
        className="py-28 px-6 md:px-12 bg-[#0c0e12] border-t border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
            Current Clinical Paradigm
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-white max-w-3xl leading-snug mb-8">
            Today, our system is designed to help people with paralysis operate digital devices using only their thoughts.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
            <div className="p-8 rounded-xl border border-white/10 bg-[#050608]">
              <div className="text-4xl font-light text-white mb-2">38.5%</div>
              <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-4">
                Baseline Decoder Error
              </div>
              <p className="text-sm text-[#9ba3af] leading-relaxed">
                Conventional signal interpreters suffer significant accuracy drops when confronted by sudden physiological interference.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#050608]">
              <div className="text-4xl font-light text-white mb-2">High Noise</div>
              <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-4">
                Electromyographic Artifacts
              </div>
              <p className="text-sm text-[#9ba3af] leading-relaxed">
                Chewing, jaw clenching, and cranial muscle activity produce electrical bursts that contaminate delicate cortical frequencies.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#050608]">
              <div className="text-4xl font-light text-white mb-2">Safety Gate</div>
              <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-4">
                False Correction Prevention
              </div>
              <p className="text-sm text-[#9ba3af] leading-relaxed">
                Arbitrary filter modifications frequently induce harmful command overrides on already correct baseline outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Group 3: Core Innovation & Editorial Quote */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-6">
            Human Connection
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight mb-12">
            Restoring independence and connection for millions
          </h2>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/90 leading-relaxed border-y border-white/10 py-12 my-12">
            “I want innovation that is also inclusive and dignifying.”
          </blockquote>
          <p className="text-[#9ba3af] text-sm sm:text-base font-mono uppercase tracking-widest text-[#757575]">
            Precision Clinical Research Principle
          </p>
        </div>
      </section>

      {/* 6. Group 4: Clinical Expansion & Partners */}
      <section className="py-28 px-6 md:px-12 bg-[#0c0e12] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
              Scientific Trajectory
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-white leading-tight mb-6">
              Soon, it will expand to more regions of the brain—enabling new possibilities for treatment and discovery.
            </h2>
            <p className="text-[#9ba3af] text-base leading-relaxed mb-8">
              From motor cortex reconstruction to speech synthesis and sensory restoration, high-density cortical mapping unlocks unprecedented clinical resolution.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-white">
              <span>EXPLORE CLINICAL PROTOCOLS</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs tracking-widest text-[#757575] uppercase mb-8">
              CLINICAL RESEARCH NETWORK
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm font-mono text-[#9ba3af]">
              <div className="p-4 rounded border border-white/5 bg-white/[0.02]">
                Mount Sinai Health System
              </div>
              <div className="p-4 rounded border border-white/5 bg-white/[0.02]">
                Penn Medicine
              </div>
              <div className="p-4 rounded border border-white/5 bg-white/[0.02]">
                West Virginia Rockefeller
              </div>
              <div className="p-4 rounded border border-white/5 bg-white/[0.02]">
                Academic Medical Centers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Group 5: Quantitative Milestones */}
      <section id="impact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
            Verified Benchmarks
          </div>
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight">
            Built for human impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12] text-center">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">1,024</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider">
              Electrodes / Array
            </div>
          </div>
          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12] text-center">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">0 mm</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider">
              Brain Penetration
            </div>
          </div>
          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12] text-center">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">&lt; 15 µm</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider">
              Substrate Thinness
            </div>
          </div>
          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12] text-center">
            <div className="text-4xl sm:text-5xl font-light text-white mb-2">FDA</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider">
              Breakthrough Device
            </div>
          </div>
        </div>
      </section>

      {/* 8. Group 6: Featured News */}
      <section id="news" className="py-28 px-6 md:px-12 bg-[#0c0e12] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
                Publications & Updates
              </div>
              <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
                Featured News
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-white/10 bg-[#050608] flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] text-[#757575] uppercase mb-3">Science & Clinical</div>
                <h3 className="text-lg text-white font-medium mb-3">
                  Human clinical study demonstrates high-resolution cortical mapping with zero micro-damage.
                </h3>
              </div>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white">
                <span>Read paper</span>
                <ExternalLink size={12} />
              </div>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#050608] flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] text-[#757575] uppercase mb-3">Press Release</div>
                <h3 className="text-lg text-white font-medium mb-3">
                  Investors and neurosurgeons back non-penetrating cortical interface architectures.
                </h3>
              </div>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white">
                <span>Read press</span>
                <ExternalLink size={12} />
              </div>
            </div>

            <div className="p-8 rounded-xl border border-white/10 bg-[#050608] flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] text-[#757575] uppercase mb-3">Technology</div>
                <h3 className="text-lg text-white font-medium mb-3">
                  Scaling electrode counts to tens of thousands on conformal sub-dural thin films.
                </h3>
              </div>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs text-white">
                <span>Read article</span>
                <ExternalLink size={12} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10 bg-[#050608] text-xs font-mono text-[#757575]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="text-white font-semibold text-sm mb-2">PRECISION NEUROSCIENCE STRUCTURAL BASELINE</div>
            <p>Strict architectural baseline reproduced for MIORA transformation.</p>
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Research Disclaimer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
