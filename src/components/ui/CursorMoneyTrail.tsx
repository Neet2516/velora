import React, { useEffect } from 'react';

// Money/currency symbols to cycle through
const SYMBOLS = ['₹', '$', '€', '₿', '¥', '£', '₹', '$'];
const DELAY_MS = 2000;       // 2 seconds behind cursor
const SPAWN_INTERVAL = 130;  // ms between spawns (controls density)

export const CursorMoneyTrail: React.FC = () => {
  useEffect(() => {
    // Don't activate on touch-only / no-pointer devices
    if (window.matchMedia('(hover: none)').matches) return;

    // Inject CSS keyframes once into <head>
    const styleId = 'velora-money-trail-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes veloraMoneyFloat {
          0%   { opacity: 0;   transform: translate(-50%, -50%) scale(0.5) rotate(-10deg); }
          15%  { opacity: 1;   transform: translate(-50%, -50%) scale(1.15) rotate(2deg);  }
          70%  { opacity: 0.9; transform: translate(-50%, -110%) scale(1.05) rotate(5deg); }
          100% { opacity: 0;   transform: translate(-50%, -200%) scale(0.7) rotate(-6deg); }
        }
        .velora-money-particle {
          position: fixed;
          pointer-events: none;
          user-select: none;
          z-index: 99997;
          font-size: 20px;
          line-height: 1;
          animation: veloraMoneyFloat 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity;
          filter: drop-shadow(0 0 8px rgba(171, 210, 250, 0.8));
        }
      `;
      document.head.appendChild(style);
    }

    type Pt = { x: number; y: number; time: number };
    const history: Pt[] = [];
    let symbolIdx = 0;
    let lastSpawnTime = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      history.push({ x: e.clientX, y: e.clientY, time: performance.now() });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const tick = (now: number) => {
      // Drop entries older than DELAY + 1s to keep history lean
      while (history.length > 0 && now - history[0].time > DELAY_MS + 1000) {
        history.shift();
      }

      if (now - lastSpawnTime >= SPAWN_INTERVAL && history.length > 1) {
        const targetTime = now - DELAY_MS;

        // Find the recorded point closest to targetTime
        let best: Pt = history[0];
        let bestDiff = Math.abs(best.time - targetTime);
        for (let i = 1; i < history.length; i++) {
          const diff = Math.abs(history[i].time - targetTime);
          if (diff < bestDiff) { bestDiff = diff; best = history[i]; }
        }

        // Only spawn if we found a point within ±300 ms of the target delay
        if (bestDiff < 300) {
          const el = document.createElement('span');
          el.className = 'velora-money-particle';
          el.textContent = SYMBOLS[symbolIdx % SYMBOLS.length];
          el.style.left = `${best.x}px`;
          el.style.top = `${best.y}px`;
          document.body.appendChild(el);
          el.addEventListener('animationend', () => el.remove(), { once: true });

          symbolIdx++;
          lastSpawnTime = now;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // No DOM output — purely imperative for max perf (no React re-renders)
  return null;
};
