
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield, Zap, Star } from 'lucide-react';

const plans = [
  {
    name: "Essential Shield",
    price: "₹49,999",
    period: "per month",
    description: "Perfect for startups and small businesses",
    features: [
      "Basic AI Log Analysis",
      "Standard Security Dashboard",
      "Email Support",
      "Up to 100GB Log Storage",
      "Weekly Security Reports"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "border-primary/30"
  },
  {
    name: "Divine Guardian",
    price: "₹99,999",
    period: "per month",
    description: "Ideal for growing companies",
    features: [
      "Advanced AI Analysis",
      "Real-time Threat Detection",
      "24/7 Priority Support",
      "Up to 500GB Log Storage",
      "Daily Security Reports",
      "Custom Security Rules",
      "Blockchain Audit Trail"
    ],
    icon: <Star className="w-8 h-8" />,
    color: "border-secondary/30",
    popular: true
  },
  {
    name: "Cosmic Protector",
    price: "Custom",
    period: "enterprise plan",
    description: "For large enterprises",
    features: [
      "Full AI & ML Capabilities",
      "Custom Integration Support",
      "Dedicated Account Manager",
      "Unlimited Log Storage",
      "Real-time Analytics",
      "Custom Development",
      "Advanced API Access",
      "On-premise Deployment"
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "border-accent/30"
  }
];

const PricingPage = () => {
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
            Divine Protection Plans
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Choose the perfect level of protection for your digital realm
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full premium-glass-card overflow-hidden ${plan.popular ? 'border-secondary' : plan.color}`}>
                <CardHeader className="text-center pt-8">
                  <div className="mx-auto mb-4 p-3 bg-background/30 rounded-full">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button 
                    className="w-full button-shine digital-aura chakra-pulse-hover py-6 text-lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
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
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8">
            Contact us for a personalized security assessment and custom pricing
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="button-shine digital-aura chakra-pulse-hover"
          >
            Contact Sales Team
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingPage;
