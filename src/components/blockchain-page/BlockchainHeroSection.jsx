
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck } from 'lucide-react';

const BlockchainHeroSection = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
        className="inline-block p-4 bg-primary/10 rounded-full mb-6"
      >
        <Lock className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
        initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration: 0.5}}
      >
        Immortal Data: The Unbreakable Chain
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration: 0.5}}
      >
        SudarNetra leverages blockchain to forge an immutable record of truth. Each transaction, every critical log, is sealed within a tamper-proof ledger, ensuring absolute data integrity and transparency – a digital Akashic Record for your security.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6, duration: 0.5}}
      >
        <Button asChild size="lg" className="button-shine">
          <Link to="/contact">
            <ShieldCheck className="mr-2 h-5 w-5" /> Secure Your Data
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/technology">
            Explore Our Tech Stack
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default BlockchainHeroSection;
