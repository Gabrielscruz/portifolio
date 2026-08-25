import classNames from 'classnames';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={classNames(
        'text-body-md text-on-surface-variant leading-relaxed flex-grow',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
