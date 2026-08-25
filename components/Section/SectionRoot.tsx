import classNames from 'classnames';

export interface SectionRootProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  container?: boolean;
}

export function SectionRoot({ children, className, container = true, ...props }: SectionRootProps) {
  return (
    <section
      className={classNames(
        'relative z-10 py-12 md:py-24',
        { 'px-margin-mobile md:px-gutter max-w-container-max mx-auto': container },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
