import React, { Suspense, useEffect, useState } from 'react';
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

export const CanvasWrapper: React.FC<CanvasWrapperProps> = ({
  children,
  className = 'w-full h-full',
  fallback,
  camera = { position: [0, 0, 5], fov: 45 },
}) => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === false) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {fallback || (
          <div className="text-center p-6 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-cyan-500/20">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
              ∞
            </div>
            <p className="text-sm text-slate-300 font-medium">Interactive 3D Experience</p>
            <p className="text-xs text-slate-500 mt-1">WebGL Hardware Acceleration Recommended</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={camera}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};
