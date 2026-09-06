import React from 'react';
import classNames from 'classnames';

export interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Hero.Actions - Container flexível de ações do Hero.
 */
export function HeroActions({ children, className, ...props }: HeroActionsProps) {
  return (
    <div
      className={classNames('flex flex-wrap items-center gap-4 pt-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}
