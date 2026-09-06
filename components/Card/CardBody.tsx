import React from 'react';
import classNames from 'classnames';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={classNames('flex-1 flex flex-col', className)} {...props}>
      {children}
    </div>
  );
}
