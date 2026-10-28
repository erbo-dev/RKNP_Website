"use client";

import React, { useState, useMemo } from "react";
import { ShieldCheck, ChevronDown, ChevronUp, CheckCircle2, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import GateFlow from "@/components/miora/GateFlow";
import { computeMioraDecision } from "@/lib/miora/simulation";
import { PRESET_SCENARIOS } from "@/lib/miora/scenarios";
import { PresetScenarioId } from "@/lib/miora/types";

export default function CascadeSection() {
  const { lang, t } = useLanguage();
  const [activeScenarioId, setActiveScenarioId] = useState<Exclude<PresetScenarioId, "custom">>("noise_protected");
  const [isRulesExpanded, setIsRulesExpanded] = useState<boolean>(false);

  const scenarioState = useMemo(() => {
    return PRESET_SCENARIOS[activeScenarioId].state;
  }, [activeScenarioId]);

  const simulationResult = useMemo(() => {
    return computeMioraDecision(scenarioState);
  }, [scenarioState]);

  return (
    <section id="cascade" aria-labelledby="cascade-heading" className="py-24 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Narrative Introduction */}
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <ShieldCheck size={14} className="animate-pulse" />
            <span>{t.cascade.kicker}</span>
          </div>
          <h2 id="cascade-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-4">
            {t.cascade.headline} {t.cascade.headlineEmphasis}.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
            {t.cascade.description}
          </p>
        </div>

        {/* The One Expressive Sequential Circuit Route (Input ── G1 ── G2 ── G3 ── G4 ── Decision) */}
        <div>
          <GateFlow
            result={simulationResult}
            protectionMode={scenarioState.protectionMode}
            activeScenarioId={activeScenarioId}
            onSelectScenario={setActiveScenarioId}
            showScenarioSelector={true}
          />
        </div>

        {/* Optional Collapsible In-Depth Decision Rules (Accessible without visual clutter) */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setIsRulesExpanded(!isRulesExpanded)}
            className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-cyan-400 transition-colors cursor-pointer py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {isRulesExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>
              {isRulesExpanded
                ? lang === "kk"
                  ? "Қосымша түсіндірмені жинау"
                  : "Hide Detailed Bifurcation Breakdown"
                : lang === "kk"
                ? "Шешім қабылдаудың екі жақты ережесін ашу"
                : "View In-Depth Bifurcation Rules"}
            </span>
          </button>

          {isRulesExpanded && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
              {/* Outcome 1: All 4 Pass */}
              <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/15 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
                    <CheckCircle2 size={15} />
                    <span>{t.cascade.passOutcomeTitle}</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    {t.cascade.passOutcomeDesc}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-emerald-500/20 font-mono text-[11px] text-emerald-300 flex items-center justify-between">
                  <span>Gate 1 ∧ Gate 2 ∧ Gate 3 ∧ Gate 4</span>
                  <span className="font-bold">→ OVERRIDE</span>
                </div>
              </div>

              {/* Outcome 2: Any Fail */}
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-neutral-300 font-mono text-xs uppercase tracking-wider mb-2">
                    <ShieldAlert size={15} className="text-amber-400" />
                    <span>{t.cascade.blockOutcomeTitle}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {t.cascade.blockOutcomeDesc}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] font-mono text-[11px] text-neutral-400 flex items-center justify-between">
                  <span>¬(Gate 1 ∧ Gate 2 ∧ Gate 3 ∧ Gate 4)</span>
                  <span className="font-semibold text-white">→ PRESERVE</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
