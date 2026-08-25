import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass' | 'ghost';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        'px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95',
        {
          'bg-primary text-white hover:scale-105 shadow-xl shadow-primary/25': variant === 'primary',
          'bg-transparent border-2 border-outline-variant text-on-surface hover:bg-surface-variant': variant === 'outline',
          'glass-panel text-white hover:bg-white/10': variant === 'glass',
          'bg-transparent text-primary hover:bg-primary/10': variant === 'ghost',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
