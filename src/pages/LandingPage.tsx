import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from '../components/landing/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { SectionDivider } from '../components/ui/SectionDivider';
import { VeloraHandwritingLoader } from '../components/ui/VeloraHandwritingLoader';
import { CursorMoneyTrail } from '../components/ui/CursorMoneyTrail';
import { useLenis } from '../hooks/useLenis';
import { EcosystemProduct } from '../types';

// Lazy load below-the-fold heavy sections to maximize initial page performance and minimize TBT
const RoadmapSection = lazy(() =>
  import('../components/landing/RoadmapSection').then((m) => ({ default: m.RoadmapSection }))
);
const VisionSection = lazy(() =>
  import('../components/landing/VisionSection').then((m) => ({ default: m.VisionSection }))
);
const EcosystemSection = lazy(() =>
  import('../components/landing/EcosystemSection').then((m) => ({ default: m.EcosystemSection }))
);
const UpcomingSection = lazy(() =>
  import('../components/landing/UpcomingSection').then((m) => ({ default: m.UpcomingSection }))
);
const FinalCTASection = lazy(() =>
  import('../components/landing/FinalCTASection').then((m) => ({ default: m.FinalCTASection }))
);
const Footer = lazy(() =>
  import('../components/landing/Footer').then((m) => ({ default: m.Footer }))
);
const ProductModal = lazy(() =>
  import('../components/landing/ProductModal').then((m) => ({ default: m.ProductModal }))
);

// Zero-CLS Ambient Skeleton Placeholder
const SectionSkeleton: React.FC<{ minHeight?: string }> = ({ minHeight = 'min-h-[40vh]' }) => (
  <div className={`w-full ${minHeight} flex items-center justify-center relative overflow-hidden pointer-events-none`}>
    <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent blur-[120px] animate-pulse" />
  </div>
);

export const LandingPage: React.FC = () => {
  const { scrollTo } = useLenis();
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

      {/* Critical Hero & Navbar: Loaded synchronously for instantaneous above-the-fold paint */}
      <Navbar onExploreEcosystem={handleExploreEcosystem} />

      <main className="flex-grow">
        <HeroSection
          onExploreEcosystem={handleExploreEcosystem}
          onExploreVision={handleExploreVision}
        />

        <SectionDivider />

        <Suspense fallback={<SectionSkeleton minHeight="min-h-[80vh]" />}>
          <RoadmapSection />
        </Suspense>

        <SectionDivider />

        <Suspense fallback={<SectionSkeleton minHeight="min-h-[70vh]" />}>
          <VisionSection />
        </Suspense>

        <SectionDivider />

        <Suspense fallback={<SectionSkeleton minHeight="min-h-[100vh]" />}>
          <EcosystemSection onSelectProduct={(prod) => setSelectedProduct(prod)} />
        </Suspense>

        <SectionDivider />

        <Suspense fallback={<SectionSkeleton minHeight="min-h-[70vh]" />}>
          <UpcomingSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton minHeight="min-h-[40vh]" />}>
          <FinalCTASection onExploreEcosystem={handleExploreEcosystem} />
        </Suspense>
      </main>

      <Suspense fallback={<SectionSkeleton minHeight="min-h-[15vh]" />}>
        <Footer />
      </Suspense>

      {/* ProductModal: Loaded on-demand only when a card is selected */}
      {selectedProduct && (
        <Suspense fallback={null}>
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        </Suspense>
      )}
    </div>
  );
};
