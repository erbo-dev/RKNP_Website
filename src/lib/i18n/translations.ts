/**
 * Typed Bilingual Dictionary (Kazakh / English) for MIORA
 * Kazakh is primary, English is secondary.
 */

export type Language = "kk" | "en";

export interface NavTranslations {
  challenge: string;
  technology: string;
  cortex: string;
  cascade: string;
  demo: string;
  realDemo: string;
  specs: string;
  research: string;
  team: string;
  tryDemo: string;
  menuAria: string;
  navTitle: string;
  langKzAria: string;
  langEnAria: string;
}

export interface HeroTranslations {
  kicker: string;
  titleRegular: string;
  titleEmphasis: string;
  description: string;
  ctaDemo: string;
  ctaResearch: string;
  metaProtocol: string;
  metaSignal: string;
  metaFilter: string;
  metaPrinciple: string;
  skipLink: string;
}

export interface ProblemTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
  metric1Title: string;
  metric1Value: string;
  metric1Unit: string;
  metric1Detail: string;
  metric2Title: string;
  metric2Value: string;
  metric2Unit: string;
  metric2Detail: string;
  metric3Title: string;
  metric3Value: string;
  metric3Unit: string;
  metric3Detail: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  traceClean: string;
  traceNoise: string;
  traceProtected: string;
  stepTitle: string;
  stepPlay: string;
  stepPause: string;
}

export interface CascadeTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
  passOutcomeTitle: string;
  passOutcomeDesc: string;
  blockOutcomeTitle: string;
  blockOutcomeDesc: string;
  gate1Title: string;
  gate1Rule: string;
  gate1Desc: string;
  gate2Title: string;
  gate2Rule: string;
  gate2Desc: string;
  gate3Title: string;
  gate3Rule: string;
  gate3Desc: string;
  gate4Title: string;
  gate4Rule: string;
  gate4Desc: string;
}

export interface CortexTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
  presetFront: string;
  presetMotor: string;
  presetTemporal: string;
  modeIntent: string;
  modeNoise: string;
  modeCascade: string;
  loadingModel: string;
  errorModel: string;
  reloadModel: string;
  webglFallbackTitle: string;
  webglFallbackDesc: string;
  interactiveNotice: string;
}

export interface DemoTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
  badgeSimulated: string;
  scenariosTitle: string;
  controlsTitle: string;
  toggleChewing: string;
  chewingOn: string;
  chewingOff: string;
  noiseSliderTitle: string;
  noiseClean: string;
  noiseThreshold: string;
  noiseMax: string;
  profileTitle: string;
  profileCalibrated: string;
  profileCalibratedSub: string;
  profileUncalibrated: string;
  profileUncalibratedSub: string;
  intentTitle: string;
  intentLeft: string;
  intentRight: string;
  intentRest: string;
  protectionToggleTitle: string;
  protectionMiora: string;
  protectionBypass: string;
  resetBtn: string;
  pauseBtn: string;
  playBtn: string;
  oscilloscopeTitle: string;
  baselineDecoderTitle: string;
  expertDecoderTitle: string;
  confidenceLabel: string;
  marginLabel: string;
  cascadeStatusTitle: string;
  finalDecisionTitle: string;
  decisionOverride: string;
  decisionBaseline: string;
  decisionBypass: string;
}

export interface ResearchTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
  chartTitle: string;
  chartSubtitle: string;
  baselineLegend: string;
  mioraLegend: string;
  deltaLegend: string;
  metricErrorTitle: string;
  metricErrorBaseline: string;
  metricErrorMiora: string;
  metricErrorDelta: string;
  metricHarmTitle: string;
  metricHarmBaseline: string;
  metricHarmMiora: string;
  metricHarmDelta: string;
  metricCohortTitle: string;
  metricCohortValue: string;
  metricCohortDetail: string;
  roadmapKicker: string;
  roadmapTitle: string;
  roadmapDesc: string;
  roadmapPoint1: string;
  roadmapPoint2: string;
  roadmapPoint3: string;
}

export interface TeamTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
  roleResearcher: string;
  roleEngineer: string;
  roleSupervisor: string;
  author1Name: string;
  author1Bio: string;
  author2Name: string;
  author2Bio: string;
  supervisorName: string;
  supervisorBio: string;
  institutionTitle: string;
  institutionSubtitle: string;
  repoButton: string;
  footerTagline: string;
  footerDisclaimer: string;
  rightsReserved: string;
}

