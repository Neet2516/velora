import React, { useState } from 'react';
import { Navbar } from '../components/landing/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { VisionSection } from '../components/landing/VisionSection';
import { EcosystemSection } from '../components/landing/EcosystemSection';
import { RoadmapSection } from '../components/landing/RoadmapSection';
import { UpcomingSection } from '../components/landing/UpcomingSection';
import { FinalCTASection } from '../components/landing/FinalCTASection';
import { Footer } from '../components/landing/Footer';
import { ProductModal } from '../components/landing/ProductModal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { VeloraHandwritingLoader } from '../components/ui/VeloraHandwritingLoader';
import { CursorMoneyTrail } from '../components/ui/CursorMoneyTrail';
import { useLenis } from '../hooks/useLenis';
import { EcosystemProduct } from '../types';

export const LandingPage: React.FC = () => {
  const { scrollTo } = useLenis();

  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<EcosystemProduct | null>(null);

  const handleExploreEcosystem = () => {
    scrollTo('#ecosystem', { offset: -72 });
  };

  const handleExploreVision = () => {
    scrollTo('#vision', { offset: -72 });
  };

  return (
    <div className="min-h-screen bg-[#050c26] text-slate-100 flex flex-col relative selection:bg-[#7692FF]/30 selection:text-[#ABD2FA] overflow-x-clip">
      <CursorMoneyTrail />
      <VeloraHandwritingLoader />

      <Navbar onExploreEcosystem={handleExploreEcosystem} />

      <main className="flex-grow">
        <HeroSection
          onExploreEcosystem={handleExploreEcosystem}
          onExploreVision={handleExploreVision}
        />

        <SectionDivider />

        <RoadmapSection />

        <SectionDivider />

        <VisionSection />

        <SectionDivider />

        <EcosystemSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

        <SectionDivider />

        <UpcomingSection />

        <FinalCTASection onExploreEcosystem={handleExploreEcosystem} />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
