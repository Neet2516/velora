import { useContext } from 'react';
import { LenisContext, lenisScrollTo, getLenis, ScrollToOptions } from '../context/LenisContext';

export { LenisProvider, lenisScrollTo, getLenis } from '../context/LenisContext';
export type { ScrollToOptions, LenisContextType } from '../context/LenisContext';

/**
 * Hook to access Lenis instance, scrollTo, stop, and start controls.
 */
export const useLenis = () => {
  const context = useContext(LenisContext);
  return context;
};
