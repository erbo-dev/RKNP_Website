"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Lock, Layers, Activity, ArrowUpRight } from "lucide-react";

export default function ProductSpecsSection() {
  const specs = [
    {
      icon: Zap,
      value: "-16%",
      unit: "DELTA",
      label: "Қателікті азайту",
      detail: "Шайнау кедергілері кезінде пайдаланушының қозғалыс ниетін бұрмаланбай тану дәлдігі.",
      badge: "VERIFIED RECOVERY",
      code: "METRIC_01 // INTENT_FIDELITY",
    },
    {
      icon: ShieldCheck,
      value: "0%",
      unit: "HARM",
      label: "Жалған команда қаупі",
      detail: "Дұрыс командаларды бұзып алатын қате түзетулерді (Weak HARM) толықтай болдырмау кепілдігі.",
      badge: "SAFETY GUARANTEE",
      code: "METRIC_02 // ZERO_REGRET",
    },
    {
      icon: Activity,
      value: "< 2.4",
      unit: "MS",
      label: "Өңдеу кідірісі",
      detail: "Адам ойлаған мезетте чип деңгейінде іске асатын ультра-жылдам нейрондық реакция.",
      badge: "REAL-TIME EDGE",
      code: "METRIC_03 // LATENCY_CEILING",
    },
  ];

  const features = [
    {
      icon: Layers,
      title: "1024-Арналы микро-қабықша",
      description: "Ми қыртысына нәзік жанасатын, тінге зиян келтірмейтін ультра-жұқа иілгіш био-полимерлі массив.",
      tag: "HARDWARE ARRAY",
      index: "01",
    },
    {
      icon: Lock,
      title: "100% Дербес Offline қорғаныс",
      description: "Деректер ешқандай бұлтқа немесе сыртқы интернетке шықпайды. Барлық есептеу чиптің өзінде орындалады.",
      tag: "AIR-GAPPED PRIVACY",
      index: "02",
    },
    {
      icon: Cpu,
      title: "Reversible Safety Cascade",
      description: "Кез келген түсініксіз ауытқу немесе күмән кезінде адамның бастапқы таңдауына автоматты қайта оралу.",
      tag: "ALGORITHM CORE",
      index: "03",
    },
    {
      icon: Zap,
      title: "Ультра-төмен энергия тұтыну",
      description: "Құрылғының қызып кетпеуін және тәулік бойы батарея қуатын үнемдеп жұмыс істеуін қамтамасыз етеді.",
      tag: "THERMAL EFFICIENCY",
      index: "04",
    },
  ];

  return (
    <section id="specs" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <Cpu size={14} className="animate-pulse" />
            <span>06 // Өнім сипаттамасы мен архитектурасы</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6">
            Терең технология.{" "}
            <span className="font-serif italic text-white/95 font-normal">
              Абсолютті сенімділік.
            </span>
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-light">
            MIORA — жай ғана алгоритм емес, ми сигналдарының табиғи ырғағын сыртқы механикалық кедергілерден қорғайтын жоғары технологиялық өнімдік платформа.
          </p>
        </div>

        {/* Continuous Swiss Performance Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-20">
          {specs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400">
                      {item.badge}
                    </span>
                    <Icon size={18} className="text-neutral-500" />
                  </div>

                  <div className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase mb-1">
                    {item.code}
                  </div>

                  <div className="flex items-baseline gap-2 my-4">
                    <span className="text-5xl sm:text-6xl font-light text-white tracking-tight">
                      {item.value}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      {item.unit}
                    </span>
                  </div>

                  <div className="text-lg font-normal text-white mb-2">
                    {item.label}
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Feature Architecture Pillars - Unified Continuous Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-neutral-500">
                      /{feat.index}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 tracking-widest">
                      {feat.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-lg font-normal text-white mb-2 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
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
