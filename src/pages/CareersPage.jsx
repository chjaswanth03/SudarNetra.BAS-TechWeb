
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Brain, Shield, Users, Code, GraduationCap, ArrowRight, Sparkles, Disc3, HeartHandshake as Handshake, BookOpen } from 'lucide-react';

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

const openRolesData = [
  { title: "AI Engineer (Prajna Yantrik)", icon: <Brain className="text-primary w-8 h-8" />, description: "Develop and deploy advanced AI models for threat detection and predictive analytics. Shape the future of intelligent defense.", location: "Remote/Hybrid (India)" },
  { title: "Blockchain Developer (Shrinkhala Shilpi)", icon: <Code className="text-secondary w-8 h-8" />, description: "Design and implement secure, scalable blockchain solutions for immutable audit trails and data integrity.", location: "Hybrid (Bangalore)" },
  { title: "Security Analyst (Netra Rakshak)", icon: <Shield className="text-accent w-8 h-8" />, description: "Monitor, analyze, and respond to security incidents. Be the vigilant eye protecting our clients' digital assets.", location: "Remote/Hybrid (India)" },
  { title: "Data Scientist (Tathya Gyani)", icon: <Briefcase className="text-primary w-8 h-8" />, description: "Uncover hidden insights from vast datasets to enhance our threat intelligence and defensive capabilities.", location: "Remote (Global)" },
];

const whyWorkWithUsData = [
    { icon: <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />, title: "Ethical Tech Mission", description: "Contribute to a higher purpose by building technology that aligns with dharmic principles and protects digital well-being." },
    { icon: <Handshake className="w-12 h-12 text-secondary mx-auto mb-4" />, title: "Spiritual Work Culture", description: "Thrive in a supportive, respectful environment that values mindfulness, integrity, and collective growth." },
    { icon: <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />, title: "Cutting-Edge Projects", description: "Work on innovative solutions at the forefront of AI, Blockchain, and Big Data in cybersecurity." },
    { icon: <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />, title: "Personal & Professional Growth", description: "We invest in your development with continuous learning opportunities and paths for advancement." },
];

const CareersPage = () => {
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
            Join Our Divine Guardianship
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
          >
            Become a vital part of SudarNetra. Wield your skills to build a safer, dharma-driven digital future for all.
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">Why Embark on This Journey With Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {whyWorkWithUsData.map((item, index) => (
            <motion.div key={index} initial={{opacity:0, scale:0.9, y:20}} whileInView={{opacity:1, scale:1, y:0}} viewport={{once:true}} transition={{delay:0.1 * index, type:"spring", stiffness:90}}>
              <Card className="premium-glass-card p-8 h-full">
                {item.icon}
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">Open Roles: Answer the Call</h2>
        {openRolesData.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-10">
            {openRolesData.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="h-full"
              >
                <Card className="premium-glass-card h-full flex flex-col hover:shadow-accent/40 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center space-x-5 p-6">
                    <div className="text-4xl p-3 bg-card/70 rounded-lg shadow-inner">
                        <Disc3 className={role.icon.props.className + " animate-spin"} style={{animationDuration: `${10 + index*2}s`}} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">{role.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{role.location}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow px-6">
                    <p className="text-muted-foreground">{role.description}</p>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary chakra-pulse-hover digital-aura w-full text-base py-6">
                      Apply Now <ArrowRight className="ml-2.5 h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-xl">Currently, the universe aligns no open roles. Please check back as new paths unfold!</p>
        )}
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold cosmic-gradient-text-glow mb-8">Life at SudarNetra: The Kula</h2>
            <Card className="premium-glass-card p-8">
              <CardContent className="text-center md:text-left">
                <p className="text-lg text-muted-foreground italic mb-6">
                  "At SudarNetra, we are more than colleagues; we are a <strong className="text-primary">kula (family)</strong> united by a shared vision of a secure and dharmic digital world. We cultivate an atmosphere of mutual respect, continuous learning, and mindful action. Here, your voice is heard, your growth is nurtured, and your work contributes to a greater good."
                </p>
                <p className="text-right font-semibold text-foreground">- The SudarNetra Team</p>
              </CardContent>
            </Card>
            <div className="mt-10 space-y-4 text-muted-foreground">
                <p className="flex items-center text-lg"><Users className="w-6 h-6 mr-3 text-primary"/> We champion remote and hybrid work models to support your well-being.</p>
                <p className="flex items-center text-lg"><GraduationCap className="w-6 h-6 mr-3 text-secondary"/> Passionate about nurturing new talent through our insightful internship programs.</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.85, x:35 }}
            whileInView={{ opacity: 1, scale: 1, x:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img  alt="Diverse team members collaborating happily in a modern, bright office with futuristic and spiritual aesthetic elements" class="rounded-xl shadow-2xl max-w-lg w-full h-auto object-cover filter saturate-125" src="https://images.unsplash.com/photo-1522071820081-009f0129c7da" />
          </motion.div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="text-center bg-gradient-to-t from-background/90 to-background/70 backdrop-blur-sm pb-24">
        <motion.h3 
            className="text-4xl md:text-5xl font-bold cosmic-gradient-text-glow mb-10"
            initial={{ opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.7}}
        >
            Let’s co-create divine defense systems together.
        </motion.h3>
        <motion.div initial={{opacity:0, scale:0.85}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:0.4, duration:0.6}}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground transform hover:scale-105 digital-aura chakra-pulse-hover px-12 py-8 text-xl">
                Explore Opportunities
            </Button>
        </motion.div>
      </SectionWrapper>
    </motion.div>
  );
};

export default CareersPage;
  