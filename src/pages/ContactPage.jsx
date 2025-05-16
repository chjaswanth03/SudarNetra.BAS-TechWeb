
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { User, Mail, MessageSquare, Phone, Linkedin, Twitter, Github, MapPin, Send, Clock, Sparkles, Shield, Disc3, Briefcase, HeartHandshake as Handshake, HelpCircle } from 'lucide-react';

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

const securityMantras = [
  "May your connection be strong and your data protected by Dharma's light.",
  "Navigate the digital waters with awareness, security, and divine guidance.",
  "Like the Sudarshana's edge, may your defenses be ever sharp and vigilant.",
  "In the flow of data, may wisdom be your compass and security your shield.",
  "Secure your presence, enlighten your path, walk with digital grace.",
  "Dharma in every byte, safety in every connection, peace in every interaction.",
  "Let every click be mindful, every transaction secure, every interaction blessed."
];

const contactReasons = [
    { value: "business", label: "Business Inquiries", icon: <Briefcase className="w-4 h-4 mr-2"/> },
    { value: "partnerships", label: "Partnerships", icon: <Handshake className="w-4 h-4 mr-2"/> },
    { value: "support", label: "Support", icon: <HelpCircle className="w-4 h-4 mr-2"/> },
    { value: "general", label: "General Queries", icon: <MessageSquare className="w-4 h-4 mr-2"/> },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', reason: 'general', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentMantra, setCurrentMantra] = useState('');

  const getRandomMantra = () => {
    const randomIndex = Math.floor(Math.random() * securityMantras.length);
    return securityMantras[randomIndex];
  };

  useEffect(() => {
    setCurrentMantra(getRandomMantra());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: (<div className="flex items-center"><Sparkles className="w-5 h-5 mr-2 text-primary" /> Message Sent!</div>),
      description: (
        <div>
          <p>Thank you for reaching out. We'll respond within 24 divine hours.</p>
          <p className="mt-2 text-sm italic text-accent flex items-center">
            <Shield className="w-4 h-4 mr-1.5" /> {currentMantra}
          </p>
        </div>
      ),
      variant: "default",
      duration: 7000,
      className: "bg-card border-primary/50 text-foreground",
    });
    setFormData({ name: '', email: '', subject: '', reason: 'general', message: '' });
    setCurrentMantra(getRandomMantra());
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: <Linkedin className="w-7 h-7" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="w-7 h-7" />, href: "#", name: "Twitter / X" },
    { icon: <Github className="w-7 h-7" />, href: "#", name: "GitHub" },
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
            Connect With the Divine Eye
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
          >
            Reach out for inquiries, support, or to explore how SudarNetra can illuminate and safeguard your digital realm.
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="premium-glass-card p-8 md:p-10">
              <h2 className="text-3xl font-semibold cosmic-gradient-text-glow mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <Label htmlFor="name" className="flex items-center text-muted-foreground mb-1.5"><User className="w-4 h-4 mr-2 text-primary" /> Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Auspicious Name" value={formData.name} onChange={handleChange} required className="chakra-input" />
                </div>
                <div>
                  <Label htmlFor="email" className="flex items-center text-muted-foreground mb-1.5"><Mail className="w-4 h-4 mr-2 text-primary" /> Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.divine.email@example.com" value={formData.email} onChange={handleChange} required className="chakra-input" />
                </div>
                 <div>
                  <Label htmlFor="reason" className="flex items-center text-muted-foreground mb-1.5"><Briefcase className="w-4 h-4 mr-2 text-primary" /> Reason for Contact</Label>
                  <select id="reason" name="reason" value={formData.reason} onChange={handleChange} required className="w-full chakra-input h-10 rounded-md border border-input bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      {contactReasons.map(reason =>(
                          <option key={reason.value} value={reason.value}>{reason.label}</option>
                      ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="subject" className="flex items-center text-muted-foreground mb-1.5"><MessageSquare className="w-4 h-4 mr-2 text-primary" /> Subject</Label>
                  <Input id="subject" name="subject" type="text" placeholder="Subject of your query..." value={formData.subject} onChange={handleChange} required className="chakra-input" />
                </div>
                <div>
                  <Label htmlFor="message" className="flex items-center text-muted-foreground mb-1.5"><MessageSquare className="w-4 h-4 mr-2 text-primary" /> Message</Label>
                  <Textarea id="message" name="message" placeholder="Your detailed message..." value={formData.message} onChange={handleChange} required rows={5} className="chakra-input min-h-[120px]" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                    <p className="text-sm text-accent flex items-center"><Clock className="w-4 h-4 mr-2"/> We respond within 24 divine hours.</p>
                    <Button type="submit" size="lg" className="digital-aura chakra-pulse-hover bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground transform hover:scale-105 transition-all w-full sm:w-auto text-base py-3 px-8" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2.5 w-5 h-5"/>
                    </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay:0.15 }}
            className="space-y-10"
          >
            <Card className="premium-glass-card p-8 md:p-10">
              <h2 className="text-3xl font-semibold cosmic-gradient-text-glow mb-8">Our Coordinates</h2>
              <div className="space-y-5 text-muted-foreground text-lg">
                <p className="flex items-start"><Disc3 className="w-5 h-5 mr-3 mt-1 text-primary flex-shrink-0 animate-spin" style={{animationDuration:"5s"}}/> <MapPin className="w-5 h-5 mr-3 mt-1 text-secondary flex-shrink-0" /><span>123 Cosmic Cyber Lane, Digital Universe, Bharatvarsha DU 42000</span></p>
                <p className="flex items-center"><Disc3 className="w-5 h-5 mr-3 text-primary flex-shrink-0 animate-spin" style={{animationDuration:"5.2s"}}/> <Mail className="w-5 h-5 mr-3 text-secondary" /><a href="mailto:connect@sudarnetra.com" className="hover:text-primary transition-colors">connect@sudarnetra.com</a></p>
                <p className="flex items-center"><Disc3 className="w-5 h-5 mr-3 text-primary flex-shrink-0 animate-spin" style={{animationDuration:"5.4s"}}/> <Phone className="w-5 h-5 mr-3 text-secondary" /><a href="tel:+910000000000" className="hover:text-primary transition-colors">+91-000-000-0000</a></p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-foreground mb-5">Follow Our Dharma Trail</h3>
                <div className="flex space-x-6">
                  {socialLinks.map(link => (
                    <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-primary/10">
                      {React.cloneElement(link.icon, {strokeWidth: 1.5})}
                    </a>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="premium-glass-card p-8 md:p-10">
               <h2 className="text-3xl font-semibold cosmic-gradient-text-glow mb-8">Our Sacred Grove (Location)</h2>
               <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden border-2 border-primary/30">
                 <img  class="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-300 filter saturate-125" alt="Stylized map with glowing points representing a sacred location" src="https://images.unsplash.com/photo-1535909707335-829f8d50f8b4" />
               </div>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="text-center pb-24">
        <motion.p 
          className="text-xl md:text-2xl italic cosmic-gradient-text-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          “May your data be eternally safe, and your digital path be ever dharmic.”
        </motion.p>
      </SectionWrapper>
    </motion.div>
  );
};

export default ContactPage;
  