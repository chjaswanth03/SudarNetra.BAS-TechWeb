
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import TechnologyHero from '@/components/technology-page/TechnologyHero';
import PillarsSection from '@/components/technology-page/PillarsSection';
import SystemFlowSection from '@/components/technology-page/SystemFlowSection';
import AICapabilitiesSection from '@/components/technology-page/AICapabilitiesSection';
import BlockchainShieldSection from '@/components/technology-page/BlockchainShieldSection';
import HadoopFoundationSection from '@/components/technology-page/HadoopFoundationSection';
import TechArsenalSection from '@/components/technology-page/TechArsenalSection';
import DivineLogicSection from '@/components/technology-page/DivineLogicSection';

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

const TechnologyPage = () => {
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
        <TechnologyHero />
      </SectionWrapper>

      <SectionWrapper>
        <PillarsSection />
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <SystemFlowSection />
      </SectionWrapper>

      <SectionWrapper>
        <AICapabilitiesSection />
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <BlockchainShieldSection />
      </SectionWrapper>

      <SectionWrapper>
        <HadoopFoundationSection />
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <TechArsenalSection />
      </SectionWrapper>

      <SectionWrapper>
        <DivineLogicSection />
      </SectionWrapper>
    </motion.div>
  );
};

export default TechnologyPage;
