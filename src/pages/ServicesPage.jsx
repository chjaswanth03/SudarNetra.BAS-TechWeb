
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, ShieldAlert, Bot, Link as LinkIconLucide, BrainCircuit, BarChartBig, ArrowRight, ShieldCheck, Eye, Zap, CheckCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6,
};

const SectionWrapper = ({ children, className = "" }) => (
  <motion.section 
    className={`py-20 px-4 section-particle-bg ${className}`}
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7 }}
  >
    <div className="container mx-auto relative z-10">{children}</div>
  </motion.section>
);

const services = [
  {
    icon: <BarChartBig className="w-14 h-14 text-primary" />,
    title: "AI Log Analyzer",
    summary: "Intelligent log analysis to detect anomalies and predict threats with divine precision before they escalate, ensuring proactive defense.",
  },
  {
    icon: <ShieldAlert className="w-14 h-14 text-secondary" />,
    title: "Cyber Defense Dashboard",
    summary: "A comprehensive, real-time view of your security posture. Our all-seeing dashboard offers actionable insights for swift, informed decisions.",
  },
  {
    icon: <LinkIconLucide className="w-14 h-14 text-accent" />,
    title: "Blockchain Audit Trail",
    summary: "Immutable and transparent logging for critical data. Ensure unparalleled integrity and compliance with verifiable, tamper-proof records.",
  },
  {
    icon: <Bot className="w-14 h-14 text-primary" />,
    title: "Incident Response Agent",
    summary: "Automated and guided responses to security incidents. Minimize damage and accelerate recovery time with our vigilant AI agent.",
  },
  {
    icon: <BrainCircuit className="w-14 h-14 text-secondary" />,
    title: "Threat Intelligence Hub",
    summary: "A centralized platform for gathering, analyzing, and disseminating global cyber threat data, empowering preemptive defense strategies.",
  },
   {
    icon: <Zap className="w-14 h-14 text-accent" />,
    title: "Customizable Cybersecurity Rules Engine",
    summary: "Tailor your defense strategy with a flexible rules engine. Define specific triggers, alerts, and automated responses based on your unique organizational needs and risk profile.",
  },
];

const whyChooseUsPoints = [
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Spiritual Rootedness", description: "Our solutions are inspired by ancient dharmic principles of protection and vigilance." },
    { icon: <Eye className="w-8 h-8 text-secondary" />, title: "Ethical & Transparent", description: "We operate with utmost integrity, ensuring clarity in our processes and data handling." },
    { icon: <BrainCircuit className="w-8 h-8 text-accent" />, title: "Advanced AI Integration", description: "Leveraging cutting-edge AI for predictive threat detection and intelligent response." },
    { icon: <BarChart3 className="w-8 h-8 text-primary" />, title: "Deep Data Insights", description: "Transforming complex security data into actionable intelligence for proactive defense." },
];


const ServicesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section-dark-gradient-bg"
    >
      <SectionWrapper className="pt-24">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold cosmic-gradient-text-glow mb-6"
            initial={{ opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}
          >
            Our Divine Defense Offerings
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
          >
            Empowering your digital sovereignty with cybersecurity services forged at the confluence of ancient wisdom and modern technology.
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y:30, scale: 0.95 }}
              whileInView={{ opacity: 1, y:0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 90 }}
              className="h-full"
            >
              <Card className="kinetic-card premium-glass-card h-full flex flex-col group">
                <CardHeader className="items-center text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="mt-5 text-2xl text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-8">
                  <p className="text-muted-foreground">{service.summary}</p>
                </CardContent>
                <CardFooter className="justify-center p-8">
                  <Button variant="outline" className="button-shine border-primary text-primary hover:bg-primary/10 hover:text-primary chakra-pulse-hover digital-aura w-full text-base py-6">
                    Discover More <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">Why Choose SudarNetra?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glassmorphism-card h-full p-6 text-center digital-aura-card hover:border-secondary/50">
                <div className="flex justify-center mb-5 text-4xl">{point.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <Button size="lg" className="button-shine bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground transform hover:scale-105 digital-aura chakra-pulse-hover px-10 py-7 text-lg">
                Request a Consultation <CheckCircle className="ml-3 h-5 w-5"/>
            </Button>
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
};

export default ServicesPage;
  