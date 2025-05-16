
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, ShieldQuestion, ListChecks } from 'lucide-react';

const useCases = [
  {
    icon: <FileJson className="w-10 h-10 text-primary" />,
    title: "Smart Contracts for Automation",
    description: "Automate security protocols and compliance checks using self-executing smart contracts, ensuring policies are enforced consistently and transparently."
  },
  {
    icon: <ListChecks className="w-10 h-10 text-secondary" />,
    title: "Immutable Audit Trails",
    description: "Provide irrefutable, time-stamped audit trails for all system activities, critical for forensic investigations and regulatory compliance."
  },
  {
    icon: <ShieldQuestion className="w-10 h-10 text-accent" />,
    title: "Enhanced Compliance & Reporting",
    description: "Simplify compliance with regulations like GDPR, HIPAA, and SOX by providing verifiable proof of data integrity and access control."
  }
];

const BlockchainUseCases = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {useCases.map((useCase, index) => (
        <motion.div
          key={useCase.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full">
            <CardHeader className="items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">{useCase.icon}</div>
              <CardTitle>{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{useCase.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BlockchainUseCases;
