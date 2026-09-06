import React from 'react';

export interface PixelCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PixelCardRoot({ children, className = '', ...props }: PixelCardRootProps) {
  return (
    <div
      className={`pixel-card p-6 flex flex-col justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface PixelCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PixelCardHeader({ children, className = '', ...props }: PixelCardHeaderProps) {
  return (
    <div className={`flex items-start justify-between gap-3 mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface PixelCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function PixelCardTitle({ children, className = '', ...props }: PixelCardTitleProps) {
  return (
    <h3
      className={`font-pixel text-sm sm:text-base text-white tracking-wide leading-snug ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export interface PixelCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PixelCardBody({ children, className = '', ...props }: PixelCardBodyProps) {
  return (
    <div className={`font-retro text-base sm:text-lg text-purple-100/90 leading-relaxed mb-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface PixelCardBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'purple' | 'amber' | 'emerald';
}

export function PixelCardBadge({ children, variant = 'purple', className = '', ...props }: PixelCardBadgeProps) {
  const variantStyles = {
    purple: 'bg-purple-950/80 text-purple-200 border-purple-500/50 shadow-sm',
    amber: 'bg-amber-950/80 text-amber-300 border-amber-500/50 shadow-sm',
    emerald: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 shadow-sm',
  }[variant];

  return (
    <span
      className={`inline-block px-2.5 py-1 font-pixel text-[9px] border uppercase rounded-[3px] ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export interface PixelCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PixelCardFooter({ children, className = '', ...props }: PixelCardFooterProps) {
  return (
    <div className={`pt-4 border-t border-purple-800/40 flex flex-wrap gap-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * Compound Component Pattern: PixelCard
 */
export const PixelCard = {
  Root: PixelCardRoot,
  Header: PixelCardHeader,
  Title: PixelCardTitle,
  Body: PixelCardBody,
  Badge: PixelCardBadge,
  Footer: PixelCardFooter,
};
