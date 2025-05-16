
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, ShieldAlert, FastForward as ClockFastForward, Users } from 'lucide-react';

const metricsData = [
  {
    label: "Average Threat Detection Speed Increase",
    value: 85,
    icon: <ClockFastForward className="w-8 h-8 text-primary" />,
    description: "Faster identification of malicious activities using our AI."
  },
  {
    label: "Reduction in Security Incidents for Clients",
    value: 70,
    icon: <ShieldAlert className="w-8 h-8 text-secondary" />,
    description: "Significant decrease in successful breaches and attacks."
  },
  {
    label: "Client Satisfaction Rate with SudarNetra",
    value: 96,
    icon: <Users className="w-8 h-8 text-accent" />,
    description: "High satisfaction reported from our valued partners."
  },
  {
    label: "Zero-Day Attack Prevention Success Rate",
    value: 99,
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    description: "Effectiveness in neutralizing previously unknown threats."
  }
];

const PerformanceMetricsVis = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {metricsData.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card className="premium-glass-card h-full">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              {metric.icon}
              <CardTitle className="text-lg">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-2">{metric.value}%</div>
              <Progress value={metric.value} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PerformanceMetricsVis;
