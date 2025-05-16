
import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe as GlobeIcon } from 'lucide-react';

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

const ThreatMap = () => {
  const [globeData, setGlobeData] = useState({ points: [] });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeData({
        points: generateRandomThreats()
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="premium-glass-card h-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <GlobeIcon className="w-6 h-6 text-primary" />
          <span>Global Threat Visualization</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[500px]">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          pointsData={globeData.points}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointRadius="size"
          pointLabel="label"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#3a228a"
          pointAltitude={0.1}
        />
      </CardContent>
    </Card>
  );
};

export default ThreatMap;
