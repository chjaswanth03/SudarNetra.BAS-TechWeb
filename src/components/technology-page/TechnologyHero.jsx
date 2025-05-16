
import React from 'react';
import { motion } from 'framer-motion';

const TechnologyHero = () => {
  return (
    <div className="text-center mb-16">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
        initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}
      >
        The Architecture of Dharma
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
      >
        Unveiling the synergy of AI, Blockchain, and Big Data that powers SudarNetra's divine cyber defense.
      </motion.p>
    </div>
  );
};

export default TechnologyHero;
