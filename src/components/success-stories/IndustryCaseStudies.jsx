
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Landmark, Stethoscope, Rocket, GraduationCap, AlertTriangle, CheckCircle2, BarChart3, ShieldOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const industriesData = [
  { 
    value: "fintech", 
    label: "FinTech", 
    icon: <DollarSign className="w-5 h-5 mr-2" />,
    caseStudies: [
      {
        id: "fintech-cs1",
        title: "Secure Financial Transactions for NeoBank X",
        problem: "NeoBank X faced rising sophisticated phishing attacks targeting high-value transactions and sensitive customer financial data, threatening regulatory compliance and customer trust.",
        solution: "Deployed SudarNetra's AI-driven anomaly detection for real-time transaction monitoring and blockchain-based immutable audit trails for all financial activities.",
        results: "99.8% reduction in successful fraudulent transactions; Maintained 100% uptime during peak trading; Passed all regulatory audits with commendations for security posture.",
        metrics: { "Fraud Reduction": 99.8, "Compliance": 100, "Incident Response Time (Improvement)": 75 },
        logoImg: "Abstract geometric logo for a fintech company",
        logoAlt: "NeoBank X Logo"
      }
    ]
  },
  { 
    value: "government", 
    label: "Government", 
    icon: <Landmark className="w-5 h-5 mr-2" />,
    caseStudies: [
      {
        id: "gov-cs1",
        title: "Protecting Critical National Infrastructure",
        problem: "A key government agency managing critical infrastructure was vulnerable to state-sponsored cyber attacks aiming to disrupt essential services and steal classified information.",
        solution: "Implemented SudarNetra's comprehensive threat intelligence platform with zero-day attack prevention and secure multi-factor authentication across all access points.",
        results: "Successfully thwarted 5 major targeted attack campaigns; Ensured 24/7 operational integrity of critical systems; Enhanced inter-agency secure data sharing protocols.",
        metrics: { "Major Attacks Thwarted": 5, "System Integrity": 100, "Data Breach Prevention": 100 },
        logoImg: "Official looking crest or emblem for a government agency",
        logoAlt: "Government Agency Logo"
      }
    ]
  },
  { 
    value: "healthcare", 
    label: "Healthcare", 
    icon: <Stethoscope className="w-5 h-5 mr-2" />,
    caseStudies: [
      {
        id: "health-cs1",
        title: "Ensuring Patient Data Privacy for Multi-Hospital Network",
        problem: "A large hospital network struggled with HIPAA compliance and protecting sensitive patient Electronic Health Records (EHR) from ransomware attacks and insider threats.",
        solution: "SudarNetra deployed an AI-powered behavioral analysis system to detect anomalous EHR access patterns and blockchain for verifiable consent management.",
        results: "Zero patient data breaches post-implementation; Reduced compliance reporting time by 60%; Detected and neutralized 3 potential insider threats proactively.",
        metrics: { "Data Breaches Post-Implementation": 0, "Compliance Reporting Efficiency": 60, "Insider Threats Neutralized": 3 },
        logoImg: "Caduceus or similar medical symbol for a healthcare provider",
        logoAlt: "Hospital Network Logo"
      }
    ]
  },
  { 
    value: "startups", 
    label: "Startups", 
    icon: <Rocket className="w-5 h-5 mr-2" />,
    caseStudies: [
      {
        id: "startup-cs1",
        title: "Zero-Day Attack Prevention for SaaS Innovator",
        problem: "A fast-growing SaaS startup, rich in IP, became a target for zero-day exploits aiming to steal their proprietary algorithms and disrupt service.",
        solution: "Integrated SudarNetra’s predictive AI models for identifying and isolating novel attack vectors in real-time, coupled with rapid patch management advisories.",
        results: "Prevented 2 confirmed zero-day attacks; Secured Series B funding due to robust security posture; Minimized security-related service disruptions to <0.1%.",
        metrics: { "Zero-Day Attacks Prevented": 2, "Service Disruption Reduction": 99.9, "IP Security": 100 },
        logoImg: "Dynamic abstract shape representing innovation for a startup",
        logoAlt: "SaaS Innovator Logo"
      }
    ]
  },
  { 
    value: "education", 
    label: "Education", 
    icon: <GraduationCap className="w-5 h-5 mr-2" />,
    caseStudies: [
      {
        id: "edu-cs1",
        title: "Protecting University Research & Student Data",
        problem: "A large university with valuable research data and extensive student records was struggling with securing its sprawling network and diverse user base.",
        solution: "SudarNetra implemented a unified security dashboard, AI-driven network segmentation, and phishing-resistant authentication for all users.",
        results: "Reduced unauthorized access attempts by 95%; Secured terabytes of sensitive research data; Enhanced digital safety for over 30,000 students and staff.",
        metrics: { "Unauthorized Access Reduction": 95, "Research Data Secured (TB)": 500, "Users Protected": 30000 },
        logoImg: "Stylized book or owl for an educational institution",
        logoAlt: "University Logo"
      }
    ]
  }
];

const IndustryCaseStudies = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].value);

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-8">
          {industriesData.map(industry => (
            <TabsTrigger key={industry.value} value={industry.value} className="flex items-center justify-center py-3">
              {industry.icon} {industry.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {industriesData.map(industry => (
          <TabsContent key={industry.value} value={industry.value}>
            <div className="grid gap-8">
              {industry.caseStudies.map(cs => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="premium-glass-card overflow-hidden digital-aura-card">
                    <CardHeader className="bg-primary/5 p-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl cosmic-gradient-text">{cs.title}</CardTitle>
                        <img  alt={cs.logoAlt} class="h-12 w-auto filter grayscale opacity-70" src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-lg text-primary mb-1 flex items-center"><AlertTriangle className="w-5 h-5 mr-2 text-destructive" />The Challenge:</h4>
                          <p className="text-muted-foreground">{cs.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-primary mb-1 flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />Our Solution:</h4>
                          <p className="text-muted-foreground">{cs.solution}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-primary mb-2 flex items-center"><BarChart3 className="w-5 h-5 mr-2 text-accent" />Key Results & Metrics:</h4>
                        <p className="text-muted-foreground mb-3">{cs.results}</p>
                        <div className="space-y-2">
                          {Object.entries(cs.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center text-sm">
                              <span className="text-foreground">{key}:</span>
                              <span className="font-bold text-primary">{typeof value === 'number' && value > 10000 ? (value/1000).toFixed(0) + 'k' : value.toString()}{typeof value === 'number' && (key.includes("Reduction") || key.includes("Improvement") || key.includes("Compliance") || key.includes("Security") || key.includes("Integrity")) ? "%" : ""}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default IndustryCaseStudies;
