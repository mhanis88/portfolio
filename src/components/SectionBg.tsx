/**
 * Subtle SVG background illustrations for each section.
 * Each section has left + right illustrations for visual balance.
 * Rendered at low opacity with pointer-events-none.
 */

/* ── About: Connected nodes / network ── */
export function AboutBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.24] dark:opacity-[0.12]">
      {/* Left — network cluster */}
      <svg
        className="absolute -left-10 top-10 h-[420px] w-[420px] text-blue-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="80" cy="100" r="6" fill="currentColor" />
        <circle cx="200" cy="60" r="8" fill="currentColor" />
        <circle cx="140" cy="220" r="7" fill="currentColor" />
        <circle cx="260" cy="200" r="6" fill="currentColor" />
        <circle cx="100" cy="320" r="5" fill="currentColor" />
        <circle cx="50" cy="200" r="4" fill="currentColor" />
        <line x1="80" y1="100" x2="200" y2="60" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="100" x2="140" y2="220" stroke="currentColor" strokeWidth="1.5" />
        <line x1="140" y1="220" x2="260" y2="200" stroke="currentColor" strokeWidth="1.5" />
        <line x1="200" y1="60" x2="260" y2="200" stroke="currentColor" strokeWidth="1.5" />
        <line x1="140" y1="220" x2="100" y2="320" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="200" x2="140" y2="220" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="200" x2="80" y2="100" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      {/* Right — scattered nodes */}
      <svg
        className="absolute -right-10 bottom-10 h-[420px] w-[420px] text-teal-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="320" cy="80" r="5" fill="currentColor" />
        <circle cx="200" cy="140" r="7" fill="currentColor" />
        <circle cx="300" cy="220" r="8" fill="currentColor" />
        <circle cx="160" cy="300" r="6" fill="currentColor" />
        <circle cx="340" cy="340" r="5" fill="currentColor" />
        <circle cx="260" cy="60" r="4" fill="currentColor" />
        <line x1="260" y1="60" x2="320" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="320" y1="80" x2="300" y2="220" stroke="currentColor" strokeWidth="1.5" />
        <line x1="200" y1="140" x2="300" y2="220" stroke="currentColor" strokeWidth="1.5" />
        <line x1="200" y1="140" x2="160" y2="300" stroke="currentColor" strokeWidth="1.5" />
        <line x1="300" y1="220" x2="340" y2="340" stroke="currentColor" strokeWidth="1.5" />
        <line x1="160" y1="300" x2="340" y2="340" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ── Skills: Circuit board / tech grid ── */
export function SkillsBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.24] dark:opacity-[0.12]">
      {/* Left — circuit traces + chip */}
      <svg
        className="absolute -left-16 top-0 h-[450px] w-[450px] text-teal-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <line x1="40" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="2" />
        <line x1="60" y1="180" x2="240" y2="180" stroke="currentColor" strokeWidth="2" />
        <line x1="80" y1="280" x2="220" y2="280" stroke="currentColor" strokeWidth="2" />
        <line x1="120" y1="40" x2="120" y2="280" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="80" x2="200" y2="180" stroke="currentColor" strokeWidth="2" />
        <rect x="116" y="76" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="116" y="176" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="196" y="76" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="196" y="176" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="116" y="276" width="8" height="8" rx="2" fill="currentColor" />
        {/* Chip */}
        <rect x="150" y="110" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="155" y1="110" x2="155" y2="100" stroke="currentColor" strokeWidth="1.5" />
        <line x1="165" y1="110" x2="165" y2="100" stroke="currentColor" strokeWidth="1.5" />
        <line x1="175" y1="110" x2="175" y2="100" stroke="currentColor" strokeWidth="1.5" />
        <line x1="185" y1="110" x2="185" y2="100" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      {/* Right — more traces + chip */}
      <svg
        className="absolute -right-16 bottom-0 h-[450px] w-[450px] text-blue-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <line x1="160" y1="100" x2="360" y2="100" stroke="currentColor" strokeWidth="2" />
        <line x1="180" y1="200" x2="340" y2="200" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="300" x2="360" y2="300" stroke="currentColor" strokeWidth="2" />
        <line x1="280" y1="60" x2="280" y2="300" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="200" x2="200" y2="300" stroke="currentColor" strokeWidth="2" />
        <rect x="276" y="96" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="276" y="196" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="196" y="196" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="276" y="296" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="196" y="296" width="8" height="8" rx="2" fill="currentColor" />
        {/* Chip */}
        <rect x="220" y="230" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="225" y1="260" x2="225" y2="270" stroke="currentColor" strokeWidth="1.5" />
        <line x1="235" y1="260" x2="235" y2="270" stroke="currentColor" strokeWidth="1.5" />
        <line x1="245" y1="260" x2="245" y2="270" stroke="currentColor" strokeWidth="1.5" />
        <line x1="255" y1="260" x2="255" y2="270" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ── Experience: Stepping stones / path ── */
