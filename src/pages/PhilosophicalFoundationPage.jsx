
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PhilosophyHero from '@/components/philosophy-page/PhilosophyHero';
import EthicalResponsibility from '@/components/philosophy-page/EthicalResponsibility';
import SudarshanVigilance from '@/components/philosophy-page/SudarshanVigilance';
import AncientWisdom from '@/components/philosophy-page/AncientWisdom';
import SymbolicImagery from '@/components/philosophy-page/SymbolicImagery';
import CallToActionPhilosophy from '@/components/philosophy-page/CallToActionPhilosophy';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6,
};

const PhilosophicalFoundationPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section-dark-gradient-bg"
    >
      <SectionWrapper className="pt-24">
        <PhilosophyHero />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Our Ethical Compass: Principles of Digital Dharma
        </h2>
        <EthicalResponsibility />
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Inspired by Sudarshan: Vigilance & Proactive Defense
        </h2>
        <SudarshanVigilance />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Echoes of Eternity: Wisdom from Ancient Texts
        </h2>
        <AncientWisdom />
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Symbols of Our Vision: Divine Imagery & Sacred Geometry
        </h2>
        <SymbolicImagery />
      </SectionWrapper>

      <SectionWrapper>
        <CallToActionPhilosophy />
      </SectionWrapper>

    </motion.div>
  );
};

export default PhilosophicalFoundationPage;
