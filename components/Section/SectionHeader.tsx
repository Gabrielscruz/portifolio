import classNames from 'classnames';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionHeader({ children, className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={classNames('mb-16', className)}
      {...props}
    >
      {children}
    </div>
  );
}
