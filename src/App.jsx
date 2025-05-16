
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import TechnologyPage from '@/pages/TechnologyPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import CareersPage from '@/pages/CareersPage';
import DemoPage from '@/pages/DemoPage';
import PricingPage from '@/pages/PricingPage';
import CaseStudiesPage from '@/pages/CaseStudiesPage';
import PartnersPage from '@/pages/PartnersPage';
import OnboardingPage from '@/pages/OnboardingPage';
import TrustPage from '@/pages/TrustPage';
import SecurityAssessmentPage from '@/pages/SecurityAssessmentPage';
import DashboardPage from '@/pages/DashboardPage';
import AIPowerPage from '@/pages/AIPowerPage.jsx';
import BlockchainImmortalDataPage from '@/pages/BlockchainImmortalDataPage.jsx';
import PhilosophicalFoundationPage from '@/pages/PhilosophicalFoundationPage.jsx';
import SuccessStoriesPage from '@/pages/SuccessStoriesPage.jsx';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen cosmic-bg text-foreground overflow-x-hidden">
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/ai-power" element={<AIPowerPage />} />
              <Route path="/blockchain-immortal-data" element={<BlockchainImmortalDataPage />} />
              <Route path="/philosophy" element={<PhilosophicalFoundationPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/trust" element={<TrustPage />} />
              <Route path="/security-assessment" element={<SecurityAssessmentPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
