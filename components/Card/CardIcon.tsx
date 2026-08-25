import classNames from 'classnames';

export interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
}

export function CardIcon({ icon, className, ...props }: CardIconProps) {
  return (
    <div
      className={classNames(
        'w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white',
        className
      )}
      {...props}
    >
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
  );
}
