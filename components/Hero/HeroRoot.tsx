import React from 'react';
import classNames from 'classnames';

export interface HeroRootProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Hero.Root - Componente raiz do Hero com atmosfera Pixar Art e tema roxo imersivo.
 * Aplica o Princípio da Responsabilidade Única (SRP) fornecendo container e iluminação.
 */
export function HeroRoot({ children, className, ...props }: HeroRootProps) {
  return (
    <section
      className={classNames(
        'relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden',
        'bg-gradient-to-b from-[#0e0722] via-[#140b2e] to-[#0d071f]',
        className
      )}
      {...props}
    >
      {/* Luzes volumétricas estilo estúdio 3D Pixar */}
      <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-fuchsia-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

      {/* Grid de partículas sutis */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
