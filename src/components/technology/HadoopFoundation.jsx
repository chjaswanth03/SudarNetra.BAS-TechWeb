
import React from 'react';
import { motion } from 'framer-motion';

const HadoopFoundation = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div 
        initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}
        className="flex justify-center"
      >
        <img  alt="Abstract representation of big data clusters and processing power" class="rounded-lg shadow-xl max-w-md w-full h-auto object-cover" src="https://images.unsplash.com/photo-1655891709738-a48aad482a3d" />
      </motion.div>
      <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <p className="text-lg text-muted-foreground mb-4">The digital universe generates vast amounts of data. SudarNetra is built on the robust <strong className="text-primary">Hadoop framework</strong> to handle this scale and deliver high-performance analysis. This provides:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
          <li><strong className="text-secondary">Massive Scalability:</strong> Effortlessly scales to process petabytes of log data from diverse sources.</li>
          <li><strong className="text-accent">Distributed Processing:</strong> Breaks down complex analyses across multiple nodes for rapid results.</li>
          <li><strong className="text-primary">Fault Tolerance:</strong> Ensures data availability and system resilience even in case of hardware failures.</li>
          <li><strong className="text-secondary">Cost-Effectiveness:</strong> Utilizes commodity hardware, making powerful big data analytics accessible.</li>
        </ul>
        <p className="text-lg text-muted-foreground mt-4">This powerful foundation allows our AI engines to sift through enormous datasets quickly, uncovering insights that would be impossible with traditional systems.</p>
      </motion.div>
    </div>
  );
};

export default HadoopFoundation;
