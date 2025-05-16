
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, BrainCircuit, Disc3 } from 'lucide-react';

const HeroSection = () => {
  const mainChakraVariants = {
    initial: { scale: 0.7, opacity: 0, rotate: 0 },
    animate: { 
      scale: 1, 
      opacity: 0.25, 
      rotate: 360,
      transition: { 
        duration: 60, 
        ease: "linear", 
        repeat: Infinity,
        repeatType: "loop"
      } 
    },
    hover: {
      scale: 1.15,
      opacity: 0.45,
      boxShadow: "0px 0px 50px 15px hsl(var(--primary) / 0.6)",
      transition: { duration: 0.5, type: "spring", stiffness: 200 }
    }
  };

  const particleContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i) => ({
      opacity: [0, Math.random() * 0.7 + 0.1, 0],
      scale: [0, Math.random() * 1.1 + 0.3, 0],
      x: (Math.random() - 0.5) * window.innerWidth * 1.2, 
      y: (Math.random() - 0.5) * window.innerHeight * 1.2,
      rotate: Math.random() * 360,
      transition: {
        duration: Math.random() * 15 + 10, 
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.15,
        ease: "easeInOut" 
      },
    }),
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden cosmic-bg">
      <motion.div 
        className="absolute inset-0 z-0"
        variants={particleContainerVariants}
        initial="initial"
        animate="animate"
      >
        {Array.from({ length: 70 }).map((_, i) => ( 
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            className="absolute rounded-full bg-gradient-to-br from-primary/80 via-accent/80 to-secondary/80" 
            style={{ 
              width: `${Math.random() * 4 + 1.5}px`, 
              height: `${Math.random() * 4 + 1.5}px`,
              top: '50%', 
              left: '50%',
              filter: `blur(${Math.random() * 1.5}px)` 
            }}
          />
        ))}
      </motion.div>
      
      <div className="absolute inset-0 opacity-[0.03]">
        <img  class="w-full h-full object-cover" alt="Subtle cosmic texture" src="https://images.unsplash.com/photo-1608808546082-5670f88b010a" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"></div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] z-0"
        variants={mainChakraVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <Disc3 className="w-full h-full text-primary opacity-70" strokeWidth={0.4}/>
      </motion.div>


      <div className="relative z-10 text-center space-y-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", staggerChildren: 0.2 }}
          className="flex justify-center items-center space-x-5 mb-8"
        >
          <motion.div variants={{initial:{scale:0, opacity:0}, animate:{scale:1, opacity:1}}}><BrainCircuit className="w-12 h-12 md:w-14 md:h-14 text-primary animate-pulse" style={{animationDuration: '1.7s'}}/></motion.div>
          <motion.div variants={{initial:{scale:0, opacity:0}, animate:{scale:1, opacity:1}}}><Zap className="w-14 h-14 md:w-20 md:h-20 text-accent animate-pulse" style={{animationDuration: '1.5s', animationDelay: '0.2s'}}/></motion.div>
          <motion.div variants={{initial:{scale:0, opacity:0}, animate:{scale:1, opacity:1}}}><ShieldCheck className="w-12 h-12 md:w-14 md:h-14 text-secondary animate-pulse" style={{animationDuration: '1.9s', animationDelay: '0.4s'}}/></motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, type: "spring", stiffness: 100 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight cosmic-gradient-text-glow"
        >
          SudarNetra
        </motion.h1>
        <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground -mt-4"
        >
            The Divine Eye of Cyber Defense
        </motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground font-semibold"
        >
          AI. Hadoop. Dharma of Digital Security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut", staggerChildren:0.15 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 sm:space-x-8 pt-8"
        >
          <motion.div variants={{initial:{scale:0.8, opacity:0}, animate:{scale:1, opacity:1}}}>
            <Button 
              size="lg" 
              variant="default" 
              className="chakra-pulse-hover bg-gradient-to-r from-primary to-accent hover:opacity-95 transition-all duration-300 text-primary-foreground shadow-xl transform hover:scale-105 px-10 py-6 text-lg"
            >
              Request Demo
            </Button>
          </motion.div>
          <motion.div variants={{initial:{scale:0.8, opacity:0}, animate:{scale:1, opacity:1}}}>
            <Button 
              size="lg" 
              variant="outline" 
              className="chakra-pulse-hover border-secondary text-secondary hover:bg-secondary/15 hover:text-secondary shadow-lg transform hover:scale-105 transition-all duration-300 px-10 py-6 text-lg"
            >
              Explore Tools
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
  