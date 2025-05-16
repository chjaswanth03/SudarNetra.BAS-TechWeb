
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Zap, Share2, DatabaseBackup } from 'lucide-react';

const integrationOptions = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Real-time API Integration",
    description: "Seamlessly connect SudarNetra's blockchain ledger with your existing SIEM, SOAR, or other security platforms via robust APIs."
  },
  {
    icon: <Share2 className="w-8 h-8 text-secondary" />,
    title: "Custom Smart Contract Deployment",
    description: "Develop and deploy custom smart contracts tailored to your specific security policies and automated response workflows."
  },
  {
    icon: <DatabaseBackup className="w-8 h-8 text-accent" />,
    title: "Hybrid Blockchain Solutions",
    description: "Option for private or consortium blockchain setups to meet specific data sovereignty and performance requirements."
  },
   {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: "Managed Integration Services",
    description: "Our experts can assist with the full lifecycle of integration, from planning to deployment and ongoing support."
  }
];

const IntegrationOptionsList = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {integrationOptions.map((option, index) => (
        <motion.div
          key={option.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full">
            <CardHeader className="flex flex-row items-center space-x-4">
              {option.icon}
              <CardTitle>{option.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{option.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default IntegrationOptionsList;
