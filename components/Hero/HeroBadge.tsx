import React from 'react';
import classNames from 'classnames';

export interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Hero.Badge - Emblema tátil estilo Pixar com bordas macias e brilho suave.
 */
export function HeroBadge({ children, className, ...props }: HeroBadgeProps) {
  return (
    <div
      className={classNames(
        'inline-flex items-center gap-2 px-4 py-1.5 rounded-full',
        'bg-purple-900/40 border border-purple-400/30 text-purple-200',
        'shadow-[0_4px_20px_rgba(168,85,247,0.25)] backdrop-blur-md',
        'text-xs sm:text-sm font-semibold tracking-wide w-fit',
        className
      )}
      {...props}
    >
      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
      {children}
    </div>
  );
}
