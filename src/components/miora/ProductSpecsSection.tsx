"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Lock, Layers, Activity } from "lucide-react";

export default function ProductSpecsSection() {
  const specs = [
    {
      icon: Zap,
      value: "-16%",
      label: "Қателікті азайту",
      detail: "Шайнау кедергілері кезінде пайдаланушының бұйрығын бұрмаланбай тану дәлдігі.",
      badge: "НАҚТЫ ТИІМДІЛІК",
    },
    {
      icon: ShieldCheck,
      value: "0%",
      label: "Жалған команда қаупі",
      detail: "Дұрыс командаларды бұзып алатын қате түзетулерді толықтай болдырмау кепілдігі.",
      badge: "СЕНІМДІЛІК КЕПІЛІ",
    },
    {
      icon: Activity,
      value: "< 2.4 ms",
      label: "Өңдеу кідірісі",
      detail: "Адам ойлаған мезетте лезде іске асатын ультра-жылдам нейрондық реакция.",
      badge: "ЛЕЗДЕ ӘРЕКЕТ",
    },
  ];

  const features = [
    {
      icon: Layers,
      title: "1024-Арналы микро-қабықша",
      description: "Ми қыртысына нәзік жанасатын, тінге зиян келтірмейтін ультра-жұқа иілгіш био-полимерлі массив.",
      tag: "HARDWARE",
    },
    {
      icon: Lock,
      title: "100% Дербес Offline қорғаныс",
      description: "Деректер ешқандай бұлтқа немесе сыртқы интернетке шықпайды. Барлық есептеу чиптің өзінде орындалады.",
      tag: "PRIVACY",
    },
    {
      icon: Cpu,
      title: "Reversible Safety Cascade",
      description: "Кез келген түсініксіз ауытқу немесе күмән кезінде адамның бастапқы таңдауына автоматты қайта оралу.",
      tag: "ALGORITHM",
    },
    {
      icon: Zap,
      title: "Төмен энергия тұтыну",
      description: "Құрылғының қызып кетпеуін және тәулік бойы батарея қуатын үнемдеп жұмыс істеуін қамтамасыз ететін архитектура.",
      tag: "EFFICIENCY",
    },
  ];

  return (
    <section id="specs" className="py-28 px-6 md:px-12 bg-[#0c0e12] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <Cpu size={14} />
            <span>05 // Өнім сипаттамасы мен архитектурасы</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Терең технология. Абсолютті сенімділік.
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-light">
            MIORA — жай ғана алгоритм емес, ми сигналдарының табиғи ырғағын сыртқы механикалық кедергілерден қорғайтын жоғары технологиялық өнімдік платформа.
          </p>
        </div>

        {/* 3 Prominent Product Metric Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#050608] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-cyan-400 font-semibold">
                      {item.badge}
                    </span>
                    <Icon size={18} className="text-neutral-400" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-sans font-medium text-white tracking-tight my-4">
                    {item.value}
                  </div>
                  <div className="text-lg font-medium text-white mb-2">
                    {item.label}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Feature Architecture Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#050608]/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 tracking-widest">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
