import React from 'react';
import { motion } from 'framer-motion';

interface CampusEngravingProps {
  className?: string;
  isAiActive?: boolean;
  highlightedNode?: string | null;
}

export const CampusEngraving: React.FC<CampusEngravingProps> = ({
  className = '',
  isAiActive = true,
  highlightedNode = null
}) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[85vh] object-contain drop-shadow-sm select-none"
      >
        <defs>
          {/* Subtle Vintage Ink Gradient */}
          <linearGradient id="inkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>

          {/* AI Neural Glow Gradient */}
          <linearGradient id="aiGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.9" />
          </linearGradient>

          {/* Window Glow Filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= BACKGROUND: MOUNTAINS & CLOUDS (ENGRAVING HATCHING) ================= */}
        <g stroke="currentColor" strokeOpacity="0.25" strokeWidth="1">
          <path d="M50 480 Q 250 420 450 470 T 850 460 T 1150 490" />
          <path d="M80 470 Q 280 410 480 460 T 880 450 T 1120 480" strokeDasharray="3 3" />
          <path d="M120 460 Q 320 400 520 450 T 920 440" strokeDasharray="2 4" />
        </g>

        {/* ================= MAIN HERITAGE CAMPUS ARCHITECTURE ================= */}
        
        {/* Stone Ground Terrace Base */}
        <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7">
          <line x1="100" y1="560" x2="1100" y2="560" strokeWidth="2.5" />
          <line x1="120" y1="568" x2="1080" y2="568" strokeWidth="1.5" />
          <line x1="140" y1="576" x2="1060" y2="576" strokeWidth="1" strokeDasharray="6 3" />
        </g>

        {/* LEFT WING: Classical Library & Portico */}
        <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" className="transition-colors duration-500">
          {/* Library Columns */}
          <rect x="180" y="380" width="160" height="180" fill="none" strokeWidth="1.5" />
          {/* Colonnade Pillars */}
          <line x1="195" y1="410" x2="195" y2="560" strokeWidth="2" />
          <line x1="220" y1="410" x2="220" y2="560" strokeWidth="2" />
          <line x1="245" y1="410" x2="245" y2="560" strokeWidth="2" />
          <line x1="270" y1="410" x2="270" y2="560" strokeWidth="2" />
          <line x1="295" y1="410" x2="295" y2="560" strokeWidth="2" />
          <line x1="320" y1="410" x2="320" y2="560" strokeWidth="2" />
          
          {/* Library Classical Pediment Triangular Roof */}
          <polygon points="170,380 260,300 350,380" fill="none" strokeWidth="2" />
          {/* Pediment Relief carving engraving lines */}
          <circle cx="260" cy="345" r="14" fill="none" strokeWidth="1.5" />
          <line x1="260" y1="335" x2="260" y2="355" strokeWidth="1" />
          <line x1="250" y1="345" x2="270" y2="345" strokeWidth="1" />

          {/* Library Dome behind Pediment */}
          <path d="M210 300 C 210 230, 310 230, 310 300" fill="none" strokeWidth="2" />
          <line x1="260" y1="230" x2="260" y2="210" strokeWidth="2" />
          <circle cx="260" cy="206" r="4" fill="#C5A059" fillOpacity="0.7" />
        </g>

        {/* CENTRAL TOWER: The Great University Spire & Clock Tower */}
        <g stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.85">
          {/* Main Tower Body */}
          <rect x="520" y="240" width="160" height="320" fill="none" strokeWidth="2" />

          {/* Grand Archway Portal Entrance */}
          <path d="M565 560 V 460 C 565 425, 635 425, 635 460 V 560" fill="none" strokeWidth="2.5" />
          {/* Concentric arch engraving */}
          <path d="M575 560 V 465 C 575 435, 625 435, 625 465 V 560" fill="none" strokeWidth="1" strokeDasharray="3 3" />

          {/* Clock Dial */}
          <circle cx="600" cy="340" r="32" fill="none" strokeWidth="2" />
          <circle cx="600" cy="340" r="28" fill="none" strokeWidth="1" strokeDasharray="4 2" />
          {/* Clock Hands at 10:10 (Traditional academic time) */}
          <line x1="600" y1="340" x2="590" y2="325" strokeWidth="2" strokeLinecap="round" />
          <line x1="600" y1="340" x2="618" y2="335" strokeWidth="1.5" strokeLinecap="round" />

          {/* Tower Balcony & Battlements */}
          <line x1="510" y1="240" x2="690" y2="240" strokeWidth="3" />
          <line x1="510" y1="230" x2="690" y2="230" strokeWidth="1.5" strokeDasharray="10 5" />

          {/* Upper Steeple & Spire */}
          <polygon points="535,230 600,80 665,230" fill="none" strokeWidth="2" />
          <line x1="600" y1="80" x2="600" y2="50" strokeWidth="2" />
          {/* Spire Weather Vane / Quill & Star */}
          <path d="M592 50 L 608 50 M 600 42 L 600 58 M 604 46 L 596 54" strokeWidth="1.5" />
        </g>

        {/* RIGHT WING: Science, Law & Faculty Halls */}
        <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8">
          <rect x="850" y="360" width="170" height="200" fill="none" strokeWidth="1.5" />
          
          {/* Gothic Pointed Windows */}
          <path d="M875 450 V 400 C 875 385, 905 385, 905 400 V 450 Z" fill="none" strokeWidth="1.5" />
          <path d="M925 450 V 400 C 925 385, 955 385, 955 400 V 450 Z" fill="none" strokeWidth="1.5" />
          <path d="M975 450 V 400 C 975 385, 1005 385, 1005 400 V 450 Z" fill="none" strokeWidth="1.5" />

          {/* Lower Windows */}
          <rect x="875" y="480" width="30" height="45" fill="none" strokeWidth="1.2" />
          <rect x="925" y="480" width="30" height="45" fill="none" strokeWidth="1.2" />
          <rect x="975" y="480" width="30" height="45" fill="none" strokeWidth="1.2" />

          {/* Mansard Gabled Roof */}
          <polygon points="840,360 935,280 1030,360" fill="none" strokeWidth="2" />
          {/* Dormer Window on Roof */}
          <polygon points="915,310 935,295 955,310" fill="none" strokeWidth="1.5" />
          <rect x="923" y="310" width="24" height="25" fill="none" strokeWidth="1.2" />
        </g>

        {/* CONNECTING CLOISTERS & GALLERIES */}
        <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6">
          {/* Left Cloister between Library and Tower */}
          <rect x="340" y="440" width="180" height="120" fill="none" />
          <path d="M360 560 V 480 C 360 460, 395 460, 395 480 V 560" fill="none" />
          <path d="M410 560 V 480 C 410 460, 445 460, 445 480 V 560" fill="none" />
          <path d="M460 560 V 480 C 460 460, 495 460, 495 480 V 560" fill="none" />

          {/* Right Cloister between Tower and Science Hall */}
          <rect x="680" y="440" width="170" height="120" fill="none" />
          <path d="M705 560 V 480 C 705 460, 740 460, 740 480 V 560" fill="none" />
          <path d="M755 560 V 480 C 755 460, 790 460, 790 480 V 560" fill="none" />
          <path d="M805 560 V 480 C 805 460, 840 460, 840 480 V 560" fill="none" />
        </g>

        {/* ================= ILLUMINATED WARM WINDOWS (LODGED IN VINTAGE STONE) ================= */}
        <g fill="#D4AF37" fillOpacity="0.45" filter="url(#glow)">
          {/* Central Spire Windows */}
          <rect x="580" y="270" width="14" height="30" rx="3" />
          <rect x="606" y="270" width="14" height="30" rx="3" />
          
          {/* Great Arch Interior Glow */}
          <path d="M580 560 V 470 C 580 445, 620 445, 620 470 V 560 Z" fill="#D4AF37" fillOpacity="0.3" />

          {/* Science Hall Gothic Windows */}
          <path d="M880 445 V 405 C 880 395, 900 395, 900 405 V 445 Z" />
          <path d="M930 445 V 405 C 930 395, 950 395, 950 405 V 445 Z" />
          <path d="M980 445 V 405 C 980 395, 1000 395, 1000 405 V 445 Z" />
        </g>

        {/* ================= MODERN AI DIGITAL NEURAL OVERLAY ================= */}
        {isAiActive && (
          <g>
            {/* Luminous AI Neural Pathways (Flowing from the Spire through each Wing) */}
            <motion.path
              d="M 600 50 Q 420 180 260 206 T 120 460"
              stroke="url(#aiGlowGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
            
            <motion.path
              d="M 600 50 Q 760 160 935 280 T 1080 560"
              stroke="url(#aiGlowGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
            />

            <motion.path
              d="M 260 300 Q 440 370 600 340 T 935 360"
              stroke="#38BDF8"
              strokeWidth="1.8"
              fill="none"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 2.8, ease: 'easeInOut', delay: 0.6 }}
            />

            {/* Glowing AI Nodes at Key Architectural Spires */}
            
            {/* Central Spire Intelligence Apex */}
            <g transform="translate(600, 50)">
              <circle r="14" fill="#60A5FA" fillOpacity="0.2" className="animate-ping" />
              <circle r="6" fill="#38BDF8" />
              <circle r="2.5" fill="#FFFFFF" />
            </g>

            {/* Library Node (AI Study Buddy) */}
            <g transform="translate(260, 206)">
              <circle r="10" fill="#C5A059" fillOpacity="0.3" className="animate-pulse" />
              <circle r="5" fill="#D4AF37" />
              <circle r="2" fill="#FFFFFF" />
            </g>

            {/* Science Hall Node (Exams & AI Grading) */}
            <g transform="translate(935, 280)">
              <circle r="10" fill="#38BDF8" fillOpacity="0.3" className="animate-pulse" />
              <circle r="5" fill="#60A5FA" />
              <circle r="2" fill="#FFFFFF" />
            </g>

            {/* Portal Node (Admissions & Operations) */}
            <g transform="translate(600, 460)">
              <circle r="12" fill="#C5A059" fillOpacity="0.25" />
              <circle r="4.5" fill="#C5A059" />
              <circle r="1.5" fill="#FFFFFF" />
            </g>
          </g>
        )}

        {/* Foreground Classical Etched Foliage / Ivy */}
        <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.4">
          <path d="M120 560 Q 130 520 145 540 T 170 560" />
          <path d="M1020 560 Q 1035 515 1055 535 T 1080 560" />
        </g>
      </svg>
    </div>
  );
};
