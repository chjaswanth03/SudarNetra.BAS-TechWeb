
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Shield } from 'lucide-react';

const BlockchainCybersecurityEssence = () => {
  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center">
        <img  alt="Abstract representation of a secure, glowing digital ledger" class="rounded-lg shadow-xl max-w-md w-full h-auto object-cover filter saturate-125" src="https://images.unsplash.com/photo-1526378943601-d11040cfc513" />
      </div>
      <div>
        <h3 className="text-3xl font-bold cosmic-gradient-text mb-6">The Unchanging Truth in a Changing World</h3>
        <p className="text-lg text-muted-foreground mb-4">
          In cybersecurity, trust is paramount. Blockchain provides a foundational layer of trust by ensuring data integrity. It's akin to the ancient concept of <strong className="text-primary">Satya (Truth)</strong> – an unchanging, verifiable reality.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Just as the <strong className="text-secondary">Akashic Records</strong> are believed to hold an indelible account of all events, SudarNetra's blockchain integration creates a divine memory for your digital realm. Every action, every log, every alert is recorded with cryptographic certainty, immune to tampering or revisionism.
        </p>
        <div className="mt-6 flex items-start space-x-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <BookOpenCheck className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-xl text-foreground">Why Blockchain is Essential:</h4>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Establishes an irrefutable source of truth for security events.</li>
              <li>Eliminates single points of failure and control over data records.</li>
              <li>Enhances transparency and accountability in security operations.</li>
              <li>Provides a robust foundation for advanced AI analytics that rely on trusted data.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlockchainCybersecurityEssence;
