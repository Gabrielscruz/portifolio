import React from 'react';
import classNames from 'classnames';

export interface CardBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'glass';
}

export function CardBadge({
  children,
  variant = 'glass',
  className,
  ...props
}: CardBadgeProps) {
  return (
    <span
      className={classNames(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all',
        {
          'bg-primary/20 text-purple-200 border border-primary/30 shadow-[0_2px_8px_rgba(168,85,247,0.25)]':
            variant === 'primary',
          'bg-amber-400/20 text-amber-200 border border-amber-400/40 shadow-[0_2px_8px_rgba(251,191,36,0.25)]':
            variant === 'gold',
          'bg-white/10 text-purple-100 border border-white/15 backdrop-blur-md':
            variant === 'glass',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
