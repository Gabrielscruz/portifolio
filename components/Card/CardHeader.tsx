import React from 'react';
import classNames from 'classnames';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div
      className={classNames('flex items-start justify-between gap-4 mb-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}
