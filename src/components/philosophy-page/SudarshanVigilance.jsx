
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const SudarshanVigilance = () => {
  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center">
        <img  alt="Stylized Sudarshana Chakra with a central divine eye" class="rounded-lg shadow-xl max-w-md w-full h-auto object-cover filter saturate-125" src="https://images.unsplash.com/photo-1607857581750-b4e0ddc9a577" />
      </div>
      <div>
        <div className="flex items-center mb-4">
          <Eye className="w-10 h-10 text-primary mr-3" />
          <h3 className="text-3xl font-bold cosmic-gradient-text">The Vigilance of Sudarshan</h3>
        </div>
        <p className="text-lg text-muted-foreground mb-4">
          The Sudarshana Chakra, the divine discus of Lord Vishnu, symbolizes omniscient vision, swift action, and the power to dispel darkness and protect righteousness. It is our guiding inspiration.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          SudarNetra embodies this spirit:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
          <li><strong className="text-primary">Proactive Defense:</strong> Like the ever-ready Chakra, our systems are designed for preemptive threat detection and neutralization.</li>
          <li><strong className="text-secondary">Unwavering Vigilance:</strong> We provide continuous monitoring, an all-seeing eye over your digital assets.</li>
          <li><strong className="text-accent">Decisive Action:</strong> Swift, intelligent responses to cut through threats before they escalate.</li>
          <li><strong className="text-primary">Protection of Dharma:</strong> Our ultimate aim is to uphold ethical principles and protect the innocent in the digital sphere.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SudarshanVigilance;
