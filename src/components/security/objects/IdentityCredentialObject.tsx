import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IdentityCredentialObjectProps {
  selectedRole: 'principal' | 'teacher' | 'student' | 'parent';
}

const ROLE_DETAILS = {
  principal: {
    title: 'OFFICE OF THE RECTOR',
    designation: 'Institutional Head & Registrar',
    idCode: 'REC-001-A9',
    clearance: 'TIER-1 MASTER CLEARANCE',
    scopeBadge: 'ALL 18 FACULTY LEDGERS',
    hash: 'ed25519:7b91...f02a',
    latinMotto: 'Auctoritas et Veritas',
  },
  teacher: {
    title: 'FACULTY ACADEMIC SENATE',
    designation: 'Senior Instructor & Grader',
    idCode: 'FAC-412-B2',
    clearance: 'TIER-2 CLASSROOM SCOPE',
    scopeBadge: 'ASSIGNED COHORTS & MARKS',
    hash: 'ed25519:3e44...c819',
    latinMotto: 'Docendo Discimus',
  },
  student: {
    title: 'SCHOLAR REGISTRATION FOLIO',
    designation: 'Enrolled Senior Candidate',
    idCode: 'STU-8821-C4',
    clearance: 'TIER-3 ISOLATED SCHOLAR',
    scopeBadge: 'PERSONAL MARKSHEET ONLY',
    hash: 'ed25519:9f12...55da',
    latinMotto: 'Sapere Aude',
  },
  parent: {
    title: 'GUARDIAN REGISTRY DOCKET',
    designation: 'Authorized Ward Delegate',
    idCode: 'PAR-9043-D1',
    clearance: 'TIER-3 SINGLE-WARD SCOPE',
    scopeBadge: 'OWN WARD TELEMETRY ONLY',
    hash: 'ed25519:2a77...99eb',
    latinMotto: 'Fides et Diligentia',
  },
};

