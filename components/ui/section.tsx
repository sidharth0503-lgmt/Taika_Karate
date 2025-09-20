'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/lib/motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export function Section({ children, className, id, animate = true }: SectionProps) {
  const Component = animate ? motion.section : 'section';
  
  return (
    <Component
      id={id}
      className={cn('section-padding', className)}
      {...(animate && {
        initial: 'initial',
        whileInView: 'animate',
        viewport: { once: true, amount: 0.2 },
        variants: fadeInUpVariants,
      })}
    >
      <div className="mx-auto container-padding">
        {children}
      </div>
    </Component>
  );
}