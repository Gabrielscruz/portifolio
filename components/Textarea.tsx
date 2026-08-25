import React, { forwardRef } from 'react';
import classNames from 'classnames';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2 w-full">
        {label && (
          <label className="text-xs font-semibold text-on-surface-variant px-1" htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={classNames(
            'w-full input-field rounded-lg px-4 py-3 text-white placeholder-white/20 focus:ring-0 outline-none resize-none',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
