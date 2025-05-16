
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const RealTimeAttackGraph = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
          datasets: [{
            label: 'Detected Anomalies',
            data: [5, 8, 6, 12, 10, 15, 13],
            borderColor: 'hsl(var(--primary))',
            backgroundColor: 'hsla(var(--primary), 0.2)',
            tension: 0.4,
            fill: true,
          },
          {
            label: 'Blocked Threats',
            data: [2, 3, 3, 7, 6, 9, 8],
            borderColor: 'hsl(var(--accent))',
            backgroundColor: 'hsla(var(--accent), 0.2)',
            tension: 0.4,
            fill: true,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: { color: 'hsl(var(--border)/0.5)' },
              ticks: { color: 'hsl(var(--muted-foreground))' }
            },
            x: {
              grid: { color: 'hsl(var(--border)/0.5)' },
              ticks: { color: 'hsl(var(--muted-foreground))' }
            }
          },
          plugins: {
            legend: { labels: { color: 'hsl(var(--foreground))' } }
          }
        }
      });
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <Card className="premium-glass-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart className="w-6 h-6 mr-2 text-primary" />
          Real-Time Attack & Anomaly Graph
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <canvas ref={chartRef}></canvas>
      </CardContent>
    </Card>
  );
};

export default RealTimeAttackGraph;
