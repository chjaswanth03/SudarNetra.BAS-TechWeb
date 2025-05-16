
import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Cpu, Globe, FolderHeart, Lock, Disc3 } from 'lucide-react';

const pillars = [
  {
    icon: <Flag className="w-10 h-10 text-primary" />,
    title: 'Indian-Rooted',
    description: 'Solutions designed with deep understanding of the Indian digital landscape and ethos.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-accent" />,
    title: 'Multimodal AI',
    description: 'Leveraging diverse AI models for comprehensive threat detection and analysis.',
  },
  {
    icon: <Globe className="w-10 h-10 text-secondary" />,
    title: 'Open & Affordable',
    description: 'Commitment to accessibility, making top-tier security available to all.',
  },
  {
    icon: <FolderHeart className="w-10 h-10 text-primary" />,
    title: 'Built with Dharma',
    description: 'Ethical principles guide our technology, ensuring responsible and just cyber defense.',
  },
  {
    icon: <Lock className="w-10 h-10 text-accent" />,
    title: 'Privacy-First Architecture',
    description: 'Prioritizing data privacy at every layer of our systems and solutions.',
  }
];

const WhyUsSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const pillarVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 35 },
    visible: { opacity: 1, scale: 1, y:0, transition: { duration: 0.55, ease: "backOut" } },
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden section-particle-bg">
      <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-radial from-primary/5 to-transparent rounded-full animate-pulse opacity-60 animation-delay-2000"></div>
      <div className="absolute -bottom-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-radial from-accent/5 to-transparent rounded-full animate-pulse opacity-60 animation-delay-4000"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 cosmic-gradient-text-glow"
        >
          Why SudarNetra?
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={pillarVariants}
              className="group flex flex-col items-center text-center p-6 rounded-2xl glassmorphism-card digital-aura-card hover:shadow-accent/40 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-5 inline-block shadow-inner">
                {React.cloneElement(pillar.icon, { className: `${pillar.icon.props.className} group-hover:scale-110 transition-transform`})}
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${pillar.icon.props.className.includes('text-primary') ? 'hsl(var(--primary)/0.3)' : pillar.icon.props.className.includes('text-accent') ? 'hsl(var(--accent)/0.3)' : 'hsl(var(--secondary)/0.3)'} 0%, transparent 60%)`,
                    animation: `chakra-soft-pulse 2s infinite ${index * 0.2}s`
                  }}
                />
                 <Disc3 className="absolute inset-0 w-full h-full text-primary/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-spin" style={{animationDuration: '10s'}}/>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
  