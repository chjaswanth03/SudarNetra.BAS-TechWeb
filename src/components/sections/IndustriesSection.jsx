
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Landmark, DollarSign, Stethoscope, Building, ShoppingCart, Factory } from 'lucide-react';

const industries = [
  { name: 'Startups & SMEs', icon: <Briefcase className="w-10 h-10" />, benefit: "Affordable, scalable security solutions." },
  { name: 'Education', icon: <GraduationCap className="w-10 h-10" />, benefit: "Protecting student data and campus networks." },
  { name: 'Government', icon: <Landmark className="w-10 h-10" />, benefit: "Securing critical infrastructure and public data." },
  { name: 'Finance', icon: <DollarSign className="w-10 h-10" />, benefit: "Ensuring compliance and fraud prevention." },
  { name: 'Healthcare', icon: <Stethoscope className="w-10 h-10" />, benefit: "Safeguarding patient records and medical devices." },
  { name: 'Real Estate', icon: <Building className="w-10 h-10" />, benefit: "Protecting property data and transactions." },
  { name: 'E-commerce', icon: <ShoppingCart className="w-10 h-10" />, benefit: "Securing online payments and customer data." },
  { name: 'Manufacturing', icon: <Factory className="w-10 h-10" />, benefit: "Protecting IP and operational technology." },
];

const IndustriesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.85 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 130, damping: 14 } },
  };

  return (
    <section className="py-24 px-4 bg-background section-particle-bg">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 cosmic-gradient-text-glow"
        >
          Industries We Empower
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col items-center p-6 glassmorphism-card rounded-xl text-center transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-2 neon-border-card"
            >
              <div className="mb-5 text-primary group-hover:text-accent transition-colors duration-300">
                {React.cloneElement(industry.icon, { className: `${industry.icon.props.className} group-hover:scale-110 transition-transform`})}
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300 mb-2">{industry.name}</h3>
              <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                {industry.benefit}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
  