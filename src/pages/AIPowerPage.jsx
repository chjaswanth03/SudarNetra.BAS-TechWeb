
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import AIHeroSection from '@/components/ai-power/AIHeroSection';
import CoreTechHighlight from '@/components/ai-power/CoreTechHighlight';
import ThreatMap from '@/components/demo/ThreatMap'; 
import RealTimeAttackGraph from '@/components/ai-power/RealTimeAttackGraph';
import KeyAIDefenseFeatures from '@/components/ai-power/KeyAIDefenseFeatures';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

const AIPowerPage = () => {
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
        <AIHeroSection />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          The Engine of Insight: Core AI Technologies
        </h2>
        <CoreTechHighlight />
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Global Threat Landscape: Real-time Visualization
        </h2>
        <ThreatMap />
        <p className="text-center text-muted-foreground mt-4">
          Witness simulated global threat activity, showcasing SudarNetra's reach.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Live Attack Analysis & Response Patterns
        </h2>
        <RealTimeAttackGraph />
         <p className="text-center text-muted-foreground mt-4">
          Illustrative graph showing anomaly detection and threat mitigation over time.
        </p>
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Key AI-Powered Defense Mechanisms
        </h2>
        <KeyAIDefenseFeatures />
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold cosmic-gradient-text-glow mb-6">
            Ready to Empower Your Defenses?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the future of cybersecurity. Let SudarNetra's AI provide the clarity and protection your organization deserves.
          </p>
          <Button asChild size="lg" className="button-shine">
            <Link to="/contact">
              Discuss Your Security Needs <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

    </motion.div>
  );
};

export default AIPowerPage;
