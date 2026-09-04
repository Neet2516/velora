import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

interface CanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
}

const Premium3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="relative flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border border-[#7692FF]/30 border-t-[#ABD2FA] animate-spin" />
      <div className="absolute w-8 h-8 rounded-full bg-[#1B2CC1]/40 blur-md animate-pulse-glow" />
    </div>
  </div>
);

export const CanvasWrapper: React.FC<CanvasWrapperProps> = ({
  children,
  className = 'w-full h-full',
  fallback,
  camera = { position: [0, 0, 5], fov: 45 },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize, { passive: true });
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // IntersectionObserver: Pause render loop when offscreen to conserve CPU/GPU
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (hasWebGL === false) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {fallback || (
          <div className="text-center p-6 bg-[#091540]/60 backdrop-blur-md rounded-2xl border border-[#7692FF]/20">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-tr from-[#1B2CC1]/30 to-[#7692FF]/30 flex items-center justify-center text-[#ABD2FA]">
              ∞
            </div>
            <p className="text-sm text-slate-300 font-medium">Interactive 3D Experience</p>
            <p className="text-xs text-slate-500 mt-1">WebGL Acceleration Recommended</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <Canvas
        camera={camera}
        dpr={isMobile ? 1 : [1, 1.5]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
      >
        <Suspense fallback={null}>{isVisible ? children : null}</Suspense>
      </Canvas>
      {!isVisible && fallback}
    </div>
  );
};
