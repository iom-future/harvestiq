import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import IntelligenceEngineSection from './components/IntelligenceEngineSection';
import SupplyNetworkSection from './components/SupplyNetworkSection';
import WhoIsItForSection from './components/WhoIsItForSection';
import DashboardPreviewSection from './components/DashboardPreviewSection';
import FoodLossSection from './components/FoodLossSection';
import DataTechnologySection from './components/DataTechnologySection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import EarlyAccessSection from './components/EarlyAccessSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#F4F6F7]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <IntelligenceEngineSection />
        <SupplyNetworkSection />
        <WhoIsItForSection />
        <DashboardPreviewSection />
        <FoodLossSection />
        <DataTechnologySection />
        <TestimonialsSection />
        <TeamSection />
        <EarlyAccessSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
