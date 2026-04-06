import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export default function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 transition-colors hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {theme === 'dark' ? (
          <FiSun className="h-4 w-4 text-amber-400" />
        ) : (
          <FiMoon className="h-4 w-4 text-slate-600" />
        )}
      </motion.div>
    </button>
  );
}
