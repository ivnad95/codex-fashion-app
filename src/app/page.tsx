import { GlassCard } from '@/components/ui/glass-card';
import { colors, typography } from '@/design-system';
import ImageBlender from '@/components/image-blender';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <GlassCard>
        <h1
          style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.lg,
            color: colors.text,
          }}
          className="mb-6"
        >
          Welcome to Liquid Glass
        </h1>
      </GlassCard>
      <h1 className="text-2xl font-bold mb-6">Image Blend</h1>
      <ImageBlender />
    </main>
  );
}
