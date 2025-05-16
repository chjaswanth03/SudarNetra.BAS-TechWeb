
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const SecurityAssessmentPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const questions = [
    {
      question: "What is your organization's primary security concern?",
      options: [
        "Data breaches",
        "Ransomware attacks",
        "Insider threats",
        "Compliance requirements"
      ]
    },
    {
      question: "How many employees does your organization have?",
      options: [
        "1-50",
        "51-200",
        "201-1000",
        "1000+"
      ]
    },
    {
      question: "What type of data do you primarily handle?",
      options: [
        "Personal Information",
        "Financial Data",
        "Healthcare Records",
        "Intellectual Property"
      ]
    },
    // Add more questions as needed
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

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
            Security Assessment
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Evaluate your organization's security posture
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="assessment" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="assessment">Security Quiz</TabsTrigger>
              <TabsTrigger value="consultation">Book Consultation</TabsTrigger>
            </TabsList>

            <TabsContent value="assessment">
              <Card className="premium-glass-card">
                {!showResults ? (
                  <>
                    <CardHeader>
                      <CardTitle>Question {currentQuestion + 1} of {questions.length}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-xl mb-6">{questions[currentQuestion].question}</h3>
                      <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full text-left justify-start h-auto py-4"
                            onClick={() => handleAnswer(option)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-6 h-6 mr-2 text-primary" />
                        Assessment Complete
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p className="text-lg">Based on your responses, we recommend scheduling a detailed security consultation.</p>
                        <Button className="w-full button-shine">
                          Download Full Report
                        </Button>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="consultation">
              <Card className="premium-glass-card">
                <CardHeader>
                  <CardTitle>Schedule a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    <Button className="w-full button-shine">
                      Book Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="premium-glass-card">
            <CardHeader>
              <CardTitle className="text-center">Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="flex space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit" className="button-shine">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecurityAssessmentPage;
