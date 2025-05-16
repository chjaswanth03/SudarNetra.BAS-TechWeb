
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = "", id }) => (
  <motion.section 
    id={id}
    className={`py-20 px-4 section-particle-bg ${className}`}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
  >
    <div className="container mx-auto relative z-10">{children}</div>
  </motion.section>
);

export default SectionWrapper;
