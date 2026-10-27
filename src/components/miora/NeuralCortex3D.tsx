"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  Radio, 
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  Cpu,
  BarChart3,
  Layers,
  Sparkles,
  Info
} from "lucide-react";

type DiagnosticMode = "intent" | "noise" | "cascade";
type CameraPreset = "front" | "motor" | "temporal";
type MotorIntent = "left" | "right" | "bilateral" | "rest";
type EmgLevel = 0 | 30 | 75 | 100;
type ProtectionTier = "raw" | "miora";
type SignalDisplayMode = "oscilloscope" | "fft";

interface LobeInfo {
  nameKz: string;
  nameLat: string;
  electrodes: string;
  roleKz: string;
  signalType: string;
  status: string;
  impedance: string;
  frequency: string;
}

const LOBE_DETAILS: Record<string, LobeInfo> = {
  motor: {
    nameKz: "Біріншілік моторлық қыртыс",
    nameLat: "Primary Motor Cortex (Brodmann Area 4)",
    electrodes: "C3, Cz, C4 (10-20 Халықаралық жүйесі)",
    roleKz: "Қол мен саусақ қозғалысын жоспарлау және орындау орталығы. Қозғалысты елестеткенде контралатеральды жартышарда 8–12 Гц Mu-ырғағының десинхронизациясы (ERD) туындайды.",
    signalType: "Mu-rhythm (8–12 Hz) & Beta (18–26 Hz)",
    status: "ОҢТАЙЛЫ СИГНАЛ (OPTIMAL CAPTURE)",
    impedance: "C3: 3.8 kΩ | C4: 4.1 kΩ",
    frequency: "10.2 Hz Peak (Mu-band)",
  },
  temporal: {
    nameKz: "Самай қыртысы және шайнау бұлшықеттері",
    nameLat: "Temporal Cortex & Musculus Masseter",
    electrodes: "T3, T4 (Самай арналары)",
    roleKz: "Шайнау, жұтыну және тістену кезінде күшті биоэлектрлік импульстар (40–120 Гц EMG) туындап, көршілес моторлық арналарды қарқынды басып кететін қауіпті аймақ.",
    signalType: "High-Amplitude EMG Spikes (40–120 Hz)",
    status: "БҰЛШЫҚЕТ АРТЕФАКТ АЙМАҒЫ",
    impedance: "T3: 3.2 kΩ | T4: 3.4 kΩ",
    frequency: "54.8 Hz Peak (Muscle MUAP)",
  },
  frontal: {
    nameKz: "Маңдай алды ассоциативті қыртысы",
    nameLat: "Prefrontal Cortex (Brodmann Areas 9/10/46)",
    electrodes: "F3, Fz, F4 (Маңдай арналары)",
    roleKz: "Когнитивті бақылау, шешім қабылдау және зейін орталығы. Көз жыпылықтауынан (EOG) және мимикалық бұлшықеттерден келетін төмен жиілікті ауытқуларды бақылайды.",
    signalType: "Theta (4–8 Hz) & Low Beta (13–18 Hz)",
    status: "МОНИТОРИНГ ЖҮРГІЗІЛУДЕ",
    impedance: "Fz: 2.4 kΩ | F3: 3.1 kΩ",
    frequency: "6.4 Hz Peak (Frontal Theta)",
  },
};

