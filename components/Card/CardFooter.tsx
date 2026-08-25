import classNames from 'classnames';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div
      className={classNames(
        'mt-auto pt-6 flex gap-2 flex-wrap border-t border-outline-variant/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
