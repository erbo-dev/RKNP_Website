import { PresetScenario, PresetScenarioId, SimulationInput } from "./types";

export const PRESET_SCENARIOS: Record<Exclude<PresetScenarioId, "custom">, PresetScenario> = {
  clean_signal: {
    id: "clean_signal",
    titleKz: "1. Таза сигнал",
    titleEn: "1. Clean Signal",
    descriptionKz: "Шайнау жоқ. Базалық декодер дұрыс жұмыс істейді, артық түзету жасалмайды.",
    descriptionEn: "No muscle noise. Baseline decoder operates nominally without false interventions.",
    state: {
      chewingActive: false,
      noiseLevel: 0,
      userProfile: "calibrated",
      selectedIntent: "left",
      protectionMode: "miora_cascade",
    },
  },
  noise_bypass: {
    id: "noise_bypass",
    titleKz: "2. ЭМГ Шуы (Қорғаныссыз / Bypass)",
    titleEn: "2. EMG Noise (Unprotected / Bypass)",
    descriptionKz: "Шайнау шуы күшті (70%), қорғаныс өшірулі. Базалық декодер қате бұйрық береді.",
    descriptionEn: "High EMG noise (70%) with protection disabled. Baseline decoder misfires.",
    state: {
      chewingActive: true,
      noiseLevel: 70,
      userProfile: "calibrated",
      selectedIntent: "left",
      protectionMode: "baseline_bypass",
    },
  },
  noise_protected: {
    id: "noise_protected",
    titleKz: "3. ЭМГ Шуы (MIORA Қорғауымен)",
    titleEn: "3. EMG Noise (MIORA Protected)",
    descriptionKz: "Шайнау шуы кезінде MIORA 4 шлюзі қатар тексеріліп, ниетті қорғап қалады.",
    descriptionEn: "EMG noise active with MIORA. The 4 gates verify and securely preserve intent.",
    state: {
      chewingActive: true,
      noiseLevel: 70,
      userProfile: "calibrated",
      selectedIntent: "left",
      protectionMode: "miora_cascade",
    },
  },
};

export const DEFAULT_SIMULATION_STATE: SimulationInput = {
  chewingActive: true,
  noiseLevel: 70,
  userProfile: "calibrated",
  selectedIntent: "left",
  protectionMode: "miora_cascade",
};

/**
 * Checks if current input strictly matches one of the preset scenarios.
 */
export function identifyScenario(input: SimulationInput): PresetScenarioId {
  const presets = Object.values(PRESET_SCENARIOS);
  for (const preset of presets) {
    const s = preset.state;
    if (
      s.chewingActive === input.chewingActive &&
      (!input.chewingActive || s.noiseLevel === input.noiseLevel) &&
      s.userProfile === input.userProfile &&
      s.selectedIntent === input.selectedIntent &&
      s.protectionMode === input.protectionMode
    ) {
      return preset.id;
    }
  }
  return "custom";
}

