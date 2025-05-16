
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertOctagon, ShieldCheck, Eye, Clock, Zap } from 'lucide-react';

const stages = [
  { icon: <Eye className="w-10 h-10 text-blue-400" />, text: "Initial Anomaly Detected: Unusual network traffic spike from an unknown IP.", color: "blue" },
  { icon: <AlertOctagon className="w-10 h-10 text-yellow-400" />, text: "AI Analysis: SudarNetra's deep learning models flag behavior as potential zero-day exploit.", color: "yellow" },
  { icon: <Clock className="w-10 h-10 text-orange-400" />, text: "Real-time Alert: Security team notified within milliseconds. Automated containment protocols initiated.", color: "orange" },
  { icon: <Zap className="w-10 h-10 text-red-500" />, text: "Threat Isolation: Malicious actor quarantined. Access to critical systems blocked.", color: "red" },
  { icon: <ShieldCheck className="w-10 h-10 text-green-500" />, text: "Attack Neutralized: Threat eliminated. System integrity verified by blockchain audit. Vulnerability patched.", color: "green" }
];

const VisualStorytelling = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentStage(0);
    stages.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStage(index);
        if (index === stages.length - 1) {
          setIsPlaying(false);
        }
      }, (index + 1) * 2000);
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <Card className="premium-glass-card p-6">
      <CardContent className="text-center">
        <h3 className="text-2xl font-semibold cosmic-gradient-text mb-4">Anatomy of a Prevented Attack</h3>
        <p className="text-muted-foreground mb-6">
          Witness a conceptual timeline of how SudarNetra identifies and neutralizes a sophisticated threat in real-time.
        </p>
        
        <div className="relative h-48 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center"
            >
              {React.cloneElement(stages[currentStage].icon, { className: `w-16 h-16 mb-3 text-${stages[currentStage].color}-500` })}
              <p className={`font-medium text-lg text-${stages[currentStage].color}-300`}>{stages[currentStage].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-4">
          {stages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStage ? `bg-${stages[index].color}-500 scale-125` : 'bg-muted'
              }`}
            />
          ))}
        </div>
        
        <Button onClick={handlePlay} disabled={isPlaying} className="button-shine">
          {isPlaying ? "Simulating..." : "Play Breach Prevention Timeline"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VisualStorytelling;
