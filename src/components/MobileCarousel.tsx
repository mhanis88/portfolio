import { useRef, useState, ReactNode, Children } from 'react';
import { motion } from 'framer-motion';

interface MobileCarouselProps {
  children: ReactNode;
  /** Desktop grid classes (applied when not in carousel mode) */
  gridClassName?: string;
}

export default function MobileCarousel({
  children,
  gridClassName = '',
}: MobileCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.offsetWidth * 0.82 + 12; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, items.length - 1));
  };

  return (
    <>
      {/* Mobile: horizontal swipe carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((child, i) => (
            <div
              key={i}
              className="w-[82%] flex-shrink-0 snap-center"
            >
              {child}
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {items.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === activeIndex ? 20 : 6,
                opacity: i === activeIndex ? 1 : 0.35,
              }}
              transition={{ duration: 0.25 }}
              className="h-1.5 rounded-full bg-blue-400"
            />
          ))}
        </div>
      </div>

      {/* Desktop: normal grid */}
      <div className={`hidden sm:grid ${gridClassName}`}>
        {children}
      </div>
    </>
  );
}
