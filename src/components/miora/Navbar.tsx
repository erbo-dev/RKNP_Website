"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, ChevronRight, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: "challenge", label: t.nav.challenge, href: "#challenge" },
    { id: "cortex", label: t.nav.cortex, href: "#cortex" },
    { id: "cascade", label: t.nav.cascade, href: "#cascade" },
    { id: "demo", label: t.nav.demo, href: "#demo" },
    { id: "research", label: t.nav.research, href: "#research" },
  ];

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navItems.map((item) => ({
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
  }, [navItems]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050608]/92 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.85)] py-3 sm:py-3.5"
            : "bg-[#050608]/75 backdrop-blur-xl border-b border-white/[0.05] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between gap-4 sm:gap-6">
          {/* Brandmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            aria-label="MIORA Home"
          >
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative text-[13px] xl:text-sm font-medium tracking-tight whitespace-nowrap transition-colors duration-200 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded ${
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

          {/* Right Status, Language Toggle & CTA */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Scientific Status Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="tracking-wider">V18 // RESEARCH PROTOTYPE</span>
            </div>

            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-full border border-white/15 bg-white/[0.04] text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLang("kk")}
                aria-label={t.nav.langKzAria}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "kk"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                KZ
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-label={t.nav.langEnAria}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "en"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary Action CTA (hidden on narrow mobile screens to leave space for language toggle & hamburger) */}
            <a
              href="#demo"
              className="group relative hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-white text-black font-sans text-xs font-semibold tracking-wide hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.18)] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <span>{t.nav.tryDemo}</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
              aria-label={t.nav.menuAria}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.navTitle}
          className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-28 pb-8 px-8 bg-[#050608]/98 backdrop-blur-2xl transition-all duration-300"
        >
          <div className="flex flex-col gap-3 divide-y divide-white/[0.06]">
            <div className="flex items-center justify-between pb-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                // {t.nav.navTitle}
              </span>
              {/* Language toggle inside mobile menu */}
              <div className="flex items-center p-0.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setLang("kk")}
                  className={`px-3 py-1 rounded-full ${lang === "kk" ? "bg-white text-black font-bold" : "text-neutral-400"}`}
                >
                  KZ
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full ${lang === "en" ? "bg-white text-black font-bold" : "text-neutral-400"}`}
                >
                  EN
                </button>
              </div>
            </div>

            {navItems.map((item) => {
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
              <span>PROTOCOL: OFFLINE-V18</span>
              <span className="text-cyan-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                RESEARCH PROTOTYPE
              </span>
            </div>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-white text-black font-sans text-xs font-bold text-center tracking-wider hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              {t.nav.tryDemo}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
