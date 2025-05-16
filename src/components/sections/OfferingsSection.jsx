
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BarChart3, ShieldAlert, Link as LinkIconLucide, Bot } from 'lucide-react';

const offerings = [
  {
    icon: <BarChart3 className="w-12 h-12 text-primary mb-4" />,
    title: 'AI Log Analyzer',
    description: 'Intelligent log analysis to detect anomalies and predict threats before they escalate.',
  },
  {
    icon: <ShieldAlert className="w-12 h-12 text-accent mb-4" />,
    title: 'Cyber Defense Dashboard',
    description: 'A comprehensive, real-time view of your security posture with actionable insights.',
  },
  {
    icon: <LinkIconLucide className="w-12 h-12 text-secondary mb-4" />,
    title: 'Blockchain Audit Trail',
    description: 'Immutable and transparent logging for critical data, ensuring integrity and compliance.',
  },
  {
    icon: <Bot className="w-12 h-12 text-primary mb-4" />,
    title: 'Incident Response Agent',
    description: 'Automated and guided responses to security incidents, minimizing damage and recovery time.',
  },
];

const OfferingsSection = () => {
  const cardVariants = {
    offscreen: {
      y: 60,
      opacity: 0,
      rotateX: -20,
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        bounce: 0.35,
        duration: 0.9,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <section className="py-24 px-4 bg-background/80 backdrop-blur-md section-particle-bg">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 cosmic-gradient-text-glow"
        >
          What We Offer
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.custom
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="h-full"
            >
              <div className="neon-border-card h-full">
                <Card className="premium-glass-card h-full flex flex-col text-center p-2">
                  <CardHeader className="items-center pt-8">
                    {offering.icon}
                    <CardTitle className="text-xl font-semibold text-foreground">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-8">
                    <p className="text-muted-foreground text-sm">{offering.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
  