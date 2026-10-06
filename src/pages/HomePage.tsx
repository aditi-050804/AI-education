import React from 'react';
import type { PageId } from '../types';
import { Scene01Hero } from '../components/vintage/Scene01Hero';
import { Scene02BlueprintOperations } from '../components/vintage/Scene02BlueprintOperations';
import { Scene03FragmentedToConnected } from '../components/vintage/Scene03FragmentedToConnected';
import { Scene04YourPeople } from '../components/vintage/Scene04YourPeople';
import { Scene05StudyBuddy } from '../components/vintage/Scene05StudyBuddy';
import { Scene06SmartTimetable } from '../components/vintage/Scene06SmartTimetable';
import { Scene07FinanceTally } from '../components/vintage/Scene07FinanceTally';
import { Scene08ExamsReportCard } from '../components/vintage/Scene08ExamsReportCard';
import { Scene09ParentConnection } from '../components/vintage/Scene09ParentConnection';
import { Scene10IntelligentCampus } from '../components/vintage/Scene10IntelligentCampus';
import { Scene11Implementation } from '../components/vintage/Scene11Implementation';
import { Scene12SecurityTeaser } from '../components/vintage/Scene12SecurityTeaser';
import { Scene13PricingTeaser } from '../components/vintage/Scene13PricingTeaser';
import { Scene14FAQ } from '../components/vintage/Scene14FAQ';
import { Scene15FinalCTA } from '../components/vintage/Scene15FinalCTA';

interface HomePageProps {
    onNavigate: (page: PageId) => void;
    onOpenDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDemo }) => {
    const scrollToNext = () => {
        const el = document.getElementById('scene-02');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full">
            {/* =========================================================================
          HERO SECTION (LOCKED — EXACTLY AS IT IS)
      ========================================================================= */}
            <Scene01Hero onOpenDemo={onOpenDemo} onExplore={scrollToNext} />

            {/* =========================================================================
          SECTION 01 — ONE CAMPUS. EVERY OPERATION. (Architectural Blueprint)
      ========================================================================= */}
            <Scene02BlueprintOperations />

            {/* =========================================================================
          SECTION 02 — FROM FRAGMENTED TO CONNECTED (Transformation Matrix)
      ========================================================================= */}
            <Scene03FragmentedToConnected />

            {/* =========================================================================
          SECTION 03 — YOUR CAMPUS, YOUR PEOPLE (Adaptive Role Perspectives)
      ========================================================================= */}
            <Scene04YourPeople />

            {/* =========================================================================
          SECTION 04 — AI STUDY BUDDY (Curriculum Grounding & Citations)
      ========================================================================= */}
            <Scene05StudyBuddy />

            {/* =========================================================================
          SECTION 05 — SMART TIMETABLE (Autonomous Proxy Allocation)
      ========================================================================= */}
            <Scene06SmartTimetable />

            {/* =========================================================================
          SECTION 06 — FINANCE + TALLY (2-Way Real-Time Ledger Sync)
      ========================================================================= */}
            <Scene07FinanceTally />

            {/* =========================================================================
          SECTION 07 — EXAMS TO REPORT CARD (Continuous Assessment Lifecycle)
      ========================================================================= */}
            <Scene08ExamsReportCard />

            {/* =========================================================================
          SECTION 08 — PARENT CONNECTION (Multi-Child Portal)
      ========================================================================= */}
            <Scene09ParentConnection />

            {/* =========================================================================
          SECTION 09 — THE INTELLIGENT CAMPUS (Panoramic Synthesis)
      ========================================================================= */}
            <Scene10IntelligentCampus />

            {/* =========================================================================
          SECTION 10 — 14-DAY IMPLEMENTATION (Zero Downtime Roadmap)
      ========================================================================= */}
            <Scene11Implementation />

            {/* =========================================================================
          SECTION 11 — SECURITY TEASER (Institutional Sovereign Vault)
      ========================================================================= */}
            <Scene12SecurityTeaser onNavigate={onNavigate} />

            {/* =========================================================================
          SECTION 12 — PRICING TEASER (Transparent Institutional Roll)
      ========================================================================= */}
            <Scene13PricingTeaser onNavigate={onNavigate} />

            {/* =========================================================================
          SECTION 13 — FAQ (Essential Inquiries)
      ========================================================================= */}
            <Scene14FAQ />

            {/* =========================================================================
          SECTION 14 — FINAL CTA (Illuminated Campus Invitation)
      ========================================================================= */}
            <Scene15FinalCTA onOpenDemo={onOpenDemo} onNavigate={onNavigate} />
        </div>
    );
};
