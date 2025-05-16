
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Award, Users, CheckCircle, FileCheck, Building } from 'lucide-react';

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management System",
    icon: <Shield className="w-12 h-12" />
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control",
    icon: <Award className="w-12 h-12" />
  },
  {
    name: "HIPAA Compliant",
    description: "Healthcare Data Protection",
    icon: <FileCheck className="w-12 h-12" />
  }
];

const advisoryBoard = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Chief Security Advisor",
    organization: "Cyber Defense Institute",
    expertise: "AI Security & Threat Detection"
  },
  {
    name: "Sarah Chen",
    title: "Board Member",
    organization: "Global Security Alliance",
    expertise: "Enterprise Security Architecture"
  },
  {
    name: "Prof. Amit Patel",
    title: "Technical Advisor",
    organization: "Institute of Technology",
    expertise: "Quantum Computing & Cryptography"
  }
];

const complianceBadges = [
  {
    name: "GDPR Compliant",
    icon: <Shield className="w-8 h-8" />
  },
  {
    name: "PCI DSS Certified",
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    name: "NIST Framework",
    icon: <Building className="w-8 h-8" />
  }
];

const TrustPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4 section-dark-gradient-bg"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Trust & Security
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our commitment to security excellence and compliance
          </motion.p>
        </div>

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="premium-glass-card text-center">
                  <CardHeader>
                    <div className="mx-auto text-primary mb-4">{cert.icon}</div>
                    <CardTitle>{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Advisory Board</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="premium-glass-card">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-center">{advisor.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-primary">{advisor.title}</p>
                    <p className="text-muted-foreground">{advisor.organization}</p>
                    <p className="mt-2 text-sm">{advisor.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compliance Badges Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Compliance & Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <Card className="premium-glass-card w-full">
                  <CardContent className="flex items-center justify-center p-6 space-x-4">
                    <div className="text-primary">{badge.icon}</div>
                    <span className="font-semibold">{badge.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default TrustPage;
