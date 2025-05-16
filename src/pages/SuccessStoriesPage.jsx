
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SuccessStoriesHero from '@/components/success-stories/SuccessStoriesHero';
import IndustryCaseStudies from '@/components/success-stories/IndustryCaseStudies';
import ClientTestimonials from '@/components/success-stories/ClientTestimonials';
import PerformanceMetricsVis from '@/components/success-stories/PerformanceMetricsVis';
import VisualStorytelling from '@/components/success-stories/VisualStorytelling';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

const SuccessStoriesPage = () => {
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
        <SuccessStoriesHero />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Industry-Specific Triumphs
        </h2>
        <IndustryCaseStudies />
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Voices of Our Valued Partners
        </h2>
        <ClientTestimonials />
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Quantifiable Impact: Our Performance Metrics
        </h2>
        <PerformanceMetricsVis />
      </SectionWrapper>
      
      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">
          Visualizing Protection: Averting Disaster
        </h2>
        <VisualStorytelling />
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold cosmic-gradient-text-glow mb-6">
            Ready to Author Your Own Success Story?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join the ranks of organizations fortified by SudarNetra. Let us tailor a security strategy that aligns with your unique challenges and aspirations.
          </p>
          <Button asChild size="lg" className="button-shine">
            <Link to="/demo">
              Experience a Live Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

    </motion.div>
  );
};

export default SuccessStoriesPage;
