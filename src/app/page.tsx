import dynamic from "next/dynamic";
import Navbar from "@/components/miora/Navbar";
import HeroSection from "@/components/miora/HeroSection";
import ProblemSection from "@/components/miora/ProblemSection";
import IntroducingSection from "@/components/miora/IntroducingSection";
import CascadeSection from "@/components/miora/CascadeSection";
import InteractiveDemo from "@/components/miora/InteractiveDemo";
import RealSignalDemo from "@/components/miora/RealSignalDemo";
import ProductSpecsSection from "@/components/miora/ProductSpecsSection";
import ResearchSection from "@/components/miora/ResearchSection";
import TeamFooter from "@/components/miora/TeamFooter";

const NeuralCortex3D = dynamic(() => import("@/components/miora/NeuralCortex3D"), {
  ssr: false,
  loading: () => (
    <section id="cortex" className="py-24 px-6 md:px-12 bg-[#050608] border-b border-white/10 min-h-[600px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-cyan-400 tracking-wider">
          ЖҮКТЕЛУДЕ: 3D НЕЙРО-ДИАГНОСТИКАЛЫҚ СТАНЦИЯ...
        </span>
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050608] text-[#d7e2e9] selection:bg-[#00e5ff]/20 selection:text-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <IntroducingSection />
      <NeuralCortex3D />
      <CascadeSection />
      <InteractiveDemo />
      <RealSignalDemo />
      <ProductSpecsSection />
      <ResearchSection />
      <TeamFooter />
    </main>
  );
}
