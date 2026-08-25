import classNames from 'classnames';

export interface SectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionSubtitle({ children, className, ...props }: SectionSubtitleProps) {
  return (
    <p
      className={classNames('text-body-lg text-on-surface-variant max-w-2xl leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
}
