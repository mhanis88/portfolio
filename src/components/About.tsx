import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import { AboutBg } from './SectionBg';
import { aboutContent } from '../data/content';

export default function About() {
  return (
    <section id="about" className="relative py-10 sm:py-16">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-500/10" />
      <AboutBg />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="A decade of building systems that matter."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {/* Bio card - spans 2 cols and 2 rows */}
          <GlassCard className="md:col-span-2 md:row-span-2" delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <h3 className="mb-4 font-display text-xl font-semibold text-slate-900 dark:text-white">
                Hello, I&apos;m Hanis
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {aboutContent.bio}
              </p>
            </div>
          </GlassCard>

          {/* Stat cards */}
          {aboutContent.stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={0.15 + i * 0.1}>
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="gradient-text font-display text-3xl font-bold sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
