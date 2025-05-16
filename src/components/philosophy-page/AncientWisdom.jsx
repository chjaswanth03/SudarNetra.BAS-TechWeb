
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const quotes = [
  {
    text: "सत्यमेव जयते नानृतं सत्येन पन्था विततो देवयानः।",
    translation: "Truth alone triumphs, not falsehood. By truth is laid out the divine path.",
    source: "Mundaka Upanishad 3.1.6",
    delay: 0.1
  },
  {
    text: "धर्मो रक्षति रक्षितः।",
    translation: "Dharma protects those who protect Dharma.",
    source: "Mahabharata",
    delay: 0.2
  },
  {
    text: "यतो धर्मस्ततो जयः।",
    translation: "Where there is Dharma, there is victory.",
    source: "Mahabharata",
    delay: 0.3
  }
];

const AncientWisdom = () => {
  return (
    <div className="space-y-8">
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: quote.delay, duration: 0.5 }}
        >
          <Card className="premium-glass-card">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl italic text-foreground mb-2">"{quote.text}"</p>
                  <p className="text-md text-muted-foreground mb-1"><em>{quote.translation}</em></p>
                  <p className="text-sm text-primary font-medium">{quote.source}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default AncientWisdom;
