
import React from 'react';
import { motion } from 'framer-motion';
import LiveAnalysisDemo from '@/components/demo/LiveAnalysisDemo';
import ThreatMap from '@/components/demo/ThreatMap';
import SecuritySandbox from '@/components/demo/SecuritySandbox';
import SectionWrapper from '@/components/shared/SectionWrapper';

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

const DemoPage = () => {
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
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
            initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}
          >
            Experience Divine Defense
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
          >
            Witness the power of SudarNetra through interactive demonstrations and simulations
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LiveAnalysisDemo />
          <SecuritySandbox />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <ThreatMap />
      </SectionWrapper>
    </motion.div>
  );
};

export default DemoPage;
