import { GlassCard } from '@/components/ui/glass-card';
import { colors, typography } from '@/design-system';
import ImageBlender from '@/components/image-blender';

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-center p-8 space-y-8">

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

      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Image Blend</h2>
        <ImageBlender />
      </div>
    </main>
  );
}
