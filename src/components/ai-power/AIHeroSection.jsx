
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Eye, Zap } from 'lucide-react';

const AIHeroSection = () => {
  return (
    <div className="text-center mb-16">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
        initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}
      >
        The All-Seeing AI: SudarNetra's Vigilance
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
      >
        "Seeing through the chaos with the clarity of Sudarshan." Discover how our AI pierces the veil of digital complexity to reveal and neutralize threats before they manifest.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6}}
      >
        <Button asChild size="lg" className="button-shine">
          <Link to="/demo">
            <Zap className="mr-2 h-5 w-5" /> Request a Demo
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/technology">
            <Eye className="mr-2 h-5 w-5" /> Explore AI Defense
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default AIHeroSection;
