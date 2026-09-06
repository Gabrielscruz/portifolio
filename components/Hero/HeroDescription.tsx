import React from 'react';
import classNames from 'classnames';

export interface HeroDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

/**
 * Hero.Description - Parágrafo descritivo em linguagem simples e acolhedora.
 */
export function HeroDescription({ children, className, ...props }: HeroDescriptionProps) {
  return (
    <p
      className={classNames(
        'text-base sm:text-lg text-purple-100/85 max-w-2xl leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
