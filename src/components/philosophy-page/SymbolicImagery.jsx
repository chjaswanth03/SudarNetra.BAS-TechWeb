
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  {
    alt: "A radiant, all-seeing divine eye symbolizing vigilance and insight.",
    description: "The Divine Eye: Our symbol of constant vigilance, deep insight, and the ability to perceive threats hidden from ordinary view. It represents the clarity SudarNetra brings to complex digital landscapes.",
    imgKey: "divineEye"
  },
  {
    alt: "Interconnected spiritual symbols like Om and Sri Yantra forming a protective shield.",
    description: "Sacred Symbology: We draw inspiration from timeless symbols like Om, representing the primordial sound of creation, and Sri Yantra, embodying cosmic unity and energy, to inform our holistic approach to security.",
    imgKey: "spiritualSymbols"
  },
  {
    alt: "Intricate sacred geometry patterns glowing with cosmic energy.",
    description: "Sacred Geometry: The universe is built on precise geometric patterns. We believe that robust security architecture also requires elegant design, strength, and interconnectedness, reflected in these divine blueprints.",
    imgKey: "sacredGeometry"
  }
];

const SymbolicImagery = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {images.map((item, index) => (
        <motion.div
          key={item.imgKey}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full overflow-hidden">
            <img  alt={item.alt} class="w-full h-56 object-cover filter saturate-110 brightness-90" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            <CardContent className="p-6">
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SymbolicImagery;
