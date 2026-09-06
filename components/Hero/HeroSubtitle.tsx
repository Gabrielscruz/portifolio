import React from 'react';
import classNames from 'classnames';

export interface HeroSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

/**
 * Hero.Subtitle - Subtítulo simples e direto.
 */
export function HeroSubtitle({ children, className, ...props }: HeroSubtitleProps) {
  return (
    <h2
      className={classNames(
        'text-xl sm:text-2xl font-semibold text-purple-200/95 leading-snug max-w-2xl',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
