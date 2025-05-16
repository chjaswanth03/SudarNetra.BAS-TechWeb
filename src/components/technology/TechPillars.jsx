
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Cpu, Link as LinkIcon, Database } from 'lucide-react';

const pillarsData = [
  { title: "Advanced Artificial Intelligence", icon: <Cpu className="w-20 h-20 text-primary mx-auto mb-5" />, description: "Our AI employs deep learning for predictive threat analysis, anomaly detection, and intelligent response, constantly learning and adapting.", delay: 0.1 },
  { title: "Immutable Blockchain", icon: <LinkIcon className="w-20 h-20 text-secondary mx-auto mb-5" />, description: "We use blockchain for tamper-proof audit trails, ensuring data integrity, transparency, and robust security for critical logs.", delay: 0.2 },
  { title: "Scalable Big Data (Hadoop)", icon: <Database className="w-20 h-20 text-accent mx-auto mb-5" />, description: "Built to process massive data volumes with Hadoop, enabling comprehensive analysis and insight generation at speed.", delay: 0.3 }
];

const TechPillars = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10 text-center">
      {pillarsData.map(item => (
        <motion.div 
          key={item.title} 
          initial={{opacity:0, scale:0.85, y:20}} 
          whileInView={{opacity:1, scale:1, y:0}} 
          viewport={{once:true}} 
          transition={{delay:item.delay, type: "spring", stiffness: 90}}
        >
          <Card className="premium-glass-card p-8 h-full">
            <CardContent className="flex flex-col items-center justify-center">
              {item.icon}
              <h3 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default TechPillars;
