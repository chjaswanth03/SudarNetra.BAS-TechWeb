
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightCircle, Lock, FileText, CheckSquare } from 'lucide-react';

const flowSteps = [
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Data Ingestion & Hashing",
    description: "Critical data points and logs are cryptographically hashed upon creation, generating a unique digital fingerprint."
  },
  {
    icon: <Lock className="w-10 h-10 text-secondary" />,
    title: "Transaction Bundling",
    description: "These hashed fingerprints are bundled into transactions, forming blocks ready for validation."
  },
  {
    icon: <ArrowRightCircle className="w-10 h-10 text-accent" />,
    title: "Distributed Validation",
    description: "Blocks are validated by a decentralized network, ensuring consensus and preventing unauthorized changes."
  },
  {
    icon: <CheckSquare className="w-10 h-10 text-primary" />,
    title: "Immutable Ledger Entry",
    description: "Validated blocks are permanently added to the blockchain, creating an unalterable, time-stamped record."
  }
];

const SecureDataFlows = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {flowSteps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full text-center">
            <CardHeader>
              <div className="mx-auto w-fit mb-4 p-3 bg-primary/10 rounded-full">{step.icon}</div>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SecureDataFlows;
