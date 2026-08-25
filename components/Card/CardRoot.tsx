import classNames from 'classnames';
import React, { forwardRef } from 'react';

export interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  ({ children, className, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          'glass-card rounded-2xl flex flex-col p-6 border border-outline-variant/20',
          { 'hover:scale-[1.02] group': hoverEffect },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardRoot.displayName = 'CardRoot';
