
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldAlert } from 'lucide-react';

const PhilosophyHero = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
        className="inline-block p-4 bg-primary/10 rounded-full mb-6"
      >
        <Sparkles className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
        initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration: 0.5}}
      >
        The Dharma of Digital Defense
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration: 0.5}}
      >
        At SudarNetra, we believe cybersecurity is more than code; it's a sacred duty. We weave ancient wisdom with cutting-edge technology to uphold truth, integrity, and protection in the digital cosmos.
      </motion.p>
    </div>
  );
};

export default PhilosophyHero;
