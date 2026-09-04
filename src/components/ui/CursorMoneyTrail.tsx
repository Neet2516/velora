import React, { useEffect } from 'react';

// Floating money/sparkle symbols for the smooth motion trail
const TRAIL_SYMBOLS = ['$', '$', '✨', '$', '✦'];

export const CursorMoneyTrail: React.FC = () => {
  useEffect(() => {
    // Only activate on pointer/mouse devices and when reduced motion is not requested
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 1. Inject Styles for Custom Cursor & Glowing Particles
    const styleId = 'velora-custom-cursor-style';
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
      /* 💸 Constant Flying Money Companion */
      .velora-main-cursor {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        user-select: none;
        z-index: 999999;
        font-size: 26px;
        line-height: 1;
        transform: translate3d(-100px, -100px, 0);
        filter: drop-shadow(0 4px 14px rgba(118, 146, 255, 0.6)) drop-shadow(0 0 6px rgba(171, 210, 250, 0.5));
        transition: opacity 0.25s ease, filter 0.25s ease;
        will-change: transform;
        transform-origin: center center;
      }

      .velora-main-cursor.cursor-hovering {
        filter: drop-shadow(0 6px 22px rgba(171, 210, 250, 0.95)) drop-shadow(0 0 12px #7692FF);
      }

      /* Trailing Silky Smooth Dollar Companion */
      .velora-dollar-companion {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        user-select: none;
        z-index: 999995;
        font-size: 20px;
        font-family: 'Times New Roman', serif, -apple-system, sans-serif;
        font-weight: 800;
        color: #ABD2FA;
        text-shadow: 0 0 8px rgba(171, 210, 250, 0.95), 0 0 18px rgba(118, 146, 255, 0.85);
        transform: translate3d(-100px, -100px, 0);
        will-change: transform;
        transition: opacity 0.3s ease;
        transform-origin: center center;
      }

      /* Floating Currency & Sparkle Particle */
      @keyframes veloraParticleFloat {
        0% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.6) rotate(-8deg);
        }
        18% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.15) rotate(4deg);
        }
        70% {
          opacity: 0.85;
          transform: translate(-50%, -85%) scale(1.0) rotate(-3deg);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -160%) scale(0.65) rotate(6deg);
        }
      }

      .velora-dollar-particle {
        position: fixed;
        pointer-events: none;
        user-select: none;
        z-index: 999990;
        font-size: 20px;
        font-family: 'Times New Roman', serif, -apple-system, sans-serif;
        font-weight: 700;
        color: #ABD2FA;
        text-shadow: 0 0 10px rgba(171, 210, 250, 0.9), 0 0 20px rgba(118, 146, 255, 0.75);
        animation: veloraParticleFloat 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        will-change: transform, opacity;
      }
    `;

    // 2. Create Primary 💸 Cursor Element
    const mainCursor = document.createElement('div');
    mainCursor.className = 'velora-main-cursor';
    mainCursor.textContent = '💸';
    document.body.appendChild(mainCursor);

    // 3. Create Smooth Trailing Dollar Companion Element
    const dollarCompanion = document.createElement('div');
    dollarCompanion.className = 'velora-dollar-companion';
    dollarCompanion.textContent = '$';
    document.body.appendChild(dollarCompanion);

    // Physics & Coordinates Tracking
    let targetX = -100;
    let targetY = -100;

    // Smooth interpolated positions
    let mainX = -100;
    let mainY = -100;
    let mainScale = 1;
    let currentTilt = 0;

    let trailX = -100;
    let trailY = -100;

    // Interactive states
    let isClicking = false;
    let isHovering = false;
    let isInsideWindow = false;
    let isFirstMove = true;

    // Particle spawn tracking
    let lastParticleX = -100;
    let lastParticleY = -100;
    let lastParticleTime = 0;
    let symbolIndex = 0;

    let rafId: number;
    let lastTime = performance.now();

    // High performance mousemove listener (NO DOM writes here - purely sets targets)
    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (isFirstMove) {
        // Instantly align positions on first cursor appearance to prevent flying from corner
        mainX = targetX + 10;
        mainY = targetY + 10;
        trailX = targetX - 14;
        trailY = targetY + 16;
        lastParticleX = mainX;
        lastParticleY = mainY;
        isFirstMove = false;
      }

      isInsideWindow = true;
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
        const hovering = !!interactive;
        if (hovering !== isHovering) {
          isHovering = hovering;
          if (isHovering) {
            mainCursor.classList.add('cursor-hovering');
          } else {
            mainCursor.classList.remove('cursor-hovering');
          }
        }
      }
    };

    const onMouseLeave = () => {
      isInsideWindow = false;
    };

    const onMouseEnter = (e: MouseEvent) => {
      isInsideWindow = true;
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const spawnParticle = (x: number, y: number) => {
      // Cap maximum active particles in DOM to prevent performance drops during fast motion
      const currentParticles = document.querySelectorAll('.velora-dollar-particle');
      if (currentParticles.length >= 12) {
        currentParticles[0]?.remove();
      }

      const particle = document.createElement('span');
      particle.className = 'velora-dollar-particle';
      particle.textContent = TRAIL_SYMBOLS[symbolIndex % TRAIL_SYMBOLS.length];
      symbolIndex++;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      particle.addEventListener('animationend', () => particle.remove(), { once: true });
    };

    // 60Hz - 144Hz Butter-Smooth Animation Loop with Framerate Independence
    const tick = (now: number) => {
      // Delta time in seconds, capped at 50ms to prevent jumps on tab unfocus
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (isInsideWindow && !isFirstMove) {
        // 1. PRIMARY 💸 CURSOR PHYSICS
        // High-responsiveness yet zero jitter (lambda = 34)
        const mainLerp = 1 - Math.exp(-34 * dt);

        // Position slightly offset from the native cursor tip
        const destMainX = targetX + 10;
        const destMainY = targetY + 10;

        const prevMainX = mainX;
        mainX += (destMainX - mainX) * mainLerp;
        mainY += (destMainY - mainY) * mainLerp;

        // Aerodynamic velocity-based tilt for weightless, alive feel
        const vx = (mainX - prevMainX) / (dt || 0.016);
        const targetTilt = Math.max(-18, Math.min(18, vx * 0.016));
        currentTilt += (targetTilt - currentTilt) * (1 - Math.exp(-18 * dt));

        // Smooth scale transition on hover & click
        const desiredScale = isClicking ? 0.8 : isHovering ? 1.25 : 1.0;
        mainScale += (desiredScale - mainScale) * (1 - Math.exp(-22 * dt));

        mainCursor.style.transform = `translate3d(${mainX.toFixed(2)}px, ${mainY.toFixed(2)}px, 0) scale(${mainScale.toFixed(3)}) rotate(${currentTilt.toFixed(1)}deg)`;
        mainCursor.style.opacity = '1';

        // 2. TRAILING DOLLAR $ COMPANION PHYSICS
        // Luxurious magnetic trail lag (lambda = 11)
        const trailLerp = 1 - Math.exp(-11 * dt);

        const destTrailX = mainX - 14;
        const destTrailY = mainY + 16;

        trailX += (destTrailX - trailX) * trailLerp;
        trailY += (destTrailY - trailY) * trailLerp;

        // Soft organic floating sine-wave hover when stationary or moving
        const hoverFloat = Math.sin(now * 0.0035) * 2;

        dollarCompanion.style.transform = `translate3d(${trailX.toFixed(2)}px, ${(trailY + hoverFloat).toFixed(2)}px, 0)`;
        dollarCompanion.style.opacity = '0.92';

        // 3. DISTANCE-BASED LUXURY PARTICLE EMISSION
        // Spawns smoothly based on movement distance rather than time alone
        const moveDist = Math.hypot(mainX - lastParticleX, mainY - lastParticleY);
        if (moveDist >= 36 && (now - lastParticleTime) >= 80) {
          spawnParticle(mainX, mainY);
          lastParticleX = mainX;
          lastParticleY = mainY;
          lastParticleTime = now;
        }
      } else {
        mainCursor.style.opacity = '0';
        dollarCompanion.style.opacity = '0';
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
      mainCursor.remove();
      dollarCompanion.remove();
      const existingParticles = document.querySelectorAll('.velora-dollar-particle');
      existingParticles.forEach((p) => p.remove());
    };
  }, []);

  return null;
};
