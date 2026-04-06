import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExperienceBg } from './SectionBg';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="relative py-10 sm:py-16">
      <ExperienceBg />
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey across industries and technologies."
        />

        {/* Compact timeline */}
        <div className="relative ml-3 border-l-2 border-slate-200 dark:border-white/10 sm:ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pb-5 pl-6 last:pb-0 sm:pl-8"
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 ${
                  exp.period === 'Current'
                    ? 'border-emerald-500 bg-emerald-400 shadow-sm shadow-emerald-500/40'
                    : 'border-slate-300 bg-slate-200 dark:border-slate-600 dark:bg-slate-700'
                }`}
              />

              {/* Row: role + company + badge inline */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                  {exp.role}
                </h3>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  {exp.company}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold leading-tight ${
                    exp.period === 'Current'
                      ? 'bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-500'
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                {exp.description}
              </p>

              {/* Highlights as inline tags */}
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {exp.highlights.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-white/5 dark:text-slate-400 sm:text-xs"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
