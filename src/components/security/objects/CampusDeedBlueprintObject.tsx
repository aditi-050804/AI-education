import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CampusDeedBlueprintObjectProps {
  isBreachTesting: boolean;
  breachResult: 'idle' | 'testing' | 'blocked';
}

export const CampusDeedBlueprintObject: React.FC<CampusDeedBlueprintObjectProps> = ({
  isBreachTesting,
  breachResult,
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
      <div
        className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background:
            breachResult === 'testing'
              ? 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.35), transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(200, 125, 50, 0.25), transparent 70%)',
        }}
      />

      {/* Main Tilt Wrapper */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -6,
          rotateY: mousePos.x * 6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full transform-gpu"
      >
        {/* Underneath Shadow */}
        <div className="absolute inset-x-8 bottom-0 h-10 bg-black/15 dark:bg-black/50 blur-xl rounded-[40px] transform translate-y-3" />

        {/* Real Academic Drafting Tool: Brass Compass / Divider laying across top */}
        <motion.div
          animate={{
            x: mousePos.x * 14,
            y: mousePos.y * 8,
            rotate: 15 + mousePos.x * 5,
          }}
          className="absolute -top-6 -right-2 w-32 h-32 pointer-events-none z-30 drop-shadow-xl"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Compass Shadow */}
            <ellipse cx="50" cy="55" rx="35" ry="8" fill="black" fillOpacity="0.25" filter="blur(3px)" />
            {/* Compass Hinge Top */}
            <circle cx="50" cy="20" r="6" fill="#D4AF37" stroke="#997A15" strokeWidth="1.5" />
            <circle cx="50" cy="20" r="2.5" fill="#4A3718" />
            {/* Left Leg */}
            <line x1="48" y1="24" x2="30" y2="78" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
            <polygon points="29,78 30,85 32,78" fill="#526071" />
            {/* Right Leg */}
            <line x1="52" y1="24" x2="70" y2="78" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
            <polygon points="69,78 70,85 72,78" fill="#526071" />
            {/* Adjustment Arc & Thumbwheel */}
            <path d="M 38 48 A 20 20 0 0 1 62 48" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="50" cy="48" r="3" fill="#D4AF37" stroke="#4A3718" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Blueprint Folio Surface */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FAF5EB] dark:bg-[#0A111E] border border-[#C87D32]/35 dark:border-[#C87D32]/30 shadow-xl overflow-hidden transition-colors duration-500">
          {/* Blueprint Drafting Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(200, 125, 50, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 125, 50, 0.4) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Folio Title */}
          <div className="relative z-10 flex items-start justify-between border-b border-[#C87D32]/25 pb-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C87D32] dark:text-[#E5A955] uppercase">
                  INSTITUTIONAL AIR-GAP ARCHITECTURAL DEED
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
                Dual Campus Schema Demarcation
              </h3>
              <p className="text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
                Zero shared in-memory buffers • Independent KMS keys • Cryptographic isolation
              </p>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/30">
                100% AIR-GAPPED
              </span>
            </div>
          </div>

          {/* Visual Dual Campus Layout with Impenetrable Barrier */}
          <div className="relative z-10 grid grid-cols-11 gap-2 items-center py-2">
            {/* Campus Deed 01: St. Xavier's */}
            <div className="col-span-5 p-3 rounded-xl border border-[#C87D32]/30 bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#C87D32] dark:text-[#E5A955]">
                <span className="font-bold">DEED 01</span>
                <span>KEY: 0x89F4</span>
              </div>

              {/* Architectural Engraving Silhouette of Campus 1 */}
              <div className="h-16 w-full flex items-center justify-center border-y border-[#C87D32]/15 py-1">
                <svg viewBox="0 0 120 50" className="w-full h-full stroke-[#C87D32] dark:stroke-[#E5A955] fill-none" strokeWidth="1.2">
                  <rect x="20" y="20" width="80" height="25" />
                  <polygon points="15,20 60,5 105,20" />
                  <line x1="35" y1="25" x2="35" y2="45" strokeWidth="1.5" />
                  <line x1="50" y1="25" x2="50" y2="45" strokeWidth="1.5" />
                  <line x1="70" y1="25" x2="70" y2="45" strokeWidth="1.5" />
                  <line x1="85" y1="25" x2="85" y2="45" strokeWidth="1.5" />
                  <circle cx="60" cy="14" r="3" />
                </svg>
              </div>

              <div className="text-xs font-serif font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight truncate">
                St. Xavier's Senior Sec.
              </div>
              <div className="text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                db_tenant_stxaviers
              </div>
            </div>

            {/* Central Air-Gap Barrier Line */}
            <div className="col-span-1 flex flex-col items-center justify-center relative py-1">
              <div className="w-[3px] h-28 rounded-full bg-rose-500/70 relative overflow-hidden shadow-sm shadow-rose-500/30">
                {/* Simulated Breach Deflection Pulse */}
                {breachResult === 'testing' && (
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-10 bg-white shadow-md shadow-rose-300"
                  />
                )}
              </div>

              {/* Air-gap seal icon */}
              <div className="mt-1 px-1 py-0.5 rounded bg-rose-500/15 border border-rose-500/40 text-[8px] font-mono text-rose-600 dark:text-rose-400 font-bold tracking-tighter">
                WALL
              </div>
            </div>

            {/* Campus Deed 02: National Law University */}
            <div className="col-span-5 p-3 rounded-xl border border-[#C87D32]/30 bg-black/[0.02] dark:bg-white/[0.02] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#C87D32] dark:text-[#E5A955]">
                <span className="font-bold">DEED 02</span>
                <span>KEY: 0x42B1</span>
              </div>

              {/* Architectural Engraving Silhouette of Campus 2 */}
              <div className="h-16 w-full flex items-center justify-center border-y border-[#C87D32]/15 py-1">
                <svg viewBox="0 0 120 50" className="w-full h-full stroke-[#C87D32] dark:stroke-[#E5A955] fill-none" strokeWidth="1.2">
                  <rect x="15" y="22" width="90" height="23" />
                  <path d="M 45 22 C 45 10, 75 10, 75 22" />
                  <line x1="60" y1="10" x2="60" y2="4" />
                  <circle cx="60" cy="3" r="2" fill="currentColor" />
                  <line x1="30" y1="26" x2="30" y2="45" strokeWidth="1.5" />
                  <line x1="90" y1="26" x2="90" y2="45" strokeWidth="1.5" />
                  <rect x="52" y="32" width="16" height="13" strokeDasharray="1 1" />
                </svg>
              </div>

              <div className="text-xs font-serif font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight truncate">
                National Law University
              </div>
              <div className="text-[10px] font-mono text-[#5A6578] dark:text-[#9DA9BE]">
                db_tenant_nlc_law
              </div>
            </div>
          </div>

          {/* Real-time Status Deflection Notification */}
          <div className="relative z-10 mt-3 pt-3 border-t border-[#C87D32]/20 flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#5A6578] dark:text-[#9DA9BE] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Cross-Tenant Query Permeability: 0.00%</span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              SCHEMA-ISOLATED ✓
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
