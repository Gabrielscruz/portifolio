import React from 'react';
import classNames from 'classnames';

export interface HeroTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

/**
 * Hero.Title - Título principal com tipografia limpa, alto contraste e destaque 3D sutil.
 */
export function HeroTitle({ children, className, ...props }: HeroTitleProps) {
  return (
    <h1
      className={classNames(
        'font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]',
        'drop-shadow-[0_6px_24px_rgba(0,0,0,0.6)]',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
