"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { 
  Cpu, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Radio, 
  Sliders, 
  RotateCcw,
  Maximize2,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

type DiagnosticMode = "intent" | "noise" | "cascade";
type CameraPreset = "front" | "motor" | "temporal";

interface LobeInfo {
  nameKz: string;
  nameLat: string;
  electrodes: string;
  roleKz: string;
  signalType: string;
  status: string;
}

const LOBE_DETAILS: Record<string, LobeInfo> = {
  motor: {
    nameKz: "Біріншілік моторлық қыртыс",
    nameLat: "Primary Motor Cortex (Brodmann 4)",
    electrodes: "C3, Cz, C4 (1024 арна)",
    roleKz: "Қозғалыс ниетін (қол, саусақ қимылдарын) қалыптастыратын негізгі аймақ. MIORA осы жерден таза Mu/Beta ырғақтарын оқиды.",
    signalType: "Mu-rhythm (8–12 Hz) // 18.4 μV",
    status: "OPTIMAL SIGNAL CAPTURE",
  },
  temporal: {
    nameKz: "Самай үлесі және шайнау бұлшықеті",
    nameLat: "Temporal Lobe & Masseter Region",
    electrodes: "T3, T4, T5, T6",
    roleKz: "Шайнау кезінде күшті бұлшықет электрлік сигналдары (EMG шуы) пайда болып, көршілес ЭЭГ арналарын 40–100 Гц жиілікпен ластайтын қауіпті аймақ.",
    signalType: "EMG High-Frequency Spike // 120+ μV",
    status: "NOISE INTERFERENCE ZONE",
  },
  frontal: {
    nameKz: "Маңдай алды қыртысы",
    nameLat: "Prefrontal Cortex (Fp1, Fp2, Fz)",
    electrodes: "F3, Fz, F4",
    roleKz: "Когнитивті жоспарлау және шешім қабылдау орталығы. Көз жыпылықтауынан (EOG) болатын ауытқуларды бақылайды.",
    signalType: "Theta / Beta Waves // 12.1 μV",
    status: "MONITORED",
  },
};

