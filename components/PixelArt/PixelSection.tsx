import React from 'react';

export interface PixelSectionRootProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function PixelSectionRoot({ children, className = '', ...props }: PixelSectionRootProps) {
  return (
    <section
      className={`py-20 border-t-4 border-purple-900/40 relative overflow-hidden ${className}`}
      {...props}
    >
      <div className="container max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

export interface PixelSectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PixelSectionHeader({ children, className = '', ...props }: PixelSectionHeaderProps) {
  return (
    <div className={`mb-12 text-center max-w-3xl mx-auto space-y-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface PixelSectionTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PixelSectionTag({ children, className = '', ...props }: PixelSectionTagProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-950 to-indigo-950 border border-purple-400/70 text-amber-300 font-pixel text-[10px] tracking-wider uppercase rounded-[4px] shadow-[0_0_10px_rgba(168,85,247,0.25)] ${className}`}
      {...props}
    >
      <span className="pixel-soul !w-2.5 !h-2.5" />
      {children}
    </div>
  );
}

export interface PixelSectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function PixelSectionTitle({ children, className = '', ...props }: PixelSectionTitleProps) {
  return (
    <h2
      className={`font-pixel text-xl sm:text-2xl lg:text-3xl text-white tracking-wide leading-tight ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export interface PixelSectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function PixelSectionSubtitle({ children, className = '', ...props }: PixelSectionSubtitleProps) {
  return (
    <p
      className={`font-sans text-base sm:text-lg text-purple-200/90 leading-relaxed max-w-2xl mx-auto ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Compound Component Pattern: PixelSection
 */
export const PixelSection = {
  Root: PixelSectionRoot,
  Header: PixelSectionHeader,
  Tag: PixelSectionTag,
  Title: PixelSectionTitle,
  Subtitle: PixelSectionSubtitle,
};
