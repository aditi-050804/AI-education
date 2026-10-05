import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CampusEngraving } from './CampusEngraving';

interface Persona {
  id: string;
  role: string;
  oneSentence: string;
  location: string;
  x: string;
  y: string;
}

export const Scene12Personas: React.FC = () => {
  const [activePersona, setActivePersona] = useState<string>('principal');

  const personas: Persona[] = [
    { id: 'principal', role: 'Principal', oneSentence: 'See the whole campus.', location: 'Great Spire & Chancellor’s Chambers', x: '50%', y: '20%' },
    { id: 'teacher', role: 'Teacher', oneSentence: 'Teach. Grade. Simplify.', location: 'Colonnade Lecture Hall', x: '30%', y: '45%' },
    { id: 'accountant', role: 'Accountant', oneSentence: 'Keep every payment in sync.', location: 'Bursar & Treasury Wing', x: '70%', y: '38%' },
    { id: 'student', role: 'Student', oneSentence: 'Learn with AI.', location: 'Alexandria Study Library', x: '22%', y: '65%' },
    { id: 'parent', role: 'Parent', oneSentence: 'Stay connected.', location: 'Portal Gateways', x: '50%', y: '78%' }
  ];

  const current = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20 overflow-hidden">
      
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 z-20">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
          Scene XII • The Campus Community
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
          Built for everyone on campus.
        </h2>
        <p className="font-serif text-base italic text-[#586274] dark:text-[#A7B5CC]">
          Hover or select each role to see their primary purpose across the digital campus.
        </p>

        {/* Minimal Persona Selector Ribbon */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {personas.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePersona(p.id)}
              onMouseEnter={() => setActivePersona(p.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-serif italic border transition-all ${
                activePersona === p.id
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#C5A059] shadow-md scale-105'
                  : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
              }`}
            >
              {p.role}
            </button>
          ))}
        </div>
      </div>

      {/* Large Interactive Architectural Illustration Composition (NO CARDS) */}
      <div className="relative w-full max-w-5xl h-[520px] flex items-center justify-center">
        
        {/* Background Architectural Canvas */}
        <div className="absolute inset-0 opacity-60 dark:opacity-45">
          <CampusEngraving className="w-full h-full" isAiActive={true} />
        </div>

        {/* Interactive Floating Hotspots for each Persona */}
        {personas.map((p) => {
          const isSelected = activePersona === p.id;
          return (
            <div
              key={p.id}
              style={{ top: p.y, left: p.x }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              onClick={() => setActivePersona(p.id)}
              onMouseEnter={() => setActivePersona(p.id)}
            >
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all duration-300 ${
                isSelected
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#38BDF8] scale-110 shadow-lg'
                  : 'bg-[#FAF6EE]/90 dark:bg-[#0B1220]/90 text-[#161D2B] dark:text-[#F4ECE0] border-[#C5A059]/40 hover:scale-105'
              }`}>
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#38BDF8] animate-ping' : 'bg-[#C5A059]'}`} />
                <span className="font-serif text-xs font-bold">{p.role}</span>
              </div>
            </div>
          );
        })}

        {/* Dynamic Editorial Single-Sentence Callout */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-center w-full max-w-lg px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-2xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-xl backdrop-blur-md font-serif"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C6B28] dark:text-[#C5A059]">
                {current.role} • {current.location}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold italic text-[#161D2B] dark:text-[#F4ECE0] mt-1">
                “{current.oneSentence}”
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
