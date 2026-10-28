# MIORA Technical Redesign & Implementation Report

## 1. Executive Summary

This document details the engineering and design overhaul of the **MIORA** neurotechnology research website. MIORA is an experimental brain-computer interface (BCI) decision-protection cascade designed to safeguard human cortical intentions against high-amplitude electromyographic (EMG) chewing artifacts.

The overhaul elevates the site from an initial prototype to a research-grade, deep-tech digital platform benchmarked against modern standards (Linear, Science.xyz).

---

## 2. Architecture Overview

### 2.1 File & Module Structure
```
d:/RKNP_Website/
├── src/
│   ├── app/
│   │   ├── globals.css              # Semantic dark palette, typography, reduced motion tokens
│   │   ├── layout.tsx               # Root layout wrapped in LanguageProvider with suppressHydrationWarning
│   │   └── page.tsx                 # Single page application structure (8 core sequential sections)
│   ├── components/
│   │   ├── StepPlayer.tsx           # Accessible interactive step player with two-way activeStep binding
│   │   ├── ImageCompare.tsx         # Before/after slider visualizer with touch and keyboard support
│   │   └── miora/
│   │       ├── Navbar.tsx           # Accessible fixed header with language switcher (KZ/EN) and mobile drawer
│   │       ├── HeroSection.tsx      # Clean monumental H1 with Newsreader editorial serif accent & telemetry
│   │       ├── ProblemSection.tsx   # EMG vs EEG explanation with interactive StepPlayer and ImageCompare
│   │       ├── IntroducingSection.tsx# Algorithmic decision verification pipeline & 3 core pillars
│   │       ├── NeuralCortex3D.tsx   # Titanium PBR 3D anatomical viewer with offscreen IntersectionObserver
│   │       ├── CascadeSection.tsx   # 4-gate matrix with explicit 2-way decision bifurcation visualizer
│   │       ├── InteractiveDemo.tsx  # Pure simulation workbench with 3 presets & bypass comparison toggle
│   │       ├── ProductSpecsSection.tsx # Grounded research metrics (-6.1 p.p., 3.9% HARM) & architecture
│   │       ├── ResearchSection.tsx  # Open cohorts (BCI IV-2a), physiological noise & MIORA-2 roadmap
│   │       └── TeamFooter.tsx       # Verified authors, supervisor Kalima Qabylbek, NIS, & regulatory disclaimer
│   └── lib/
│       ├── i18n/
│       │   ├── translations.ts      # Complete typed bilingual dictionary (Kazakh primary, English secondary)
│       │   └── LanguageContext.tsx  # Client context with localStorage sync & SSR hydration guard
│       └── miora/
│           ├── types.ts             # Strict TypeScript models for inputs, gates, decoders & scenarios
│           ├── simulation.ts        # Pure, deterministic simulation logic verifying 13 invariants
│           └── scenarios.ts         # Fixed presets (clean_signal, noise_bypass, noise_protected)
├── scripts/
│   ├── test_simulation.py           # Unit test suite verifying all 13 mathematical invariants
│   ├── test_runner.py               # Comprehensive multi-viewport QA & browser test harness
│   └── capture_after_shots.py       # Playwright automated screenshot capture
└── docs/
    └── redesign/
        ├── content-evidence.md      # Ground truth metrics audit & contradiction resolutions
        ├── implementation.md        # Technical architecture & component documentation
        ├── qa.md                    # Verification matrix, browser results & before/after evidence
        └── screenshots/             # 16 baseline screenshots & 18 after-redesign screenshots
```

---

## 3. Core Subsystems

### 3.1 Pure Mathematical Simulation Engine (`src/lib/miora/simulation.ts`)
The previous simulator used ad-hoc values and disconnected client state. We extracted a pure, deterministic function `computeMioraDecision(input: SimulationInput): SimulationResult`.

Key mathematical invariants guaranteed:
1. **Effective Noise Calculation**: When `chewingActive === false`, `effectiveNoise = 0` regardless of slider value.
2. **Noise Gating Boundary**: Gate 2 activates strictly at `effectiveNoise >= 35%`.
3. **Dynamic Margin Delta**: Calculated in percentage points as `expert.confidence - baseline.confidence`. Gate 4 passes when `marginDelta >= 15 p.p.`.
4. **Zero-Regret Default**: If any gate fails (Gate 1, 2, 3, or 4), `decisionSource` defaults to `baseline_preserved` with `finalCommand = baselinePrediction.command`.
5. **Standard BCI Bypass Mode**: When `protectionMode === "baseline_bypass"`, the 4 gates are ignored and the corrupted baseline command executes directly, demonstrating why unshielded decoders fail.
6. **Consistent Command Mapping**: Correctly maps `left`, `right`, and `rest` without nonsensical permutations.

