import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { siteConfig } from '../data/content';

export default function Footer() {
  return (
    <footer className="glass border-t border-slate-200 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          &copy; {new Date().getFullYear()} {siteConfig.shortName}. Built with{' '}
          <FiHeart className="inline h-3 w-3 text-blue-500 dark:text-blue-400" /> and React.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
            aria-label="GitHub"
          >
            <FiGithub className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
