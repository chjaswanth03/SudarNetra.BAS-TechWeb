
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, BookOpenText, HeartHandshake, GitCommit, Target, Eye, Lightbulb, Disc3, Mountain, Milestone, KeyRound as UsersRound } from 'lucide-react';

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

const AboutPage = () => {
  const philosophyPillars = [
    { icon: <HeartHandshake className="w-10 h-10 text-primary" />, title: "Ethical Technology", description: "Our commitment to dharma ensures every solution is built with integrity, transparency, and respect for user privacy." },
    { icon: <Mountain className="w-10 h-10 text-secondary" />, title: "Deep Indian Roots", description: "Inspired by millennia of wisdom, we bring a unique, culturally grounded perspective to global cybersecurity challenges." },
    { icon: <Disc3 className="w-10 h-10 text-accent" />, title: "Spiritual Approach to Defense", description: "We see cybersecurity not just as a technical problem, but a way to uphold digital harmony and well-being." },
  ];

  const journeyTimeline = [
    { year: "Inception", title: "The Divine Spark (Sankalpa)", description: "Inspired by the Sudarshana Chakra, the vision for SudarNetra was born – a divine eye to protect the digital realm.", icon: <Lightbulb className="text-primary" /> },
    { year: "Foundation", title: "Gathering the Guardians (Nirmaan)", description: "A dedicated team of technologists and dharmic thinkers united to bring this vision to life.", icon: <Users className="text-accent" /> },
    { year: "Innovation", title: "Crafting the Shield (Pratham)", description: "Development of our core AI, Blockchain, and Big Data technologies to form the first line of defense.", icon: <GitCommit className="text-secondary" /> },
    { year: "Growth", title: "Expanding Our Reach (Sahayog)", description: "Partnering with organizations to implement and refine our solutions, spreading digital security.", icon: <HeartHandshake className="text-primary" /> },
    { year: "Future", title: "The Path Forward (Bhavishya)", description: "Continuously evolving to meet future threats, aiming for a globally trusted, dharma-driven cybersecurity ecosystem.", icon: <Target className="text-accent" /> },
  ];

  const impactPoints = [
    { title: "Societal Well-being", description: "Fostering a safer digital environment for individuals, communities, and institutions.", icon: <UsersRound className="w-10 h-10 text-primary"/> },
    { title: "Business Resilience", description: "Empowering businesses to thrive securely, protecting their assets, data, and reputation.", icon: <Milestone className="w-10 h-10 text-secondary"/> },
    { title: "Digital Dharma", description: "Promoting ethical practices and responsible innovation in the global digital landscape.", icon: <BookOpenText className="w-10 h-10 text-accent"/> }
  ];

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
            About SudarNetra
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
          >
            The Divine Eye of Cyber Defense: Weaving Ancient Wisdom with Tomorrow's Technology.
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">Our Journey: The Genesis of SudarNetra</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img  alt="Stylized Sudarshana Chakra glowing with cosmic energy" class="rounded-lg shadow-xl max-w-md w-full h-auto object-cover filter hue-rotate-15 saturate-150" src="https://images.unsplash.com/photo-1617470707091-38339767432c" />
          </motion.div>
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              SudarNetra finds its deepest inspiration in the <strong className="text-primary">Sudarshana Chakra</strong>, the divine, spinning discus of Lord Vishnu. This sacred emblem represents eternal vigilance, the power to dispel darkness, and the upholding of cosmic order (Dharma). It is the all-seeing eye that perceives threats unseen and acts decisively to protect righteousness.
            </p>
            <p className="text-lg text-muted-foreground">
              Our founders, driven by a mission to bring this ancient protective wisdom into the digital age, envisioned SudarNetra. We aim to be that <strong className="text-secondary">Divine Eye of Cyber Defense</strong>, safeguarding the digital realm through the principles of Dharma and the might of cutting-edge AI, Blockchain, and Big Data technologies.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-primary/40 rounded-full transform -translate-x-1/2"></div>
          {journeyTimeline.map((item, index) => (
            <motion.div 
              key={index} 
              className={`flex md:items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            >
              <div className="md:w-1/2 flex md:justify-center">
                <div className={`w-16 h-16 rounded-full glassmorphism-card flex items-center justify-center text-3xl font-bold ${index % 2 === 0 ? 'md:mr-[-32px]' : 'md:ml-[-32px]'} z-10 shadow-lg border-2 border-accent/50`}>
                  {item.icon}
                </div>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <Card className={`premium-glass-card p-6 ${index % 2 === 0 ? 'md:ml-10' : 'md:mr-10'}`}>
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-xl text-primary">{item.year} - {item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-12">Our Mission & Purpose</h2>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xl text-muted-foreground">
            <strong className="text-primary">Core Purpose:</strong> To be the unwavering sentinel of the digital cosmos, ensuring safety, trust, and ethical conduct in an increasingly interconnected world.
          </p>
          <p className="text-xl text-muted-foreground">
            <strong className="text-secondary">Mission:</strong> To empower individuals and organizations with divinely inspired, technologically advanced cybersecurity solutions, making the digital experience secure and harmonious for all.
          </p>
          <p className="text-xl text-muted-foreground">
            <strong className="text-accent">Guiding Values:</strong> Truth (Satya), Righteousness (Dharma), Non-violence (Ahimsa in digital context), Transparency (Spashtata), and Universal Well-being (Sarve Bhavantu Sukhinah).
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">Our Philosophy: The SudarNetra Way</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {philosophyPillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30, scale:0.9 }}
              whileInView={{ opacity: 1, y: 0, scale:1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness:90 }}
            >
              <Card className="premium-glass-card h-full text-center p-8 hover:shadow-accent/30">
                <div className="flex justify-center mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-background/80 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center cosmic-gradient-text-glow mb-16">Our Impact: Securing the Digital Yuga</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {impactPoints.map((point, index) => (
             <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="glassmorphism-card h-full text-center p-8 digital-aura-card">
                <div className="flex justify-center mb-6">{point.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
         <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mt-16"
            initial={{ opacity:0 }} animate={{opacity:1}} transition={{delay:0.5}}
          >
            Our future goals involve expanding our reach, deepening our research in ethical AI, and fostering a global community dedicated to dharmic principles in technology. We envision a future where digital interactions are imbued with trust and security for all beings.
          </motion.p>
      </SectionWrapper>
      
      <SectionWrapper>
        <Card className="glassmorphism-card max-w-3xl mx-auto p-10 text-center bg-gradient-to-tr from-primary/10 via-background/20 to-accent/10">
          <Disc3 className="w-24 h-24 text-primary mx-auto mb-8 animate-spin" style={{animationDuration: '15s'}}/>
          <h3 className="text-3xl font-bold cosmic-gradient-text-glow mb-6">A Note from Our Guardians</h3>
          <p className="text-lg text-muted-foreground italic">
            "With deep reverence for the wisdom of our ancestors and a steadfast commitment to technological excellence, we founded SudarNetra. Our endeavor is to build not just a company, but a sanctuary of digital trust. We are honored to serve and protect, guided by Dharma, powered by innovation."
          </p>
          <p className="mt-6 font-semibold text-foreground">- The SudarNetra Team (Placeholder)</p>
        </Card>
      </SectionWrapper>

    </motion.div>
  );
};

export default AboutPage;
  