Unit test validation: Verified via `scripts/test_simulation.py` with 13/13 passing invariants.

### 3.2 Bilingual Localization (`src/lib/i18n/`)
- Primary Language: **Kazakh (`kk`)**.
- Secondary Language: **English (`en`)**.
- Architecture:
  - Strongly-typed `Translations` interface guaranteeing key completeness across both languages.
  - `LanguageProvider` with `localStorage` persistence (`miora_lang`).
  - Dynamic updates to `document.documentElement.lang`.
  - Zero hydration mismatch: Defaults to `kk` during SSR, safely syncs on mount.
  - Seamless header toggle (`KZ | EN`) on both desktop and full-screen mobile menu.

### 3.3 Semantic Design Tokens & Typography (`src/app/globals.css`)
- **Typography**:
  - Sans-Serif: `Plus Jakarta Sans` for clean, precision technical and numerical data.
  - Serif: `Newsreader` (italic) for authoritative, human editorial accents.
  - Monospace: `JetBrains Mono` for telemetry rails, protocol IDs, and status chips.
- **Palette Tokens**:
  - `--color-bg`: `#050608` (Deep obsidian black).
  - `--color-surface`: `#080b10` (Tactile dark slate container).
  - `--color-border`: `rgba(255, 255, 255, 0.08)` (Subtle hairline dividers).
  - `--color-signal`: `#00e5ff` (Clean cortical neural intention).
  - `--color-danger`: `#f43f5e` (EMG noise artifact).
  - `--color-safe`: `#10b981` (Verified 4-gate protected override).
- **Accessibility & Motion**:
  - Skip link (`.skip-link`) for keyboard navigation directly to `#challenge`.
  - Full `@media (prefers-reduced-motion: reduce)` support: disables heavy continuous canvas/video animations and defaults to settled states.

### 3.4 3D Neural Cortex Engine (`src/components/miora/NeuralCortex3D.tsx`)
- **PBR Shader Refinement**:
  - Replaced radioactive glowing cyan flood with a matte, dark anthracite titanium shader:
    - Base Color: `0x181c24`
    - Emissive: `0x040810` (intensity `0.06`)
    - Roughness: `0.65` (tactile scientific finish)
    - Metalness: `0.40` (brushed titanium)
  - Diagnostic states update localized highlights and rim lights rather than blinding color washes.
- **Geometric Camera Framing & Responsive Safety**:
  - Calculated bounding sphere ($R \approx 7.5$) and dynamic camera distance:
    $$\text{fov}_x = 2 \times \arctan\left(\tan(\text{fov}_y / 2) \times \text{aspect}\right)$$
    $$\text{safeDist} = \max\left(\frac{R}{\sin(\text{fov}_y / 2)}, \frac{R}{\sin(\text{fov}_x / 2)}\right) \times 1.25$$
  - On narrow mobile viewports (320px/390px, aspect < 0.7), distance smoothly backs out so cortex edges and electrodes are NEVER clipped.
  - Attached `ResizeObserver` to container for continuous recalculation on orientation or viewport resize.
  - Preserved user manual drag rotation angle on state re-renders and camera view switches.
- **Battery & Lifecycle Performance**:
  - WebGL `rAF` loop is completely cancelled (`cancelAnimationFrame`) when container is offscreen (`IntersectionObserver`) or tab is in background (`document.visibilityState === "hidden"`).
  - Resumes cleanly without time jumps via `clock.getDelta()` flush.
  - Supports `prefers-reduced-motion`: halts continuous auto-rotation and particle drift for vestibular safety.
  - Robust WebGL initialization with try/catch and `webglcontextlost` event handler; renders accessible 2D topological SVG fallback schematic with interactive retry button.
  - Guarded against unmounted `GLTFLoader` callbacks via `isMounted` flag.
  - Code-split via `dynamic(() => import("@/components/miora/NeuralCortex3D"), { ssr: false })` in `src/app/page.tsx` with high-contrast placeholder retaining `#cortex` anchor.

---

## 4. Component Details & Design Fixes

### 4.1 Navbar (`src/components/miora/Navbar.tsx`)
- Resolved broken links: Focused on 5 clean on-page sections (`#challenge`, `#cortex`, `#cascade`, `#demo`, `#research`).
- Replaced fake telemetry (`SIGNAL OK // 99.8%`) with grounded status (`V18 // RESEARCH PROTOTYPE`).
- Added responsive language toggle pill (`KZ | EN`).
- Mobile Menu:
  - Focus trap and `Escape` key close listener.
  - Scroll lock on `document.body.style.overflow`.
  - Set primary CTA to `hidden sm:inline-flex` on narrow screens so brandmark, language switcher, and menu button fit cleanly on 320px–375px screens without horizontal overflow.