export function ExperienceBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.24] dark:opacity-[0.12]">
      {/* Left — winding path with milestones */}
      <svg
        className="absolute -left-10 top-0 h-[500px] w-[350px] text-blue-600"
        viewBox="0 0 350 500"
        fill="none"
      >
        <path
          d="M180 20 C180 20, 280 60, 260 120 C240 180, 80 170, 100 230 C120 290, 260 280, 220 340 C180 400, 100 420, 140 480"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="12 8"
          fill="none"
        />
        <circle cx="180" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="180" cy="20" r="3" fill="currentColor" />
        <circle cx="260" cy="120" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="260" cy="120" r="3" fill="currentColor" />
        <circle cx="100" cy="230" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="100" cy="230" r="3" fill="currentColor" />
        <circle cx="220" cy="340" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="220" cy="340" r="3" fill="currentColor" />
      </svg>
      {/* Right — complementary path with milestones */}
      <svg
        className="absolute -right-10 bottom-0 h-[500px] w-[350px] text-teal-600"
        viewBox="0 0 350 500"
        fill="none"
      >
        <path
          d="M170 30 C170 30, 70 70, 90 140 C110 210, 270 200, 250 270 C230 340, 80 330, 120 400 C160 470, 230 480, 230 480"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="12 8"
          fill="none"
        />
        <circle cx="170" cy="30" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="170" cy="30" r="3" fill="currentColor" />
        <circle cx="90" cy="140" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="90" cy="140" r="3" fill="currentColor" />
        <circle cx="250" cy="270" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="250" cy="270" r="3" fill="currentColor" />
        <circle cx="120" cy="400" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="120" cy="400" r="3" fill="currentColor" />
        {/* Flag */}
        <line x1="230" y1="480" x2="230" y2="458" stroke="currentColor" strokeWidth="2" />
        <polygon points="230,458 248,464 230,470" fill="currentColor" />
      </svg>
    </div>
  );
}

/* ── Portfolio: Overlapping cards / grid ── */
export function PortfolioBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.24] dark:opacity-[0.12]">
      {/* Left — stacked cards */}
      <svg
        className="absolute -left-10 top-10 h-[450px] w-[400px] text-teal-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect x="40" y="60" width="130" height="90" rx="10" stroke="currentColor" strokeWidth="2" />
        <rect x="50" y="50" width="130" height="90" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="65" y1="85" x2="130" y2="85" stroke="currentColor" strokeWidth="2" />
        <line x1="65" y1="100" x2="145" y2="100" stroke="currentColor" strokeWidth="1.5" />
        <line x1="65" y1="115" x2="115" y2="115" stroke="currentColor" strokeWidth="1.5" />
        <rect x="60" y="200" width="130" height="90" rx="10" stroke="currentColor" strokeWidth="2" />
        <line x1="80" y1="230" x2="160" y2="230" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="245" x2="140" y2="245" stroke="currentColor" strokeWidth="1.5" />
        <text x="85" y="340" fontSize="26" fontFamily="monospace" fill="currentColor">{'{'}</text>
        <text x="150" y="340" fontSize="26" fontFamily="monospace" fill="currentColor">{'}'}</text>
      </svg>
      {/* Right — more cards + code hints */}
      <svg
        className="absolute -right-10 bottom-10 h-[450px] w-[400px] text-blue-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect x="200" y="40" width="130" height="90" rx="10" stroke="currentColor" strokeWidth="2" />
        <rect x="210" y="30" width="130" height="90" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="225" y1="65" x2="290" y2="65" stroke="currentColor" strokeWidth="2" />
        <line x1="225" y1="80" x2="305" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="225" y1="95" x2="275" y2="95" stroke="currentColor" strokeWidth="1.5" />
        <rect x="220" y="180" width="130" height="90" rx="10" stroke="currentColor" strokeWidth="2" />
        <line x1="240" y1="210" x2="320" y2="210" stroke="currentColor" strokeWidth="1.5" />
        <line x1="240" y1="225" x2="300" y2="225" stroke="currentColor" strokeWidth="1.5" />
        <text x="250" y="320" fontSize="26" fontFamily="monospace" fill="currentColor">{'</'}</text>
        <text x="300" y="320" fontSize="26" fontFamily="monospace" fill="currentColor">{'>'}</text>
      </svg>
    </div>
  );
}

/* ── Contact: Communication waves ── */
export function ContactBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.24] dark:opacity-[0.12]">
      {/* Left — chat bubbles + @ symbol */}
      <svg
        className="absolute -left-10 top-10 h-[450px] w-[400px] text-teal-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect x="60" y="60" width="100" height="55" rx="16" stroke="currentColor" strokeWidth="2" />
        <polygon points="95,115 108,115 88,130" fill="currentColor" />
        <line x1="80" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="2" />
        <line x1="80" y1="95" x2="125" y2="95" stroke="currentColor" strokeWidth="1.5" />
        <rect x="40" y="200" width="110" height="55" rx="16" stroke="currentColor" strokeWidth="2" />
        <polygon points="70,255 80,255 60,270" fill="currentColor" />
        <line x1="60" y1="220" x2="130" y2="220" stroke="currentColor" strokeWidth="2" />
        <line x1="60" y1="235" x2="115" y2="235" stroke="currentColor" strokeWidth="1.5" />
        {/* @ symbol */}
        <circle cx="120" cy="340" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M120 330 C112 330, 110 348, 120 348 C130 348, 132 335, 130 330 L137 330 L137 348" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      {/* Right — envelope + signal waves */}
      <svg
        className="absolute -right-10 bottom-10 h-[450px] w-[400px] text-blue-600"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Envelope */}
        <rect x="140" y="120" width="150" height="100" rx="10" stroke="currentColor" strokeWidth="2.5" />
        <polyline points="140,130 215,185 290,130" stroke="currentColor" strokeWidth="2.5" fill="none" />
        {/* Signal waves */}
        <path d="M300 160 C314 155, 322 165, 322 175" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M308 148 C330 142, 344 160, 342 178" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M316 136 C345 128, 365 155, 362 180" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Phone icon */}
        <rect x="200" y="270" width="40" height="65" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="210" y1="280" x2="230" y2="280" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="220" cy="322" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
