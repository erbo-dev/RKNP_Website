"use client";

import React, { useState, useEffect } from "react";
import { Activity, Menu, X, ArrowUpRight, Cpu, Sparkles, ChevronRight } from "lucide-react";

interface NavItem {
  id: string;
  num: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "challenge", num: "01", label: "Мәселе", href: "#challenge" },
  { id: "reveal", num: "02", label: "Технология", href: "#reveal" },
  { id: "cascade", num: "03", label: "4 Шлюз", href: "#cascade" },
  { id: "demo", num: "04", label: "Симулятор", href: "#demo" },
  { id: "results", num: "05", label: "Нәтижелер", href: "#results" },
  { id: "research", num: "06", label: "Ғылым", href: "#research" },
  { id: "team", num: "07", label: "Авторлар", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

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
      {/* Floating Dynamic Island / Pill Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#07090e]/85 backdrop-blur-2xl border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.12)] py-2 px-3 sm:px-4"
              : "bg-[#07090e]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2.5 px-4 sm:px-5"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* 1. Monogram Brand Identity */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group pr-2"
              aria-label="MIORA Home"
            >
              {/* Surgical Precision Node Icon */}
              <div className="relative w-8 h-8 rounded-full border border-white/20 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover:border-[#00e5ff]/60 group-hover:bg-[#00e5ff]/10">
                <span className="font-mono text-xs font-bold text-white tracking-wider group-hover:text-[#00e5ff] transition-colors">
                  M
                </span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.22em] text-white uppercase group-hover:text-[#00e5ff] transition-colors">
                    MIORA
                  </span>
                  <span className="hidden md:inline-block px-1.5 py-0.2 text-[9px] font-mono tracking-widest text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded">
                    V18
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#757575] tracking-widest uppercase hidden lg:inline">
                  Neural Signal Integrity
                </span>
              </div>
            </a>

            {/* 2. Desktop Segmented Capsule Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.02] border border-white/[0.04]">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? "text-white bg-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] font-medium"
                        : "text-[#9ba3af] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    <span className="text-[10px] text-[#757575] opacity-75">{item.num}</span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* 3. Status Telemetry & Action CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Telemetry pill */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-black/40 text-[10px] font-mono text-[#9ba3af]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]" />
                </span>
                <span className="tracking-wider">LIVE // 99.8% SNR</span>
              </div>

              {/* Primary Precision Action CTA */}
              <a
                href="#demo"
                className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black font-mono text-xs font-semibold tracking-wider hover:bg-[#d7e2e9] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
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
                className="lg:hidden p-2 rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Full-Screen Frosted Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 bg-[#050608]/95 backdrop-blur-2xl transition-all duration-300">
          <div className="flex flex-col gap-2 divide-y divide-white/[0.06]">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#757575] pb-3">
              // Навигация бөлімдері
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 flex items-center justify-between font-mono text-sm tracking-wider transition-colors ${
                    isActive ? "text-[#00e5ff] font-semibold" : "text-[#d7e2e9] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#757575]">{item.num} //</span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-[#757575]" />
                </a>
              );
            })}
          </div>

          {/* Mobile Footer Telemetry & Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9ba3af] px-1">
              <span>ПРОТОКОЛ: V18 OFFLINE</span>
              <span className="text-[#00e5ff] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
                ONLINE
              </span>
            </div>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-white text-black font-mono text-xs font-bold text-center tracking-wider hover:bg-[#d7e2e9] transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              ИНТЕРАКТИВТІ ДЕМОНЫ АШУ
            </a>
          </div>
        </div>
      )}
    </>
  );
}
