import Navbar from "@/components/miora/Navbar";
import HeroSection from "@/components/miora/HeroSection";
import ProblemSection from "@/components/miora/ProblemSection";
import IntroducingSection from "@/components/miora/IntroducingSection";
import CascadeSection from "@/components/miora/CascadeSection";
import InteractiveDemo from "@/components/miora/InteractiveDemo";
import ResultsSection from "@/components/miora/ResultsSection";
import ResearchSection from "@/components/miora/ResearchSection";
import TeamFooter from "@/components/miora/TeamFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050608] text-[#d7e2e9] selection:bg-brand-secondary/20 selection:text-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <IntroducingSection />
      <CascadeSection />
      <InteractiveDemo />
      <ResultsSection />
      <ResearchSection />
      <TeamFooter />
    </main>
  );
}
