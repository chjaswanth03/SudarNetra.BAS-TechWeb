
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, BookOpen, HeartHandshake } from 'lucide-react';

const MissionPurposeSection = () => {
  const items = [
    {
      icon: <Target className="w-14 h-14 text-primary mb-5" />,
      title: 'Our Purpose',
      description: 'To safeguard the digital realm with wisdom and foresight, ensuring a secure and trusted online experience for all.',
    },
    {
      icon: <BookOpen className="w-14 h-14 text-accent mb-5" />,
      title: 'Our Mission',
      description: 'Empowering organizations with cutting-edge, AI-driven cyber defense solutions, rooted in ethical principles and accessible to everyone.',
    },
    {
      icon: <HeartHandshake className="w-14 h-14 text-secondary mb-5" />,
      title: 'Our Spirituality',
      description: 'Inspired by the protective vigilance of Sudarshana Chakra, we infuse our technology with Dharma, promoting digital well-being.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.35,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 90, damping: 12 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px -5px hsl(var(--primary)/0.3), 0px 5px 15px -5px hsl(var(--accent)/0.2)",
      transition: { duration: 0.3, type: "spring", stiffness: 200, damping: 10 }
    }
  };

  const chakraParticleVariants = {
    initial: { opacity: 0.2, scale: 0.7, rotate: 0 },
    animate: { 
        opacity: [0.2, 0.5, 0.2], 
        scale: [0.7, 1, 0.7],
        rotate: 360,
        transition: { duration: 18, ease: "linear", repeat: Infinity }
    },
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden section-particle-bg">
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 border-2 border-primary/15 rounded-full"
        variants={chakraParticleVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-80 h-80 border-2 border-accent/15 rounded-full"
        variants={chakraParticleVariants}
        initial="initial"
        animate="animate"
        style={{animationDelay: "2.5s"}}
      />
      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-8 cosmic-gradient-text-glow"
        >
          Our Mission & Purpose
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-muted-foreground mb-16 italic max-w-3xl mx-auto"
        >
          “Born from the spirit of Sudarshan, built for the safety of this digital yuga.”
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {items.map((item, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <Card className="glassmorphism-card h-full p-2">
                <CardHeader className="items-center pt-8">
                  <motion.div className="relative w-20 h-20 mb-3">
                    {item.icon}
                  </motion.div>
                  <CardTitle className="text-2xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionPurposeSection;
  