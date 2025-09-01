'use client';

import { BlurView } from 'expo-blur';
import { colors } from '@/design-system';

export function BlurBackground() {
  return (
    <BlurView
      intensity={80}
      tint="light"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.background,
      }}
    />
  );
}
