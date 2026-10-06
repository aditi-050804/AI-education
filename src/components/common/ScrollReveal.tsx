import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Premium academic cubic-bezier easing curve requested by user:
 * cubic-bezier(0.22, 1, 0.36, 1)
 */
export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in seconds (e.g., 0, 0.1, 0.18, 0.26, 0.35)
  yOffset?: number; // Start distance below natural position (default: 38px)
  duration?: number; // Duration of rise in seconds (default: 0.82s)
  className?: string;
  amount?: number; // Viewport trigger threshold (15-25%, default: 0.18)
  once?: boolean; // Set to false to allow smooth re-entry reveal on scroll back
  as?: 'div' | 'section' | 'article' | 'header' | 'main' | 'nav';
}

/**
 * Base ScrollReveal component:
 * Gently reveals content rising from bottom (translateY) to natural position with opacity.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  yOffset = 38,
  duration = 0.82,
  className = '',
  amount = 0.18,
  once = false,
  as = 'div',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : yOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : duration,
        delay,
        ease: PREMIUM_EASE,
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

/* -------------------------------------------------------------------------- */
/* STAGGERED HARMONIC PRESETS (Matching the user-specified sequence)          */
/* -------------------------------------------------------------------------- */

/**
 * 1. Eyebrow / Tag / Pill:
 * Triggers first at 0ms delay.
 */
export const RevealEyebrow: React.FC<Omit<ScrollRevealProps, 'delay'>> = (props) => (
  <ScrollReveal delay={0} yOffset={24} duration={0.75} {...props} />
);

/**
 * 2. Main Heading:
 * Triggers at 100ms (0.1s) delay with smooth vertical rise.
 */
export const RevealHeading: React.FC<Omit<ScrollRevealProps, 'delay'>> = (props) => (
  <ScrollReveal delay={0.1} yOffset={38} duration={0.85} {...props} />
);

/**
 * 3. Description / Subtitle:
 * Triggers at 180ms (0.18s) delay following the heading.
 */
export const RevealDescription: React.FC<Omit<ScrollRevealProps, 'delay'>> = (props) => (
  <ScrollReveal delay={0.18} yOffset={32} duration={0.82} {...props} />
);

/**
 * 4. Supporting Visual / Card / Diagram / Content:
 * Triggers at 260ms (0.26s) delay.
 */
export const RevealVisual: React.FC<Omit<ScrollRevealProps, 'delay'>> = (props) => (
  <ScrollReveal delay={0.26} yOffset={42} duration={0.88} {...props} />
);

/**
 * 5. Call To Action (Button / Trigger):
 * Triggers at 350ms (0.35s) delay settling the section.
 */
export const RevealCTA: React.FC<Omit<ScrollRevealProps, 'delay'>> = (props) => (
  <ScrollReveal delay={0.35} yOffset={26} duration={0.78} {...props} />
);

/**
 * Staggered Item inside a list, grid, or card sequence:
 * Calculates delay naturally as baseDelay + (index * stagger).
 */
export const RevealItem: React.FC<
  ScrollRevealProps & {
    index?: number;
    baseDelay?: number;
    stagger?: number;
    staggerDelay?: number;
  }
> = ({
  index = 0,
  baseDelay = 0.1,
  stagger = 0.08,
  staggerDelay,
  yOffset = 36,
  ...props
}) => {
  const effectiveStagger = staggerDelay !== undefined ? staggerDelay : stagger;
  return (
    <ScrollReveal
      delay={baseDelay + index * effectiveStagger}
      yOffset={yOffset}
      {...props}
    />
  );
};
