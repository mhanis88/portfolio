import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  attention?: string; // Optional attention note
}

export default function SectionHeading({ title, subtitle, attention }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
      {attention && (
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          <span className="font-medium text-blue-600 dark:text-blue-400">Note : </span>
          {attention}
        </p>
      )}
    </motion.div>
  );
}
