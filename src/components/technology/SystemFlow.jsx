
import React, { useState } from 'react';
import SystemFlowDiagram from '@/components/technology/SystemFlowDiagram';
import SystemFlowModal from '@/components/technology/SystemFlowModal';
import { Database, Cpu, ShieldCheck, Zap, Cog } from 'lucide-react';

const systemFlowStepsData = [
  { name: "Secure Log Ingestion", icon: <Database className="w-12 h-12 text-primary" />, description: "Collecting and encrypting log data from diverse sources using secure, high-throughput pipelines." },
  { name: "Hadoop Distributed Processing", icon: <Cog className="w-12 h-12 text-secondary" />, description: "Leveraging Hadoop's power to process and normalize terabytes of data for efficient analysis." },
  { name: "Multimodal AI Detection", icon: <Cpu className="w-12 h-12 text-accent" />, description: "Employing a suite of AI models (NLP, anomaly detection, pattern recognition) to identify known and unknown threats." },
  { name: "Blockchain-Verified Alerts", icon: <ShieldCheck className="w-12 h-12 text-primary" />, description: "Generating tamper-proof alerts recorded on a blockchain, ensuring auditability and integrity of findings." },
  { name: "Streamlit Insight Engine", icon: <Zap className="w-12 h-12 text-secondary" />, description: "Presenting actionable intelligence through intuitive, real-time dashboards for immediate response." },
];

const SystemFlow = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <>
      <SystemFlowDiagram steps={systemFlowStepsData} onStepClick={setSelectedStep} />
      <SystemFlowModal selectedStep={selectedStep} onClose={() => setSelectedStep(null)} />
    </>
  );
};

export default SystemFlow;
