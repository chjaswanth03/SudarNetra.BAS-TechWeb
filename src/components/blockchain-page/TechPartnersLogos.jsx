
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const partnerLogos = [
  { name: "Hyperledger", imgSrc: "hyperledger_logo_placeholder.svg", alt: "Hyperledger Logo" },
  { name: "Ethereum", imgSrc: "ethereum_logo_placeholder.svg", alt: "Ethereum Logo" },
  { name: "Chainlink", imgSrc: "chainlink_logo_placeholder.svg", alt: "Chainlink Logo" },
  { name: "ConsenSys", imgSrc: "consensys_logo_placeholder.svg", alt: "ConsenSys Logo" },
  { name: "Polygon", imgSrc: "polygon_logo_placeholder.svg", alt: "Polygon Logo" },
  { name: "Filecoin", imgSrc: "filecoin_logo_placeholder.svg", alt: "Filecoin Logo" },
];

const TechPartnersLogos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
      {partnerLogos.map((partner, index) => (
        <motion.div
          key={partner.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex justify-center"
        >
          <Card className="p-4 premium-glass-card w-full h-28 flex items-center justify-center">
            <CardContent className="p-0">
              {/* Placeholder for actual logos. Using text for now. */}
              <img  alt={partner.alt} class="h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default TechPartnersLogos;
