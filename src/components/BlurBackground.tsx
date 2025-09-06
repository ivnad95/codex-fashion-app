'use client';

import { colors } from '@/design-system';

export function BlurBackground() {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundColor: colors.background,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    />
  );
}
