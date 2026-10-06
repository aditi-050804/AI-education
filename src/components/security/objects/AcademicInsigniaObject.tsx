import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AccreditationSeal: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="inline-flex items-center justify-center select-none"
    >
      <div className="w-10 h-10 rounded-full border-2 border-[#C87D32] bg-[#FAF5EB] dark:bg-[#0E1524] p-1 flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 100 100" className="w-8 h-8 fill-none stroke-[#C87D32] dark:stroke-[#E5A955]" strokeWidth="2.5">
          <circle cx="50" cy="50" r="46" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="38" />
          {/* Classical Laurel Wreath */}
          <path d="M 32 60 C 26 50, 30 36, 40 30" strokeWidth="2" />
          <path d="M 68 60 C 74 50, 70 36, 60 30" strokeWidth="2" />
          {/* Key of Knowledge */}
          <circle cx="50" cy="40" r="6" strokeWidth="2" />
          <line x1="50" y1="46" x2="50" y2="68" strokeWidth="2.5" />
          <line x1="50" y1="58" x2="56" y2="58" strokeWidth="2" />
          <line x1="50" y1="64" x2="55" y2="64" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};

export const ScholarCapCharterObject: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm mx-auto my-6 select-none perspective-1000"
    >
      <div className="absolute inset-0 rounded-full bg-[#C87D32]/10 blur-2xl pointer-events-none" />

      <motion.div
        animate={{
          rotateX: mousePos.y * -8,
          rotateY: mousePos.x * 8,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full h-44 flex items-center justify-center transform-gpu"
      >
        <svg viewBox="0 0 320 200" className="w-full h-full drop-shadow-xl overflow-visible">
          {/* Drop Shadows */}
          <ellipse cx="160" cy="175" rx="100" ry="14" fill="black" fillOpacity="0.2" filter="blur(6px)" />

          {/* Bound Academic Charter Books Stack */}
          {/* Bottom Hardbound Book (Deep Navy) */}
          <rect x="70" y="145" width="180" height="22" rx="3" fill="#121926" stroke="#C87D32" strokeWidth="1.5" />
          <line x1="85" y1="145" x2="85" y2="167" stroke="#C87D32" strokeWidth="1" opacity="0.6" />
          <line x1="90" y1="145" x2="90" y2="167" stroke="#C87D32" strokeWidth="1" opacity="0.6" />
          {/* Gold Page Gilt on Edge */}
          <rect x="75" y="149" width="6" height="14" fill="#D4AF37" />

          {/* Middle Bound Book (Burgundy / Antique Maroon) */}
          <rect x="85" y="125" width="150" height="20" rx="3" fill="#3D1D1D" stroke="#C87D32" strokeWidth="1.5" />
          <line x1="100" y1="125" x2="100" y2="145" stroke="#C87D32" strokeWidth="1" opacity="0.6" />
          <line x1="105" y1="125" x2="105" y2="145" stroke="#C87D32" strokeWidth="1" opacity="0.6" />

          {/* Graduation Mortarboard Cap (Top) */}
          {/* Skull Cap Base */}
          <path d="M 125 105 C 125 90, 195 90, 195 105 Z" fill="#0F172A" stroke="#C87D32" strokeWidth="1.5" />
          {/* Diamond Mortarboard Top */}
          <polygon points="160,55 245,85 160,115 75,85" fill="#161E2E" stroke="#D4AF37" strokeWidth="2" />
          {/* Central Button */}
          <ellipse cx="160" cy="85" rx="5" ry="3" fill="#D4AF37" />

          {/* Golden Tassel Hanging Down */}
          <path d="M 160 85 C 190 90, 205 110, 208 135" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          {/* Tassel Fringe */}
          <polygon points="204,135 212,135 210,155 206,155" fill="#D4AF37" />

          {/* Antique Brass Key of Knowledge */}
          <g transform="translate(65, 80) rotate(-25)">
            <ellipse cx="20" cy="20" rx="10" ry="10" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="4" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <line x1="20" y1="30" x2="20" y2="70" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
            <line x1="20" y1="58" x2="28" y2="58" stroke="#D4AF37" strokeWidth="2.5" />
            <line x1="20" y1="65" x2="30" y2="65" stroke="#D4AF37" strokeWidth="2.5" />
          </g>

          {/* Subtle AI Security Pulse Particles */}
          <circle cx="160" cy="85" r="1.5" fill="#38BDF8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="208" cy="135" r="1.5" fill="#38BDF8">
            <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </motion.div>
    </motion.div>
  );
};
