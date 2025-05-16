
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, ArrowRight, Shield, Users, Database } from 'lucide-react';

const caseStudies = [
  {
    title: "Financial Tech Security Transformation",
    company: "Leading FinTech Firm",
    industry: "Financial Services",
    challenge: "Needed advanced threat detection for growing digital transactions",
    solution: "Implemented AI-powered security monitoring with blockchain audit",
    results: [
      "90% faster threat detection",
      "50% reduction in false positives",
      "100% compliance achievement"
    ],
    icon: <Building2 className="w-12 h-12" />
  },
  {
    title: "Healthcare Data Protection",
    company: "Major Healthcare Provider",
    industry: "Healthcare",
    challenge: "Required secure patient data handling with strict compliance",
    solution: "Deployed custom security rules with real-time monitoring",
    results: [
      "Zero data breaches",
      "99.9% system uptime",
      "HIPAA compliance assured"
    ],
    icon: <Shield className="w-12 h-12" />
  },
  {
    title: "Enterprise Scale Security",
    company: "Global Tech Corporation",
    industry: "Technology",
    challenge: "Scaling security operations across multiple data centers",
    solution: "Implemented distributed security architecture with AI",
    results: [
      "85% improvement in response time",
      "60% cost reduction",
      "24/7 global coverage"
    ],
    icon: <Database className="w-12 h-12" />
  }
];

const CaseStudiesPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="py-24 px-4 section-dark-gradient-bg"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Real-world examples of divine protection in action
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full premium-glass-card">
                <CardHeader>
                  <div className="mb-4 text-primary">
                    {study.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{study.company}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Challenge:</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Solution:</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Key Results:</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center text-muted-foreground">
                            <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-muted-foreground mb-8">
            Let us help you achieve similar results for your organization
          </p>
          <Button 
            size="lg"
            className="button-shine digital-aura chakra-pulse-hover"
          >
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudiesPage;
