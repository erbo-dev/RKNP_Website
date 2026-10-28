"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu, Lock, Layers, Activity } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProductSpecsSection() {
  const { lang, t } = useLanguage();

  const specs = lang === "kk" ? [
    {
      icon: Zap,
      value: "-6.1",
      unit: "P.P.",
      label: "Қателікті азайту (Error Reduction)",
      detail: "Шайнау кедергісі кезінде орташа декодер қателігі 38.5%-дан 32.4%-ға дейін төмендеді (~16% салыстырмалы жақсару).",
      badge: "VERIFIED RESULT",
      code: "METRIC_01 // INTENT_FIDELITY",
    },
    {
      icon: ShieldCheck,
      value: "3.9%",
      unit: "HARM",
      label: "Қате түзету деңгейі (Weak HARM)",
      detail: "Базалық жүйенің 4.7% қате түзету деңгейі MIORA каскады арқылы 3.9%-ға дейін азайтылды (-0.8 п.п. зиянды төмендету).",
      badge: "SAFETY BARRIER",
      code: "METRIC_02 // HARM_REDUCTION",
    },
    {
      icon: Activity,
      value: "< 3",
      unit: "MS",
      label: "Алгоритмдік кідіріс (Compute Overhead)",
      detail: "Каскадты шлюздердің шешім қабылдауы әр 250 Гц сигнал терезесінде 3 миллисекундтан аз уақытта есептеледі.",
      badge: "EDGE EFFICIENCY",
      code: "METRIC_03 // LATENCY_CEILING",
    },
  ] : [
    {
      icon: Zap,
      value: "-6.1",
      unit: "P.P.",
      label: "Mean Error Rate Reduction",
      detail: "Under semi-synthetic chewing EMG contamination, average error rate dropped from 38.5% to 32.4% (~15.8% relative reduction).",
      badge: "VERIFIED RESULT",
      code: "METRIC_01 // INTENT_FIDELITY",
    },
    {
      icon: ShieldCheck,
      value: "3.9%",
      unit: "HARM",
      label: "Weak HARM Rate (Down from 4.7%)",
      detail: "Preserving baseline commands on gate rejection prevented unnecessary overrides, reducing false interventions by 0.8 percentage points.",
      badge: "SAFETY BARRIER",
      code: "METRIC_02 // HARM_REDUCTION",
    },
    {
      icon: Activity,
      value: "< 3",
      unit: "MS",
      label: "Algorithmic Compute Overhead",
      detail: "The 4-gate verification cascade computes in under 3 milliseconds per 250 Hz window, introducing negligible computational latency.",
      badge: "EDGE EFFICIENCY",
      code: "METRIC_03 // LATENCY_CEILING",
    },
  ];

  const features = lang === "kk" ? [
    {
      icon: Layers,
      title: "4-Арналы сенсомоторлық монтаж",
      description: "Моторлық қыртыс (C3, Cz, C4) пен самай каналын бақылайтын 250 S/s, 24-bit ADC сандық архитектурасы.",
      tag: "V18 PROTOCOL",
      index: "01",
    },
    {
      icon: Lock,
      title: "100% Дербес Offline өңдеу",
      description: "Барлық математикалық есептеулер оқшауланған ортада орындалады, сыртқы бұлтқа немесе желіге тәуелсіз.",
      tag: "AIR-GAPPED PRIVACY",
      index: "02",
    },
    {
      icon: Cpu,
      title: "Reversible Safety Cascade",
      description: "Кез келген белгісіздік кезінде адамның алғашқы ниетін сақтайтын қатаң 4 деңгейлі математикалық сүзгі.",
      tag: "ALGORITHM CORE",
      index: "03",
    },
    {
      icon: Zap,
      title: "MIORA-2 Болашақ аппараттық жоспар",
      description: "Келесі буын нақты уақыттағы импланттар үшін 1024 арналы микро-қабықша мен < 2.4 мс аппараттық кідіріс мақсатталған.",
      tag: "FUTURE ROADMAP",
      index: "04",
    },
  ] : [
    {
      icon: Layers,
      title: "4-Channel Sensorimotor Montage",
      description: "Precision 250 S/s, 24-bit ADC acquisition centered on primary motor channels (C3, Cz, C4) and temporal reference.",
      tag: "V18 PROTOCOL",
      index: "01",
    },
    {
      icon: Lock,
      title: "100% On-Device Offline Processing",
      description: "All DSP filtering and matrix operations compute locally in an air-gapped pipeline without external cloud dependencies.",
      tag: "AIR-GAPPED PRIVACY",
      index: "02",
    },
    {
      icon: Cpu,
      title: "Reversible Safety Cascade",
      description: "Strict 4-tier mathematical validation that safely defaults to baseline preservation whenever doubt arises.",
      tag: "ALGORITHM CORE",
      index: "03",
    },
    {
      icon: Zap,
      title: "MIORA-2 Next-Gen Hardware Roadmap",
      description: "Future engineering trajectory targeting a 1024-channel micro-mesh and sub-2.4ms hardware latency for real-time neuro-prosthetics.",
      tag: "FUTURE ROADMAP",
      index: "04",
    },
  ];

  return (
    <section id="specs" aria-labelledby="specs-heading" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <Cpu size={14} className="animate-pulse" />
            <span>{t.specs.kicker}</span>
          </div>
          <h2 id="specs-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6">
            {t.specs.headline} {t.specs.headlineEmphasis}.
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-light">
            {t.specs.description}
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
                    <span className="text-[10px] font-mono text-neutral-400 tracking-widest">
                      {feat.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-lg font-normal text-white mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
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