export interface SpecsTranslations {
  kicker: string;
  headline: string;
  headlineEmphasis: string;
  description: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  problem: ProblemTranslations;
  cascade: CascadeTranslations;
  cortex: CortexTranslations;
  demo: DemoTranslations;
  specs: SpecsTranslations;
  research: ResearchTranslations;
  team: TeamTranslations;
}

export const translations: Record<Language, Translations> = {
  kk: {
    nav: {
      challenge: "Мәселе",
      technology: "Технология",
      cortex: "3D Сканер",
      cascade: "4 Шлюз",
      demo: "Симулятор",
      realDemo: "Нақты сигнал",
      specs: "Метрикалар",
      research: "Әдіснама",
      team: "Зерттеу тобы",
      tryDemo: "ДЕМО СЫНАУ",
      menuAria: "Навигация мәзірін ашу",
      navTitle: "Навигация бөлімдері",
      langKzAria: "Қазақ тіліне ауысу",
      langEnAria: "Ағылшын тіліне ауысу",
    },
    hero: {
      kicker: "RESEARCH PROTOTYPE // V18 PROTOCOL",
      titleRegular: "Human intent. ",
      titleEmphasis: "Protected",
      description: "Адам шайнағанда пайда болатын бұлшықет артефактілерін (EMG) анықтап, күмәнді жағдайда адамның бастапқы ниетін қорғайтын 4 деңгейлі алгоритмдік каскад.",
      ctaDemo: "СИМУЛЯТОРДЫ АШУ",
      ctaResearch: "ҒЫЛЫМИ ӘДІСНАМА",
      metaProtocol: "ХАТТАМА: OFFLINE-V18",
      metaSignal: "СИГНАЛ: 250 HZ (C3/CZ/C4)",
      metaFilter: "СҮЗГІ: 4-GATE CASCADE",
      metaPrinciple: "ҚАҒИДА: FIRST, DO NO HARM",
      skipLink: "Негізгі мазмұнға өту",
    },
    problem: {
      kicker: "01 // НЕГІЗГІ КЕДЕРГІ // THE CHALLENGE",
      headline: "Шайнау қимылдары ми сигналдарын қалай ",
      headlineEmphasis: "бұрмалайды?",
      description: "Тамақ шайнағанда немесе жақ бұлшықеттері (m. masseter) жиырылғанда пайда болатын электрлік кедергілер нәзік ЭЭГ микровольт толқындарын басып тастайды.",
      metric1Title: "Базалық декодер қателігі",
      metric1Value: "38.5%",
      metric1Unit: "ERROR RATE",
      metric1Detail: "Шайнау артефактілері кезіндегі стандартты классификатордың қателік деңгейі.",
      metric2Title: "ЭМГ спектрлік шуы",
      metric2Value: "+45 dB",
      metric2Unit: "40–100 HZ",
      metric2Detail: "Жақ бұлшықеттерінің жоғары жиілікті қуатты электрлік импульсі.",
      metric3Title: "Шешім қауіпсіздігі",
      metric3Value: "-0.8 п.п.",
      metric3Unit: "WEAK HARM",
      metric3Detail: "Жүйе күмәнданғанда алғашқы шешімді сақтап, қате түзетулер қаупін азайтады.",
      comparisonTitle: "Электрофизиологиялық сигналдарды салыстыру",
      comparisonSubtitle: "Сенсомоторлық ырғақ пен шайнау артефактісінің 3 фазалы көрінісі",
      traceClean: "1. Таза моторлық ырғақ (Mu 8–12 Hz)",
      traceNoise: "2. Шайнау артефактісі (EMG импульсі)",
      traceProtected: "3. MIORA шешім қабылдау сәті",
      stepTitle: "Қадамдық процесті бақылау",
      stepPlay: "Ойнату",
      stepPause: "Кідірту",
    },
    cascade: {
      kicker: "02 // 4 ҚОРҒАНЫС ШЛЮЗІ",
      headline: "Жүйе адамның ниетін ",
      headlineEmphasis: "қалай қорғап қалады?",
      description: "MIORA нөлдік өкініш қағидасымен жұмыс істейді: егер қандай да бір күмән туса — адамның алғашқы ниеті сақталады. Команданы түзету үшін төмендегі 4 сүзгіден бірдей сүрінбей өтуі қажет.",
      passOutcomeTitle: "4 Шлюз түгел өтті → Қорғалған түзету (Protected Override)",
      passOutcomeDesc: "Барлық критерийлер қанағаттандырылды: сарапшы модель адамның бұрмаланған командасын сенімді түрде түзейді.",
      blockOutcomeTitle: "Кемінде 1 шлюз өтпеді → Бастапқы шешім (Baseline Preserved)",
      blockOutcomeDesc: "Күмән немесе шудың жоқтығы анықталды: жүйе қауіпсіздік үшін базалық команданы өзгеріссіз сақтайды.",
      gate1Title: "Бұл адамға жүйе пайдалы ма?",
      gate1Rule: "Пайдасы болмаса — босқа араласпайды",
      gate1Desc: "Қосымша сүзгі тек осы адамның жеке ми белсенділігіне нақты пайда әкелетіні дәлелденсе ғана қосылады.",
      gate2Title: "Шынымен шайнау кедергісі бар ма?",
      gate2Rule: "Шу болмаса — сигнал өзгермейді",
      gate2Desc: "Жақ бұлшықеттерінің белсенділігі белгіленген шектен (≥ 35%) асқанда ғана сүзгі іске қосылады.",
      gate3Title: "Екі алгоритмде қайшылық бар ма?",
      gate3Rule: "Екеуі келіссе — артық түзету жасалмайды",
      gate3Desc: "Негізгі декодер мен қосымша модель екі түрлі команда ұсынғанда ғана тексеру басталады.",
      gate4Title: "Жаңа шешімге толық сенімдіміз бе?",
      gate4Rule: "Күмән болса — алғашқы ниет сақталады",
      gate4Desc: "Сарапшы модельдің сенімділік маржасы базалық декодерден анық басым (≥ +15 п.п.) болуы шарт.",
    },
    cortex: {
      kicker: "03 // 3D АНАТОМИЯЛЫҚ СКАНОР",
      headline: "Ми қыртысы және шайнау ",
      headlineEmphasis: "бұлшықеттерінің топологиясы",
      description: "Сенсомоторлық қыртыс (C3, Cz, C4) пен самай-шайнау бұлшықеттерінің кеңістіктік орналасуын интерактивті зерттеңіз.",
      presetFront: "Жалпы ракурс",
      presetMotor: "Моторлық қыртыс",
      presetTemporal: "Самай / Шайнау аймағы",
      modeIntent: "1. Моторлық ниет",
      modeNoise: "2. Шайнау кедергісі",
      modeCascade: "3. MIORA Каскады",
      loadingModel: "3D Анатомиялық модель жүктелуде...",
      errorModel: "3D моделін жүктеу мүмкін болмады.",
      reloadModel: "Қайта жүктеу",
      webglFallbackTitle: "3D Көрініс қолжетімді емес",
      webglFallbackDesc: "Браузерде WebGL өшірулі немесе құрылғы қолдамайды. Интерактивті симулятор төменде толық жұмыс істейді.",
      interactiveNotice: "Тінтуірмен немесе саусақпен 3D модельді 360° еркін айналдыруға болады",
    },
    demo: {
      kicker: "04 // ИНТЕРАКТИВТІ СИМУЛЯТОР",
      headline: "4-Шлюздің жұмысын ",
      headlineEmphasis: "өзіңіз сынап көріңіз",
      description: "Әртүрлі сценарийлерді таңдаңыз немесе параметрлерді қолмен өзгертіп, жүйенің шешім қабылдау логикасын нақты уақытта тексеріңіз.",
      badgeSimulated: "Simulated Neural Signal (Иллюстративті модель)",
      scenariosTitle: "Дайын сценарийлер:",
      controlsTitle: "Басқару панелі",
      toggleChewing: "Шайнау белсенділігі (EMG)",
      chewingOn: "ШАЙНАУ БАР (КЕДЕРГІ ҚОСУЛЫ)",
      chewingOff: "ТЫНЫШТЫҚ (ТАЗА ЭЭГ)",
      noiseSliderTitle: "Шу деңгейінің қуаты",
      noiseClean: "0% (Таза)",
      noiseThreshold: "Шек: ≥ 35%",
      noiseMax: "100% (Макс)",
      profileTitle: "Қолданушының калибрленуі",
      profileCalibrated: "Калибрленген",
      profileCalibratedSub: "Сүзгі рұқсат етілген",
      profileUncalibrated: "Жаңа қолданушы",
      profileUncalibratedSub: "Сақтық режимі",
      intentTitle: "Адамның нақты ми ниеті",
      intentLeft: "Сол қол",
      intentRight: "Оң қол",
      intentRest: "Тыныштық",
      protectionToggleTitle: "Қорғаныс режимі",
      protectionMiora: "MIORA Қорғанысы",
      protectionBypass: "Қорғаныссыз (Bypass)",
      resetBtn: "Бастапқы күйге қайтару",
      pauseBtn: "Тоқтату",
      playBtn: "Ойнату",
      oscilloscopeTitle: "ЭЭГ ОСЦИЛЛОГРАММАСЫ (C3/C4 250 HZ)",
      baselineDecoderTitle: "Базалық декодер болжамы",
      expertDecoderTitle: "Қосымша сарапшы ұсынысы",
      confidenceLabel: "Сенімділік:",
      marginLabel: "Маржа айырмасы:",
      cascadeStatusTitle: "4 Шлюздің тікелей шешімі:",
      finalDecisionTitle: "Қорытынды қабылданған команда:",
      decisionOverride: "ҚОРҒАЛҒАН ТҮЗЕТУ ЕНГІЗІЛДІ",
      decisionBaseline: "БАЗАЛЫҚ КОМАНДА САҚТАЛДЫ",
      decisionBypass: "ҚОРҒАНЫССЫЗ ҚАБЫЛДАНДЫ (BYPASS)",
    },
    specs: {
      kicker: "06 // ӨНІМ СИПАТТАМАСЫ МЕН АРХИТЕКТУРАСЫ",
      headline: "Терең технология. ",
      headlineEmphasis: "Абсолютті сенімділік",
      description: "MIORA — жай ғана алгоритм емес, ми сигналдарының табиғи ырғағын сыртқы механикалық кедергілерден қорғайтын жоғары технологиялық өнімдік платформа.",
    },
    research: {
      kicker: "05 // ЗЕРТТЕУ НӘТИЖЕЛЕРІ ЖӘНЕ ӘДІСНАМА",
      headline: "Ашық ғылыми деректер және ",
      headlineEmphasis: "тексерілген нәтижелер",
      description: "MIORA зерттеуі халықаралық рецензияланған ашық ЭЭГ датасеттері (PhysioNet, BCI Competition) және нақты шайнау ЭМГ жазбалары негізінде офлайн хаттамамен бағаланды.",
      chartTitle: "Қателік деңгейін салыстыру (Error Rate)",
      chartSubtitle: "9 Жазба бойынша базалық декодер мен MIORA каскадын салыстырмалы бағалау",
      baselineLegend: "Базалық декодер (CSP+LDA)",
      mioraLegend: "MIORA Каскады",
      deltaLegend: "Айырмашылық (Delta)",
      metricErrorTitle: "Қателік деңгейі (Error Rate)",
      metricErrorBaseline: "38.5%",
      metricErrorMiora: "32.4%",
      metricErrorDelta: "-6.1 проценттік пунктке төмендеу (~16% салыстырмалы)",
      metricHarmTitle: "Жалған түзету қаупі (Weak HARM)",
      metricHarmBaseline: "4.7%",
      metricHarmMiora: "3.9%",
      metricHarmDelta: "-0.8 проценттік пунктке төмендеу",
      metricCohortTitle: "Зерттеу көлемі",
      metricCohortValue: "9 Жазба",
      metricCohortDetail: "Жартылай синтетикалық шайнау хаттамасы (V18 Offline Protocol)",
      roadmapKicker: "ИНЖЕНЕРЛІК БАҒЫТ // ROADMAP",
      roadmapTitle: "MIORA-2: Нақты уақыттағы ағындық конвейер",
      roadmapDesc: "Зерттеудің келесі кезеңінде офлайн хаттама ультра-төмен кідірісті (< 20 мс) ағындық микроконтроллерлерге бейімделеді.",
      roadmapPoint1: "Тікелей бұлшықет сенсорларын интеграциялау",
      roadmapPoint2: "Edge-AI микроконтроллерлеріне оңтайландыру",
      roadmapPoint3: "Ашық бастапқы кодты BCI зерттеу кітапханасы",
    },
    team: {
      kicker: "06 // ЗЕРТТЕУ ТОБЫ ЖӘНЕ ЖОБА",
      headline: "Жоба авторлары және ",
      headlineEmphasis: "ғылыми жетекші",
      description: "Назарбаев Зияткерлік мектебінде әзірленген нейротехнологиялық зерттеу бастамасы.",
      roleResearcher: "Жоба авторы // Researcher",
      roleEngineer: "Жоба авторы // Engineer",
      roleSupervisor: "Ғылыми жетекші // Supervisor",
      author1Name: "Қыдырбек Бекарыс",
      author1Bio: "BCI жүйелері, ЭЭГ сигналдарын цифрлық өңдеу (DSP) және 4-шлюзді каскадты шешім қабылдау логикасының авторы.",
      author2Name: "Шәймардан Ербосын",
      author2Bio: "Машиналық оқыту модельдері, жартылай синтетикалық ЭМГ артефактілерін модельдеу және бағдарламалық архитектура.",
      supervisorName: "Қабылбек Қалима",
      supervisorBio: "Ғылыми әдіснама, эксперименттердің дұрыстығын верификациялау және академиялық хаттамаларды сараптау.",
      institutionTitle: "Назарбаев Зияткерлік мектебі (NIS Almaty–Nauryzbay)",
      institutionSubtitle: "Химия-биология бағытындағы Назарбаев Зияткерлік мектебі, Алматы қ.",
      repoButton: "GITHUB РЕПОЗИТОРИЙІ",
      footerTagline: "Protecting the signal. Preserving human intent. An experimental decision-protection layer for brain–computer interfaces.",
      footerDisclaimer: "RESEARCH PROTOTYPE. NOT AN FDA-CLEARED MEDICAL DEVICE. FOR SCIENTIFIC EVALUATION ONLY.",
      rightsReserved: "Барлық құқықтар қорғалған.",
    },
  },
  en: {
    nav: {
      challenge: "Challenge",
      technology: "Technology",
      cortex: "3D Cortex",
      cascade: "4 Gates",
      demo: "Simulator",
      realDemo: "Real EEG",
      specs: "Metrics",
      research: "Methodology",
      team: "Research Team",
      tryDemo: "TRY DEMO",
      menuAria: "Toggle navigation menu",
      navTitle: "Navigation Sections",
      langKzAria: "Switch to Kazakh",
      langEnAria: "Switch to English",
    },
    hero: {
      kicker: "RESEARCH PROTOTYPE // V18 PROTOCOL",
      titleRegular: "Human intent. ",
      titleEmphasis: "Protected",
      description: "An experimental 4-gate algorithmic cascade that detects chewing artifacts (EMG) and safely protects human intent from erroneous decoder overrides.",
      ctaDemo: "OPEN SIMULATOR",
      ctaResearch: "RESEARCH METHODOLOGY",
      metaProtocol: "PROTOCOL: OFFLINE-V18",
      metaSignal: "SIGNAL: 250 HZ (C3/CZ/C4)",
      metaFilter: "FILTER: 4-GATE CASCADE",
      metaPrinciple: "PRINCIPLE: FIRST, DO NO HARM",
      skipLink: "Skip to main content",
    },
    problem: {
      kicker: "01 // THE CORE CHALLENGE",
      headline: "How muscle interference corrupts ",
      headlineEmphasis: "cortical intentions",
      description: "Chewing and jaw muscle contractions (m. masseter) produce high-amplitude electrical bursts that overpower delicate microvolt EEG signals, causing standard decoders to fail.",
      metric1Title: "Baseline Decoder Error",
      metric1Value: "38.5%",
      metric1Unit: "ERROR RATE",
      metric1Detail: "Observed misclassification rate under semi-synthetic chewing contamination.",
      metric2Title: "EMG High-Frequency Noise",
      metric2Value: "+45 dB",
      metric2Unit: "40–100 HZ",
      metric2Detail: "Substantial spectral power surge from jaw muscle contractions.",
      metric3Title: "Harm Reduction",
      metric3Value: "-0.8 p.p.",
      metric3Unit: "WEAK HARM",
      metric3Detail: "Preserving baseline on ambiguity reduced false interventions from 4.7% to 3.9%.",
      comparisonTitle: "Electrophysiological Signal Comparison",
      comparisonSubtitle: "Synchronized 3-phase progression from sensorimotor rhythm to protected output",
      traceClean: "1. Clean Sensorimotor Rhythm (Mu 8–12 Hz)",
      traceNoise: "2. Chewing EMG Burst (Contaminated)",
      traceProtected: "3. MIORA Decision Verification Point",
      stepTitle: "Step-by-Step Pipeline Inspection",
      stepPlay: "Play",
      stepPause: "Pause",
    },
    cascade: {
      kicker: "02 // THE 4-GATE DECISION CASCADE",
      headline: "How MIORA safeguards ",
      headlineEmphasis: "human cortical intent",
      description: "MIORA operates on a zero-regret principle: whenever in doubt, the original intent is preserved. Overriding a decision requires all four criteria to be strictly met.",
      passOutcomeTitle: "All 4 Gates Pass → Protected Override Applied",
      passOutcomeDesc: "All criteria satisfied: auxiliary expert model safely and confidently corrects the contaminated baseline command.",
      blockOutcomeTitle: "Any Gate Fails → Baseline Command Preserved",
      blockOutcomeDesc: "Doubt or insufficient noise detected: the system safely falls back to preserving the baseline decision (Fail-safe).",
      gate1Title: "Does this user benefit from the expert?",
      gate1Rule: "No proven benefit → Do not intervene",
      gate1Desc: "The auxiliary model is only permitted if prior calibration proved empirical gain for this user's unique physiology.",
      gate2Title: "Is significant chewing noise present?",
      gate2Rule: "Clean signal → Keep nominal pipeline",
      gate2Desc: "The cascade triggers only when high-frequency EMG muscle power exceeds the calibrated floor (≥ 35%).",
      gate3Title: "Do the two decoders disagree?",
      gate3Rule: "Consensus reached → No intervention needed",
      gate3Desc: "Verification proceeds only when baseline and expert decoders propose conflicting motor commands.",
      gate4Title: "Is the expert decisively confident?",
      gate4Rule: "When in doubt → Baseline preserved",
      gate4Desc: "The expert's classification margin must exceed the baseline decoder by at least +15 percentage points.",
    },
    cortex: {
      kicker: "03 // 3D ANATOMICAL CORTEX",
      headline: "Topology of sensorimotor cortex ",
      headlineEmphasis: "and masseter muscle sites",
      description: "Explore the spatial relationship between primary motor cortex electrodes (C3, Cz, C4) and temporal chewing muscle interference zones.",
      presetFront: "Full View",
      presetMotor: "Motor Cortex",
      presetTemporal: "Temporal / Jaw Region",
      modeIntent: "1. Motor Intent",
      modeNoise: "2. Chewing Noise",
      modeCascade: "3. MIORA Cascade",
      loadingModel: "Loading 3D anatomical model...",
      errorModel: "Unable to load 3D model.",
      reloadModel: "Retry",
      webglFallbackTitle: "3D View Unavailable",
      webglFallbackDesc: "WebGL is disabled or unsupported on this device. The interactive simulator below remains fully functional.",
      interactiveNotice: "Drag with mouse or touch to rotate 360° in 3D space",
    },
    demo: {
      kicker: "04 // INTERACTIVE SIMULATOR",
      headline: "Experience the 4-gate cascade ",
      headlineEmphasis: "in real-time",
      description: "Select predefined clinical scenarios or manually adjust electrophysiological parameters to observe the decision-protection logic in action.",
      badgeSimulated: "Simulated Neural Signal (Illustrative Model)",
      scenariosTitle: "Predefined Scenarios:",
      controlsTitle: "Control Console",
      toggleChewing: "Chewing Activity (EMG)",
      chewingOn: "CHEWING ACTIVE (NOISE ON)",
      chewingOff: "REST STATE (CLEAN EEG)",
      noiseSliderTitle: "Noise Amplitude",
      noiseClean: "0% (Clean)",
      noiseThreshold: "Floor: ≥ 35%",
      noiseMax: "100% (Max)",
      profileTitle: "User Calibration Profile",
      profileCalibrated: "Calibrated",
      profileCalibratedSub: "Expert authorized",
      profileUncalibrated: "Uncalibrated User",
      profileUncalibratedSub: "Caution mode",
      intentTitle: "Ground Truth Cortical Intent",
      intentLeft: "Left Hand",
      intentRight: "Right Hand",
      intentRest: "Rest State",
      protectionToggleTitle: "Protection Mode",
      protectionMiora: "MIORA Active",
      protectionBypass: "Bypass (Unprotected)",
      resetBtn: "Reset to Nominal",
      pauseBtn: "Pause",
      playBtn: "Resume",
      oscilloscopeTitle: "SIMULATED EEG OSCILLOGRAM (C3/C4 250 HZ)",
      baselineDecoderTitle: "Baseline Decoder Prediction",
      expertDecoderTitle: "Auxiliary Expert Suggestion",
      confidenceLabel: "Confidence:",
      marginLabel: "Margin Delta:",
      cascadeStatusTitle: "4-Gate Real-Time Audit:",
      finalDecisionTitle: "Final Emitted Decision:",
      decisionOverride: "PROTECTED OVERRIDE APPLIED",
      decisionBaseline: "BASELINE COMMAND PRESERVED",
      decisionBypass: "UNPROTECTED BASELINE (BYPASS)",
    },
    specs: {
      kicker: "06 // TECHNICAL SPECIFICATIONS & ARCHITECTURE",
      headline: "Deep technology. ",
      headlineEmphasis: "Absolute intent integrity",
      description: "MIORA is an experimental decision-protection platform engineered to preserve the natural fidelity of sensorimotor rhythms against severe physical interference.",
    },
    research: {
      kicker: "05 // RESEARCH RESULTS & METHODOLOGY",
      headline: "Open scientific datasets and ",
      headlineEmphasis: "verified empirical findings",
      description: "MIORA was evaluated under an offline protocol using open motor imagery datasets (PhysioNet, BCI Competition) and real masseter EMG noise recordings.",
      chartTitle: "Error Rate Reduction Across Cohort",
      chartSubtitle: "Offline comparative evaluation between baseline CSP+LDA decoder and MIORA cascade",
      baselineLegend: "Baseline Decoder (CSP+LDA)",
      mioraLegend: "MIORA Cascade",
      deltaLegend: "Delta Improvement",
      metricErrorTitle: "Mean Error Rate",
      metricErrorBaseline: "38.5%",
      metricErrorMiora: "32.4%",
      metricErrorDelta: "-6.1 percentage points reduction (~16% relative)",
      metricHarmTitle: "Weak HARM Risk",
      metricHarmBaseline: "4.7%",
      metricHarmMiora: "3.9%",
      metricHarmDelta: "-0.8 percentage points reduction",
      metricCohortTitle: "Cohort Size",
      metricCohortValue: "9 Subjects",
      metricCohortDetail: "Semi-synthetic chewing protocol (V18 Offline Study)",
      roadmapKicker: "ENGINEERING ROADMAP",
      roadmapTitle: "MIORA-2: Real-Time BCI Streaming Pipeline",
      roadmapDesc: "In the next development phase, the offline protocol will be ported to ultra-low latency (< 20 ms) edge streaming microcontrollers.",
      roadmapPoint1: "Direct masseter muscle sensor integration",
      roadmapPoint2: "Embedded edge-AI optimization",
      roadmapPoint3: "Open-source scientific BCI research toolkit",
    },
    team: {
      kicker: "06 // RESEARCH TEAM & PROJECT",
      headline: "Project authors and ",
      headlineEmphasis: "scientific supervision",
      description: "Neurotechnology research initiative originating from Nazarbayev Intellectual School.",
      roleResearcher: "Project Author // Researcher",
      roleEngineer: "Project Author // Engineer",
      roleSupervisor: "Scientific Supervisor",
      author1Name: "Bekarys Qydyrbek",
      author1Bio: "Author of BCI algorithmic architecture, EEG digital signal processing (DSP), and 4-gate cascade decision-protection logic.",
      author2Name: "Erbosyn Shaimardan",
      author2Bio: "Machine learning models, semi-synthetic EMG artifact modeling, and software engineering architecture.",
      supervisorName: "Kalima Qabylbek",
      supervisorBio: "Scientific methodology, academic verification of experimental results, and protocol governance.",
      institutionTitle: "Nazarbayev Intellectual School (NIS Almaty–Nauryzbay)",
      institutionSubtitle: "School of Chemistry and Biology, Almaty, Kazakhstan",
      repoButton: "GITHUB REPOSITORY",
      footerTagline: "Protecting the signal. Preserving human intent. An experimental decision-protection layer for brain–computer interfaces.",
      footerDisclaimer: "RESEARCH PROTOTYPE. NOT AN FDA-CLEARED MEDICAL DEVICE. FOR SCIENTIFIC EVALUATION ONLY.",
      rightsReserved: "All rights reserved.",
    },
  },
};
