
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Activity, AlertTriangle, CheckCircle, Brain, Database, Lock } from 'lucide-react';

const scenarios = {
  ddos: {
    name: 'AI-Powered DDoS Defense',
    description: 'Experience our neural network-based DDoS detection and mitigation system.',
  },
  injection: {
    name: 'Advanced SQL Protection',
    description: 'See our ML-driven SQL injection prevention with real-time pattern analysis.',
  },
  ransomware: {
    name: 'Blockchain Backup Shield',
    description: 'Witness our distributed ledger-based backup and recovery system.',
  },
  zeroday: {
    name: 'Zero-Day Threat Detection',
    description: 'Our AI identifies unknown threats using behavioral analysis.',
  },
  bigdata: {
    name: 'Big Data Analysis',
    description: 'Watch our Hadoop cluster process security events in real-time.',
  }
};

const scenarioLogs = {
  ddos: [
    { type: 'info', message: 'Initializing neural network analysis...' },
    { type: 'info', message: 'Loading pre-trained DDoS detection models...' },
    { type: 'warning', message: 'Detected unusual traffic pattern from 247 unique IPs' },
    { type: 'info', message: 'AI analyzing traffic distribution patterns...' },
    { type: 'success', message: 'Neural network identified botnet signature' },
    { type: 'info', message: 'Deploying adaptive rate limiting...' },
    { type: 'success', message: 'Traffic normalized using ML-based filtering' },
    { type: 'info', message: 'Updating threat intelligence database...' }
  ],
  injection: [
    { type: 'info', message: 'Loading SQL syntax analysis model...' },
    { type: 'info', message: 'Initializing deep learning parser...' },
    { type: 'warning', message: 'Detected potential SQL injection pattern' },
    { type: 'info', message: 'Running semantic analysis on input...' },
    { type: 'success', message: 'Malicious pattern identified and sanitized' },
    { type: 'info', message: 'Updating attack signature database...' },
    { type: 'success', message: 'Query secured using AI validation' }
  ],
  ransomware: [
    { type: 'info', message: 'Initializing blockchain backup verification...' },
    { type: 'info', message: 'Loading file system monitoring AI...' },
    { type: 'warning', message: 'Detected suspicious encryption activity' },
    { type: 'info', message: 'Analyzing file system behavior patterns...' },
    { type: 'success', message: 'Triggered immutable blockchain backup' },
    { type: 'info', message: 'Isolating affected system segments...' },
    { type: 'success', message: 'Recovery points secured in distributed ledger' }
  ],
  zeroday: [
    { type: 'info', message: 'Loading behavioral analysis engine...' },
    { type: 'info', message: 'Initializing anomaly detection AI...' },
    { type: 'warning', message: 'Unknown pattern detected in system calls' },
    { type: 'info', message: 'Running deep learning classification...' },
    { type: 'success', message: 'New threat pattern identified' },
    { type: 'info', message: 'Creating threat signature...' },
    { type: 'success', message: 'Protection deployed across network' }
  ],
  bigdata: [
    { type: 'info', message: 'Starting Hadoop cluster analysis...' },
    { type: 'info', message: 'Loading security event streams...' },
    { type: 'warning', message: 'Processing 1M+ security events' },
    { type: 'info', message: 'Running MapReduce analysis...' },
    { type: 'success', message: 'Patterns identified in distributed data' },
    { type: 'info', message: 'Updating threat correlation matrix...' },
    { type: 'success', message: 'Real-time insights generated' }
  ]
};

const LogEntry = ({ log }) => {
  if (!log || typeof log !== 'object' || !log.type || !log.message) {
    return null;
  }

  const getLogStyle = (type) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'success':
        return 'bg-green-500/10 text-green-500';
      case 'info':
      default:
        return 'bg-blue-500/10 text-blue-500';
    }
  };

  const getLogIcon = (type) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      case 'info':
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center space-x-2 p-2 rounded-md ${getLogStyle(log.type)}`}
    >
      {getLogIcon(log.type)}
      <span className="text-sm">{log.message}</span>
    </motion.div>
  );
};

const getScenarioIcon = (key) => {
  switch (key) {
    case 'ddos':
      return <Brain className="w-5 h-5" />;
    case 'injection':
      return <Lock className="w-5 h-5" />;
    case 'bigdata':
      return <Database className="w-5 h-5" />;
    default:
      return <Shield className="w-5 h-5" />;
  }
};

const SecuritySandbox = () => {
  const [activeScenario, setActiveScenario] = useState('ddos');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const startScenario = () => {
    if (isRunning) return;

    setIsRunning(true);
    setLogs([]);

    let currentLog = 0;
    const currentScenarioLogs = scenarioLogs[activeScenario] || [];

    const interval = setInterval(() => {
      if (currentLog < currentScenarioLogs.length) {
        setLogs(prev => [...prev, currentScenarioLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setIntervalId(null);
      }
    }, 1000);

    setIntervalId(interval);
  };

  return (
    <Card className="premium-glass-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-primary" />
          <span>AI Security Sandbox</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(scenarios).map(([key, scenario]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-300 ${
                  activeScenario === key ? 'border-primary shadow-lg shadow-primary/20' : 'hover:border-primary/50'
                }`}
                onClick={() => !isRunning && setActiveScenario(key)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    {getScenarioIcon(key)}
                    <h4 className="font-semibold">{scenario.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{scenario.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            onClick={startScenario} 
            disabled={isRunning}
            className="w-full button-shine"
          >
            {isRunning ? 'AI Analysis in Progress...' : 'Start AI Simulation'}
          </Button>

          <div className="space-y-2 max-h-60 overflow-y-auto">
            {Array.isArray(logs) && logs.map((log, index) => (
              <LogEntry key={index} log={log} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecuritySandbox;
