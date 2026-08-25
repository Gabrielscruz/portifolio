import classNames from 'classnames';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3
      className={classNames(
        'text-headline-sm md:text-title-md text-white font-bold mb-4',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
