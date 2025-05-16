
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SystemFlowDiagram = ({ steps, onStepClick }) => (
  <div className="flex flex-col md:flex-row items-stretch justify-center space-y-6 md:space-y-0 md:space-x-3 lg:space-x-5">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(3px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          className="flex flex-col items-center justify-center p-5 sm:p-7 premium-glass-card rounded-xl w-full md:flex-1 min-w-[160px] md:min-w-[130px] lg:min-w-[170px] cursor-pointer hover:shadow-primary/40"
          onClick={() => onStepClick(step)}
        >
          <div className="mb-3.5 p-3 bg-card/60 rounded-full shadow-inner">{step.icon}</div>
          <p className="font-semibold text-foreground text-base md:text-lg text-center">{step.name}</p>
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div 
            initial={{ opacity: 0, scaleX:0 }}
            whileInView={{ opacity: 1, scaleX:1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 + 0.1 }}
            className="hidden md:flex items-center justify-center origin-left"
          >
            <ArrowRight className="w-10 h-10 lg:w-12 lg:h-12 text-muted-foreground/80" />
          </motion.div>
        )}
        {index < steps.length - 1 && (
           <div className="md:hidden flex items-center justify-center my-3">
              <ArrowRight className="w-7 h-7 text-muted-foreground/80 transform rotate-90" />
           </div>
         )}
      </React.Fragment>
    ))}
  </div>
);

export default SystemFlowDiagram;
