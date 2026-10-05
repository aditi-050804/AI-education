import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CampusEngraving } from './CampusEngraving';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface CampusNode {
  id: string;
  label: string;
  sub: string;
  x: string;
  y: string;
}

export const Scene04SmartCampus: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('academics');

  const nodes: CampusNode[] = [
    { id: 'admin', label: 'Administration', sub: 'Executive Governance', x: '50%', y: '16%' },
    { id: 'library', label: 'AI Study Library', sub: 'Curriculum Citations', x: '24%', y: '32%' },
    { id: 'classrooms', label: 'Classrooms & Labs', sub: 'Live Timetable', x: '35%', y: '58%' },
    { id: 'finance', label: 'Finance & Tally', sub: '2-Way Ledger Sync', x: '68%', y: '34%' },
    { id: 'exams', label: 'Examination Hall', sub: 'QR Hall Tickets & Grading', x: '78%', y: '54%' },
    { id: 'parents', label: 'Parent Portal', sub: 'Multi-Child Push Alert', x: '50%', y: '72%' }
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20 overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-20">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
          Scene IV • The Neural Campus
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
          Everything connected.
        </h2>
        <p className="text-sm font-serif italic text-[#586274] dark:text-[#A7B5CC]">
          Hover or tap any architectural wing to trace its live institutional data flow.
        </p>
      </div>

      {/* Full-Screen Architectural Composition with Embedded Floating Labels (NO CARDS) */}
      <div className="relative w-full max-w-5xl h-[520px] sm:h-[620px] flex items-center justify-center">
        
        {/* Background Vintage Campus SVG */}
        <div className="absolute inset-0 opacity-80 dark:opacity-70">
          <CampusEngraving className="w-full h-full" isAiActive={true} highlightedNode={activeNode} />
        </div>

        {/* Organic Floating Labels embedded directly in the architectural scene */}
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <motion.div
              key={node.id}
              style={{ top: node.y, left: node.x }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveNode(node.id)}
                className={`group relative flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#38BDF8] shadow-lg scale-110'
                    : 'bg-[#FAF6EE]/90 dark:bg-[#0B1220]/90 text-[#161D2B] dark:text-[#F4ECE0] border-[#C5A059]/40 hover:border-[#C5A059] shadow-sm'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#38BDF8] animate-ping' : 'bg-[#C5A059]'}`} />
                <div className="text-left font-serif">
                  <div className="text-xs font-bold leading-none">{node.label}</div>
                  <div className="text-[9px] font-mono opacity-70 mt-0.5 leading-none">{node.sub}</div>
                </div>
              </button>
            </motion.div>
          );
        })}

        {/* Central Intelligence Pulse in Scene */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs font-serif italic text-[#8C6B28] dark:text-[#C5A059] z-20">
          ✦ Zero data silos across academics, bursar, examinations, and faculties ✦
        </div>

      </div>

    </section>
  );
};
