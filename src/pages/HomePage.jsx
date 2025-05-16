
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import MissionPurposeSection from '@/components/sections/MissionPurposeSection';
import OfferingsSection from '@/components/sections/OfferingsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeroSection />
      <MissionPurposeSection />
      <OfferingsSection />
      <WhyUsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TestimonialsSection />
      <BlogSection />
    </motion.div>
  );
};

export default HomePage;
  