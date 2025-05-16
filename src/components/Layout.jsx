
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '@/components/sections/Footer';
import { ShieldCheck, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const mainNavLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Company',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Philosophy', path: '/philosophy' },
      { name: 'Trust & Security', path: '/trust' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ]
  },
  {
    name: 'Solutions',
    children: [
      { name: 'Services', path: '/services' },
      { name: 'Technology', path: '/technology' },
      { name: 'AI Power', path: '/ai-power' },
      { name: 'Blockchain - Immortal Data', path: '/blockchain-immortal-data'},
      { name: 'Success Stories', path: '/success-stories'},
      { name: 'Case Studies (Legacy)', path: '/case-studies' },
      { name: 'Partners', path: '/partners' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
];

const actionLinks = [
  { name: 'Security Assessment', path: '/security-assessment', variant: 'outline' },
  { name: 'Live Demo', path: '/demo', variant: 'default' },
  { name: 'Client Portal', path: '/dashboard', variant: 'default' },
];

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const handleDropdownEnter = (name) => {
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-10 h-10 text-primary" />
            <span className="text-2xl font-bold cosmic-gradient-text">SudarNetra</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4 xl:space-x-6"> {/* Adjusted space-x for potentially longer dropdown title */}
            {mainNavLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && handleDropdownEnter(link.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {link.children ? (
                  <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary">
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary ${
                        isActive ? 'text-primary underline underline-offset-4' : 'text-muted-foreground'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}

                {link.children && activeDropdown === link.name && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={dropdownVariants}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-md shadow-lg bg-background border border-border" /* Increased width for longer item */
                  >
                    <div className="py-2">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          onClick={() => { setActiveDropdown(null); setIsMobileMenuOpen(false); }}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm whitespace-nowrap ${ /* Added whitespace-nowrap */
                              isActive
                                ? 'text-primary bg-primary/10'
                                : 'text-foreground hover:bg-muted'
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-2 xl:space-x-3"> {/* Adjusted space-x */}
              {actionLinks.map((link) => (
                <Button
                  key={link.name}
                  variant={link.variant}
                  asChild
                  size="sm" /* Adjusted button size */
                  className={`${link.variant === 'default' ? 'button-shine' : ''} whitespace-nowrap`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </Button>
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-background/95 backdrop-blur-md absolute top-20 left-0 right-0 shadow-lg py-4"
            >
              <div className="container mx-auto px-4 flex flex-col space-y-3">
                {mainNavLinks.map((link) => (
                  <div key={link.name}>
                    {link.children ? (
                      <>
                        <div className="text-sm font-medium text-muted-foreground py-2 px-2"> {/* Added padding */}
                          {link.name}
                        </div>
                        <div className="pl-6 flex flex-col space-y-2"> {/* Increased indent */}
                          {link.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `text-sm py-1.5 ${ /* Adjusted padding */
                                  isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                                }`
                              }
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `block py-2 px-2 text-base font-medium transition-colors hover:text-primary ${ /* Added padding */
                            isActive ? 'text-primary' : 'text-foreground'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 px-2"> {/* Added padding */}
                  {actionLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant={link.variant}
                      className="w-full"
                      asChild
                    >
                      <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
