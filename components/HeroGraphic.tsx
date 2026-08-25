import React from 'react';
import classNames from 'classnames';

export interface HeroGraphicProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string;
}

export function HeroGraphic({ icon = 'architecture', className, ...props }: HeroGraphicProps) {
  return (
    <div
      className={classNames(
        'w-full aspect-square glass-panel rounded-full relative animate-pulse flex items-center justify-center border-white/10 shadow-2xl shadow-primary/5',
        className
      )}
      style={{ animationDuration: '8s' }}
      {...props}
    >
      <div className="absolute inset-4 border border-primary/30 rounded-full animate-spin-slow"></div>
      <div className="absolute inset-12 border border-primary/10 rounded-full animate-reverse-spin"></div>
      <div className="text-center p-8">
        <span className="material-symbols-outlined text-primary text-[150px] drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          {icon}
        </span>
      </div>
    </div>
  );
}
