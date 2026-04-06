import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = '',
  tilt = true,
  delay = 0,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateStyle, setRotateStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateStyle({ rotateX: y * -8, rotateY: x * 8 });
  };

  const handleMouseLeave = () => {
    setRotateStyle({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      style={{
        rotateX: rotateStyle.rotateX,
        rotateY: rotateStyle.rotateY,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass glass-hover rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
