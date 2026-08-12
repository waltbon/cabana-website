'use client';

import { LazyMotion } from 'framer-motion';
import { ReactNode } from 'react';

const loadFeatures = () => import('./features').then((res) => res.default);

export function LazyMotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
