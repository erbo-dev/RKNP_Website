"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "challenge", label: "Мәселе", href: "#challenge" },
  { id: "reveal", label: "Технология", href: "#reveal" },
  { id: "cascade", label: "4-Gate Каскад", href: "#cascade" },
  { id: "human", label: "Клиникалық зерттеу", href: "#human" },
  { id: "results", label: "Нәтижелер", href: "#results" },
  { id: "research", label: "Ғылым", href: "#research" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 220;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Precision Neuroscience Top Architecture Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050608]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.8)] py-3 sm:py-3.5"
            : "bg-[#050608]/70 backdrop-blur-xl border-b border-white/[0.05] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
          {/* 1. Surgical Monogram & Brandmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group shrink-0"
            aria-label="MIORA Home"
          >
            {/* Precision Micro Geometric Symbol */}
            <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/10">
              <span className="font-mono text-xs font-bold text-white tracking-widest group-hover:text-cyan-300 transition-colors">
                M
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-sans text-base sm:text-lg font-semibold tracking-[0.22em] text-white uppercase group-hover:text-neutral-200 transition-colors">
                MIORA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 font-medium">
                V18
              </span>
            </div>
          </a>

          {/* 2. Desktop Spaced High-Contrast Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative text-[13px] xl:text-sm font-medium tracking-tight whitespace-nowrap transition-colors duration-200 py-1 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#00e5ff]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Right Status & Action CTA */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            {/* Live telemetry status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wider">SIGNAL OK // 99.8%</span>
            </div>

            {/* Primary Action CTA */}
            <a
              href="#demo"
              className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white text-black font-sans text-xs font-semibold tracking-wide hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.18)] whitespace-nowrap"
            >
              <span>ДЕМО КӨРУ</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Full-Screen Frosted Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-28 pb-8 px-8 bg-[#050608]/98 backdrop-blur-2xl transition-all duration-300">
          <div className="flex flex-col gap-3 divide-y divide-white/[0.06]">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 pb-2">
              // Навигация бөлімдері
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 flex items-center justify-between font-sans text-lg tracking-tight transition-colors ${
                    isActive ? "text-cyan-400 font-semibold" : "text-neutral-200 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} className="text-neutral-500" />
                </a>
              );
            })}
          </div>

          {/* Mobile Footer Telemetry & Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
              <span>ПРОТОКОЛ: V18 OFFLINE</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-white text-black font-sans text-xs font-bold text-center tracking-wider hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              ИНТЕРАКТИВТІ ДЕМОНЫ АШУ
            </a>
          </div>
        </div>
      )}
    </>
  );
}
