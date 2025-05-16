
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SuccessStoriesHero = () => {
  return (
    <div className="text-center mb-16 md:mb-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
        className="inline-block p-4 bg-primary/10 rounded-full mb-6"
      >
        <Award className="w-16 h-16 text-primary" />
      </motion.div>
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
        initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration: 0.5}}
      >
        Victories in Cyber Dharma
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4, duration: 0.5}}
      >
        Explore how SudarNetra empowers organizations across diverse industries to conquer cyber threats and uphold digital integrity, guided by timeless principles.
      </motion.p>
      <motion.div 
        className="flex justify-center"
        initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6, duration: 0.5}}
      >
        <Button asChild size="lg" className="button-shine">
          <Link to="/contact">
            <ShieldCheck className="mr-2 h-5 w-5" /> Request Your Security Consultation
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default SuccessStoriesHero;
