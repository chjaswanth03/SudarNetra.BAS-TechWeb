
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';

const CallToActionPhilosophy = () => {
  return (
    <motion.div 
      className="text-center bg-gradient-to-tr from-primary/10 via-background to-secondary/10 p-10 rounded-xl shadow-2xl border border-primary/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Users className="w-16 h-16 text-primary mx-auto mb-6" />
      <h2 className="text-3xl md:text-4xl font-bold cosmic-gradient-text-glow mb-6">
        Join the Movement for Ethical Cybersecurity
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        The digital world needs guardians who operate with wisdom, integrity, and a commitment to Dharma. If our philosophy resonates with you, let's connect and explore how we can build a safer digital future together.
      </p>
      <Button asChild size="lg" className="button-shine">
        <Link to="/contact">
          Partner with Purpose <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default CallToActionPhilosophy;
