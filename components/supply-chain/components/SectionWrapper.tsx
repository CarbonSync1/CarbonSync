'use client'

import type { ReactNode } from 'react';

interface SectionWrapperProps {
  title?: string;
  children: ReactNode;
  /** Optional gradient color for the title text */
  gradientFrom?: string;
  gradientTo?: string;
}

export default function SectionWrapper({ title, children, gradientFrom = 'from-emerald-400', gradientTo = 'to-emerald-600' }: SectionWrapperProps) {
  return (
    <section className="section glass-card p-6 mb-8">
      {title && (
        <h2
          className={`text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo} mb-4`}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
