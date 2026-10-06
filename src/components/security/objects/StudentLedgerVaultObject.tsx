import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StudentLedgerVaultObjectProps {
  isEncrypted: boolean;
  cipherText: string;
}

export const StudentLedgerVaultObject: React.FC<StudentLedgerVaultObjectProps> = ({
  isEncrypted,
  cipherText,
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
      {/* Background Golden Amber Warmth */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C87D32]/10 via-[#D4AF37]/15 to-transparent blur-2xl pointer-events-none" />

      {/* Main Tilt Wrapper */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -6,
          rotateY: mousePos.x * 6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full transform-gpu"
      >
        {/* Deep Shadow */}
        <div className="absolute inset-x-8 bottom-0 h-10 bg-black/15 dark:bg-black/50 blur-xl rounded-[40px] transform translate-y-3" />

        {/* Academic Tool: Antique Brass Reading Loupe / Magnifying Glass */}
        <motion.div
          animate={{
            x: mousePos.x * 16,
            y: mousePos.y * 10,
            rotate: -12 + mousePos.x * 6,
          }}
          className="absolute -top-7 -left-5 w-28 h-28 pointer-events-none z-30 drop-shadow-xl"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Loupe Shadow */}
            <circle cx="42" cy="46" r="22" fill="black" fillOpacity="0.2" filter="blur(3px)" />
            {/* Handle */}
            <path d="M 58 58 L 84 84" stroke="#4A3718" strokeWidth="6" strokeLinecap="round" />
            <path d="M 58 58 L 84 84" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
            {/* Brass Bezel */}
            <circle cx="40" cy="40" r="24" fill="none" stroke="#D4AF37" strokeWidth="3.5" />
            {/* Glass Lens with Light Reflection */}
            <circle cx="40" cy="40" r="21" fill="#38BDF8" fillOpacity="0.08" />
            <path d="M 28 30 A 16 16 0 0 1 48 26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
          </svg>
        </motion.div>

        {/* Academic Tool: Graphite Wooden Pencil */}
        <motion.div
          animate={{
            x: mousePos.x * -12,
            y: mousePos.y * -6,
            rotate: 42 + mousePos.y * 4,
          }}
          className="absolute -bottom-6 -right-4 w-32 h-6 pointer-events-none z-30 drop-shadow-md"
        >
          <svg viewBox="0 0 120 20" className="w-full h-full">
            {/* Hexagonal Pencil Body (Golden Ochre) */}
            <rect x="25" y="6" width="80" height="7" fill="#E5A955" />
            <line x1="25" y1="9.5" x2="105" y2="9.5" stroke="#B87333" strokeWidth="1" />
            {/* Sharpened Wood Cone */}
            <polygon points="25,6 10,9.5 25,13" fill="#D9B575" />
            {/* Graphite Tip */}
            <polygon points="14,8.5 10,9.5 14,10.5" fill="#2D3748" />
            {/* Silver Ferrule & Pink Eraser */}
            <rect x="105" y="6" width="6" height="7" fill="#CBD5E1" />
            <rect x="111" y="6" width="6" height="7" rx="1.5" fill="#F472B6" />
          </svg>
        </motion.div>

        {/* Main Leather-Bound Ledger Folio */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FAF5EB] dark:bg-[#0E1524] border border-[#C87D32]/35 dark:border-[#C87D32]/30 shadow-xl overflow-hidden transition-colors duration-500">
          {/* Ledger Accounting Ruled Lines */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent, transparent 24px, rgba(200, 125, 50, 0.5) 24px, rgba(200, 125, 50, 0.5) 25px)',
            }}
          />

          {/* Vertical Red Accounting Margins */}
          <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-rose-600/20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-[52px] w-[1px] bg-rose-600/20 pointer-events-none" />

          {/* Folio Header */}
          <div className="relative z-10 flex items-start justify-between border-b border-[#C87D32]/25 pb-3 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C87D32] dark:text-[#E5A955] uppercase">
                  ACADEMIC MARKS & BURSAR LEDGER
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
                Student Record Vault // Folio 142
              </h3>
              <p className="text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
                Field-Level AES-256-GCM • Ephemeral 90-Day Key Rotation • DPDP Act 2023
              </p>
            </div>

            {/* Lock / Key Status Seal */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div
                className={`w-12 h-12 rounded-full border-2 p-1 flex items-center justify-center transition-colors duration-500 ${
                  isEncrypted
                    ? 'border-[#C87D32] bg-[#C87D32]/10 text-[#C87D32] dark:text-[#E5A955]'
                    : 'border-[#5A6578]/40 bg-transparent text-[#5A6578]'
                }`}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none" strokeWidth="2">
                  {isEncrypted ? (
                    <>
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M 8 11 V 7 A 4 4 0 0 1 16 7 V 11" />
                      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                    </>
                  ) : (
                    <>
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M 8 11 V 7 A 4 4 0 0 1 16 7" />
                      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Ledger Table Rows */}
          <div className="relative z-10 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-12 text-[10px] uppercase font-bold text-[#5A6578] dark:text-[#9DA9BE] pb-1 border-b border-[#C87D32]/15">
              <span className="col-span-4">FIELD IDENTIFIER</span>
              <span className="col-span-8">STORED RECORD (AT REST)</span>
            </div>

            {/* Student ID Field */}
            <div className="grid grid-cols-12 items-center py-1.5 px-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/10">
              <span className="col-span-4 text-[#5A6578] dark:text-[#9DA9BE] font-bold">student_id</span>
              <span className="col-span-8 text-[#121926] dark:text-[#F5EFE6]">
                STU-8821
              </span>
            </div>

            {/* Student Name Field */}
            <div className="grid grid-cols-12 items-center py-1.5 px-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/10">
              <span className="col-span-4 text-[#5A6578] dark:text-[#9DA9BE] font-bold">candidate_name</span>
              <span className="col-span-8 text-[#121926] dark:text-[#F5EFE6]">
                {isEncrypted ? (
                  <span className="text-[#C87D32] dark:text-[#E5A955] tracking-widest font-mono text-[11px]">
                    $aes$7f2a...88c1
                  </span>
                ) : (
                  'Aarav Sharma'
                )}
              </span>
            </div>

            {/* Student Marksheet Field */}
            <div className="grid grid-cols-12 items-center py-1.5 px-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/10">
              <span className="col-span-4 text-[#5A6578] dark:text-[#9DA9BE] font-bold">examination_score</span>
              <span className="col-span-8 text-[#121926] dark:text-[#F5EFE6]">
                {isEncrypted ? (
                  <span className="text-[#C87D32] dark:text-[#E5A955] tracking-widest font-mono text-[11px]">
                    $aes$43b9...901e
                  </span>
                ) : (
                  '96.4% (Physics A1, Math A1)'
                )}
              </span>
            </div>

            {/* Bursar Due Field */}
            <div className="grid grid-cols-12 items-center py-1.5 px-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/10">
              <span className="col-span-4 text-[#5A6578] dark:text-[#9DA9BE] font-bold">bursar_account</span>
              <span className="col-span-8 text-[#121926] dark:text-[#F5EFE6]">
                {isEncrypted ? (
                  <span className="text-[#C87D32] dark:text-[#E5A955] tracking-widest font-mono text-[11px]">
                    $aes$91fa...002c
                  </span>
                ) : (
                  '₹ 0.00 (Balanced / Reconciled)'
                )}
              </span>
            </div>
          </div>

          {/* Shimmering Encrypted Stream Ribbon */}
          <div className="relative z-10 mt-3 p-2.5 rounded-xl border border-[#C87D32]/25 bg-[#C87D32]/5 flex items-center justify-between font-mono text-[11px]">
            <span className="text-[#5A6578] dark:text-[#9DA9BE]">
              ACTIVE CIPHER AT REST:
            </span>
            <span className="text-[#C87D32] dark:text-[#E5A955] font-bold">
              {isEncrypted ? 'AES-256-GCM ENCRYPTED' : 'CLEARTEXT BUFFER'}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
