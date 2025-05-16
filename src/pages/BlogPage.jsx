
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Tag, Search, Filter, Disc3 } from 'lucide-react';

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

const allPostsData = [
  { id: 1, title: "Cyber Dharma: Tech Rooted in Spirituality", tag: "Philosophy & Tech", summary: "Exploring how ethical AI, guided by dharmic principles, can create more resilient and just cybersecurity frameworks. A journey into conscious coding.", thumbnail: "Lotus flower intertwined with glowing circuit board patterns", date: "2025-04-28" },
  { id: 2, title: "The Future of AI in Threat Detection: A SudarNetra Perspective", tag: "AI & Big Data", summary: "A deep dive into how advanced machine learning and neural networks are revolutionizing our ability to foresee and neutralize cyber threats.", thumbnail: "Glowing neural network with abstract threat icons", date: "2025-04-15" },
  { id: 3, title: "Why SMEs in India Need Vigilant Log Monitoring", tag: "Cybersecurity", summary: "Understanding the critical importance of log analysis for small and medium enterprises in the dynamic Indian digital ecosystem.", thumbnail: "Abstract representation of data logs and a protective shield for SME", date: "2025-03-20" },
  { id: 4, title: "Blockchain Security: Beyond the Hype - Real-World Applications", tag: "Blockchain Security", summary: "Demystifying blockchain's role in cybersecurity, from immutable audit trails to decentralized identity management.", thumbnail: "Secure blockchain network with interconnected nodes", date: "2025-02-10" },
  { id: 5, title: "The Ethical Imperative of AI in Cybersecurity", tag: "Philosophy & Tech", summary: "Discussing the moral responsibilities and dharmic considerations when deploying powerful AI for digital defense.", thumbnail: "Balanced scales with AI brain on one side and dharmachakra on other", date: "2025-01-25" },
  { id: 6, title: "Unleashing Big Data for Proactive Cyber Defense", tag: "AI & Big Data", summary: "How SudarNetra harnesses Hadoop and Spark to turn massive datasets into actionable security intelligence.", thumbnail: "Vast, interconnected data points forming a protective sphere", date: "2024-12-15" },
];

const categoriesData = ["All", "Cybersecurity", "Philosophy & Tech", "AI & Big Data", "Blockchain Security"];

const ChakraDivider = () => (
  <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent relative">
    <Disc3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary animate-spin" style={{ animationDuration: '8s' }} />
  </div>
);

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = allPostsData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.tag === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

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
            Insights from the Divine Eye
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
          >
            Exploring the confluence of technology, spirituality, and cybersecurity. Dive into articles that illuminate the path to a safer digital yuga.
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center p-6 glassmorphism-card rounded-lg">
          <div className="relative w-full md:flex-grow">
            <Input 
              type="search" 
              placeholder="Search articles by keyword..." 
              className="pl-12 chakra-input h-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
          </div>
          <div className="relative w-full md:w-auto md:min-w-[200px]">
             <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full chakra-input h-12 rounded-md border border-input bg-input px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {categoriesData.map(category => (
                  <option key={category} value={category} className="bg-card text-foreground">{category}</option>
                ))}
              </select>
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary pointer-events-none" />
          </div>
        </div>
        
        <ChakraDivider />

        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 25, scale:0.95 }}
                whileInView={{ opacity: 1, y: 0, scale:1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type:"spring", stiffness:90 }}
                className="h-full"
              >
                <Card className="kinetic-card premium-glass-card h-full flex flex-col overflow-hidden group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter saturate-125" alt={post.title} src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center text-sm font-semibold text-secondary mb-2.5 uppercase tracking-wider">
                      <Tag className="w-4 h-4 mr-2" /> {post.tag}
                    </div>
                    <CardTitle className="text-xl text-foreground leading-snug group-hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-6 pt-0">
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.summary}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-2 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <Button variant="link" className="button-shine text-primary p-0 hover:text-accent font-semibold">
                      Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <p className="text-2xl text-muted-foreground">No articles found matching your divine query.</p>
            <p className="text-base text-muted-foreground">Try adjusting your search or filter to uncover hidden wisdom.</p>
          </motion.div>
        )}
      </SectionWrapper>
    </motion.div>
  );
};

export default BlogPage;
  