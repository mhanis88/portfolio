import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { SkillsBg } from './SectionBg';
import { skillGroups } from '../data/content';
import type { SkillGroup } from '../data/content';

/* ── Circular ring (compact, used as tab indicator) ── */
function CategoryRing({
  group,
  index,
  active,
}: {
  group: SkillGroup;
  index: number;
  active: boolean;
}) {
  const avg = Math.round(
    group.skills.reduce((s, sk) => s + sk.level, 0) / group.skills.length,
  );
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (avg / 100) * circumference;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        className="drop-shadow-sm"
      >
        {/* track */}
        <circle
          cx="34"
          cy="34"
          r={radius}
          stroke="currentColor"
          className="text-slate-200 dark:text-white/10"
          strokeWidth="5"
          fill="none"
        />
        {/* progress arc */}
        <motion.circle
          cx="34"
          cy="34"
          r={radius}
          stroke={`url(#ring-grad-${index})`}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
          transform="rotate(-90 34 34)"
        />
        <defs>
          <linearGradient
            id={`ring-grad-${index}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={group.color} />
            <stop offset="100%" stopColor={group.colorTo} />
          </linearGradient>
        </defs>
        {/* percentage */}
        <motion.text
          x="34"
          y="34"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-slate-800 font-display text-xs font-bold dark:fill-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.8 }}
        >
          {avg}%
        </motion.text>
      </svg>
      <span
        className="text-[11px] font-semibold transition-colors sm:text-xs"
        style={{ color: active ? group.color : undefined }}
      >
        {group.title}
      </span>
    </div>
  );
}

/* ── Horizontal bar for individual skill ── */
function SkillBar({
  name,
  level,
  color,
  colorTo,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  colorTo: string;
  delay: number;
}) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white sm:text-sm">
          {name}
        </span>
        <span className="text-xs font-semibold tabular-nums text-slate-500 dark:text-slate-400">
          {level}%
        </span>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${colorTo})`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)`,
          }}
        />
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="skills" className="relative py-10 sm:py-16">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-600/10" />
      <SkillsBg />

      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with every day."
          attention="Click on each category to view the skill bars!"
        />

        {/* ── Inline category tabs (ring slider) ── */}
        <div className="relative mb-8">
          <div className="flex items-end justify-center gap-4 sm:gap-8">
            {skillGroups.map((g, i) => (
              <button
                key={g.title}
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center rounded-xl px-2 py-3 transition-all sm:px-4 ${
                  active === i
                    ? 'scale-105'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <CategoryRing group={g} index={i} active={active === i} />
                {/* Active indicator dot */}
                {active === i && (
                  <motion.div
                    layoutId="skill-tab-indicator"
                    className="mt-2 h-1 w-6 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${g.color}, ${g.colorTo})`,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Skill bars panel ── */}
        <div className="glass-card mx-auto max-w-2xl rounded-2xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* Panel header */}
              <div className="mb-6 flex items-center justify-between">
                <h3
                  className="font-display text-lg font-bold sm:text-xl"
                  style={{ color: group.color }}
                >
                  {group.title}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {group.skills.length} technologies
                </span>
              </div>

              {/* Bars */}
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    colorTo={group.colorTo}
                    delay={si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
