
import React from 'react';
import { Card } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

const DivineLogicSection = () => {
  return (
    <Card className="glassmorphism-card max-w-4xl mx-auto p-10 text-center bg-gradient-to-br from-primary/10 via-background/20 to-secondary/10">
      <ShieldCheck className="w-24 h-24 text-primary mx-auto mb-8" />
      <h3 className="text-3xl font-bold cosmic-gradient-text-glow mb-6">The Divine Logic</h3>
      <p className="text-xl text-muted-foreground italic">
        “Our systems are built not merely on code, but on a conscious intent to preserve cosmic order (Rta) in cyberspace. Each algorithm, each layer of security, is infused with the spirit of Dharma – ensuring protection that is not just powerful, but also principled and just.”
      </p>
    </Card>
  );
};

export default DivineLogicSection;
