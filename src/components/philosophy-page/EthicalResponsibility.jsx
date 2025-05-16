
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, ShieldCheck, Globe } from 'lucide-react';

const principles = [
  {
    icon: <Scale className="w-10 h-10 text-primary" />,
    title: "Upholding Digital Rta (Cosmic Order)",
    description: "We see the digital realm as an extension of the cosmos, governed by Rta – the principle of natural order. Our work is to maintain this harmony against forces of chaos and deceit."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
    title: "Cybersecurity as Dharma",
    description: "Protecting data, privacy, and digital assets is not just a service, but our Dharma – our ethical duty and righteous path. We act with integrity, transparency, and unwavering commitment."
  },
  {
    icon: <Globe className="w-10 h-10 text-accent" />,
    title: "Vasudhaiva Kutumbakam (The World is One Family)",
    description: "In an interconnected digital world, a threat to one is a threat to all. We strive to build solutions that foster a safer digital environment for the global community."
  }
];

const EthicalResponsibility = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {principles.map((principle, index) => (
        <motion.div
          key={principle.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full text-center">
            <CardHeader>
              <div className="mx-auto w-fit mb-4 p-3 bg-primary/10 rounded-full">{principle.icon}</div>
              <CardTitle className="text-xl">{principle.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{principle.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default EthicalResponsibility;
