import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { heroContent, siteConfig, aboutContent } from '../data/content';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.6], [0, 12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Rotating quotes
  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % aboutContent.quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with zoom + blur on scroll */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: bgScale }}
      >
        <motion.img
          src="/image/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40 dark:opacity-30"
          style={{ filter: useTransform(bgBlur, (v) => `blur(${v}px)`) }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/60 to-black/80 dark:from-black/80 dark:via-black/70 dark:to-black/85" />

      {/* Subtle color tint overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-blue-900/30 via-transparent to-teal-900/20" />

      {/* Animated vignette */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* Content — Profile card layout */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 md:flex-row md:items-start md:gap-14 lg:gap-20"
      >
        {/* Left — Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/10 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <img
              src="/image/profile.jpg"
              alt={siteConfig.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Right — Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col text-center md:text-left"
        >
          {/* Name */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {siteConfig.name.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* Greeting */}
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-3xl lg:text-4xl">
            Mohd Hanis Bin Mohd Tajudin
          </h2>

          {/* Role */}
          <p className="mt-3 text-lg font-semibold text-blue-300 sm:text-xl">
            {siteConfig.role}
          </p>

          {/* Bio */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {aboutContent.bio}
          </p>

          {/* Quote */}
          <div className="mt-5 max-w-xl">
            <div className="relative min-h-[4rem] rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <span className="absolute -top-3 left-3 text-3xl leading-none text-blue-400/60">
                &ldquo;
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm italic leading-relaxed text-slate-300">
                    {aboutContent.quotes[quoteIndex].text}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    — {aboutContent.quotes[quoteIndex].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Social icons + CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              >
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
              >
                <FiGithub className="h-5 w-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <button
              onClick={() => scrollTo('#portfolio')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40 hover:brightness-110"
            >
              {heroContent.cta1}
              <FiArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <FiMail className="h-4 w-4" />
              {heroContent.cta2}
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-white/30 p-1"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