export const IdentityCredentialObject: React.FC<IdentityCredentialObjectProps> = ({
  selectedRole,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const role = ROLE_DETAILS[selectedRole];

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
      {/* Golden Aura Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#C87D32]/10 via-[#C5A059]/15 to-transparent blur-2xl pointer-events-none" />

      {/* Main Composition with Mouse Tilt */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -6,
          rotateY: mousePos.x * 6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative w-full transform-gpu"
      >
        {/* Layer 0: Shadow Under Card */}
        <div className="absolute inset-x-8 bottom-0 h-10 bg-black/20 dark:bg-black/50 blur-xl rounded-[40px] transform translate-y-3" />

        {/* Real School Stationery: Vintage Wooden Drafting Ruler Underneath */}
        <motion.div
          animate={{
            x: mousePos.x * -10,
            y: mousePos.y * -5,
          }}
          className="absolute -bottom-5 left-4 right-4 h-7 rounded-md bg-[#D9B575] dark:bg-[#5C4524] border border-[#B38F4E] dark:border-[#7A5C30] shadow-md flex items-end px-3 pb-1 justify-between overflow-hidden pointer-events-none"
        >
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-[1px] ${
                  i % 5 === 0
                    ? 'h-3.5 bg-[#4A3718] dark:bg-[#FAF5EB]'
                    : 'h-2 bg-[#4A3718]/60 dark:bg-[#FAF5EB]/60'
                }`}
              />
              {i % 5 === 0 && (
                <span className="text-[7px] font-mono font-bold text-[#4A3718] dark:text-[#FAF5EB] mt-0.5">
                  {i}
                </span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Layer 1: Under-Parchment Docket File Folder */}
        <div className="absolute inset-0 bg-[#E8E1D3] dark:bg-[#0A101C] rounded-2xl transform -rotate-[1.2deg] translate-y-0.5 shadow-md border border-[#C87D32]/25 pointer-events-none" />

        {/* Layer 2: Main Collegiate Identity Credential Card */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-[#FAF5EB] dark:bg-[#0D1524] border border-[#C87D32]/35 dark:border-[#C87D32]/30 shadow-xl overflow-hidden transition-colors duration-500">
          {/* Guilloché / Banknote Intricate Security Background Line Pattern */}
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.035] pointer-events-none overflow-hidden">
            <svg viewBox="0 0 400 300" className="w-full h-full stroke-current text-[#C87D32]">
              <defs>
                <pattern id="guilloche" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 C 10 10, 30 10, 40 20 C 30 30, 10 30, 0 20 Z" fill="none" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="12" fill="none" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#guilloche)" />
            </svg>
          </div>

          {/* Academic Paperclip on Top Corner */}
          <div className="absolute top-2 right-8 w-6 h-12 pointer-events-none drop-shadow-md z-30">
            <svg viewBox="0 0 24 50" className="w-full h-full stroke-[#A1887F] dark:stroke-[#CFD8DC] fill-none" strokeWidth="2.2" strokeLinecap="round">
              <path d="M 12 4 C 6 4, 6 12, 6 36 C 6 44, 18 44, 18 36 L 18 14 C 18 8, 10 8, 10 14 L 10 34" />
            </svg>
          </div>

          {/* Folio Header: University Crest & Seal */}
          <div className="relative z-10 flex items-start justify-between border-b border-[#C87D32]/25 pb-4 mb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C87D32] dark:text-[#E5A955] uppercase">
                  ACADEMIC IDENTITY FOLIO & CREDENTIAL
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6] tracking-tight">
                    {role.title}
                  </h3>
                  <p className="text-[11px] font-serif italic text-[#C87D32] dark:text-[#E5A955]">
                    {role.latinMotto} • {role.designation}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Embossed Wax Seal Badge */}
            <div className="relative shrink-0 flex items-center justify-center mr-6">
              <div className="w-13 h-13 rounded-full border-2 border-[#C87D32] bg-[#FAF5EB] dark:bg-[#070B13] p-1 flex items-center justify-center shadow-md">
                <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-[#C87D32] dark:stroke-[#E5A955]" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="46" strokeDasharray="4 2" />
                  <circle cx="50" cy="50" r="39" />
                  {/* Classical Open Book & Quill Insignia */}
                  <path d="M 30 42 C 40 40, 50 43, 50 48 V 70 C 50 65, 40 62, 30 64 Z" fill="currentColor" fillOpacity="0.1" />
                  <path d="M 70 42 C 60 40, 50 43, 50 48 V 70 C 50 65, 60 62, 70 64 Z" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="50" cy="30" r="4" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* Credential Data Fields */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs mb-4">
            <div className="space-y-1 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/15">
              <span className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] uppercase tracking-wider block">
                CREDENTIAL SERIAL
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={role.idCode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-bold text-[#121926] dark:text-[#F5EFE6] text-sm"
                >
                  {role.idCode}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-1 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#C87D32]/15">
              <span className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] uppercase tracking-wider block">
                PARTITION BOUNDARY
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={role.clearance}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-bold text-emerald-600 dark:text-emerald-400 text-xs"
                >
                  {role.clearance}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Cryptographic Scope Inscription */}
          <div className="relative z-10 p-3.5 rounded-xl border border-[#C87D32]/25 bg-[#C87D32]/5 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#C87D32] dark:text-[#E5A955] font-bold uppercase">
                AUTHORIZED PARTITION RIGHTS:
              </span>
              <span className="text-[10px] text-emerald-600 font-bold">CRYPTO-SEALED ✓</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={role.scopeBadge}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                className="font-serif font-bold text-sm text-[#121926] dark:text-[#F5EFE6]"
              >
                {role.scopeBadge}
              </motion.div>
            </AnimatePresence>
            <div className="text-[10px] text-[#5A6578] dark:text-[#9DA9BE] pt-1 border-t border-[#C87D32]/15 truncate">
              Public Key Sig: {role.hash}
            </div>
          </div>

          {/* Subtle Watermark Stamp */}
          <div className="relative z-10 mt-4 flex items-center justify-between text-[11px] font-sans text-[#526071] dark:text-[#A6B4C9]">
            <span className="italic font-serif">Zero cross-role privilege escalation mathematically permitted.</span>
            <span className="font-mono text-[10px] text-[#C87D32] font-bold">ROLE-SCOPED // ACTIVE</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
