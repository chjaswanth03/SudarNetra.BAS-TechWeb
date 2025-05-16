
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Layers, Database } from 'lucide-react';

const coreTech = [
  {
    icon: <Brain className="w-12 h-12 text-primary" />,
    title: "Multimodal AI & Deep Learning",
    description: "Our system integrates diverse AI models, including deep neural networks, to analyze various data types (logs, network traffic, user behavior) for unparalleled threat detection accuracy."
  },
  {
    icon: <Database className="w-12 h-12 text-secondary" />,
    title: "Hadoop-Powered Big Data Processing",
    description: "Leveraging the Hadoop ecosystem, SudarNetra processes and analyzes petabytes of security data in real-time, identifying subtle patterns and anomalies across vast datasets."
  },
  {
    icon: <Layers className="w-12 h-12 text-accent" />,
    title: "Predictive Cybersecurity Engine",
    description: "By learning from global threat intelligence and historical data, our AI predicts potential attack vectors and emerging threats, enabling proactive defense strategies."
  }
];

const CoreTechHighlight = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {coreTech.map((tech, index) => (
        <motion.div
          key={tech.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full">
            <CardHeader>
              <div className="mx-auto w-fit mb-4 p-3 bg-primary/10 rounded-full">{tech.icon}</div>
              <CardTitle className="text-center">{tech.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">{tech.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CoreTechHighlight;
