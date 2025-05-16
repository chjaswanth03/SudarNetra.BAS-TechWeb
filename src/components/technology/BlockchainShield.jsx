
import React from 'react';
import { motion } from 'framer-motion';

const BlockchainShield = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6, order:1}} className="md:order-2 flex justify-center">
        <img  alt="Stylized glowing blockchain network structure" class="rounded-lg shadow-xl max-w-md w-full h-auto object-cover filter brightness-110" src="https://images.unsplash.com/photo-1471896486552-5dc315aa7ea3" />
      </motion.div>
      <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6, order:2}} className="md:order-1">
        <p className="text-lg text-muted-foreground mb-4">At SudarNetra, data integrity is paramount. We leverage Blockchain technology to create an immutable and transparent record of all critical security events and logs. This ensures:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
          <li><strong className="text-primary">Tamper-Proof Logging:</strong> Once recorded, logs cannot be altered or deleted, ensuring authenticity.</li>
          <li><strong className="text-secondary">Enhanced Auditability:</strong> Provides a clear, verifiable trail for compliance and forensic analysis.</li>
          <li><strong className="text-accent">Decentralized Trust:</strong> Reduces single points of failure and enhances overall system resilience.</li>
          <li><strong className="text-primary">Data Sovereignty:</strong> Empowers users with greater control and transparency over their security data.</li>
        </ul>
        <p className="text-lg text-muted-foreground mt-4">This blockchain layer acts as a digital notary, guaranteeing the veracity of security information critical for trust and accountability.</p>
      </motion.div>
    </div>
  );
};

export default BlockchainShield;
