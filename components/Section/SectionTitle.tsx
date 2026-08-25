import classNames from 'classnames';

export interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2
      className={classNames('font-headline-md text-headline-md md:text-display-sm text-white mb-6', className)}
      {...props}
    >
      {children}
    </h2>
  );
}
