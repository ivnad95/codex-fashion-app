'use client';

import { BlurView } from 'expo-blur';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { colors, spacing } from '@/design-system';
import { ReactNode, useEffect } from 'react';
import { ViewStyle } from 'react-native';

interface GlassCardProps {
  children: ReactNode;
  style?: ViewStyle;
}

export function GlassCard({ children, style }: GlassCardProps) {
  const offset = useSharedValue(20);

  useEffect(() => {
    offset.value = 0;
  }, [offset]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(offset.value, { damping: 12 }) }],
  }));

  return (
    <Animated.View
      style={[
        {
          borderRadius: 16,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 20,
          shadowOffset: { width: 0, height: 10 },
          margin: spacing.md,
        },
        animatedStyle,
        style,
      ]}
    >
      <BlurView
        intensity={50}
        tint="light"
        style={{
          backgroundColor: colors.card,
          padding: spacing.lg,
        }}
      >
        {children}
      </BlurView>
    </Animated.View>
  );
}
