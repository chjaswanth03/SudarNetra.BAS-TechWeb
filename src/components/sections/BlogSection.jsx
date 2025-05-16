
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Edit3, Tag } from 'lucide-react';

const articles = [
  {
    title: 'Why SMEs in India Need Log Monitoring',
    excerpt: 'Discover the critical role of log monitoring for small and medium enterprises in the evolving Indian cybersecurity landscape.',
    category: 'Cybersecurity',
    slug: '/blog/sme-log-monitoring',
    img: "Abstract representation of data logs and security shield for SME"
  },
  {
    title: 'Cyber Dharma: Tech Rooted in Spirituality',
    excerpt: 'Exploring the intersection of ancient wisdom and modern technology to build ethical and resilient digital defenses.',
    category: 'Philosophy & Tech',
    slug: '/blog/cyber-dharma',
    img: "Lotus flower intertwined with circuit board patterns"
  },
  {
    title: 'The Future of AI in Threat Detection',
    excerpt: 'A look into how advanced AI and machine learning are revolutionizing the way we identify and respond to cyber threats.',
    category: 'Artificial Intelligence',
    slug: '/blog/ai-threat-detection',
    img: "Glowing neural network with abstract threat icons"
  },
];

const BlogSection = () => {
  const cardVariants = {
    offscreen: {
      y: 55,
      opacity: 0,
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.85,
        delay: i * 0.18,
      },
    }),
  };

  return (
    <section className="py-24 px-4 bg-background section-particle-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold cosmic-gradient-text-glow mb-4 md:mb-0">
            Insights & Articles
          </h2>
          <Link to="/blog">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/15 digital-aura chakra-pulse-hover px-6 py-3 text-base">
              View All Posts <ArrowRight className="ml-2.5 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.custom
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="premium-glass-card h-full flex flex-col overflow-hidden group transform hover:shadow-secondary/40 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={article.title + " blog image"}  src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center text-xs font-semibold text-secondary mb-2.5 uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5 mr-1.5" /> {article.category}
                  </div>
                  <CardTitle className="text-xl text-foreground leading-snug">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to={article.slug} className="w-full">
                    <Button variant="link" className="text-primary p-0 hover:text-accent w-full justify-start">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
  