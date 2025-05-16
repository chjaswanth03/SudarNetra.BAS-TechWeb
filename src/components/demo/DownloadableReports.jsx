
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';

const reports = [
  {
    title: "Threat Intelligence Report",
    description: "Comprehensive analysis of current cyber threats and mitigation strategies",
    type: "PDF",
    size: "2.4 MB"
  },
  {
    title: "Security Best Practices",
    description: "Detailed guide for implementing robust security measures",
    type: "PDF",
    size: "1.8 MB"
  },
  {
    title: "Compliance Framework",
    description: "Overview of regulatory requirements and compliance guidelines",
    type: "PDF",
    size: "3.1 MB"
  }
];

const DownloadableReports = () => {
  const handleDownload = (reportTitle) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading ${reportTitle}`);
  };

  return (
    <Card className="premium-glass-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-6 h-6 text-primary" />
          <span>Security Reports & Resources</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{report.type}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-1"
                        onClick={() => handleDownload(report.title)}
                      >
                        <Eye className="w-4 h-4" />
                        <span>Preview</span>
                      </Button>
                      <Button
                        size="sm"
                        className="flex items-center space-x-1"
                        onClick={() => handleDownload(report.title)}
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadableReports;
