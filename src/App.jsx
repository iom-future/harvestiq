import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';

const CapabilitiesSection = lazy(() => import('./components/CapabilitiesSection'));
const IntelligenceEngineSection = lazy(() => import('./components/IntelligenceEngineSection'));
const SupplyNetworkSection = lazy(() => import('./components/SupplyNetworkSection'));
const WhoIsItForSection = lazy(() => import('./components/WhoIsItForSection'));
const DashboardPreviewSection = lazy(() => import('./components/DashboardPreviewSection'));
const FoodLossSection = lazy(() => import('./components/FoodLossSection'));
const DataTechnologySection = lazy(() => import('./components/DataTechnologySection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const EarlyAccessSection = lazy(() => import('./components/EarlyAccessSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const FinalCtaSection = lazy(() => import('./components/FinalCtaSection'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback({ minHeight = 'min-h-[420px]' }) {
  return <div className={`${minHeight} bg-[#0A0D12] border-b border-[#273440]`} aria-hidden="true" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-[#F4F6F7]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />

        <Suspense fallback={<SectionFallback minHeight="min-h-[680px]" />}>
          <div className="cv-auto">
            <CapabilitiesSection />
          </div>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <div className="cv-auto">
            <IntelligenceEngineSection />
            <SupplyNetworkSection />
          </div>
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[640px]" />}>
          <div className="cv-auto">
            <WhoIsItForSection />
            <DashboardPreviewSection />
          </div>
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <div className="cv-auto">
            <FoodLossSection />
            <DataTechnologySection />
            <TestimonialsSection />
            <TeamSection />
            <EarlyAccessSection />
            <FaqSection />
            <FinalCtaSection />
          </div>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
