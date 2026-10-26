"use client";

import React, { useState, useEffect } from "react";
import { Shield, Activity, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050608]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg border border-brand-secondary/40 bg-brand-secondary/10 flex items-center justify-center text-brand-secondary font-mono text-sm font-bold shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:border-brand-secondary transition-all">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-[0.25em] font-semibold text-white uppercase group-hover:text-brand-secondary transition-colors">
              MIORA
            </span>
            <span className="text-[10px] font-mono text-[#757575] tracking-wider hidden sm:inline">
              Neural Signal Integrity
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-[#9ba3af]">
          <a href="#problem" className="hover:text-white transition-colors">
            Мәселе
          </a>
          <a href="#reveal" className="hover:text-white transition-colors">
            Технология
          </a>
          <a href="#cascade" className="hover:text-white transition-colors">
            4 Шлюз
          </a>
          <a href="#demo" className="hover:text-white transition-colors">
            Интерактивті Демо
          </a>
          <a href="#results" className="hover:text-white transition-colors">
            Нәтижелер
          </a>
          <a href="#research" className="hover:text-white transition-colors">
            Зерттеу
          </a>
          <a href="#team" className="hover:text-white transition-colors">
            Авторлар
          </a>
        </nav>

        {/* Actions & Prototype status */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono text-[#9ba3af]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
            <span>V18 PROTOTYPE // OFFLINE</span>
          </div>

          <a
            href="#demo"
            className="px-4 py-2 rounded-full border border-brand-secondary/40 bg-brand-secondary/10 text-xs font-mono tracking-wider text-brand-secondary hover:bg-brand-secondary hover:text-black transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
          >
            <span>Демонстрация</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 font-mono text-xs tracking-wider">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white border-b border-white/5"
          >
            01 // Мәселе (ЭМГ шуы)
          </a>
          <a
            href="#reveal"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white border-b border-white/5"
          >
            02 // Технология (Қорғау деңгейі)
          </a>
          <a
            href="#cascade"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white border-b border-white/5"
          >
            03 // 4 Қорғаныс шлюзі
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white border-b border-white/5"
          >
            04 // Интерактивті симулятор
          </a>
          <a
            href="#results"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white border-b border-white/5"
          >
            05 // V18 Эксперименттік нәтижелер
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white border-b border-white/5"
          >
            06 // Әдіснама және деректер
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9ba3af] hover:text-white"
          >
            07 // NIS Almaty-Nauryzbay тобы
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-full bg-brand-secondary text-black text-center font-bold"
          >
            Демо көру
          </a>
        </div>
      )}
    </header>
  );
}
