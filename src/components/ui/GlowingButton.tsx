'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'emerald' | 'glass' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}) => {
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-sky-600 text-slate-950 font-semibold shadow-neon-blue hover:brightness-110 border border-cyan-300/40',
    emerald:
      'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-semibold shadow-neon-emerald hover:brightness-110 border border-emerald-300/40',
    glass:
      'bg-slate-100/80 dark:bg-white/5 text-slate-900 dark:text-slate-100 border border-slate-300/80 dark:border-white/15 hover:bg-slate-200/70 dark:hover:bg-white/10 hover:border-cyan-400/40',
    danger:
      'bg-red-600/90 text-white border border-red-400/40 hover:bg-red-500 shadow-sm',
  }[variant];

  const sizeStyles = {
    sm: 'min-h-[38px] px-3.5 py-1.5 text-xs rounded-lg',
    md: 'min-h-[44px] px-5 py-2.5 text-sm rounded-xl',
    lg: 'min-h-[50px] px-7 py-3 text-base rounded-xl',
  }[size];

  return (
    <button
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
};