### 4.2 HeroSection (`src/components/miora/HeroSection.tsx`)
- Clean monumental H1:
  - Kazakh: "Адам ниетін *сақтайтын нейроинтерфейс*."
  - English: "The decision-protection layer for *brain-computer interfaces*."
- Removed repetitive secondary quote.
- Replaced false "100% intent retention" claim with grounded scientific metric: `ERR REDUCTION: -6.1 p.p. (38.5% → 32.4%)`.
- Primary CTA to `#demo`, secondary to `#challenge`.

### 4.3 ProblemSection (`src/components/miora/ProblemSection.tsx`)
- Fixed disconnected `StepPlayer`: Wired `activeStep` and `onChange={setActiveStep}` so user clicks and auto-play dynamically change the step title, explanation, and status indicator.
- Grounded metric cards:
  - Card 1: 38.5% Baseline Decoder Error (Unshielded)
  - Card 2: +45 dB Jaw EMG burst (40–100 Hz Spectral Contamination)
  - Card 3: 3.9% Weak HARM Rate (-0.8 p.p. reduction vs 4.7% baseline) replacing false "0% FALSE TRIGGER".

### 4.4 IntroducingSection & CascadeSection
- `IntroducingSection`: Explains the core philosophy (never aggressively override without passing all checks) with low compute overhead (< 3 ms) properly distinguished from future hardware targets.
- `CascadeSection`: Clear 4-gate cards with hover effects plus an explicit decision bifurcation visualizer:
  - All 4 Gates Pass ➔ Protected Override Applied (`decision: expert`).
  - Any Gate Fails ➔ Baseline Preserved (`decision: baseline`).

### 4.5 InteractiveDemo (`src/components/miora/InteractiveDemo.tsx`)
- Integrated directly with pure TypeScript simulation engine `computeMioraDecision` and `PRESET_SCENARIOS`.
- Recomposed high-density mobile & desktop UX:
  1. **Top Scenario Toolbar**: 3 immediate scenario buttons (`1. Таза сигнал`, `2. ЭМГ Шуы (Қорғаныссыз / Bypass)`, `3. ЭМГ Шуы (MIORA Қорғауымен)`). Russian word "Помеха" completely eliminated in favor of clean Kazakh/English.
  2. **Executed Command Card**: Positioned immediately beneath the scenarios so that on mobile (390px), tapping any preset instantly reveals the executed command, status badge, and human-readable explanation without vertical scroll exhaustion.
  3. **Compact 4-Gate Status Pipeline**: High-density horizontal pills for G1, G2, G3, G4 with real-time `PASS` / `HELD` indicators.
  4. **Simulated Waveform Viewport**: Accurately labeled `СИМУЛЯЦИЯЛАНҒАН ОСЦИЛЛОГРАММА (C3/C4 250 HZ)` (removed misleading "LIVE EEG"), with functional Pause/Freeze toggle and test ID `data-testid="waveform-freeze-btn"`.
  5. **Collapsible Disclosure for Advanced Tuning**: Encapsulates manual noise sliders, chewing toggle, subject profiles, intent picker, and dual baseline/expert decoder comparison cards. Includes reset button (`data-testid="simulator-reset-btn"`).

### 4.6 ProductSpecs & Research Sections
- Grounded empirical results: 38.5% → 32.4% (-6.1 p.p.), 3.9% Weak HARM (-0.8 p.p.), 9 participants, offline semi-synthetic chewing EMG.
- Clearly separated current validated system (V18 Offline Protocol, 4-channel EEG, 250 Hz) from the future engineering roadmap (MIORA-2: 1024-channel array, < 2.4 ms hardware latency).

### 4.7 TeamFooter (`src/components/miora/TeamFooter.tsx`)
- Authentic authors and supervisor:
  - Bekarys Qydyrbek (Author & Researcher)
  - Erbosyn Shaimardan (Author & Engineer)
  - Kalima Qabylbek (Scientific Supervisor, Educator-Expert)
- Affiliation: Nazarbayev Intellectual School (NIS Almaty–Nauryzbay).
- Regulatory disclaimer: `RESEARCH PROTOTYPE. NOT AN FDA-CLEARED MEDICAL DEVICE. FOR SCIENTIFIC EVALUATION ONLY.`

