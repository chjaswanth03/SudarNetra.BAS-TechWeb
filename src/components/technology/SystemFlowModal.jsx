
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const SystemFlowModal = ({ selectedStep, onClose }) => (
  <AnimatePresence>
    {selectedStep && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-card p-8 rounded-xl shadow-2xl max-w-lg w-full glassmorphism-card border border-primary/60 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="ghost" size="icon" className="absolute top-3 right-3 text-muted-foreground hover:text-primary" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-4 mb-5">
            {React.cloneElement(selectedStep.icon, {className: "w-10 h-10"})}
            <h3 className="text-2xl font-semibold cosmic-gradient-text">{selectedStep.name}</h3>
          </div>
          <p className="text-muted-foreground text-base">{selectedStep.description}</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SystemFlowModal;