export default function NeuralCortex3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);
  const [activeMode, setActiveMode] = useState<DiagnosticMode>("intent");
  const [activeLobeKey, setActiveLobeKey] = useState<string>("motor");
  const [telemetryGain, setTelemetryGain] = useState("+24.8 dB (Clean Sinusoidal)");
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>("motor");

  // Three.js external control refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const brainPivotRef = useRef<THREE.Group | null>(null);
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 14, 11));
  const targetLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));
  const currentLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const electrodeMeshesRef = useRef<THREE.Mesh[]>([]);
  const auraLightRef = useRef<THREE.PointLight | null>(null);
  const brainMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);

  // Function to switch camera views smoothly
  const setViewPreset = (preset: CameraPreset) => {
    setCameraPreset(preset);
    if (preset === "motor") {
      // Focus on superior motor cortex from above
      targetCamPosRef.current.set(0, 14, 11);
      targetLookAtRef.current.set(0, 2, 0);
      setActiveLobeKey("motor");
    } else if (preset === "temporal") {
      // Focus on temporal lateral side (jaw noise)
      targetCamPosRef.current.set(13, 3, 11);
      targetLookAtRef.current.set(0, -0.5, 0);
      setActiveLobeKey("temporal");
    } else {
      // General front 3/4 view
      targetCamPosRef.current.set(0, 3, 18);
      targetLookAtRef.current.set(0, 0, 0);
      setActiveLobeKey("frontal");
    }
  };

  // Switch modes and update colors/telemetry
  const handleModeChange = (mode: DiagnosticMode) => {
    setActiveMode(mode);
    if (mode === "intent") {
      setViewPreset("motor");
      setTelemetryGain("+24.8 dB (Clean Sinusoidal)");
    } else if (mode === "noise") {
      setViewPreset("temporal");
      setTelemetryGain("-48.2 dB (EMG Spike Burst)");
    } else if (mode === "cascade") {
      setViewPreset("front");
      setTelemetryGain("+31.5 dB (Preserved Intent)");
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050608, 0.014);

    const width = container.clientWidth;
    const height = container.clientHeight || 640;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 14, 11);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. High-Tech Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1628, 2.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 5.5, 60);
    cyanLight.position.set(10, 16, 15);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x00e676, 4.0, 60);
    emeraldLight.position.set(-14, -6, -10);
    scene.add(emeraldLight);

    const dynamicAuraLight = new THREE.PointLight(0x00e5ff, 6.0, 45);
    dynamicAuraLight.position.set(0, 4, 8);
    scene.add(dynamicAuraLight);
    auraLightRef.current = dynamicAuraLight;

    const blueRimLight = new THREE.PointLight(0x0066ff, 4.5, 50);
    blueRimLight.position.set(0, -10, 12);
    scene.add(blueRimLight);

    // 3. Particles Spark System surrounding the brain
    const sparkCount = 380;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 7.5 + Math.random() * 5.5;

      sparkPositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
      sparkPositions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta) + 0.5;
      sparkPositions[i * 3 + 2] = rad * Math.cos(phi);
    }
    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparks);

    // 4. Load Real Anatomical GLB Brain Model
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);
    brainPivotRef.current = brainGroup;

    // Electrodes Group (C3, Cz, C4 and Temporal markers)
    const electrodesGroup = new THREE.Group();
    brainGroup.add(electrodesGroup);

    const electrodeCoords = [
      { id: "Cz", pos: [0, 4.2, 0.2], label: "Cz (Vertex)", color: 0x00e5ff },
      { id: "C3", pos: [-2.6, 3.8, 0.4], label: "C3 (Left Motor)", color: 0x00e5ff },
      { id: "C4", pos: [2.6, 3.8, 0.4], label: "C4 (Right Motor)", color: 0x00e5ff },
      { id: "T3", pos: [-3.8, 0.2, 0.8], label: "T3 (Temporal Left)", color: 0xff3366 },
      { id: "T4", pos: [3.8, 0.2, 0.8], label: "T4 (Temporal Right)", color: 0xff3366 },
      { id: "Fz", pos: [0, 3.2, 3.5], label: "Fz (Frontal)", color: 0x00e676 },
    ];

    const electrodeSpheres: THREE.Mesh[] = [];
    electrodeCoords.forEach((node) => {
      const geom = new THREE.SphereGeometry(0.18, 16, 16);
      const mat = new THREE.MeshBasicMaterial({
        color: node.color,
        wireframe: false,
      });
      const sphere = new THREE.Mesh(geom, mat);
      sphere.position.set(node.pos[0], node.pos[1], node.pos[2]);

      // Glowing outer ring for electrode
      const ringGeom = new THREE.RingGeometry(0.24, 0.32, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.lookAt(0, 10, 0);
      sphere.add(ring);

      sphere.userData = { id: node.id, label: node.label };
      electrodesGroup.add(sphere);
      electrodeSpheres.push(sphere);
    });
    electrodeMeshesRef.current = electrodeSpheres;

    const loader = new GLTFLoader();
    loader.load(
      "/brain.glb",
      (gltf) => {
        const model = gltf.scene;

        const meshes: THREE.Mesh[] = [];
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            meshes.push(child as THREE.Mesh);
          }
        });

        // High-tech Deep Tech neural material
        const mats: THREE.MeshPhysicalMaterial[] = [];
        meshes.forEach((mesh) => {
          const mat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x041828),
            emissive: new THREE.Color(0x00e5ff),
            emissiveIntensity: 0.24,
            roughness: 0.16,
            metalness: 0.88,
            clearcoat: 1.0,
            clearcoatRoughness: 0.08,
          });
          mesh.material = mat;
          mats.push(mat);
        });
        brainMaterialsRef.current = mats;

        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);

        model.position.set(-center.x, -center.y, -center.z);

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 13.5 / maxDim;

        const pivot = new THREE.Group();
        pivot.add(model);
        pivot.scale.set(scale, scale, scale);

        // Standard upright anatomical orientation:
        pivot.rotation.x = -Math.PI / 2;
        pivot.rotation.z = Math.PI;

        brainGroup.add(pivot);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading brain model:", error);
        setLoading(false);
      }
    );

    // 5. Interactive Raycaster for Click-to-Inspect
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onCanvasClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(electrodeMeshesRef.current, true);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const id = hit.userData.id || hit.parent?.userData.id;
        if (id === "T3" || id === "T4") {
          setActiveLobeKey("temporal");
        } else if (id === "Fz") {
          setActiveLobeKey("frontal");
        } else {
          setActiveLobeKey("motor");
        }
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener("click", onCanvasClick);

    // 6. Interactive Drag & Momentum Controls
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouse.x;
        const deltaY = e.clientY - prevMouse.y;

        velocity = { x: deltaY * 0.005, y: deltaX * 0.005 };
        brainGroup.rotation.y += velocity.y;
        brainGroup.rotation.x += velocity.x;

        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Zoom via wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetCamPosRef.current.z = THREE.MathUtils.clamp(
        targetCamPosRef.current.z + e.deltaY * 0.015,
        9,
        25
      );
    };
    dom.addEventListener("wheel", onWheel, { passive: false });

    // Context lost / restored resilience
    const onContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animId);
    };
    dom.addEventListener("webglcontextlost", onContextLost, false);

    // Reduced motion media query
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 7. Animation Loop with Smooth Camera Transitions
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth Camera Lerp
      camera.position.lerp(targetCamPosRef.current, 0.05);
      currentLookAtRef.current.lerp(targetLookAtRef.current, 0.05);
      camera.lookAt(currentLookAtRef.current);

      // Gentle auto-rotation when not dragging (respecting reduced motion)
      if (!isDragging && !prefersReducedMotion) {
        brainGroup.rotation.y += 0.0025;
        velocity.x *= 0.95;
        velocity.y *= 0.95;
        brainGroup.rotation.x += velocity.x;
      }

      // Dynamic electrode pulse and lighting reaction based on active mode
      electrodeMeshesRef.current.forEach((mesh, index) => {
        const scaleVal = 1.0 + Math.sin(time * 4 + index) * 0.18;
        mesh.scale.set(scaleVal, scaleVal, scaleVal);
      });

      // Update aura light based on active mode
      if (auraLightRef.current) {
        const pulse = 1 + Math.sin(time * 3) * 0.3;
        auraLightRef.current.intensity = 5.0 * pulse;
      }

      // Rotate background sparks slowly
      if (!prefersReducedMotion) {
        sparks.rotation.y = time * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 640;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener("pointerdown", onPointerDown);
      dom.removeEventListener("wheel", onWheel);
      dom.removeEventListener("click", onCanvasClick);
      dom.removeEventListener("webglcontextlost", onContextLost);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);

      brainMaterialsRef.current.forEach((mat) => mat.dispose());
      electrodeSpheres.forEach((sph) => {
        sph.geometry.dispose();
        if (Array.isArray(sph.material)) {
          sph.material.forEach((m) => m.dispose());
        } else {
          sph.material.dispose();
        }
      });
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, []);

  // Update Brain Material Color & Emissive per Mode
  useEffect(() => {
    if (brainMaterialsRef.current.length === 0) return;

    if (activeMode === "intent") {
      brainMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(0x041828);
        mat.emissive.setHex(0x00e5ff);
        mat.emissiveIntensity = 0.28;
      });
      if (auraLightRef.current) auraLightRef.current.color.setHex(0x00e5ff);
    } else if (activeMode === "noise") {
      brainMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(0x280808);
        mat.emissive.setHex(0xff3366);
        mat.emissiveIntensity = 0.38;
      });
      if (auraLightRef.current) auraLightRef.current.color.setHex(0xff3366);
    } else if (activeMode === "cascade") {
      brainMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(0x042416);
        mat.emissive.setHex(0x00e676);
        mat.emissiveIntensity = 0.35;
      });
      if (auraLightRef.current) auraLightRef.current.color.setHex(0x00e676);
    }
  }, [activeMode]);

  const currentLobe = LOBE_DETAILS[activeLobeKey] || LOBE_DETAILS.motor;

  return (
    <section id="cortex" className="py-24 px-6 md:px-12 bg-[#050608] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center justify-center gap-2">
            <Radio size={14} className="animate-pulse" />
            <span>03 // Интерактивті Нейро-Диагностикалық Сканер</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
            Қозғалыс ниеті мен EMG шуын модельдеу
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto">
            Бұл жай ғана 3D ми емес — бұл MIORA-ның мидың қай бөлігінен ниетті оқитынын, шайнау кедергісінің қалай ластайтынын және каскадтың сигналды қалай қорғайтынын тікелей симуляциялайтын интерактивті диагностикалық станциясы.
          </p>
        </div>

        {/* Diagnostic Mode Switcher Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
          <button
            onClick={() => handleModeChange("intent")}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono tracking-wider transition-all border ${
              activeMode === "intent"
                ? "bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-[0_0_24px_rgba(0,229,255,0.25)]"
                : "bg-white/[0.03] border-white/15 text-neutral-400 hover:text-white hover:border-white/30"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "intent" ? "bg-cyan-400 animate-pulse" : "bg-neutral-600"}`} />
            <span>1. МОТОРЛЫҚ НИЕТ (C3/Cz/C4)</span>
          </button>

          <button
            onClick={() => handleModeChange("noise")}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono tracking-wider transition-all border ${
              activeMode === "noise"
                ? "bg-rose-500/15 border-rose-400 text-rose-300 shadow-[0_0_24px_rgba(244,63,94,0.25)]"
                : "bg-white/[0.03] border-white/15 text-neutral-400 hover:text-white hover:border-white/30"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "noise" ? "bg-rose-400 animate-ping" : "bg-neutral-600"}`} />
            <span>2. ШАЙНАУ КЕДЕРГІСІ (EMG ШУ)</span>
          </button>

          <button
            onClick={() => handleModeChange("cascade")}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono tracking-wider transition-all border ${
              activeMode === "cascade"
                ? "bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-[0_0_24px_rgba(0,230,118,0.25)]"
                : "bg-white/[0.03] border-white/15 text-neutral-400 hover:text-white hover:border-white/30"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "cascade" ? "bg-emerald-400 animate-pulse" : "bg-neutral-600"}`} />
            <span>3. MIORA 4-GATE ҚОРҒАНЫСЫ</span>
          </button>
        </div>

        {/* 3D WebGL Canvas Workbench */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#080d14] to-[#050608] shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Loading Indicator */}
          {loading && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050608]/90 backdrop-blur-md">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                <span className="font-mono text-xs text-cyan-400 tracking-wider">
                  3D АНАТОМИЯЛЫҚ СКАНИРЛЕУ ЖҮКТЕЛУДЕ...
                </span>
              </div>
            </div>
          )}

          {/* WebGL Canvas Mount */}
          <div
            ref={containerRef}
            className="w-full h-[560px] md:h-[680px] cursor-grab active:cursor-grabbing relative z-10"
          />

          {/* Top-Left Telemetry HUD */}
          <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 pointer-events-none max-w-xs sm:max-w-md">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-xs font-mono text-white">
              <span className={`w-2 h-2 rounded-full ${
                activeMode === "intent" ? "bg-cyan-400" : activeMode === "noise" ? "bg-rose-400" : "bg-emerald-400"
              } animate-pulse`} />
              <span className="tracking-wider">
                {activeMode === "intent" && "РЕЖИМ: ТАЗА МОТОРЛЫҚ СИГНАЛ"}
                {activeMode === "noise" && "РЕЖИМ: БҰЛШЫҚЕТ (EMG) ШУЫ БАСЫП КЕТТІ"}
                {activeMode === "cascade" && "РЕЖИМ: КАСКАД СИГНАЛДЫ ҚОРҒАП ТҰР"}
              </span>
            </div>

            <div className="text-[11px] font-mono text-neutral-400 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
              СИГНАЛ САПАСЫ: <span className="text-white font-medium">{telemetryGain}</span>
            </div>
          </div>

          {/* Top-Right Camera Angle Selector */}
          <div className="absolute top-6 right-6 z-20 flex flex-col sm:flex-row items-end sm:items-center gap-2">
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-[11px] font-mono">
              <button
                onClick={() => setViewPreset("motor")}
                className={`px-3 py-1 rounded-full transition-all ${
                  cameraPreset === "motor" ? "bg-cyan-500/20 text-cyan-300 font-medium" : "text-neutral-400 hover:text-white"
                }`}
              >
                ТӨБЕДЕН (МОТОР)
              </button>
              <button
                onClick={() => setViewPreset("temporal")}
                className={`px-3 py-1 rounded-full transition-all ${
                  cameraPreset === "temporal" ? "bg-rose-500/20 text-rose-300 font-medium" : "text-neutral-400 hover:text-white"
                }`}
              >
                САМАЙ (ШАЙНАУ)
              </button>
              <button
                onClick={() => setViewPreset("front")}
                className={`px-3 py-1 rounded-full transition-all ${
                  cameraPreset === "front" ? "bg-white/20 text-white font-medium" : "text-neutral-400 hover:text-white"
                }`}
              >
                360° ШОЛУ
              </button>
            </div>
          </div>

          {/* Bottom-Left Live Oscilloscope Telemetry Panel */}
          <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2 max-w-sm">
            <div className="p-4 rounded-2xl border border-white/15 bg-[#050608]/90 backdrop-blur-md">
              <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 mb-2 gap-4">
                <span className="flex items-center gap-2">
                  <Activity size={12} className={activeMode === "noise" ? "text-rose-400 animate-bounce" : "text-cyan-400"} />
                  <span>НАҚТЫ УАҚЫТТАҒЫ ЭЭГ СИГНАЛЫ</span>
                </span>
                <span className="text-white font-mono">250 HZ</span>
              </div>

              {/* Dynamic Oscilloscope Waveform SVG */}
              <div className="h-16 w-full rounded-lg bg-black/60 border border-white/5 flex items-center justify-center overflow-hidden px-2 relative">
                {activeMode === "intent" && (
                  <svg className="w-full h-12 stroke-cyan-400" viewBox="0 0 300 50" fill="none">
                    <path
                      d="M0,25 Q25,5 50,25 T100,25 T150,25 T200,25 T250,25 T300,25"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="animate-[pulse_1.5s_ease-in-out_infinite]"
                    />
                  </svg>
                )}
                {activeMode === "noise" && (
                  <svg className="w-full h-14 stroke-rose-400" viewBox="0 0 300 50" fill="none">
                    <path
                      d="M0,25 L15,5 L30,45 L45,10 L60,40 L75,2 L90,48 L110,12 L130,42 L150,5 L170,45 L190,8 L210,40 L230,12 L250,44 L270,10 L290,38 L300,25"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {activeMode === "cascade" && (
                  <div className="w-full flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400">
                      <span>СҮЗГІДЕН ӨТКЕН ТАЗА НИЕТ</span>
                      <span>100% ҚОРҒАЛҒАН</span>
                    </div>
                    <svg className="w-full h-8 stroke-emerald-400" viewBox="0 0 300 50" fill="none">
                      <path
                        d="M0,25 Q30,10 60,25 T120,25 T180,25 T240,25 T300,25"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="mt-2 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
                <span>АРНА: C3-Cz-C4 (ЭЭГ)</span>
                <span className={activeMode === "noise" ? "text-rose-400 font-semibold" : "text-emerald-400"}>
                  {activeMode === "noise" ? "⚠ ҚАТЕ БҰЙРЫҚ ҚАУПІ" : "✓ НИЕТ СЕНІМДІ"}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom-Right Anatomical Inspector Card */}
          <div className="absolute bottom-6 right-6 z-20 hidden md:block max-w-sm">
            <div className="p-4 rounded-2xl border border-white/15 bg-[#050608]/90 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1.5">
                <span className="font-semibold uppercase tracking-wider">{currentLobe.nameKz}</span>
                <span className="text-[10px] text-white/50">{currentLobe.status}</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 italic mb-2">
                {currentLobe.nameLat}
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-3">
                {currentLobe.roleKz}
              </p>
              <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-neutral-400">
                <span>АРНАЛАР: {currentLobe.electrodes}</span>
                <span className="text-cyan-300">{currentLobe.signalType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Interactive Explanation Cards Below the 3D Workbench */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div 
            onClick={() => handleModeChange("intent")}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMode === "intent"
                ? "border-cyan-400/60 bg-cyan-950/20 shadow-[0_8px_30px_rgba(0,229,255,0.15)]"
                : "border-white/10 bg-[#080d14]/60 hover:border-white/25"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-cyan-400">01 // ТАЗА НИЕТТІ ҰСТАУ</span>
              <Activity size={16} className="text-cyan-400" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">Моторлық қыртыс ырғағы</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Адам сол қолын немесе оң қолын қозғауды ойлағанда, C3/Cz/C4 арналарында 8-12 Гц жиілікті Mu-ырғағы өзгереді. MIORA бұл сигналды нақты ниет ретінде тіркейді.
            </p>
          </div>

          <div 
            onClick={() => handleModeChange("noise")}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMode === "noise"
                ? "border-rose-400/60 bg-rose-950/20 shadow-[0_8px_30px_rgba(244,63,94,0.15)]"
                : "border-white/10 bg-[#080d14]/60 hover:border-white/25"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-rose-400">02 // БҰЛШЫҚЕТ КЕДЕРГІСІ</span>
              <AlertTriangle size={16} className="text-rose-400" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">Шайнау кезіндегі EMG шуы</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Шайнау, жұтыну немесе тістену кезінде самай бұлшықеттері ЭЭГ сигналынан 10 есе қуатты электрлік импульс туғызады. Қарапайым BCI мұны қате команда деп қабылдап, бұрыс қимыл жасайды.
            </p>
          </div>

          <div 
            onClick={() => handleModeChange("cascade")}
            className={`p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMode === "cascade"
                ? "border-emerald-400/60 bg-emerald-950/20 shadow-[0_8px_30px_rgba(0,230,118,0.15)]"
                : "border-white/10 bg-[#080d14]/60 hover:border-white/25"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-emerald-400">03 // 4 ШЛЮЗДІ ҚОРҒАНЫС</span>
              <ShieldCheck size={16} className="text-emerald-400" />
            </div>
            <h3 className="text-base font-medium text-white mb-2">Команданың 100% сақталуы</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              MIORA каскады шайнау шуын бірден айырып, сарапшының 4 тексеру шлюзінен өткізеді. Егер сенімділік жеткіліксіз болса — базалық шешімді сақтап, қате бұйрыққа тыйым салады.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}