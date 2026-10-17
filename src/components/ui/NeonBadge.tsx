'use client';

import React from 'react';

export interface NeonBadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'emerald' | 'amber' | 'rose';
  className?: string;
}

export const NeonBadge: React.FC<NeonBadgeProps> = ({
  children,
  color = 'blue',
  className = '',
}) => {
  const colorStyles = {
    blue: 'text-cyan-400 bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]',
    emerald: 'text-emerald-400 bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
    amber: 'text-amber-400 bg-amber-950/30 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]',
    rose: 'text-rose-400 bg-rose-950/30 border-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.2)]',
  }[color];

  return (
    <span
      className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-sm ${colorStyles} ${className}`}
    >
      {children}
    </span>
  );
};
