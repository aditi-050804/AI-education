import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RegistrarAuditScrollObjectProps {
  latestLog: { id: string; time: string; action: string; hash: string };
}

export const RegistrarAuditScrollObject: React.FC<RegistrarAuditScrollObjectProps> = ({
  latestLog,
}) => {
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
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl mx-auto py-4 select-none perspective-1000"
    >
      {/* Background Radiance */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C87D32]/10 via-[#C5A059]/15 to-transparent blur-2xl pointer-events-none" />

      {/* Main Tilt Wrapper */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -6,
          rotateY: mousePos.x * 6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full transform-gpu"
      >
        {/* Soft Shadow */}
        <div className="absolute inset-x-8 bottom-0 h-10 bg-black/15 dark:bg-black/50 blur-xl rounded-[40px] transform translate-y-3" />

        {/* Academic Tool: Antique Brass Pocket Chronometer Watch */}
        <motion.div
          animate={{
            x: mousePos.x * 14,
            y: mousePos.y * 8,
            rotate: 10 + mousePos.x * 4,
          }}
          className="absolute -top-7 -right-4 w-24 h-24 pointer-events-none z-30 drop-shadow-xl"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Watch Crown Loop */}
            <circle cx="50" cy="14" r="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
            <rect x="47" y="20" width="6" height="5" fill="#D4AF37" />
            {/* Watch Case */}
            <circle cx="50" cy="55" r="32" fill="#FAF5EB" stroke="#D4AF37" strokeWidth="4" />
            <circle cx="50" cy="55" r="28" fill="none" stroke="#4A3718" strokeWidth="0.8" strokeDasharray="2 3" />
            {/* Roman Numerals / Hour Markers */}
            <circle cx="50" cy="30" r="1.5" fill="#4A3718" />
            <circle cx="75" cy="55" r="1.5" fill="#4A3718" />
            <circle cx="50" cy="80" r="1.5" fill="#4A3718" />
            <circle cx="25" cy="55" r="1.5" fill="#4A3718" />
            {/* Watch Hands */}
            <line x1="50" y1="55" x2="50" y2="38" stroke="#121926" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="50" y1="55" x2="64" y2="60" stroke="#121926" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="50" y1="55" x2="42" y2="70" stroke="#C87D32" strokeWidth="0.8" strokeLinecap="round" />
            <circle cx="50" cy="55" r="2" fill="#C87D32" />
          </svg>
        </motion.div>

        {/* Academic Tool: Glass Inkwell & Quill Nib */}
        <motion.div
          animate={{
            x: mousePos.x * -12,
            y: mousePos.y * -6,
            rotate: -18 + mousePos.y * 4,
          }}
          className="absolute -bottom-6 -left-4 w-24 h-24 pointer-events-none z-30 drop-shadow-lg"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Inkwell Body (Dark Amber/Glass) */}
            <rect x="25" y="45" width="40" height="35" rx="6" fill="#1E293B" stroke="#D4AF37" strokeWidth="2" />
            <rect x="32" y="38" width="26" height="8" rx="2" fill="#D4AF37" />
            <circle cx="45" cy="62" r="10" fill="#0F172A" />
            {/* Dip Pen Resting in Inkwell */}
            <line x1="45" y1="45" x2="15" y2="10" stroke="#8C6B28" strokeWidth="3" strokeLinecap="round" />
            <polygon points="45,45 42,50 48,50" fill="#D4AF37" />
          </svg>
        </motion.div>

        {/* Master Registrar Scroll Folio */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FAF5EB] dark:bg-[#0D1524] border border-[#C87D32]/35 dark:border-[#C87D32]/30 shadow-xl overflow-hidden transition-colors duration-500">
          {/* Deckled Edge / Archival Parchment Texture */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent, transparent 22px, rgba(200, 125, 50, 0.4) 22px, rgba(200, 125, 50, 0.4) 23px)',
            }}
          />

          {/* Folio Header */}
          <div className="relative z-10 flex items-start justify-between border-b border-[#C87D32]/25 pb-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C87D32] dark:text-[#E5A955] uppercase">
                  REGISTRAR IMMUTABLE CHRONOMETER SCROLL
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
                Chronicon Diplomaticum // Block Trace
              </h3>
              <p className="text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
                SHA-256 Merkle Ledger • Timestamped Cryptographic Signatures
              </p>
            </div>

            {/* University Registrar Wax Seal */}
            <div className="relative shrink-0 flex items-center justify-center mr-8">
              <div className="w-12 h-12 rounded-full border-2 border-[#C87D32] bg-[#FAF5EB] dark:bg-[#070B13] p-1 flex items-center justify-center shadow-md">
                <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-[#C87D32] dark:stroke-[#E5A955] fill-none" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="38" />
                  {/* Classical Lamp of Knowledge */}
                  <path d="M 30 65 L 70 65 L 65 52 L 35 52 Z" fill="currentColor" fillOpacity="0.1" />
                  <path d="M 65 52 C 75 48, 75 38, 65 38" />
                  <ellipse cx="40" cy="45" rx="5" ry="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Real-time Block Entry Inscription */}
          <div className="relative z-10 space-y-3 font-mono text-xs py-1">
            <div className="text-[10px] uppercase font-bold text-[#5A6578] dark:text-[#9DA9BE] pb-1 border-b border-[#C87D32]/15 flex items-center justify-between">
              <span>LATEST ARCHIVAL COMMIT</span>
              <span className="text-emerald-600 font-bold">LIVE STREAMING</span>
            </div>

            {/* Featured Block */}
            <motion.div
              key={latestLog.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3.5 rounded-xl border border-[#C87D32]/30 bg-[#C87D32]/5 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#C87D32] dark:text-[#E5A955]">
                  {latestLog.id}
                </span>
                <span className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">
                  {latestLog.time} UTC
                </span>
              </div>
              <div className="font-serif font-bold text-sm text-[#121926] dark:text-[#F5EFE6]">
                {latestLog.action}
              </div>
              <div className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] flex items-center justify-between pt-1 border-t border-[#C87D32]/10">
                <span>Merkle Hash: sha256:{latestLog.hash}</span>
                <span className="text-emerald-600 font-bold">SEALED ✓</span>
              </div>
            </motion.div>

            <div className="text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9] italic flex items-center justify-between pt-2 border-t border-[#C87D32]/15">
              <span>Append-only storage. Once inscribed, history cannot be rewritten.</span>
              <span className="font-mono text-[10px] text-[#C87D32] font-bold">100% IMMUTABLE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
