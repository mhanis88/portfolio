import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface ParallaxSectionProps {
  children: ReactNode;
  direction?: Direction;
  /** How far the content travels to reach center (px/%). Default 200 */
  distance?: number;
  /** z-index for stacking order (higher = on top). Default 1 */
  zIndex?: number;
  className?: string;
}

const springConfig = { stiffness: 50, damping: 20, mass: 1 };

/**
 * Presentation-style scroll slide.
 *
 * - 250vh runway for a longer, more comfortable animation journey.
 * - useSpring on every transform for buttery-smooth, slightly trailing motion.
 * - Content enters with translate + scale + opacity + rotation.
 * - Stays pinned in a generous visible window.
 * - Exits with fade + scale + slight rotation.
 */
export default function ParallaxSection({
  children,
  direction = 'bottom',
  distance = 200,
  zIndex = 1,
  className = '',
}: ParallaxSectionProps) {
  const runwayRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ['start end', 'end start'],
  });

  // Smooth the raw scroll progress for a trailing/comfy feel
  const smooth = useSpring(scrollYProgress, springConfig);

  // --- Entrance offset (direction → center) ---
  const enterX =
    direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const enterY =
    direction === 'top' ? -distance : direction === 'bottom' ? distance : 0;

  // Subtle rotation on enter for a "swinging in" feel
  const enterRotate =
    direction === 'left' ? -6 : direction === 'right' ? 6 : direction === 'top' ? -3 : 3;

  // Phase map across the 250vh runway:
  //   0.00 → 0.35  entering (slide in + rotate + fade in + scale up)
  //   0.35 → 0.65  fully visible & pinned (comfortable reading window)
  //   0.65 → 0.95  exiting (fade out + scale down + slight counter-rotate)
  const x = useTransform(smooth, [0, 0.35, 0.65, 0.95], [enterX, 0, 0, 0]);
  const y = useTransform(smooth, [0, 0.35, 0.65, 0.95], [enterY, 0, 0, 0]);
  const opacity = useTransform(smooth, [0, 0.3, 0.65, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(smooth, [0, 0.35, 0.65, 0.9], [0.85, 1, 1, 0.88]);
  const rotate = useTransform(smooth, [0, 0.35, 0.65, 0.9], [enterRotate, 0, 0, -enterRotate * 0.3]);

  // Slight blur on enter/exit for depth-of-field feel
  const filterBlur = useTransform(smooth, [0, 0.25, 0.65, 0.9], [8, 0, 0, 6]);
  const filter = useTransform(filterBlur, (v) => `blur(${v}px)`);

  return (
    <div ref={runwayRef} className={`relative ${className}`} style={{ height: '250vh', zIndex }}>
      {/* Sticky inner — stays pinned while runway scrolls */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-[--color-bg]">
        <motion.div
          style={{ x, y, opacity, scale, rotate, filter }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
