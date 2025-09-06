'use client';

import { colors, spacing } from '@/design-system';
import { ReactNode, useEffect, useState, CSSProperties } from 'react';

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function GlassCard({ children, style }: GlassCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
        margin: spacing.md,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'transform 0.5s ease-out',
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: colors.card,
          padding: spacing.lg,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

