
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, UserCheck, Zap, SearchCode } from 'lucide-react';

const features = [
  {
    icon: <ShieldAlert className="w-10 h-10 text-primary" />,
    title: "Advanced Anomaly Detection",
    description: "Our AI identifies subtle deviations from normal behavior patterns across your network, users, and applications, flagging potential threats in their earliest stages."
  },
  {
    icon: <UserCheck className="w-10 h-10 text-secondary" />,
    title: "Intelligent Behavioral Analysis",
    description: "SudarNetra learns and models legitimate user and system behavior, enabling it to instantly recognize suspicious activities indicative of compromised accounts or insider threats."
  },
  {
    icon: <Zap className="w-10 h-10 text-accent" />,
    title: "Automated Threat Response",
    description: "Upon detecting a credible threat, the system can initiate pre-configured automated responses, such as isolating affected systems or blocking malicious IPs, minimizing impact."
  },
  {
    icon: <SearchCode className="w-10 h-10 text-primary" />,
    title: "Predictive Threat Hunting",
    description: "Proactively hunts for indicators of compromise (IOCs) and attack patterns using AI-driven hypothesis testing, uncovering hidden threats before they escalate."
  }
];

const KeyAIDefenseFeatures = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full">
            <CardHeader className="flex flex-row items-center space-x-4">
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default KeyAIDefenseFeatures;