export default function NeuralCortex3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // High-Fidelity Diagnostic State
  const [loading, setLoading] = useState(true);
  const [activeMode, setActiveMode] = useState<DiagnosticMode>("intent");
  const [activeLobeKey, setActiveLobeKey] = useState<string>("motor");
  const [cameraPreset, setCameraPreset] = useState<CameraPreset>("motor");
  
  // Interactive Simulation Parameters
  const [motorIntent, setMotorIntent] = useState<MotorIntent>("left");
  const [emgLevel, setEmgLevel] = useState<EmgLevel>(0);
  const [protectionTier, setProtectionTier] = useState<ProtectionTier>("miora");
  const [displayMode, setDisplayMode] = useState<SignalDisplayMode>("oscilloscope");
  const [isPaused, setIsPaused] = useState(false);

  // Three.js References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const brainPivotRef = useRef<THREE.Group | null>(null);
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 14, 11));
  const targetLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));
  const currentLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const electrodeMeshesRef = useRef<THREE.Mesh[]>([]);
  const auraLightRef = useRef<THREE.PointLight | null>(null);
  const brainMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const sparkPointsRef = useRef<THREE.Points | null>(null);

  // Derived Physical Metrics
  const telemetry = useMemo(() => {
    let snrDb = 18.4;
    let statusText = "ТАЗА МОТОРЛЫҚ СИГНАЛ (SNR: +18.4 dB)";
    let confidence = 94.2;
    let decoderState = "CORRECT_INTENT";
    
    if (emgLevel === 30) {
      snrDb = 3.8;
      statusText = "ЖЕҢІЛ ТІСТЕНУ АРТЕФАКТІСІ (SNR: +3.8 dB)";
      confidence = protectionTier === "miora" ? 91.5 : 62.0;
      decoderState = protectionTier === "miora" ? "PROTECTED_ACCURATE" : "UNSTABLE";
    } else if (emgLevel === 75) {
      snrDb = -14.6;
      statusText = "ТАҒАМ ШАЙНАУ АПАТТЫ ШУЫ (SNR: -14.6 dB)";
      confidence = protectionTier === "miora" ? 88.6 : 31.4;
      decoderState = protectionTier === "miora" ? "GATE_OVERRIDE_SECURED" : "MISCLASSIFIED";
    } else if (emgLevel === 100) {
      snrDb = -24.2;
      statusText = "ШЕКТІК БРУКСИЗМ КЕДЕРГІСІ (SNR: -24.2 dB)";
      confidence = protectionTier === "miora" ? 84.1 : 18.2;
      decoderState = protectionTier === "miora" ? "REFUSAL_SAFE_HOLD" : "RANDOM_CORRUPT";
    }

    return { snrDb, statusText, confidence, decoderState };
  }, [emgLevel, protectionTier]);

  // Smooth Camera Orientation Preset Switcher
  const setViewPreset = useCallback((preset: CameraPreset) => {
    setCameraPreset(preset);
    if (preset === "motor") {
      targetCamPosRef.current.set(0, 14, 11);
      targetLookAtRef.current.set(0, 2, 0);
      setActiveLobeKey("motor");
    } else if (preset === "temporal") {
      targetCamPosRef.current.set(13, 3, 11);
      targetLookAtRef.current.set(0, -0.5, 0);
      setActiveLobeKey("temporal");
    } else {
      targetCamPosRef.current.set(0, 3, 18);
      targetLookAtRef.current.set(0, 0, 0);
      setActiveLobeKey("frontal");
    }
  }, []);

  // Standard Diagnostic Mode Handler
  const handleModeChange = useCallback((mode: DiagnosticMode) => {
    setActiveMode(mode);
    if (mode === "intent") {
      setViewPreset("motor");
      setMotorIntent("left");
      setEmgLevel(0);
      setProtectionTier("miora");
    } else if (mode === "noise") {
      setViewPreset("temporal");
      setEmgLevel(75);
      setProtectionTier("raw");
    } else if (mode === "cascade") {
      setViewPreset("front");
      setEmgLevel(75);
      setProtectionTier("miora");
    }
  }, [setViewPreset]);

  // =========================================================================
  // 1. Three.js 3D Cortex WebGL Engine
  // =========================================================================
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050608, 0.014);

    const width = container.clientWidth;
    const height = container.clientHeight || 580;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 14, 11);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Dynamic High-Precision Lighting
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

    // Synaptic Neural Sparks Particle Cloud
    const sparkCount = 420;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 7.5 + Math.random() * 5.0;

      sparkPositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
      sparkPositions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta) + 0.5;
      sparkPositions[i * 3 + 2] = rad * Math.cos(phi);

      sparkColors[i * 3] = 0.0;
      sparkColors[i * 3 + 1] = 0.9;
      sparkColors[i * 3 + 2] = 1.0;
    }
    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeometry.setAttribute("color", new THREE.BufferAttribute(sparkColors, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparks);
    sparkPointsRef.current = sparks;

    // Brain Hierarchy Pivot
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);
    brainPivotRef.current = brainGroup;

    // Clinical 10-20 Electrode Coordinates
    const electrodesGroup = new THREE.Group();
    brainGroup.add(electrodesGroup);

    const electrodeCoords = [
      { id: "Cz", pos: [0, 4.2, 0.2], label: "Cz (Vertex)", color: 0x00e5ff, lobe: "motor" },
      { id: "C3", pos: [-2.6, 3.8, 0.4], label: "C3 (Left Motor / Right Hand)", color: 0x00e5ff, lobe: "motor" },
      { id: "C4", pos: [2.6, 3.8, 0.4], label: "C4 (Right Motor / Left Hand)", color: 0x00e5ff, lobe: "motor" },
      { id: "T3", pos: [-3.8, 0.2, 0.8], label: "T3 (Temporal / Left Masseter)", color: 0xf43f5e, lobe: "temporal" },
      { id: "T4", pos: [3.8, 0.2, 0.8], label: "T4 (Temporal / Right Masseter)", color: 0xf43f5e, lobe: "temporal" },
      { id: "Fz", pos: [0, 3.2, 3.5], label: "Fz (Prefrontal)", color: 0x10b981, lobe: "frontal" },
    ];

    const electrodeSpheres: THREE.Mesh[] = [];
    electrodeCoords.forEach((node) => {
      const geom = new THREE.SphereGeometry(0.2, 16, 16);
      const mat = new THREE.MeshBasicMaterial({ color: node.color });
      const sphere = new THREE.Mesh(geom, mat);
      sphere.position.set(node.pos[0], node.pos[1], node.pos[2]);

      const ringGeom = new THREE.RingGeometry(0.26, 0.36, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: node.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.lookAt(0, 10, 0);
      sphere.add(ring);

      sphere.userData = { id: node.id, label: node.label, lobe: node.lobe };
      electrodesGroup.add(sphere);
      electrodeSpheres.push(sphere);
    });
    electrodeMeshesRef.current = electrodeSpheres;

    // Load Anatomical Human Brain GLB
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
        pivot.rotation.x = -Math.PI / 2;
        pivot.rotation.z = Math.PI;

        brainGroup.add(pivot);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading brain GLB model:", error);
        setLoading(false);
      }
    );

    // Raycaster for Interactive Electrode Inspection
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
        const lobe = hit.userData.lobe || hit.parent?.userData.lobe;
        if (lobe && LOBE_DETAILS[lobe]) {
          setActiveLobeKey(lobe);
        }
      }
    };

    const dom = renderer.domElement;
    dom.addEventListener("click", onCanvasClick);

    // Interactive Drag Controls
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

    // Zoom via Wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetCamPosRef.current.z = THREE.MathUtils.clamp(
        targetCamPosRef.current.z + e.deltaY * 0.015,
        9,
        25
      );
    };
    dom.addEventListener("wheel", onWheel, { passive: false });

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth Camera Interpolation
      camera.position.lerp(targetCamPosRef.current, 0.05);
      currentLookAtRef.current.lerp(targetLookAtRef.current, 0.05);
      camera.lookAt(currentLookAtRef.current);

      if (!isDragging) {
        brainGroup.rotation.y += 0.0022;
        velocity.x *= 0.95;
        velocity.y *= 0.95;
        brainGroup.rotation.x += velocity.x;
      }

      // Dynamic Electrode Pulse Rate
      electrodeMeshesRef.current.forEach((mesh, index) => {
        const pulseFrequency = mesh.userData.id === "T3" || mesh.userData.id === "T4" ? 8 : 4;
        const scaleVal = 1.0 + Math.sin(time * pulseFrequency + index) * 0.2;
        mesh.scale.set(scaleVal, scaleVal, scaleVal);
      });

      if (auraLightRef.current) {
        const pulse = 1 + Math.sin(time * 3.5) * 0.25;
        auraLightRef.current.intensity = 5.2 * pulse;
      }

      sparks.rotation.y = time * 0.025;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 580;
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
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);

      brainMaterialsRef.current.forEach((mat) => mat.dispose());
      electrodeSpheres.forEach((sph) => sph.geometry.dispose());
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, []);

  // Update Brain Materials and Lighting Color Based on Diagnostic Parameters
  useEffect(() => {
    if (brainMaterialsRef.current.length === 0) return;

    if (emgLevel >= 75 && protectionTier === "raw") {
      // Severe Unprotected EMG Noise Contamination (Crimson Alert)
      brainMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(0x28080c);
        mat.emissive.setHex(0xf43f5e);
        mat.emissiveIntensity = 0.42;
      });
      if (auraLightRef.current) auraLightRef.current.color.setHex(0xf43f5e);
    } else if (protectionTier === "miora" && emgLevel >= 30) {
      // MIORA 4-Gate Active Filtering & Protection (Emerald Shield)
      brainMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(0x042416);
        mat.emissive.setHex(0x10b981);
        mat.emissiveIntensity = 0.38;
      });
      if (auraLightRef.current) auraLightRef.current.color.setHex(0x10b981);
    } else {
      // Pure Motor Intention State (Electric Cyan)
      brainMaterialsRef.current.forEach((mat) => {
        mat.color.setHex(0x041828);
        mat.emissive.setHex(0x00e5ff);
        mat.emissiveIntensity = 0.28;
      });
      if (auraLightRef.current) auraLightRef.current.color.setHex(0x00e5ff);
    }
  }, [emgLevel, protectionTier]);

  // =========================================================================
  // 2. High-Precision 60 FPS Electrophysiology Signal & FFT Engine
  // =========================================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let sampleTime = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      if (isPaused) return;

      const w = canvas.width;
      const h = canvas.height;

      // Dark CRT Phosphor Fade Background
      ctx.fillStyle = "rgba(5, 7, 10, 0.28)";
      ctx.fillRect(0, 0, w, h);

      sampleTime += 0.055;

      if (displayMode === "oscilloscope") {
        // Draw 4-Channel Electrophysiological Traces
        const channels = [
          { name: "C3 (Сол қыртыс · Оң қол)", color: "#38bdf8", baseAmp: motorIntent === "right" ? 5 : 24, isContralateral: motorIntent === "right" },
          { name: "C4 (Оң қыртыс · Сол қол)", color: "#00e5ff", baseAmp: motorIntent === "left" ? 5 : 24, isContralateral: motorIntent === "left" },
          { name: "T3/T4 (Самай EMG арнасы)", color: emgLevel > 0 ? "#f43f5e" : "#64748b", isEmg: true },
          { name: "MIORA СҮЗГІЛЕНГЕН НИЕТ", color: protectionTier === "miora" ? "#10b981" : "#e11d48", isOutput: true },
        ];

        const rowHeight = h / channels.length;

        channels.forEach((ch, idx) => {
          const centerY = idx * rowHeight + rowHeight / 2;

          // Channel grid guide
          ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, centerY);
          ctx.lineTo(w, centerY);
          ctx.stroke();

          // Channel Label & Status
          ctx.font = "10px monospace";
          ctx.fillStyle = ch.color;
          ctx.fillText(ch.name, 12, idx * rowHeight + 16);

          if (ch.isContralateral) {
            ctx.fillStyle = "#38bdf8";
            ctx.fillText("[MU-ERD ДЕСИНХРОНИЗАЦИЯ: 80% БӘСЕҢДЕУ]", 210, idx * rowHeight + 16);
          } else if (ch.isEmg && emgLevel > 0) {
            ctx.fillStyle = "#f43f5e";
            ctx.fillText(`[EMG ШУЫ: ${emgLevel}% ҚУАТ // 140+ μV ШЫҢДАР]`, 210, idx * rowHeight + 16);
          } else if (ch.isOutput) {
            ctx.fillStyle = protectionTier === "miora" ? "#10b981" : "#f43f5e";
            ctx.fillText(protectionTier === "miora" ? "✓ 4-ШЛЮЗ: ТАЗА НИЕТ САҚТАЛДЫ" : "⚠ ҚОРҒАНЫССЫЗ: ҚАТЕ БҰЙРЫҚ ҚАУПІ", 210, idx * rowHeight + 16);
          }

          // Trace Synthesis
          ctx.beginPath();
          ctx.strokeStyle = ch.color;
          ctx.lineWidth = ch.isOutput ? 2.0 : 1.4;

          for (let x = 0; x < w; x += 3) {
            const t = sampleTime + x * 0.04;
            let y = centerY;

            if (ch.isEmg) {
              // Temporal EMG noise channel
              if (emgLevel > 0) {
                const emgNoise = (Math.sin(t * 14.5) * 6 + Math.cos(t * 28.2) * 8 + (Math.random() - 0.5) * 22) * (emgLevel / 50);
                y += emgNoise;
              } else {
                y += Math.sin(t * 1.5) * 2 + (Math.random() - 0.5) * 2;
              }
            } else if (ch.isOutput) {
              // Final Decision Channel
              if (protectionTier === "miora") {
                // Clean reconstructed sine intention wave
                const targetAmp = motorIntent === "rest" ? 18 : 8;
                y += Math.sin(t * 2.8) * targetAmp + Math.cos(t * 0.9) * 3;
              } else {
                // Unprotected: contaminated by EMG noise
                const leakNoise = (emgLevel / 100) * (Math.sin(t * 12.0) * 14 + (Math.random() - 0.5) * 20);
                y += Math.sin(t * 2.8) * 12 + leakNoise;
              }
            } else {
              // Motor C3/C4 Electrodes
              const muWave = Math.sin(t * 2.5) * (ch.baseAmp ?? 24);
              const betaHarmonic = Math.sin(t * 5.8) * 4;
              let traceY = muWave + betaHarmonic;

              // EMG leakage into motor cortex
              if (emgLevel > 0) {
                const emgLeak = (Math.sin(t * 11.2) * 4 + (Math.random() - 0.5) * 12) * (emgLevel / 100);
                traceY += emgLeak;
              }
              y += traceY;
            }

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        });
      } else {
        // Frequency Domain: FFT Power Spectral Density (0–60 Hz)
        const bands = [
          { name: "2 Hz (Delta)", freq: 2, power: 4.2 },
          { name: "4 Hz (Theta)", freq: 4, power: 6.8 },
          { name: "6 Hz (Theta)", freq: 6, power: 8.1 },
          { name: "8 Hz (Alpha/Mu)", freq: 8, power: motorIntent === "rest" ? 22 : 12 },
          { name: "10 Hz (Peak Mu)", freq: 10, power: motorIntent === "rest" ? 34 : (motorIntent === "left" || motorIntent === "right") ? 7.2 : 28 },
          { name: "12 Hz (Mu End)", freq: 12, power: 14.5 },
          { name: "16 Hz (Beta-1)", freq: 16, power: 11.0 },
          { name: "20 Hz (Beta-2)", freq: 20, power: 13.8 },
          { name: "24 Hz (Beta-3)", freq: 24, power: 9.4 },
          { name: "30 Hz (Gamma)", freq: 30, power: 5.2 },
          { name: "40 Hz (EMG High)", freq: 40, power: emgLevel > 0 ? emgLevel * 0.95 : 3.1 },
          { name: "48 Hz (EMG Burst)", freq: 48, power: emgLevel > 0 ? emgLevel * 1.4 : 2.5 },
          { name: "56 Hz (EMG Spike)", freq: 56, power: emgLevel > 0 ? emgLevel * 1.8 : 2.0 },
          { name: "64 Hz (Wide Noise)", freq: 64, power: emgLevel > 0 ? emgLevel * 1.1 : 1.8 },
        ];

        const barWidth = (w - 80) / bands.length;
        const maxBarHeight = h - 70;

        bands.forEach((b, i) => {
          const x = 50 + i * barWidth;
          const normalizedHeight = Math.min(maxBarHeight, (b.power / 140) * maxBarHeight);
          const y = h - 35 - normalizedHeight;

          // Color gradient: Cyan for Mu-band, Crimson for EMG-band
          const isMuBand = b.freq >= 8 && b.freq <= 12;
          const isEmgBand = b.freq >= 40;

          ctx.fillStyle = isEmgBand && emgLevel > 0
            ? "rgba(244, 63, 94, 0.85)"
            : isMuBand
            ? "rgba(0, 229, 255, 0.85)"
            : "rgba(148, 163, 184, 0.4)";

          ctx.fillRect(x + 4, y, barWidth - 8, normalizedHeight);

          // Labels
          ctx.font = "9px monospace";
          ctx.fillStyle = "#94a3b8";
          ctx.fillText(`${b.freq}Hz`, x + 6, h - 18);

          if (isMuBand && (motorIntent === "left" || motorIntent === "right")) {
            ctx.fillStyle = "#00e5ff";
            ctx.fillText("ERD", x + 6, y - 8);
          } else if (isEmgBand && emgLevel >= 75) {
            ctx.fillStyle = "#f43f5e";
            ctx.fillText("EMG!", x + 4, y - 8);
          }
        });

        // Graph Legend
        ctx.font = "11px monospace";
        ctx.fillStyle = "#f8fafc";
        ctx.fillText("POWER SPECTRAL DENSITY (PSD) // 0–64 HZ FAST FOURIER TRANSFORM", 50, 25);
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("■ 8–12 Гц: Mu-Ырғағы (Ниет) | ■ 40–64 Гц: Шайнау EMG Шуы", 50, 42);
      }
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [displayMode, motorIntent, emgLevel, protectionTier, isPaused]);

  const currentLobe = LOBE_DETAILS[activeLobeKey] || LOBE_DETAILS.motor;

  return (
    <section id="cortex" className="py-24 px-6 md:px-12 bg-[#050608] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center justify-center gap-2">
            <Radio size={14} className="animate-pulse" />
            <span>03 // ЖОҒАРЫ ДӘЛДІКТЕГІ НЕЙРО-ДИАГНОСТИКАЛЫҚ СТАНЦИЯ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-4">
            Қозғалыс ниеті мен EMG шуын{" "}
            <span className="font-serif italic text-white/95 font-normal">
              модельдеу
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            Моторлық қыртыстағы 8–12 Гц Mu-десинхронизациясы (ERD) мен самай бұлшықеттерінің 40–120 Гц шайнау артефактілерін нақты уақытта модельдеу. Төменде физикалық 4-арналы осциллограф, жиіліктік спектр (FFT) және 10-20 жүйесінің 3D топологиялық сканері берілген.
          </p>
        </div>

        {/* High-Level Diagnostic Mode Switcher Ribbon (Preserving Test Selectors) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
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
                ? "bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.25)]"
                : "bg-white/[0.03] border-white/15 text-neutral-400 hover:text-white hover:border-white/30"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "cascade" ? "bg-emerald-400 animate-pulse" : "bg-neutral-600"}`} />
            <span>3. MIORA 4-GATE ҚОРҒАНЫСЫ</span>
          </button>
        </div>

        {/* Master Workbench Container */}
        <div className="rounded-3xl border border-white/15 bg-[#07090d] shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Top Workbench Diagnostic Status Bar */}
          <div className="px-6 py-4 border-b border-white/10 bg-[#050608]/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full ${
                emgLevel >= 75 && protectionTier === "raw" ? "bg-rose-500 animate-ping" : protectionTier === "miora" ? "bg-emerald-400 animate-pulse" : "bg-cyan-400 animate-pulse"
              }`} />
              <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                СТАТУС: {telemetry.statusText}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-neutral-300">
                <span>ДЕКОДЕР СЕНІМДІЛІГІ:</span>
                <strong className={telemetry.confidence >= 85 ? "text-emerald-400 font-bold" : "text-rose-400 font-bold"}>
                  {telemetry.confidence.toFixed(1)}%
                </strong>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-neutral-400">
                <span>ДИСКРЕТТЕУ:</span>
                <span className="text-white">250 S/s · 24-BIT</span>
              </div>
            </div>
          </div>

          {/* 3D Anatomical Viewport and Controls Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
            
            {/* 3D WebGL Canvas Area (7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[580px] border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-[#080d14] to-[#040608]">
              {loading && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050608]/90 backdrop-blur-md">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                    <span className="font-mono text-xs text-cyan-400 tracking-wider">
                      АНАТОМИЯЛЫҚ 3D МОДЕЛЬ ЖҮКТЕЛУДЕ...
                    </span>
                  </div>
                </div>
              )}

              {/* Three.js Mount Container */}
              <div ref={containerRef} className="w-full h-full min-h-[480px] lg:min-h-[580px] cursor-grab active:cursor-grabbing" />

              {/* Floating Camera Presets */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-[11px] font-mono">
                <button
                  onClick={() => setViewPreset("motor")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    cameraPreset === "motor" ? "bg-cyan-500/20 text-cyan-300 font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  ТӨБЕДЕН (МОТОР)
                </button>
                <button
                  onClick={() => setViewPreset("temporal")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    cameraPreset === "temporal" ? "bg-rose-500/20 text-rose-300 font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  САМАЙ (ШАЙНАУ)
                </button>
                <button
                  onClick={() => setViewPreset("front")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    cameraPreset === "front" ? "bg-white/20 text-white font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  360° ШОЛУ
                </button>
              </div>

              {/* Bottom Floating Electrode Quick Info Badge */}
              <div className="absolute bottom-4 left-4 z-20 max-w-sm">
                <div className="p-3.5 rounded-xl border border-white/15 bg-[#050608]/90 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1">
                    <span className="font-semibold">{currentLobe.nameKz}</span>
                    <span className="text-[10px] text-white/50">{currentLobe.status}</span>
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 italic mb-1.5">{currentLobe.nameLat}</div>
                  <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-1.5 text-neutral-300">
                    <span>АРНА: {currentLobe.electrodes}</span>
                    <span className="text-cyan-300">{currentLobe.impedance}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Precision Diagnostic Control Deck (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#06080c]">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase">
                  <Sliders size={14} className="text-cyan-400" />
                  <span>ДИАГНОСТИКАЛЫҚ БАСҚАРУ</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">10-20 PHYSIOMODEL</span>
              </div>

              {/* 1. Motor Intention Selection */}
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2 flex items-center justify-between">
                  <span>1. Моторлық ниет (Motor Imagery Task):</span>
                  <span className="text-cyan-400 text-[11px] font-semibold">
                    {motorIntent === "left" && "Сол қол (C4 ERD)"}
                    {motorIntent === "right" && "Оң қол (C3 ERD)"}
                    {motorIntent === "bilateral" && "Екі қол бірге"}
                    {motorIntent === "rest" && "Тыныштық (Синхронды)"}
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMotorIntent("left")}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                      motorIntent === "left"
                        ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="font-semibold text-white">Сол қол</div>
                    <div className="text-[10px] text-cyan-300">C4 десинхронизация</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMotorIntent("right")}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                      motorIntent === "right"
                        ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="font-semibold text-white">Оң қол</div>
                    <div className="text-[10px] text-cyan-300">C3 десинхронизация</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMotorIntent("bilateral")}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                      motorIntent === "bilateral"
                        ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="font-semibold text-white">Екі қол</div>
                    <div className="text-[10px] text-neutral-400">С3+С4 симметрия</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMotorIntent("rest")}
                    className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                      motorIntent === "rest"
                        ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="font-semibold text-white">Тыныштық</div>
                    <div className="text-[10px] text-neutral-400">10 Гц базалық ырғақ</div>
                  </button>
                </div>
              </div>

              {/* 2. EMG Noise Artifact Injection Level */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-neutral-400">2. Самай бұлшықет кедергісі (EMG Noise Level):</span>
                  <span className={`font-semibold ${emgLevel >= 75 ? "text-rose-400" : emgLevel > 0 ? "text-amber-400" : "text-emerald-400"}`}>
                    {emgLevel === 0 && "0% (Таза ЭЭГ)"}
                    {emgLevel === 30 && "30% (Жеңіл тіс қысу)"}
                    {emgLevel === 75 && "75% (Тағам шайнау)"}
                    {emgLevel === 100 && "100% (Бруксизм)"}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {([0, 30, 75, 100] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setEmgLevel(level)}
                      className={`py-2 px-1 rounded-lg border text-[11px] font-mono text-center transition-all ${
                        emgLevel === level
                          ? level >= 75
                            ? "border-rose-400 bg-rose-950/40 text-rose-300 font-bold"
                            : level > 0
                            ? "border-amber-400 bg-amber-950/40 text-amber-300 font-bold"
                            : "border-emerald-400 bg-emerald-950/40 text-emerald-300 font-bold"
                          : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {level}%
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1.5">
                  <span>+18.4 dB (Таза)</span>
                  <span className="text-rose-400">Шек: &gt;35% Шу</span>
                  <span>-24.2 dB (Апатты)</span>
                </div>
              </div>

              {/* 3. Decision Protection & Cascade Filter Switcher */}
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2">
                  3. Декодерді қорғау деңгейі (Protection Architecture):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setProtectionTier("miora")}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      protectionTier === "miora"
                        ? "border-emerald-500/70 bg-emerald-950/25 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-0.5">
                      <ShieldCheck size={14} />
                      <span>MIORA 4-ШЛЮЗ</span>
                    </div>
                    <div className="text-[10px] text-neutral-300">Кедергіні толық оқшаулау</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProtectionTier("raw")}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      protectionTier === "raw"
                        ? "border-rose-500/70 bg-rose-950/25 text-white shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-rose-400 mb-0.5">
                      <AlertTriangle size={14} />
                      <span>ҚОРҒАНЫССЫЗ</span>
                    </div>
                    <div className="text-[10px] text-neutral-300">Базалық декодер қатесі</div>
                  </button>
                </div>
              </div>

              {/* Action Reset Row */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-500">
                <button
                  type="button"
                  onClick={() => {
                    setMotorIntent("left");
                    setEmgLevel(0);
                    setProtectionTier("miora");
                    setDisplayMode("oscilloscope");
                  }}
                  className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Бастапқы күйге қайтару</span>
                </button>
                <span className="text-[10px] text-cyan-400 font-semibold">КАЛИБРЛЕУ: ADS1299 ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Real-Time Dual-Domain Telemetry Station (Oscilloscope / FFT Canvas) */}
          <div className="p-6 sm:p-8 bg-[#05070a]">
            
            {/* Telemetry Switcher & Metadata Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setDisplayMode("oscilloscope")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      displayMode === "oscilloscope"
                        ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Activity size={13} />
                    <span>4-АРНАЛЫ ОСЦИЛЛОГРАФ (TIME DOMAIN)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDisplayMode("fft")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      displayMode === "fft"
                        ? "bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <BarChart3 size={13} />
                    <span>СПЕКТРЛІК ТАЛДАУ (FFT / PSD)</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
                <span className="text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                  МАСШТАБ: ±50 μV | 250 HZ
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                  КЕШІГУ: 14.2 MS
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className="px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/40 transition-colors"
                >
                  {isPaused ? "ЖАЛҒАСТЫРУ" : "ТОҚТАТУ (FREEZE)"}
                </button>
              </div>
            </div>

            {/* High-Resolution Live Canvas Viewport */}
            <div className="rounded-2xl border border-white/10 bg-[#040608] overflow-hidden shadow-inner relative">
              <canvas
                ref={canvasRef}
                width={1200}
                height={340}
                className="w-full h-[280px] sm:h-[340px] block"
              />
            </div>
          </div>
        </div>

        {/* Continuous Swiss Architectural Telemetry Dock (High-Density Engineering Specs) */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mt-12">
          
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3 text-cyan-400 font-mono text-xs">
              <span>01 // АНАЛОГТЫҚ СИГНАЛ</span>
              <Cpu size={15} />
            </div>
            <h4 className="text-white text-base font-medium mb-1.5">24-Bit ADC (ADS1299)</h4>
            <p className="text-neutral-400 text-xs leading-relaxed font-light mb-3">
              250 S/s дискреттеу жиілігі мен 1.0 μV RMS шу шегі ми қыртысындағы ең әлсіз микровольттық Mu-толқындарын жоғалтпай цифрландырады.
            </p>
            <div className="font-mono text-[10px] text-cyan-300/80">ДИАПАЗОН: 0.1 – 100 HZ</div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3 text-cyan-400 font-mono text-xs">
              <span>02 // ЭЛЕКТРОДТАР КЕДЕРГІСІ</span>
              <Activity size={15} />
            </div>
            <h4 className="text-white text-base font-medium mb-1.5">Impedance &lt; 5.0 kΩ</h4>
            <p className="text-neutral-400 text-xs leading-relaxed font-light mb-3">
              C3 (3.8 kΩ), C4 (4.1 kΩ) және самайлық T3 (3.2 kΩ) арналарының байланысы клиникалық стандартқа сәйкес тұрақты бақылауда ұсталады.
            </p>
            <div className="font-mono text-[10px] text-emerald-400">✓ КЛИНИКАЛЫҚ ҚАЛЫПТЫ</div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3 text-rose-400 font-mono text-xs">
              <span>03 // ШУДЫ ОҚШАУЛАУ (CMRR)</span>
              <AlertTriangle size={15} />
            </div>
            <h4 className="text-white text-base font-medium mb-1.5">110 dB CMRR & CAR</h4>
            <p className="text-neutral-400 text-xs leading-relaxed font-light mb-3">
              Common Average Referencing (CAR) және кеңістіктік Лапласиан сүзгісі арқылы 40–120 Гц шайнау артефактілері 98.4%-ға дейін сөндіріледі.
            </p>
            <div className="font-mono text-[10px] text-rose-300">50 HZ NOTCH FILTER Q=35</div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3 text-emerald-400 font-mono text-xs">
              <span>04 // ШЕШІМ ЛАТЕНТТІЛІГІ</span>
              <ShieldCheck size={15} />
            </div>
            <h4 className="text-white text-base font-medium mb-1.5">14.2 ms Hard Deadline</h4>
            <p className="text-neutral-400 text-xs leading-relaxed font-light mb-3">
              4-шлюзді каскадты шешім қабылдау 25 мс қауіпсіздік шегінен аспай, экзоскелет немесе протездің сүрінбей, лезде әрекет етуін қамтамасыз етеді.
            </p>
            <div className="font-mono text-[10px] text-emerald-300">100% ДЕТЕРМИНИРЛЕНГЕН</div>
          </div>

        </div>

      </div>
    </section>
  );
}
