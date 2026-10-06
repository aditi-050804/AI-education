import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity } from 'lucide-react';
import type { PageId } from '../types';
import { Scene01Hero } from '../components/vintage/Scene01Hero';
import { Scene02BlueprintOperations } from '../components/vintage/Scene02BlueprintOperations';
import { HomeTransformationMatrix } from '../components/home/HomeTransformationMatrix';
import { HomeCampusEngine } from '../components/home/HomeCampusEngine';
import { HomeRolePerspectives } from '../components/home/HomeRolePerspectives';
import { HomeSecurityTeaser } from '../components/home/HomeSecurityTeaser';
import { HomeDeploymentPricing } from '../components/home/HomeDeploymentPricing';
import { HomeFAQAndCTA } from '../components/home/HomeFAQAndCTA';
import { ScrollReveal, RevealItem } from '../components/common/ScrollReveal';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDemo }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const el = document.getElementById('scene-02');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const institutionalStats = [
    { label: 'Campuses Active', value: '45+', sub: 'CBSE, ICSE & IB Schools' },
    { label: 'Live Learners', value: '1,20,000+', sub: 'Sovereign data records' },
    { label: 'Proxy Matching', value: '0.04s', sub: '99.8% syllabus accuracy' },
    { label: 'Tally Transactions', value: '₹380 Cr+', sub: 'Zero ledger discrepancy' },
  ];

  return (
    <div ref={containerRef} className="w-full relative overflow-x-clip">
      {/* SECTION 01: HERO SECTION (LOCKED & PRESERVED) */}
      <Scene01Hero onOpenDemo={onOpenDemo} onExplore={scrollToNext} />

      {/* SPACE AFTER HERO */}
      <div className="h-10 sm:h-16 w-full" />

      {/* SECTION 02: ONE CAMPUS. EVERY OPERATION. BLUEPRINT (PRESERVED) */}
      <Scene02BlueprintOperations />

      {/* INSTITUTIONAL IMPACT TICKER WITH SMOOTH SCROLL ANIMATION */}
      <ScrollReveal
        as="section"
        yOffset={35}
        duration={0.7}
        className="border-y border-[#C87D32]/20 bg-[#FAF5EB]/60 dark:bg-[#070B13]/60 py-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans text-xs">
            {institutionalStats.map((st, i) => (
              <RevealItem
                key={i}
                index={i}
                staggerDelay={0.08}
                baseDelay={0.05}
                className="space-y-1"
              >
                <div className="flex items-center gap-1.5 text-xs text-[#C87D32] font-bold uppercase tracking-wider">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>{st.label}</span>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                  {st.value}
                </div>
                <div className="text-xs text-[#526071] dark:text-[#A6B4C9]">
                  {st.sub}
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* SECTION 03: THE INSTITUTIONAL TRANSFORMATION */}
      <HomeTransformationMatrix onNavigate={onNavigate} />

      {/* SECTION 04: INTERACTIVE CAMPUS OPERATING ENGINE */}
      <HomeCampusEngine onNavigate={onNavigate} />

      {/* SECTION 05: ADAPTIVE ROLE PERSPECTIVES */}
      <HomeRolePerspectives onNavigate={onNavigate} />

      {/* SECTION 06: SOVEREIGN SECURITY & ARCHITECTURE */}
      <HomeSecurityTeaser onNavigate={onNavigate} />

      {/* SECTION 07: 14-DAY IMPLEMENTATION & ROADMAP */}
      <HomeDeploymentPricing onNavigate={onNavigate} onOpenDemo={onOpenDemo} />

      {/* SECTION 08: ESSENTIAL INQUIRIES (FAQ) & FINAL CTA */}
      <HomeFAQAndCTA onOpenDemo={onOpenDemo} onNavigate={onNavigate} />
    </div>
  );
};
