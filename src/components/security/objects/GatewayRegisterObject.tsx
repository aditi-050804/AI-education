import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GatewayRegisterObjectProps {
  packetType: 'legit' | 'malicious';
  isSimulating: boolean;
  packetStep: number;
}

export const GatewayRegisterObject: React.FC<GatewayRegisterObjectProps> = ({
  packetType,
  isSimulating,
  packetStep,
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

  const isFailed = packetType === 'malicious' && packetStep >= 2;
  const isPassed = packetType === 'legit' && packetStep >= 4;

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
      {/* Ambient Atmospheric Glow */}
      <div
        className="absolute inset-0 -inset-x-8 rounded-3xl blur-2xl opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: isFailed
            ? 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.35), transparent 70%)'
            : isPassed
            ? 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.35), transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(200, 125, 50, 0.25), transparent 70%)',
        }}
      />

      {/* Main Composition Container with Mouse Parallax */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -6,
          rotateY: mousePos.x * 6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full transform-gpu"
      >
        {/* Layer 0: Shadow Depth under Ledger */}
        <div className="absolute inset-x-6 bottom-0 h-10 bg-black/15 dark:bg-black/40 blur-xl rounded-[40px] transform translate-y-3" />

        {/* Layer 1: Under-foliage / Secondary Parchment Docket */}
        <div className="absolute inset-0 bg-[#EFE9DD] dark:bg-[#0B1322] rounded-2xl transform rotate-[1.4deg] translate-y-1 shadow-md border border-[#C87D32]/20 dark:border-[#C87D32]/15 pointer-events-none" />

        {/* Layer 2: Main Academic Ingress Ledger Folio */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FAF5EB] dark:bg-[#0E1626] border border-[#C87D32]/35 dark:border-[#C87D32]/30 shadow-xl overflow-hidden transition-colors duration-500">
          {/* Subtle Ledger Paper Lines */}
          <div
            className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(200, 125, 50, 0.4) 27px, rgba(200, 125, 50, 0.4) 28px)',
            }}
          />

          {/* Left Archival Book Margin Red Line */}
          <div className="absolute top-0 bottom-0 left-12 sm:left-14 w-[1px] bg-rose-700/25 dark:bg-rose-500/20 pointer-events-none" />

          {/* Folio Header: Campus Ingress Arch Inscription */}
          <div className="relative z-10 flex items-start justify-between border-b border-[#C87D32]/25 pb-4 mb-4">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C87D32] dark:text-[#E5A955] uppercase">
                  ACADEMIC GATEWAY ADMISSION REGISTER
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
                Porta Praesidii // Edge Ingress Folio
              </h3>
              <p className="text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
                Strict TLS 1.3 Handshake • ECDSA Token • Nonce Verification
              </p>
            </div>

            {/* Vintage College Gate Seal Stamp (Visual Object) */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div
                className={`w-14 h-14 rounded-full border-2 p-1 flex items-center justify-center transition-all duration-500 ${
                  isFailed
                    ? 'border-rose-500 bg-rose-500/10 text-rose-500'
                    : isPassed
                    ? 'border-emerald-600 bg-emerald-500/10 text-emerald-600'
                    : 'border-[#C87D32]/40 bg-[#C87D32]/5 text-[#C87D32] dark:text-[#E5A955]'
                }`}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="38" />
                  {/* Gate Arch Vector */}
                  <path d="M 30 75 V 45 C 30 30, 70 30, 70 45 V 75" />
                  <path d="M 36 75 V 48 C 36 36, 64 36, 64 48 V 75" strokeDasharray="2 2" />
                  <line x1="25" y1="75" x2="75" y2="75" strokeWidth="3" />
                  {/* Keystone / Star */}
                  <circle cx="50" cy="36" r="3" fill="currentColor" />
                </svg>
              </div>

              {/* Dynamic Wax Seal Ribbon */}
              <div
                className={`absolute -bottom-2 right-2 px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider uppercase border shadow-sm transition-colors duration-300 ${
                  isFailed
                    ? 'bg-rose-500 text-white border-rose-600'
                    : isPassed
                    ? 'bg-emerald-600 text-white border-emerald-700'
                    : 'bg-[#C87D32] text-white border-[#B06B25]'
                }`}
              >
                {isFailed ? 'REJECTED' : isPassed ? 'VERIFIED' : 'ACTIVE'}
              </div>
            </div>
          </div>

          {/* Ledger Record Table / Packet Inscription */}
          <div className="relative z-10 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-12 text-[10px] uppercase font-bold text-[#5A6578] dark:text-[#9DA9BE] pb-1 border-b border-[#C87D32]/15">
              <span className="col-span-3">TIMESTAMP</span>
              <span className="col-span-5">INGRESS PACKET</span>
              <span className="col-span-4 text-right">GATE VERDICT</span>
            </div>

            {/* Ingress Row 1 */}
            <div className="grid grid-cols-12 items-center py-1.5 px-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/10">
              <span className="col-span-3 text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">11:02:14.08</span>
              <span className="col-span-5 text-[#121926] dark:text-[#F5EFE6] truncate font-sans text-xs">
                TLS 1.3 / ECDHE-RSA
              </span>
              <span className="col-span-4 text-right font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">
                PASSED ✓
              </span>
            </div>

            {/* Ingress Row 2: Live Simulated Ingress */}
            <motion.div
              animate={{
                backgroundColor: isFailed
                  ? 'rgba(239, 68, 68, 0.12)'
                  : isSimulating
                  ? 'rgba(200, 125, 50, 0.12)'
                  : isPassed
                  ? 'rgba(16, 185, 129, 0.12)'
                  : 'rgba(200, 125, 50, 0.05)',
              }}
              className="grid grid-cols-12 items-center py-2 px-2 rounded-lg border border-[#C87D32]/25 relative overflow-hidden"
            >
              <span className="col-span-3 text-[11px] text-[#C87D32] dark:text-[#E5A955] font-bold">
                {isSimulating ? 'IN TRANSIT...' : 'CURRENT'}
              </span>
              <span className="col-span-5 text-[#121926] dark:text-[#F5EFE6] font-medium truncate text-xs">
                {packetType === 'legit' ? 'Student Portal Token' : 'Malicious Flood Probe'}
              </span>
              <span
                className={`col-span-4 text-right font-bold text-[11px] ${
                  isFailed
                    ? 'text-rose-600 dark:text-rose-400'
                    : isPassed
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-[#C87D32] dark:text-[#E5A955]'
                }`}
              >
                {isFailed
                  ? 'BLOCKED ✕'
                  : isPassed
                  ? 'ADMITTED ✓'
                  : isSimulating
                  ? `STEP 0${packetStep}/04`
                  : 'STANDBY'}
              </span>

              {/* Inscription line drawing effect */}
              {isSimulating && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C87D32] origin-left"
                />
              )}
            </motion.div>

            {/* Ingress Row 3 */}
            <div className="grid grid-cols-12 items-center py-1.5 px-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/10 opacity-70">
              <span className="col-span-3 text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">11:01:58.42</span>
              <span className="col-span-5 text-[#121926] dark:text-[#F5EFE6] truncate font-sans text-xs">
                Faculty Portal Key
              </span>
              <span className="col-span-4 text-right font-bold text-emerald-600 dark:text-emerald-400 text-[11px]">
                PASSED ✓
              </span>
            </div>
          </div>

          {/* Academic Physical Objects: Fountain Pen Resting Beside Ledger */}
          <div className="relative z-20 mt-5 pt-3 border-t border-[#C87D32]/20 flex items-center justify-between">
            {/* Ink Verification Ribbon */}
            <div className="flex items-center gap-2 text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
              <span className="w-2 h-2 rounded-full bg-[#C87D32]" />
              <span className="font-serif italic">Ink seal authenticated by institutional certificate authority</span>
            </div>

            {/* Brass Fountain Pen Illustration */}
            <motion.div
              animate={{
                x: mousePos.x * 12,
                y: mousePos.y * 6,
                rotate: -28 + mousePos.x * 4,
              }}
              className="absolute -right-4 -bottom-6 w-36 h-8 pointer-events-none drop-shadow-lg"
            >
              <svg viewBox="0 0 200 40" className="w-full h-full">
                {/* Pen Shadow */}
                <ellipse cx="100" cy="35" rx="80" ry="4" fill="black" fillOpacity="0.25" filter="blur(3px)" />
                {/* Pen Barrel (Deep Navy / Charcoal) */}
                <path d="M 30 18 L 140 16 L 140 24 L 30 22 Z" fill="#161E2E" />
                {/* Gold Trim Rings */}
                <rect x="70" y="16.5" width="4" height="7" fill="#D4AF37" />
                <rect x="136" y="15.8" width="5" height="8.4" fill="#D4AF37" />
                {/* Gold Fountain Nib */}
                <polygon points="140,16 175,20 140,24" fill="#D4AF37" />
                {/* Nib Breather Hole & Slit */}
                <circle cx="155" cy="20" r="1.5" fill="#161E2E" />
                <line x1="156" y1="20" x2="175" y2="20" stroke="#161E2E" strokeWidth="0.8" />
                {/* Clip */}
                <rect x="35" y="14" width="30" height="2.5" rx="1" fill="#D4AF37" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
