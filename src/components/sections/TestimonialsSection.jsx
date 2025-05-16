
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const placeholderLogos = [
    { name: "Tech Innovators Inc.", img: "Modern abstract geometric logo for a tech company" },
    { name: "Secure Solutions Ltd.", img: "Shield and lock icon combined for security firm" },
    { name: "Digital Guardians Co.", img: "Stylized eye or eagle for a digital protection company" },
    { name: "Future Systems Group", img: "Network or circuit board pattern logo" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="py-24 px-4 bg-background/80 backdrop-blur-md section-particle-bg">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-16 cosmic-gradient-text-glow"
        >
          Trusted By Visionaries
        </motion.h2>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Card className="glassmorphism-card p-8 md:p-12">
            <CardContent className="flex flex-col items-center justify-center space-y-10">
              <Users className="w-20 h-20 text-primary mb-5" />
              <p className="text-xl text-muted-foreground">
                We are forging strong alliances and gathering insights from industry leaders. <br />
                Esteemed partners and their success stories will soon illuminate this space.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 w-full max-w-4xl">
                {placeholderLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15, type: "spring", stiffness:100 }}
                    className="p-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg flex flex-col items-center justify-center aspect-video glassmorphism-card digital-aura-card"
                  >
                    <img  alt={logo.name + " logo"} class="w-16 h-16 mb-3 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
                    <span className="text-sm font-medium text-muted-foreground text-center">{logo.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-accent mb-4">Future Testimonial Highlight</h3>
                <div className="max-w-2xl mx-auto p-6 border border-dashed border-secondary/50 rounded-lg">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />)}
                  </div>
                  <p className="italic text-muted-foreground">"SudarNetra's innovative approach has revolutionized our security posture. Their blend of technology and dharmic principles is truly unique."</p>
                  <p className="mt-3 font-semibold text-foreground">- CEO, Future Partner (Placeholder)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
  