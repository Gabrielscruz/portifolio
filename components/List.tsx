import React from 'react';
import classNames from 'classnames';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export function List({ children, className, ...props }: ListProps) {
  return (
    <ul className={classNames('space-y-6', className)} {...props}>
      {children}
    </ul>
  );
}

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  icon?: string;
}

export function ListItem({ children, className, icon = 'check_circle', ...props }: ListItemProps) {
  return (
    <li className={classNames('flex items-start gap-4', className)} {...props}>
      <span className="material-symbols-outlined text-primary text-[24px] shrink-0">{icon}</span>
      <span className="text-body-md text-white font-medium">{children}</span>
    </li>
  );
}
