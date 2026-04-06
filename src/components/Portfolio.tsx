import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import { PortfolioBg } from './SectionBg';
import { projects } from '../data/content';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-10 sm:py-16">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-500/10" />
      <PortfolioBg />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/8" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Portfolio"
          subtitle="A selection of projects and systems I've built."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <GlassCard
              key={project.title}
              className={`group ${project.colSpan ?? ''}`}
              delay={i * 0.08}
            >
              <div className="flex h-full flex-col">
                {/* Gradient accent bar */}
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-20" />

                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
