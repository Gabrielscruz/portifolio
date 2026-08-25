import classNames from 'classnames';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'outline' | 'glass';
  children: React.ReactNode;
}

export function Badge({ variant = 'glass', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={classNames(
        'px-3 py-1.5 rounded-full font-label-sm text-xs font-bold transition-all',
        {
          'bg-primary/10 text-primary border border-primary/20': variant === 'primary',
          'bg-surface-container-high text-on-surface-variant border border-outline-variant/30': variant === 'outline',
          'bg-white/5 text-primary': variant === 'glass',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
