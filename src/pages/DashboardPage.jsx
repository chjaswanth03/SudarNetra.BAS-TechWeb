
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Shield, AlertTriangle, Activity, Lock } from 'lucide-react';

const DashboardPage = () => {
  // This is a placeholder. We'll implement actual authentication check later with Supabase
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-24 px-4">
        <Card className="max-w-md w-full premium-glass-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Lock className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-2xl mb-2">Client Portal Access</CardTitle>
            <p className="text-muted-foreground">
              Please log in to access your security dashboard and analytics.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full button-shine" size="lg">
              Sign In
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Don't have an account? Contact our sales team to get started.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-4"
    >
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Security Dashboard</h1>
          <p className="text-muted-foreground">Monitor your security metrics and analytics</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="threats">Threat Analysis</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="premium-glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Security Score</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">85%</div>
                  <p className="text-sm text-muted-foreground">+5% from last week</p>
                </CardContent>
              </Card>

              <Card className="premium-glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    <span>Active Threats</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-sm text-muted-foreground">2 high priority</p>
                </CardContent>
              </Card>

              <Card className="premium-glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-primary" />
                    <span>System Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">Healthy</div>
                  <p className="text-sm text-muted-foreground">All systems operational</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="threats">
            <Card className="premium-glass-card">
              <CardHeader>
                <CardTitle>Recent Threat Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect to Supabase to view real-time threat data
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="premium-glass-card">
              <CardHeader>
                <CardTitle>Security Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect to Supabase to access your security reports
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default DashboardPage;
