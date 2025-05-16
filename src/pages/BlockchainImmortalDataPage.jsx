
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import BlockchainHeroSection from '@/components/blockchain-page/BlockchainHeroSection';
import SecureDataFlows from '@/components/blockchain-page/SecureDataFlows';
import BlockchainUseCases from '@/components/blockchain-page/BlockchainUseCases';
import BlockchainCybersecurityEssence from '@/components/blockchain-page/BlockchainCybersecurityEssence';
import TechPartnersLogos from '@/components/blockchain-page/TechPartnersLogos';
import IntegrationOptionsList from '@/components/blockchain-page/IntegrationOptionsList';
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

const BlockchainImmortalDataPage = () => {
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
        <BlockchainHeroSection />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          The Flow of Immutable Truth: How It Works
        </h2>
        <SecureDataFlows />
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Empowering Security: Blockchain Use Cases
        </h2>
        <BlockchainUseCases />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          The Divine Ledger: Blockchain's Role in Cyber Dharma
        </h2>
        <BlockchainCybersecurityEssence />
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Our Technology Partners in Trust
        </h2>
        <TechPartnersLogos />
         <p className="text-center text-muted-foreground mt-8">
          Collaborating with leaders in blockchain technology to deliver robust and scalable solutions.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Seamless Integration Options
        </h2>
        <IntegrationOptionsList />
      </SectionWrapper>
      
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold cosmic-gradient-text-glow mb-6">
            Fortify Your Digital Realm with Immortal Data
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Embrace the future of data integrity. Contact us to learn how SudarNetra's blockchain solutions can bring unparalleled security and transparency to your organization.
          </p>
          <Button asChild size="lg" className="button-shine">
            <Link to="/contact">
              Schedule a Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

    </motion.div>
  );
};

export default BlockchainImmortalDataPage;
