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
}
