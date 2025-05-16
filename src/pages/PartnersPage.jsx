
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake as Handshake, Award, Users, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Revenue Share",
    description: "Earn competitive commissions on all referred business",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Technical Support",
    description: "Access to our expert technical team and resources",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Marketing Resources",
    description: "Co-branded materials and marketing support",
    icon: <Rocket className="w-8 h-8" />
  }
];

const partnerTypes = [
  {
    title: "Reseller Partners",
    description: "Integrate our solutions into your security offerings",
    features: [
      "Competitive margins",
      "Sales enablement",
      "Technical training",
      "Marketing support"
    ]
  },
  {
    title: "Technology Partners",
    description: "Build integrated solutions with our platform",
    features: [
      "API access",
      "Integration support",
      "Joint development",
      "Co-marketing opportunities"
    ]
  },
  {
    title: "Consulting Partners",
    description: "Deliver value-added services to your clients",
    features: [
      "Implementation support",
      "Certification program",
      "Client referrals",
      "Expert training"
    ]
  }
];

const PartnersPage = () => {
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
            Partner Program
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join forces with SudarNetra to deliver divine protection to your clients
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="text-center h-full premium-glass-card">
                <CardHeader>
                  <div className="mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <Card className="h-full premium-glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="premium-glass-card border-primary/30">
            <CardHeader>
              <div className="mx-auto mb-4">
                <Handshake className="w-16 h-16 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-4">Become a Partner</CardTitle>
              <p className="text-muted-foreground">
                Take the first step towards a rewarding partnership. Our team will contact you to discuss opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg"
                className="button-shine digital-aura chakra-pulse-hover"
              >
                Apply Now <ArrowRight className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PartnersPage;
