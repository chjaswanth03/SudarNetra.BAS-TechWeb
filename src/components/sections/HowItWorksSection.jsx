
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Settings, Search, Bell, LayoutDashboard } from 'lucide-react';

const steps = [
  { icon: <Database className="w-10 h-10 text-primary" />, label: "Log Ingestion" },
  { icon: <Settings className="w-10 h-10 text-accent" />, label: "Hadoop Processing" },
  { icon: <Search className="w-10 h-10 text-secondary" />, label: "AI Detection" },
  { icon: <Bell className="w-10 h-10 text-primary" />, label: "Alert System" },
  { icon: <LayoutDashboard className="w-10 h-10 text-accent" />, label: "Streamlit UI" }
];

const HowItWorksSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const itemVariants = (index) => ({
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 90, damping: 15, delay: index * 0.1 } 
    },
  });

  const svgArrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    }
  };
  
  const iconArrowVariants = {
    hidden: { opacity: 0, scale:0.5 },
    visible: { opacity:1, scale:1, transition: { delay: 0.3, duration:0.4 } }
  }


  return (
    <section className="py-24 px-4 bg-background/80 backdrop-blur-md relative section-particle-bg">
       <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-accent/5 opacity-50 pointer-events-none"></div>
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease:"easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-20 cosmic-gradient-text-glow"
        >
          How It Works (Tech Stack Overview)
        </motion.h2>
        
        <motion.div 
          className="flex flex-col md:flex-row items-stretch justify-center space-y-8 md:space-y-0 md:space-x-3 lg:space-x-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                custom={index}
                variants={itemVariants(index)}
                className="flex flex-col items-center justify-center p-5 sm:p-7 glassmorphism-card rounded-xl w-full md:flex-1 min-w-[160px] md:min-w-[130px] lg:min-w-[170px] digital-aura-card hover:shadow-primary/30"
              >
                <div className="mb-3.5 p-3 bg-card/50 rounded-full shadow-inner">{step.icon}</div>
                <p className="font-semibold text-foreground text-base md:text-lg text-center">{step.label}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:flex items-center justify-center text-muted-foreground/70"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.25 + 0.4, duration: 0.5 }} // Delay based on item completion
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" className="w-10 h-10 lg:w-12 lg:h-12">
                    <motion.line
                      x1="10" y1="30" x2="50" y2="30"
                      stroke="hsl(var(--primary)/0.6)" strokeWidth="2.5"
                      variants={svgArrowVariants}
                    />
                    <motion.polyline
                      points="40,20 50,30 40,40"
                      stroke="hsl(var(--primary)/0.6)" strokeWidth="2.5" fill="none"
                      variants={svgArrowVariants}
                    />
                  </svg>
                </motion.div>
              )}
               {index < steps.length - 1 && (
                 <motion.div 
                    className="md:hidden flex items-center justify-center my-3"
                    variants={iconArrowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    transition={{delay: index * 0.25 + 0.4}}
                  >
                    <ArrowRight className="w-7 h-7 text-primary/70 transform rotate-90" />
                 </motion.div>
               )}
            </React.Fragment>
          ))}
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: steps.length * 0.25 + 0.5, ease: "easeOut" }}
          className="mt-16 text-muted-foreground text-md md:text-lg"
        >
          Log Ingestion → Hadoop Processing → AI Detection → Alert System → Streamlit UI
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
  