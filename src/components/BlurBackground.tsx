'use client';

import { colors } from '@/design-system';

export function BlurBackground() {
  return (
    <div
      className="fixed inset-0"
      style={{
        backgroundColor: colors.background,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    />
  );
}
