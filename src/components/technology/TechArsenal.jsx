
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Link as LinkIcon, Database, Cpu, TerminalSquare, Layers } from 'lucide-react';

const techStackItems = [
  { name: "Python", icon: <TerminalSquare className="text-primary" />, category: "Core Language & AI/ML" },
  { name: "Streamlit", icon: <Zap className="text-secondary" />, category: "Interactive Dashboards & UI" },
  { name: "Hadoop Ecosystem", icon: <Database className="text-accent" />, category: "Big Data Processing & Storage" },
  { name: "MongoDB", icon: <Layers className="text-primary" />, category: "Scalable NoSQL Data Storage" },
  { name: "TensorFlow & PyTorch", icon: <Cpu className="text-secondary" />, category: "Advanced Deep Learning" },
  { name: "Hyperledger Fabric", icon: <LinkIcon className="text-accent" />, category: "Blockchain & Audit Trails" },
];

const TechArsenal = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      {techStackItems.map((tool, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 25, scale:0.9 }}
          whileInView={{ opacity: 1, y: 0, scale:1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08, type: "spring", stiffness:100 }}
        >
          <Card className="premium-glass-card p-6 text-center h-full hover:shadow-accent/40">
            <CardContent className="flex flex-col items-center justify-center">
              <div className="flex justify-center text-5xl mb-3">{tool.icon}</div>
              <h4 className="font-semibold text-foreground text-lg">{tool.name}</h4>
              <p className="text-xs text-muted-foreground">{tool.category}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default TechArsenal;
