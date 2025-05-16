
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity, PlayCircle, AlertTriangle } from 'lucide-react';

const generateRandomThreats = () => {
  const threats = [];
  for (let i = 0; i < 50; i++) {
    threats.push({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() * 20 + 5,
      color: ['#ff4444', '#ffaa00', '#00aaff'][Math.floor(Math.random() * 3)],
      label: `Threat-${i + 1}`,
    });
  }
  return threats;
};

const LiveAnalysisDemo = () => {
  const [analysisStatus, setAnalysisStatus] = useState('idle');
  const [threats, setThreats] = useState([]);
  const [progress, setProgress] = useState(0);

  const startAnalysis = () => {
    setAnalysisStatus('analyzing');
    setProgress(0);
    setThreats([]);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalysisStatus('complete');
          setThreats(generateRandomThreats().slice(0, 5));
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <Card className="premium-glass-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-6 h-6 text-primary" />
          <span>Live AI Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="relative h-4 bg-background rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="space-y-4">
            {analysisStatus === 'complete' && threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-card/50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <span>Potential threat detected at {threat.lat.toFixed(2)}°, {threat.lng.toFixed(2)}°</span>
                </div>
                <span className="text-sm text-muted-foreground">Risk: High</span>
              </motion.div>
            ))}
          </div>

          <Button 
            onClick={startAnalysis} 
            disabled={analysisStatus === 'analyzing'}
            className="w-full button-shine"
          >
            {analysisStatus === 'analyzing' ? (
              <span className="flex items-center">
                <Activity className="w-4 h-4 mr-2 animate-pulse" />
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center">
                <PlayCircle className="w-4 h-4 mr-2" />
                Start Analysis
              </span>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveAnalysisDemo;
