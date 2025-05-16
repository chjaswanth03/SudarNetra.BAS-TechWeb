
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Shield, Users, Settings, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Initial Assessment",
    description: "We analyze your current security posture",
    details: [
      "Security audit",
      "Risk assessment",
      "Compliance review",
      "Infrastructure analysis"
    ],
    icon: <Shield className="w-12 h-12" />
  },
  {
    title: "Custom Configuration",
    description: "Tailoring the solution to your needs",
    details: [
      "Security rule setup",
      "Integration planning",
      "Alert configuration",
      "Dashboard customization"
    ],
    icon: <Settings className="w-12 h-12" />
  },
  {
    title: "Team Training",
    description: "Empowering your team with knowledge",
    details: [
      "Platform training",
      "Security best practices",
      "Incident response",
      "Ongoing support"
    ],
    icon: <Users className="w-12 h-12" />
  }
];

const OnboardingPage = () => {
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
            Your Journey Begins
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A smooth transition to divine-level security
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="process">Onboarding Process</TabsTrigger>
              <TabsTrigger value="checklist">Getting Started</TabsTrigger>
            </TabsList>
            <TabsContent value="process">
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="h-full premium-glass-card">
                      <CardHeader className="text-center">
                        <div className="mx-auto mb-4 text-primary">
                          {step.icon}
                        </div>
                        <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-primary mr-2" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="checklist">
              <Card className="premium-glass-card">
                <CardHeader>
                  <CardTitle>Preparation Checklist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">1. Gather Information</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Current security infrastructure details</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Network architecture documentation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Compliance requirements list</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Team structure and roles</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">2. Technical Prerequisites</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>System access credentials</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>API integration requirements</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Development environment setup</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">3. Team Preparation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Identify key stakeholders</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Schedule training sessions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>Prepare documentation access</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="max-w-3xl mx-auto premium-glass-card border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Ready to Begin?</CardTitle>
              <p className="text-muted-foreground">
                Our team will guide you through each step of the implementation process
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg"
                className="button-shine digital-aura chakra-pulse-hover"
              >
                Start Onboarding <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OnboardingPage;
