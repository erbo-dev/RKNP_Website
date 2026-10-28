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
  const [webglError, setWebglError] = useState(false);
  const [webglRetryKey, setWebglRetryKey] = useState(0);
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
  const brainRadiusRef = useRef<number>(7.5);
  const cameraPresetRef = useRef<CameraPreset>("motor");
  const targetCamPosRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 14, 11));
  const targetLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 2, 0));
  const currentLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const electrodeMeshesRef = useRef<THREE.Mesh[]>([]);
  const auraLightRef = useRef<THREE.PointLight | null>(null);
  const brainMaterialsRef = useRef<THREE.MeshPhysicalMaterial[]>([]);
  const sparkPointsRef = useRef<THREE.Points | null>(null);
  const calloutBadgeRef = useRef<HTMLDivElement>(null);
  const calloutLineRef = useRef<SVGLineElement>(null);
  const calloutDotRef = useRef<SVGCircleElement>(null);

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

  // Geometric Camera Framing Calculation (adapts to aspect ratio to prevent clipping)
  const updateCameraFraming = useCallback((w: number, h: number) => {
    const camera = cameraRef.current;
    if (!camera) return;
    const aspect = Math.max(0.1, w / (h || 1));
    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    const fovY = (camera.fov * Math.PI) / 180;
    const fovX = 2 * Math.atan(Math.tan(fovY / 2) * aspect);
    const radius = brainRadiusRef.current;
    const distY = radius / Math.sin(fovY / 2);
    const distX = radius / Math.sin(fovX / 2);

    // Responsive framing factor: desktop (w >= 768) uses 0.98 (~27% larger perceived brain),
    // mobile uses 1.15 to prevent any screen border collision.
    const isDesktop = w >= 768;
    const paddingFactor = isDesktop ? 0.98 : 1.15;
    const optimalDistance = Math.max(distX, distY) * paddingFactor;

    const presetDirs: Record<CameraPreset, THREE.Vector3> = {
      motor: new THREE.Vector3(0, 1.35, 0.85).normalize(),
      temporal: new THREE.Vector3(1.65, 0.25, 0.15).normalize(),
      front: new THREE.Vector3(0, 0.22, 1.45).normalize(),
    };
    const lookAts: Record<CameraPreset, THREE.Vector3> = {
      motor: new THREE.Vector3(0, 0.5, 0),
      temporal: new THREE.Vector3(0, 0.2, 0),
      front: new THREE.Vector3(0, 0.2, 0),
    };

    const dir = presetDirs[cameraPresetRef.current] || presetDirs.motor;
    const targetLook = lookAts[cameraPresetRef.current] || lookAts.motor;
    targetLookAtRef.current.copy(targetLook);
    targetCamPosRef.current.copy(dir).multiplyScalar(optimalDistance).add(targetLook);
  }, []);

  // Smooth Camera Orientation Preset Switcher
  const setViewPreset = useCallback((preset: CameraPreset) => {
    setCameraPreset(preset);
    cameraPresetRef.current = preset;
    if (preset === "motor") {
      setActiveLobeKey("motor");
    } else if (preset === "temporal") {
      setActiveLobeKey("temporal");
    } else {
      setActiveLobeKey("frontal");
    }

    const container = containerRef.current;
    if (container) {
      updateCameraFraming(container.clientWidth, container.clientHeight || 580);
    }
  }, [updateCameraFraming]);

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

    let isMounted = true;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x050608, 0.014);

    const width = container.clientWidth;
    const height = container.clientHeight || 580;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 14, 11);
    cameraRef.current = camera;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to 2D topological schematic:", err);
      if (isMounted) {
        setWebglError(true);
        setLoading(false);
      }
      return;
    }

    // Controlled 4-Point High-Fidelity Scientific Lighting
    // 1. Balanced ambient for readable base contrast in shadow crevices
    const ambientLight = new THREE.AmbientLight(0x1a2230, 1.5);
    scene.add(ambientLight);

    // 2. Key Light (Top-Right-Front): Softened to 2.2 to eliminate harsh specular burn
    const keyLight = new THREE.DirectionalLight(0xf8fafc, 2.2);
    keyLight.position.set(12, 18, 14);
    scene.add(keyLight);

    // 3. Fill Light (Opposite Low-Left): Prevents deep shadows from becoming pure black
    const fillLight = new THREE.DirectionalLight(0x94a3b8, 1.3);
    fillLight.position.set(-14, -6, 6);
    scene.add(fillLight);

    // 4. Rim / Contour Light (Top-Back): Softened to 1.4 for delicate anatomical silhouette
    const rimLight = new THREE.DirectionalLight(0xdbeafe, 1.4);
    rimLight.position.set(-6, 16, -14);
    scene.add(rimLight);

    // 5. Localized Point Light: Focused neural signal accent near C3/Cz/C4 electrodes
    const dynamicAuraLight = new THREE.PointLight(0x00e5ff, 1.8, 30, 1.4);
    dynamicAuraLight.position.set(0, 4, 7);
    scene.add(dynamicAuraLight);
    auraLightRef.current = dynamicAuraLight;

    // Subtle Synaptic Sparks Particle Cloud (Subdued background nodes, out of cortex focus)
    const sparkCount = 64;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      // Place sparks safely outside the cortex body (11.0 to 17.5 radius)
      const rad = 11.0 + Math.random() * 6.5;

      sparkPositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
      sparkPositions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta) + 0.5;
      sparkPositions[i * 3 + 2] = rad * Math.cos(phi);

      sparkColors[i * 3] = 0.2;
      sparkColors[i * 3 + 1] = 0.8;
      sparkColors[i * 3 + 2] = 0.95;
    }
    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeometry.setAttribute("color", new THREE.BufferAttribute(sparkColors, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
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
        if (!isMounted) return;
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
            color: new THREE.Color(0x48515f), // refined medium slate-graphite with visible gyri folds
            roughness: 0.68, // matte scientific organic tissue feel, eliminating harsh plastic sheen
            metalness: 0.06, // non-metallic dielectric tissue for natural diffuse light capture
            clearcoat: 0.0, // remove artificial lacquered plastic gloss
            clearcoatRoughness: 0.8,
            emissive: new THREE.Color(0x000000),
            emissiveIntensity: 0.0,
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

        // Recalculate accurate bounding sphere for framing
        const fullBox = new THREE.Box3().setFromObject(brainGroup);
        const sphere = fullBox.getBoundingSphere(new THREE.Sphere());
        brainRadiusRef.current = Math.max(sphere.radius, 7.5);

        // Update framing with calculated radius
        updateCameraFraming(container.clientWidth, container.clientHeight || 580);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading brain GLB model:", error);
        if (isMounted) setLoading(false);
      }
    );

    // Initial camera framing
    updateCameraFraming(width, height);

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

    // Interactive Drag Controls (preserves user-oriented angle)
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
        45
      );
    };
    dom.addEventListener("wheel", onWheel, { passive: false });

    // Accessibility: Support prefers-reduced-motion
    const mediaQuery = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    let prefersReduced = mediaQuery ? mediaQuery.matches : false;
    const onMediaChange = (e: MediaQueryListEvent) => {
      prefersReduced = e.matches;
    };
    if (mediaQuery) {
      mediaQuery.addEventListener("change", onMediaChange);
    }

    // Lifecycle: Complete rAF stop/resume on offscreen and background tabs
    let isVisible = true;
    let isTabVisible = typeof document !== "undefined" ? !document.hidden : true;
    let isLoopRunning = false;
    let animId: number = 0;
    const clock = new THREE.Clock();

    const startLoop = () => {
      if (isLoopRunning || !isVisible || !isTabVisible) return;
      isLoopRunning = true;
      clock.getDelta(); // flush delta jump
      animate();
    };

    const stopLoop = () => {
      if (!isLoopRunning) return;
      isLoopRunning = false;
      cancelAnimationFrame(animId);
    };

    const animate = () => {
      if (!isLoopRunning) return;
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth Camera Interpolation
      camera.position.lerp(targetCamPosRef.current, 0.05);
      currentLookAtRef.current.lerp(targetLookAtRef.current, 0.05);
      camera.lookAt(currentLookAtRef.current);

      if (!isDragging && !prefersReduced) {
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
        auraLightRef.current.intensity = 4.2 * pulse;
      }

      if (!prefersReduced && sparkPointsRef.current) {
        sparkPointsRef.current.rotation.y = time * 0.025;
      }

      // Dynamic 3D Spatial Callout Projection onto 2D Viewport Overlay
      if (calloutBadgeRef.current && electrodeMeshesRef.current.length > 0 && container) {
        const targetId = activeLobeKey === "temporal" ? "T4" : activeLobeKey === "motor" ? "C4" : "Fz";
        const targetMesh = electrodeMeshesRef.current.find((m) => m.userData.id === targetId) || electrodeMeshesRef.current[0];
        if (targetMesh) {
          const worldPos = new THREE.Vector3();
          targetMesh.getWorldPosition(worldPos);

          const toCam = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();
          const normalApprox = worldPos.clone().normalize();
          const isFacing = normalApprox.dot(toCam) > -0.2;

          worldPos.project(camera);

          const cw = container.clientWidth;
          const ch = container.clientHeight;
          const sx = ((worldPos.x + 1) * cw) / 2;
          const sy = ((-worldPos.y + 1) * ch) / 2;

          if (isFacing && worldPos.z < 1 && sx >= 30 && sx <= cw - 120 && sy >= 30 && sy <= ch - 40 && cw >= 540) {
            const bx = Math.min(cw - 180, sx + 40);
            const by = Math.max(30, sy - 20);

            calloutBadgeRef.current.style.display = "flex";
            calloutBadgeRef.current.style.transform = `translate3d(${Math.round(bx)}px, ${Math.round(by)}px, 0)`;

            if (calloutLineRef.current) {
              calloutLineRef.current.setAttribute("x1", `${Math.round(sx)}`);
              calloutLineRef.current.setAttribute("y1", `${Math.round(sy)}`);
              calloutLineRef.current.setAttribute("x2", `${Math.round(bx)}`);
              calloutLineRef.current.setAttribute("y2", `${Math.round(by + 12)}`);
              calloutLineRef.current.style.display = "block";
            }
            if (calloutDotRef.current) {
              calloutDotRef.current.setAttribute("cx", `${Math.round(sx)}`);
              calloutDotRef.current.setAttribute("cy", `${Math.round(sy)}`);
              calloutDotRef.current.style.display = "block";
            }
          } else {
            calloutBadgeRef.current.style.display = "none";
            if (calloutLineRef.current) calloutLineRef.current.style.display = "none";
            if (calloutDotRef.current) calloutDotRef.current.style.display = "none";
          }
        }
      }

      renderer.render(scene, camera);
    };

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && isVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Intersection Observer to cancel animation when offscreen
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isTabVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      }, { threshold: 0.05 });
      observer.observe(container);
    }

    // WebGL Context Loss Handling
    const onContextLost = (e: Event) => {
      e.preventDefault();
      stopLoop();
      if (isMounted) setWebglError(true);
    };
    dom.addEventListener("webglcontextlost", onContextLost);

    // Container ResizeObserver: dynamic aspect ratio and framing recalculation
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          if (width > 0 && height > 0) {
            renderer.setSize(width, height);
            updateCameraFraming(width, height);
          }
        }
      });
      resizeObserver.observe(container);
    }

    startLoop();

    return () => {
      isMounted = false;
      stopLoop();
      if (observer) observer.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      if (mediaQuery) mediaQuery.removeEventListener("change", onMediaChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      dom.removeEventListener("pointerdown", onPointerDown);
      dom.removeEventListener("wheel", onWheel);
      dom.removeEventListener("click", onCanvasClick);
      dom.removeEventListener("webglcontextlost", onContextLost);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      brainMaterialsRef.current.forEach((mat) => mat.dispose());
      electrodeSpheres.forEach((sph) => sph.geometry.dispose());
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, [webglRetryKey, updateCameraFraming]);

  // Update Local Accent Lighting Color Based on Diagnostic Parameters
  useEffect(() => {
    if (brainMaterialsRef.current.length === 0) return;

    // The brain body stays neutral slate-graphite (0x444d5a) in all modes to maintain anatomical gyri readability.
    // Only the localized accent light and subtle aura adapt to the physiological state:
    if (emgLevel >= 75 && protectionTier === "raw") {
      // Unprotected EMG Noise Contamination: subtle warning rose accent near temporal lobe
      if (auraLightRef.current) {
        auraLightRef.current.color.setHex(0xf43f5e);
        auraLightRef.current.intensity = 1.8;
      }
    } else if (protectionTier === "miora" && emgLevel >= 30) {
      // MIORA 4-Gate Active Filtering: controlled emerald accent
      if (auraLightRef.current) {
        auraLightRef.current.color.setHex(0x10b981);
        auraLightRef.current.intensity = 1.6;
      }
    } else {
      // Pure Motor Intention: crisp focused cyan accent
      if (auraLightRef.current) {
        auraLightRef.current.color.setHex(0x00e5ff);
        auraLightRef.current.intensity = 1.8;
      }
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
    let isCanvasVisible = true;
    let isDocVisible = typeof document !== "undefined" ? !document.hidden : true;

    const onVisChange = () => {
      isDocVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisChange);

    let obs: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      obs = new IntersectionObserver(([entry]) => {
        isCanvasVisible = entry.isIntersecting;
      }, { threshold: 0.05 });
      obs.observe(canvas);
    }

    const render = () => {
      animId = requestAnimationFrame(render);
      if (isPaused || !isCanvasVisible || !isDocVisible) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
      const displayW = Math.round(rect.width);
      const displayH = Math.round(rect.height);

      if (displayW > 0 && displayH > 0) {
        const targetW = displayW * dpr;
        const targetH = displayH * dpr;
        if (canvas.width !== targetW || canvas.height !== targetH) {
          canvas.width = targetW;
          canvas.height = targetH;
        }
      }

      const w = displayW || 800;
      const h = displayH || 340;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Clean background matching simulator workbench
      ctx.fillStyle = "#040608";
      ctx.fillRect(0, 0, w, h);

      // Fine subtle grid pattern matching InteractiveDemo workbench (24px)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let gx = 0; gx < w; gx += 24) {
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
      }
      for (let gy = 0; gy < h; gy += 24) {
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy);
      }
      ctx.stroke();

      sampleTime += 0.055;

      if (displayMode === "oscilloscope") {
        const isMotorLobe = activeLobeKey === "motor";
        const isTemporalLobe = activeLobeKey === "temporal";
        const isCascadeActive = activeMode === "cascade";

        // Draw 4-Channel Electrophysiological Traces with Active Lobe Focus
        const channels = [
          {
            name: "C3 (Сол қыртыс · Оң қол)",
            color: isMotorLobe ? "#38bdf8" : "#0284c7",
            baseAmp: motorIntent === "right" ? 5 : 24,
            isContralateral: motorIntent === "right",
            lineWidth: isMotorLobe ? 2.2 : 1.3,
            isEmphasized: isMotorLobe,
          },
          {
            name: "C4 (Оң қыртыс · Сол қол)",
            color: isMotorLobe ? "#00e5ff" : "#06b6d4",
            baseAmp: motorIntent === "left" ? 5 : 24,
            isContralateral: motorIntent === "left",
            lineWidth: isMotorLobe ? 2.2 : 1.3,
            isEmphasized: isMotorLobe,
          },
          {
            name: "T3/T4 (Самай EMG арнасы)",
            color: isTemporalLobe ? "#f43f5e" : emgLevel > 0 ? "#e11d48" : "#64748b",
            isEmg: true,
            lineWidth: isTemporalLobe ? 2.4 : 1.3,
            isEmphasized: isTemporalLobe,
          },
          {
            name: "MIORA СҮЗГІЛЕНГЕН НИЕТ",
            color: protectionTier === "miora" ? "#10b981" : "#f43f5e",
            isOutput: true,
            lineWidth: isCascadeActive ? 2.4 : 1.6,
            isEmphasized: isCascadeActive,
          },
        ];

        const rowHeight = h / channels.length;

        channels.forEach((ch, idx) => {
          const centerY = idx * rowHeight + rowHeight / 2;

          // Channel centerline guide
          ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, centerY);
          ctx.lineTo(w, centerY);
          ctx.stroke();

          // Channel Label & Status
          ctx.font = ch.isEmphasized
            ? "bold 11px ui-monospace, SFMono-Regular, Menlo, monospace"
            : "11px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = ch.color;
          ctx.fillText(ch.name, 12, idx * rowHeight + 17);

          // Responsive secondary status indicator (compact on mobile)
          if (w >= 540) {
            if (ch.isContralateral) {
              ctx.fillStyle = "#38bdf8";
              ctx.fillText("[MU-ERD ДЕСИНХРОНИЗАЦИЯ: 80% БӘСЕҢДЕУ]", Math.min(240, w - 290), idx * rowHeight + 17);
            } else if (ch.isEmg && emgLevel > 0) {
              ctx.fillStyle = "#f43f5e";
              ctx.fillText(`[EMG ШУЫ: ${emgLevel}% ҚУАТ // 140+ μV ШЫҢДАР]`, Math.min(240, w - 280), idx * rowHeight + 17);
            } else if (ch.isOutput) {
              ctx.fillStyle = protectionTier === "miora" ? "#10b981" : "#f43f5e";
              ctx.fillText(protectionTier === "miora" ? "✓ 4-ШЛЮЗ: ТАЗА НИЕТ САҚТАЛДЫ" : "⚠ ҚОРҒАНЫССЫЗ: ҚАТЕ БҰЙРЫҚ ҚАУПІ", Math.min(240, w - 280), idx * rowHeight + 17);
            }
          } else {
            // Mobile compact badges
            if (ch.isContralateral) {
              ctx.fillStyle = "#38bdf8";
              ctx.fillText("[ERD -80%]", w - 85, idx * rowHeight + 17);
            } else if (ch.isEmg && emgLevel > 0) {
              ctx.fillStyle = "#f43f5e";
              ctx.fillText(`[EMG ${emgLevel}%]`, w - 85, idx * rowHeight + 17);
            } else if (ch.isOutput) {
              ctx.fillStyle = protectionTier === "miora" ? "#10b981" : "#f43f5e";
              ctx.fillText(protectionTier === "miora" ? "✓ MIORA" : "⚠ BYPASS", w - 75, idx * rowHeight + 17);
            }
          }

          // Trace Synthesis with Scoped Channel Emphasis
          ctx.beginPath();
          ctx.strokeStyle = ch.color;
          ctx.lineWidth = ch.lineWidth;
          ctx.lineJoin = "round";
          ctx.lineCap = "round";

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
          ctx.font = "10px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = "#94a3b8";
          ctx.fillText(`${b.freq}Hz`, x + 4, h - 18);

          if (isMuBand && (motorIntent === "left" || motorIntent === "right")) {
            ctx.fillStyle = "#00e5ff";
            ctx.fillText("ERD", x + 4, y - 8);
          } else if (isEmgBand && emgLevel >= 75) {
            ctx.fillStyle = "#f43f5e";
            ctx.fillText("EMG!", x + 4, y - 8);
          }
        });

        // Graph Legend
        ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
        ctx.fillStyle = "#f8fafc";
        ctx.fillText("POWER SPECTRAL DENSITY (PSD) // 0–64 HZ FAST FOURIER TRANSFORM", 50, 25);
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("■ 8–12 Гц: Mu-Ырғағы (Ниет) | ■ 40–64 Гц: Шайнау EMG Шуы", 50, 42);
      }

      ctx.restore();
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("visibilitychange", onVisChange);
      if (obs) obs.disconnect();
    };
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
            Қозғалыс ниеті мен EMG шуын модельдеу
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            Моторлық қыртыстағы 8–12 Гц Mu-десинхронизациясы (ERD) мен самай бұлшықеттерінің 40–120 Гц шайнау артефактілерін нақты уақытта модельдеу. Төменде физикалық 4-арналы осциллограф, жиіліктік спектр (FFT) және 10-20 жүйесінің 3D топологиялық сканері берілген.
          </p>
        </div>

        {/* High-Level Diagnostic Mode Switcher Ribbon (Preserving Test Selectors) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            data-cortex-mode="intent"
            onClick={() => handleModeChange("intent")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-normal transition-all border ${
              activeMode === "intent"
                ? "bg-cyan-500/15 border-cyan-400/80 text-cyan-200 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                : "bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/25"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "intent" ? "bg-cyan-400 animate-pulse" : "bg-neutral-600"}`} />
            <span className="font-mono text-[11px] text-cyan-400/80 font-bold">1.</span>
            <span>Моторлық ниет</span>
            <span className="font-mono text-[10px] text-neutral-400">(C3/Cz/C4)</span>
          </button>

          <button
            data-cortex-mode="noise"
            onClick={() => handleModeChange("noise")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-normal transition-all border ${
              activeMode === "noise"
                ? "bg-rose-500/15 border-rose-400/80 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.2)]"
                : "bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/25"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "noise" ? "bg-rose-400 animate-ping" : "bg-neutral-600"}`} />
            <span className="font-mono text-[11px] text-rose-400/80 font-bold">2.</span>
            <span>Шайнау кедергісі</span>
            <span className="font-mono text-[10px] text-neutral-400">(EMG Шу)</span>
          </button>

          <button
            data-cortex-mode="cascade"
            onClick={() => handleModeChange("cascade")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium tracking-normal transition-all border ${
              activeMode === "cascade"
                ? "bg-emerald-500/15 border-emerald-400/80 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                : "bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/25"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeMode === "cascade" ? "bg-emerald-400 animate-pulse" : "bg-neutral-600"}`} />
            <span className="font-mono text-[11px] text-emerald-400/80 font-bold">3.</span>
            <span>MIORA 4-Gate</span>
            <span className="font-mono text-[10px] text-neutral-400">Қорғанысы</span>
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
            <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-[580px] border-b lg:border-b-0 lg:border-r border-white/10 bg-[#06080c] bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,rgba(38,48,65,0.4),transparent_75%)]">
              {loading && !webglError && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050608]/90 backdrop-blur-md">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                    <span className="font-mono text-xs text-cyan-400 tracking-wider">
                      АНАТОМИЯЛЫҚ 3D МОДЕЛЬ ЖҮКТЕЛУДЕ...
                    </span>
                  </div>
                </div>
              )}

              {webglError && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#070a10] p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-white text-sm sm:text-base font-medium mb-1 font-mono tracking-wider">
                    3D WEBGL ЖЕДЕЛДЕТКІШІ ҚОЛЖЕТІМСІЗ
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-sm mb-4 leading-relaxed">
                    Құрылғыңызда WebGL өшірілген немесе графикалық үдеткіш контексті жоғалтты. Төменде 2D топографиялық карта қосылды.
                  </p>
                  <div className="w-56 h-36 relative border border-white/10 rounded-xl bg-black/50 flex items-center justify-center mb-4 p-2">
                    <svg viewBox="0 0 160 120" className="w-40 h-28 opacity-90">
                      <ellipse cx="80" cy="60" rx="55" ry="45" fill="none" stroke="#334155" strokeWidth="2" />
                      <path d="M 72 15 Q 80 5 88 15" fill="none" stroke="#334155" strokeWidth="2" />
                      <line x1="80" y1="15" x2="80" y2="105" stroke="#475569" strokeDasharray="3,3" strokeWidth="1.5" />
                      <circle cx="80" cy="55" r="4.5" fill="#00e5ff" />
                      <text x="80" y="47" fill="#00e5ff" fontSize="8" textAnchor="middle" fontFamily="monospace">Cz</text>
                      <circle cx="48" cy="55" r="4.5" fill="#00e5ff" />
                      <text x="38" y="58" fill="#00e5ff" fontSize="8" textAnchor="end" fontFamily="monospace">C3</text>
                      <circle cx="112" cy="55" r="4.5" fill="#00e5ff" />
                      <text x="122" y="58" fill="#00e5ff" fontSize="8" textAnchor="start" fontFamily="monospace">C4</text>
                      <circle cx="30" cy="72" r="4.5" fill="#f43f5e" />
                      <text x="22" y="75" fill="#f43f5e" fontSize="8" textAnchor="end" fontFamily="monospace">T3</text>
                      <circle cx="130" cy="72" r="4.5" fill="#f43f5e" />
                      <text x="138" y="75" fill="#f43f5e" fontSize="8" textAnchor="start" fontFamily="monospace">T4</text>
                      <circle cx="80" cy="32" r="4.5" fill="#10b981" />
                      <text x="80" y="27" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="monospace">Fz</text>
                    </svg>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setWebglError(false);
                      setLoading(true);
                      setWebglRetryKey((k) => k + 1);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono hover:bg-cyan-500/30 transition-all cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Қайта жүктеу (Retry WebGL)</span>
                  </button>
                </div>
              )}

              {/* Three.js Mount Container */}
              <div ref={containerRef} className="w-full h-full min-h-[480px] lg:min-h-[580px] cursor-grab active:cursor-grabbing" />

              {/* 3D Projected Spatial Callout Leader Overlay */}
              <svg className="absolute inset-0 pointer-events-none w-full h-full z-10 overflow-hidden">
                <line ref={calloutLineRef} stroke="rgba(0, 229, 255, 0.45)" strokeWidth="1.2" strokeDasharray="3,3" style={{ display: "none" }} />
                <circle ref={calloutDotRef} r="3.5" fill="#00e5ff" style={{ display: "none" }} />
              </svg>
              <div
                ref={calloutBadgeRef}
                className="absolute top-0 left-0 z-10 pointer-events-none hidden items-center gap-1.5 px-2.5 py-1 rounded-lg border border-cyan-500/40 bg-[#05080f]/90 backdrop-blur-md shadow-lg font-mono text-[10px]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-medium">{currentLobe.nameKz.split(" ")[0]}</span>
                <span className="text-cyan-300">({currentLobe.electrodes.split(" ")[0]})</span>
              </div>

              {/* Floating Camera Presets */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 p-1 rounded-full border border-white/10 bg-[#050608]/85 backdrop-blur-md text-xs font-sans">
                <button
                  type="button"
                  onClick={() => setViewPreset("motor")}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-medium ${
                    cameraPreset === "motor" ? "bg-cyan-500/20 text-cyan-300 font-semibold shadow-[0_0_12px_rgba(0,229,255,0.2)]" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Төбеден (Мотор)
                </button>
                <button
                  type="button"
                  onClick={() => setViewPreset("temporal")}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-medium ${
                    cameraPreset === "temporal" ? "bg-rose-500/20 text-rose-300 font-semibold shadow-[0_0_12px_rgba(244,63,94,0.2)]" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Самай (Шайнау)
                </button>
                <button
                  type="button"
                  onClick={() => setViewPreset("front")}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-medium ${
                    cameraPreset === "front" ? "bg-white/15 text-white font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  360° Шолу
                </button>
              </div>

              {/* Bottom Floating Electrode Quick Info Badge */}
              <div className="absolute bottom-3 left-3 z-20 max-w-[260px] sm:max-w-[280px]">
                <div className="p-2.5 px-3 rounded-xl border border-white/10 bg-[#050608]/90 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-0.5">
                    <span className="font-semibold">{currentLobe.nameKz}</span>
                    <span className="text-[9px] text-white/50">{currentLobe.status}</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 italic mb-1">{currentLobe.nameLat}</div>
                  <div className="flex items-center justify-between text-[9px] font-mono border-t border-white/10 pt-1 text-neutral-300">
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
