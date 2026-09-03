import React, { useState } from 'react';
import { Navbar } from '../components/landing/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { VisionSection } from '../components/landing/VisionSection';
import { EcosystemSection } from '../components/landing/EcosystemSection';
import { AIAgentSection } from '../components/landing/AIAgentSection';
import { RoadmapSection } from '../components/landing/RoadmapSection';
import { UpcomingSection } from '../components/landing/UpcomingSection';
import { FinalCTASection } from '../components/landing/FinalCTASection';
import { Footer } from '../components/landing/Footer';
import { ProductModal } from '../components/landing/ProductModal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { VeloraHandwritingLoader } from '../components/ui/VeloraHandwritingLoader';
import { useLenis } from '../hooks/useLenis';
import { EcosystemProduct } from '../types';

export const LandingPage: React.FC = () => {
  // Activate Lenis smooth scrolling
  useLenis();

  const [selectedProduct, setSelectedProduct] = useState<EcosystemProduct | null>(null);

  const handleExploreEcosystem = () => {
    const elem = document.getElementById('ecosystem');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreVision = () => {
    const elem = document.getElementById('vision');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050c26] text-slate-100 flex flex-col relative selection:bg-[#7692FF]/30 selection:text-[#ABD2FA]">
      {/* Cursive Handwriting Signature Preloader */}
      <VeloraHandwritingLoader />

      {/* Top sticky navbar */}
      <Navbar onExploreEcosystem={handleExploreEcosystem} />

      {/* Main landing sections with animated transitions between them */}
      <main className="flex-grow">
        <HeroSection
          onExploreEcosystem={handleExploreEcosystem}
          onExploreVision={handleExploreVision}
        />

        <SectionDivider label="THE VELORA VISION" />

        <VisionSection />

        <SectionDivider label="COMPLETE ECOSYSTEM" />

        <EcosystemSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        <SectionDivider label="INTELLIGENT AI AGENT" />

        <AIAgentSection />

        <SectionDivider label="STRATEGIC ROADMAP" />

        <RoadmapSection />

        <SectionDivider label="UPCOMING HORIZONS" />

        <UpcomingSection />

        <SectionDivider label="THE FUTURE OF FINANCE" />

        <FinalCTASection onExploreEcosystem={handleExploreEcosystem} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Modal for any clicked vertical */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
