import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  lock?: boolean;
  duration?: number;
  easing?: (t: number) => number;
  lerp?: number;
  onStart?: () => void;
  onComplete?: () => void;
  force?: boolean;
}

export interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement | number, options?: ScrollToOptions) => void;
  stop: () => void;
  start: () => void;
  isReady: boolean;
}

export const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
  isReady: false,
});

let globalLenisInstance: Lenis | null = null;

export const getLenis = (): Lenis | null => globalLenisInstance;

/**
 * Universal smooth scroll function using Lenis if available, with graceful fallback.
 */
export const lenisScrollTo = (
  target: string | HTMLElement | number,
  options: ScrollToOptions = {}
) => {
  if (globalLenisInstance) {
    globalLenisInstance.scrollTo(target, {
      offset: options.offset ?? -72,
      duration: options.duration ?? 1.2,
      easing: options.easing ?? ((t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      immediate: options.immediate ?? false,
      lock: options.lock ?? false,
      force: options.force ?? false,
      onComplete: options.onComplete ? () => options.onComplete!() : undefined,
    });
  } else {
    // Fallback if lenis not ready or reduced motion
    if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) {
        const yOffset = options.offset ?? -72;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (target instanceof HTMLElement) {
      const yOffset = options.offset ?? -72;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
};

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis with fine-tuned luxury smooth-scroll physics
    const instance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
      autoResize: true,
    });

    globalLenisInstance = instance;
    setLenis(instance);

    // High performance RAF loop
    function raf(time: number) {
      instance.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }
    rafIdRef.current = requestAnimationFrame(raf);

    // Global anchor-click interception so all internal links (#ecosystem, #vision, etc.) glide smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#' || href === '#!') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        lenisScrollTo(targetElement as HTMLElement, { offset: -72 });
      }
    };

    document.addEventListener('click', handleAnchorClick, { passive: false });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      instance.destroy();
      globalLenisInstance = null;
      setLenis(null);
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | HTMLElement | number, options?: ScrollToOptions) => {
      lenisScrollTo(target, options);
    },
    []
  );

  const stop = useCallback(() => {
    if (globalLenisInstance) {
      globalLenisInstance.stop();
    }
  }, []);

  const start = useCallback(() => {
    if (globalLenisInstance) {
      globalLenisInstance.start();
    }
  }, []);

  return (
    <LenisContext.Provider
      value={{
        lenis,
        scrollTo,
        stop,
        start,
        isReady: Boolean(lenis),
      }}
    >
      {children}
    </LenisContext.Provider>
  );
};
