import React from 'react';
import { CardRoot } from './Card/CardRoot';
import { Button } from './Button';
import classNames from 'classnames';

export interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  primaryActionText: string;
  secondaryActionText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function CtaCard({
  title,
  description,
  primaryActionText,
  secondaryActionText,
  onPrimaryClick,
  onSecondaryClick,
  className,
  ...props
}: CtaCardProps) {
  return (
    <CardRoot
      className={classNames(
        '!p-12 md:!p-24 rounded-[2rem] md:rounded-3xl relative overflow-hidden bg-surface-container-high border-outline-variant/20',
        className
      )}
      hoverEffect={false}
      {...props}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <h2 className="font-display-lg md:font-headline-lg text-display-lg-mobile md:text-4xl text-on-surface mb-6 md:mb-8 relative z-10 mx-auto">
        {title}
      </h2>
      <p className="font-body-lg text-on-surface-variant mb-10 md:mb-12 max-w-2xl mx-auto relative z-10">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 relative z-10">
        <Button variant="primary" onClick={onPrimaryClick}>
          {primaryActionText}
        </Button>
        <Button variant="outline" onClick={onSecondaryClick}>
          {secondaryActionText}
        </Button>
      </div>
    </CardRoot>
  );
}
