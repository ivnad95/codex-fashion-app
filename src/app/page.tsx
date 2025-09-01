
import { GlassCard } from '@/components/ui/glass-card';
import { colors, typography } from '@/design-system';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <GlassCard>
        <h1
          style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.lg,
            color: colors.text,
          }}
        >
          Welcome to Liquid Glass
        </h1>
      </GlassCard>
    </main>
  );

import ImageBlender from '@/components/image-blender'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6">Image Blend</h1>
      <ImageBlender />
    </main>
  )

}

