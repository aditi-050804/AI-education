import React from 'react';
import type { PageId } from '../types';
import { Scene01Hero } from '../components/vintage/Scene01Hero';
import { Scene02OldCampus } from '../components/vintage/Scene02OldCampus';
import { Scene03Transformation } from '../components/vintage/Scene03Transformation';
import { Scene04SmartCampus } from '../components/vintage/Scene04SmartCampus';
import { Scene05SmartTimetable } from '../components/vintage/Scene05SmartTimetable';
import { Scene06AIStudyBuddy } from '../components/vintage/Scene06AIStudyBuddy';
import { Scene07AdaptiveLearning } from '../components/vintage/Scene07AdaptiveLearning';
import { Scene08Exams } from '../components/vintage/Scene08Exams';
import { Scene09FinanceTally } from '../components/vintage/Scene09FinanceTally';
import { Scene10ParentConnection } from '../components/vintage/Scene10ParentConnection';
import { Scene11CampusCommunication } from '../components/vintage/Scene11CampusCommunication';
import { Scene12Personas } from '../components/vintage/Scene12Personas';
import { Scene13Solutions } from '../components/vintage/Scene13Solutions';
import { Scene14Security } from '../components/vintage/Scene14Security';
import { Scene15Pricing } from '../components/vintage/Scene15Pricing';
import { Scene16FinalCTA } from '../components/vintage/Scene16FinalCTA';

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
      {/* Scene 1: Hero */}
      <Scene01Hero onOpenDemo={onOpenDemo} onExplore={scrollToNext} />

      {/* Scene 2: The Old Campus */}
      <div id="scene-02">
        <Scene02OldCampus />
      </div>

      {/* Scene 3: The Transformation */}
      <Scene03Transformation />

      {/* Scene 4: Smart Campus */}
      <Scene04SmartCampus />

      {/* Scene 5: Smart Timetable */}
      <Scene05SmartTimetable />

      {/* Scene 6: AI Study Buddy */}
      <Scene06AIStudyBuddy />

      {/* Scene 7: Adaptive Learning */}
      <Scene07AdaptiveLearning />

      {/* Scene 8: Exams & Assessment */}
      <Scene08Exams />

      {/* Scene 9: Finance + Tally */}
      <Scene09FinanceTally />

      {/* Scene 10: Parent Connection */}
      <Scene10ParentConnection />

      {/* Scene 11: Campus Communication */}
      <Scene11CampusCommunication />

      {/* Scene 12: Personas (Interactive Campus Illustration) */}
      <Scene12Personas />

      {/* Scene 13: Solutions */}
      <Scene13Solutions onOpenDemo={onOpenDemo} />

      {/* Scene 14: Security Vault */}
      <Scene14Security />

      {/* Scene 15: Admission Rolls (Pricing) */}
      <Scene15Pricing onOpenDemo={onOpenDemo} />

      {/* Scene 16: Final CTA */}
      <Scene16FinalCTA onOpenDemo={onOpenDemo} onNavigate={onNavigate} />
    </div>
  );
};
