'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'showcase-3d' | 'workspace-2d' | 'elevated-modal';
  glowColor?: 'blue' | 'emerald' | 'none';
  className?: string;
  interactiveControlsInside?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'workspace-2d',
  glowColor = 'none',
  className = '',
  interactiveControlsInside = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, spotlightX: 50, spotlightY: 50 });
  const [isHoveringControl, setIsHoveringControl] = useState(false);

  const enable3D = variant === 'showcase-3d' && !prefersReducedMotion && !isHoveringControl;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enable3D || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pctX = (x / rect.width) * 100;
    const pctY = (y / rect.height) * 100;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3.2; // حداکثر ۳.۲ درجه کنترل‌شده
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 3.2;
    setTilt({ rotateX, rotateY, spotlightX: pctX, spotlightY: pctY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, spotlightX: 50, spotlightY: 50 });
  };

  const glowBorderClass =
    glowColor === 'blue'
      ? 'hover:border-cyan-400/45 hover:shadow-neon-blue'
      : glowColor === 'emerald'
      ? 'hover:border-emerald-400/45 hover:shadow-neon-emerald'
      : 'hover:border-white/20 dark:hover:border-white/20';

  const surfaceClass =
    variant === 'workspace-2d'
      ? 'bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-glass-sm'
      : 'bg-white/85 dark:bg-[#0D1321]/75 backdrop-blur-xl border border-slate-200/70 dark:border-white/10 shadow-glass-lg';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={() => interactiveControlsInside && setIsHoveringControl(true)}
      onBlurCapture={() => interactiveControlsInside && setIsHoveringControl(false)}
      style={{
        transformStyle: enable3D ? 'preserve-3d' : undefined,
        perspective: enable3D ? '1000px' : undefined,
      }}
      animate={{
        rotateX: enable3D ? tilt.rotateX : 0,
        rotateY: enable3D ? tilt.rotateY : 0,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`relative rounded-xl transition-colors duration-200 ${surfaceClass} ${glowBorderClass} ${className}`}
    >
      {enable3D && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${tilt.spotlightX}% ${tilt.spotlightY}%, rgba(0, 240, 255, 0.08), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
