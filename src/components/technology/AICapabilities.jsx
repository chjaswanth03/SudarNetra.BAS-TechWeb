
import React from 'react';
import { motion } from 'framer-motion';

const AICapabilities = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div 
        initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}
        className="flex justify-center"
      >
        <img  alt="Abstract representation of AI neural network with glowing nodes" class="rounded-lg shadow-xl max-w-md w-full h-auto object-cover filter saturate-125" src="https://images.unsplash.com/photo-1695144244472-a4543101ef35" />
      </motion.div>
      <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <p className="text-lg text-muted-foreground mb-4">SudarNetra's AI is the core of our intelligent defense. We utilize a sophisticated blend of machine learning models, including:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
          <li><strong className="text-primary">Predictive Analytics:</strong> Forecasting potential threats based on global patterns and historical data.</li>
          <li><strong className="text-secondary">Natural Language Processing (NLP):</strong> Analyzing unstructured data like threat reports and dark web chatter.</li>
          <li><strong className="text-accent">Anomaly Detection:</strong> Identifying deviations from normal behavior that may indicate an attack.</li>
          <li><strong className="text-primary">Behavioral Biometrics:</strong> Understanding user patterns to detect compromised accounts.</li>
        </ul>
        <p className="text-lg text-muted-foreground mt-4">This multi-layered AI approach allows for real-time detection, rapid response, and continuous adaptation to the evolving threat landscape.</p>
      </motion.div>
    </div>
  );
};

export default AICapabilities;
