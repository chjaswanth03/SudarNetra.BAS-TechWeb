
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ShieldCheck, Disc3 } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Technology', path: '/technology' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialHandles = [
    { icon: <Facebook className="w-6 h-6" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-6 h-6" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-6 h-6" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="w-6 h-6" />, href: '#', name: 'Instagram' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <footer className="bg-card/60 backdrop-blur-xl py-16 px-4 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 chakra-watermark opacity-5"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent rounded-full animate-pulse opacity-30 pointer-events-none"></div>
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent rounded-full animate-pulse opacity-30 pointer-events-none animation-delay-2000"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-5"
          >
            <Link to="/" className="flex items-center space-x-3">
              <ShieldCheck className="w-12 h-12 text-primary" />
              <h3 className="text-3xl font-bold cosmic-gradient-text">SudarNetra</h3>
            </Link>
            <p className="text-muted-foreground text-sm footer-glow">
              The Divine Eye of Cyber Defense. <br />
              AI. Hadoop. Dharma of Digital Security.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-5 footer-glow">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors footer-glow">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-5 footer-glow">Connect With Us</h4>
            <div className="flex space-x-5 mb-5">
              {socialHandles.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm footer-glow">
              Email: <a href="mailto:info@sudarnetra.com" className="hover:text-primary">info@sudarnetra.com</a>
            </p>
            <p className="text-muted-foreground text-sm footer-glow">
              Phone: +91-000-0000000 (Placeholder)
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.3 }}
          className="border-t border-border/40 pt-10 text-center"
        >
          <p className="text-2xl font-semibold cosmic-gradient-text-glow mb-3 footer-glow">
            “No threat goes unseen. No data goes unguarded.”
          </p>
          <p className="text-sm text-muted-foreground footer-glow">
            &copy; {new Date().getFullYear()} SudarNetra. All rights reserved. Crafted with Dharma.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
  