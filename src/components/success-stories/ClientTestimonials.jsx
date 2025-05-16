
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aisha Khan",
    title: "CISO, FinSecure Corp",
    avatarImgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=50&q=50",
    avatarFallback: "AK",
    quote: "SudarNetra's AI-driven approach to threat detection is unparalleled. We've seen a significant decrease in false positives and our response time has improved dramatically. Their commitment to 'Cyber Dharma' resonates deeply with our ethical framework.",
    rating: 5,
    logoImgAlt: "FinSecure Corp Logo",
    logoImgSrc: "https://images.unsplash.com/photo-1485531865381-286666aa80a9"
  },
  {
    name: "Dr. Ben Carter",
    title: "CIO, HealWell Hospitals",
    avatarImgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=50&q=50",
    avatarFallback: "BC",
    quote: "Protecting patient data is our utmost priority. SudarNetra's blockchain solution for data integrity and their proactive defense mechanisms have given us peace of mind and streamlined our HIPAA compliance.",
    rating: 5,
    logoImgAlt: "HealWell Hospitals Logo",
    logoImgSrc: "https://images.unsplash.com/photo-1485531865381-286666aa80a9"
  },
  {
    name: "Priya Sharma",
    title: "Founder, InnovateNow Startups",
    avatarImgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=50&q=50",
    avatarFallback: "PS",
    quote: "As a startup, we needed robust security that wouldn't break the bank. SudarNetra provided a scalable solution that protected our IP and gave our investors confidence. Their insights are invaluable.",
    rating: 4,
    logoImgAlt: "InnovateNow Startups Logo",
    logoImgSrc: "https://images.unsplash.com/photo-1485531865381-286666aa80a9"
  }
];

const ClientTestimonials = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full flex flex-col">
            <CardContent className="p-6 flex-grow flex flex-col">
              <Quote className="w-10 h-10 text-primary/50 mb-4" />
              <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center mt-auto">
                <Avatar className="h-12 w-12 mr-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatarImgSrc} alt={testimonial.name + " avatar"} />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mt-4 border-t border-border pt-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-5 h-5 text-yellow-400/30" />
                ))}
              </div>
               <div className="mt-4">
                 <img src={testimonial.logoImgSrc} alt={testimonial.logoImgAlt} className="h-8 w-auto filter grayscale opacity-60" />
               </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ClientTestimonials;
