
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend, Cell, Treemap } from 'recharts';
import { Users, AlertTriangle, MessageCircle, BarChart3, Lightbulb, Loader2, Smile, Users2, ShieldCheck, FileDown, FileText } from 'lucide-react';
import { getStudyImprovementSuggestions } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

const monthlyTrendsData = [
  { month: 'Jan', Anxiety: 30, Depression: 22, Stress: 40, Burnout: 18 },
  { month: 'Feb', Anxiety: 35, Depression: 25, Stress: 45, Burnout: 22 },
  { month: 'Mar', Anxiety: 40, Depression: 30, Stress: 50, Burnout: 28 },
  { month: 'Apr', Anxiety: 42, Depression: 35, Stress: 55, Burnout: 35 },
  { month: 'May', Anxiety: 50, Depression: 38, Stress: 60, Burnout: 42 },
  { month: 'Jun', Anxiety: 45, Depression: 32, Stress: 58, Burnout: 38 },
];

const topConcernsData = [
  { name: 'Academics/Work', size: 450 },
  { name: 'Relationships', size: 250 },
  { name: 'Career Anxiety', size: 180 },
  { name: 'Sleep Issues', size: 150 },
  { name: 'Family', size: 100 },
  { name: 'Loneliness', size: 90 },
  { name: 'Other', size: 50 },
];

const engagementData = [
  { name: 'High', value: 400, fill: 'hsl(var(--chart-2))' },
  { name: 'Medium', value: 300, fill: 'hsl(var(--chart-3))' },
  { name: 'Low', value: 300, fill: 'hsl(var(--chart-5))' },
];

const departmentInsightsData = [
    { name: 'CompSci', Stress: 65, Anxiety: 55, Burnout: 45 },
    { name: 'Mechanical', Stress: 50, Anxiety: 40, Burnout: 30 },
    { name: 'Marketing', Stress: 75, Anxiety: 60, Burnout: 65 },
    { name: 'HR', Stress: 45, Anxiety: 35, Burnout: 25 },
    { name: 'Finance', Stress: 70, Anxiety: 50, Burnout: 55 },
];


const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#FF8042', '#00C49F', '#FFBB28'];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-background p-2 shadow-sm">
          <p className="font-bold text-foreground">{`${payload[0].payload.name}`}</p>
          <p className="text-sm text-muted-foreground">
            Concern Score: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };


export default function AnalyticsDashboard() {
    const [suggestions, setSuggestions] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleGenerateSuggestions = async () => {
        setIsLoading(true);
        setSuggestions('');

        const dataSummary = `
        Key Metrics: Active Users: 1250, Crisis Alerts: 32, Counselor Sessions: 180, Recovery Rate: 65%.
        Monthly Wellness Trends: Data shows a consistent increase in Anxiety, Depression, and Stress levels over the past 6 months, peaking in May.
        Top Concerns: The primary concern among users is Academics/Work (45%), followed by Relationships (25%).
        User Engagement: 40% of users have high engagement, 30% medium, and 30% low.
        Recovery Rate: 65% of users who have completed a 4-week check-in report a positive improvement in their wellness score.
        `;
        
        const result = await getStudyImprovementSuggestions({ wellnessData: dataSummary });

        if ('error' in result && typeof result.error === 'string') {
            toast({
                variant: 'destructive',
                title: 'AI Error',
                description: result.error,
            });
        } else if ('suggestions' in result) {
            setSuggestions(result.suggestions);
        }
        setIsLoading(false);
    };

    const handleGenerateReport = () => {
        toast({
            title: 'Report Generation Initiated',
            description: 'Your compliance report is being generated and will be available for download shortly.',
        })
    }

    const handleGeneratePolicy = () => {
        toast({
            title: 'Policy Generation Initiated',
            description: "The AI is drafting your policy. It will appear in a new document once complete.",
        })
    }

  return (
    <div className="space-y-8">
        <Alert>
            <ShieldCheck className="h-4 w-4" />
            <AlertTitle>Privacy & Anonymity</AlertTitle>
            <AlertDescription>
                All data presented on this dashboard is aggregated and fully anonymized. Individual user data and journal entries are never accessible to administrators, ensuring strict privacy and compliance.
            </AlertDescription>
        </Alert>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,250</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crisis Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+10% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Counselor Sessions</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">180</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
            <Smile className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">+8% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Monthly Wellness Trends</CardTitle>
            <CardDescription>Anxiety, Depression, Stress & Burnout levels over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Anxiety" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                <Line type="monotone" dataKey="Depression" stroke="hsl(var(--chart-2))" strokeWidth={2}/>
                <Line type="monotone" dataKey="Stress" stroke="hsl(var(--destructive))" strokeWidth={2}/>
                <Line type="monotone" dataKey="Burnout" stroke="hsl(var(--chart-5))" strokeWidth={2}/>
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Top User Concerns</CardTitle>
            <CardDescription>Most frequently discussed topics by users.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <Treemap
                    data={topConcernsData}
                    dataKey="size"
                    stroke="hsl(var(--card))"
                    fill="hsl(var(--primary))"
                >
                    <Tooltip content={<CustomTooltip />} />
                </Treemap>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
       <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="font-headline">Department/Branch Wellness Insights</CardTitle>
                <CardDescription>Comparative view of wellness metrics across different departments.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={departmentInsightsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Stress" fill="hsl(var(--destructive))" />
                        <Bar dataKey="Anxiety" fill="hsl(var(--chart-1))" />
                        <Bar dataKey="Burnout" fill="hsl(var(--chart-5))" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">User Engagement Distribution</CardTitle>
            <CardDescription>Breakdown of user activity levels.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={engagementData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                    {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
       </div>

        <div className="grid gap-6 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">AI-Powered Insights & Recommendations</CardTitle>
                    <CardDescription>Generate actionable recommendations based on the latest wellness data. Ask for insights like: "Show the correlation between platform engagement and student retention," or "Estimate the ROI of our last wellness campaign."</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button onClick={handleGenerateSuggestions} disabled={isLoading}>
                        {isLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Lightbulb className="mr-2 h-4 w-4" />
                        )}
                        Generate Suggestions
                    </Button>
                    {suggestions && (
                        <Alert>
                            <BarChart3 className="h-4 w-4" />
                            <AlertTitle className="font-headline">Suggestions for Improvement</AlertTitle>
                            <AlertDescription className="whitespace-pre-wrap">
                                {suggestions}
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>

            <Card>
                 <CardHeader>
                    <CardTitle className="font-headline">AI Policy Generator</CardTitle>
                    <CardDescription>Use AI to draft mental health and wellness policies for your organization based on data-driven insights.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <FileText className="mr-2 h-4 w-4" />
                                Draft Mental Health Policy
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>AI Policy Generator</DialogTitle>
                                <DialogDescription>
                                    Provide some context for the AI to generate a relevant policy draft.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="policy-audience">Target Audience</Label>
                                    <Input id="policy-audience" placeholder="e.g., All Undergraduate Students, Engineering Department" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="policy-concerns">Key Concerns to Address</Label>
                                    <Textarea id="policy-concerns" placeholder="e.g., High stress levels during mid-terms, burnout in final year projects, new student integration." />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={handleGeneratePolicy}>Generate Draft</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
       </div>

        <div className="grid gap-6 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Compliance & Reporting</CardTitle>
                    <CardDescription>Generate HIPAA/GDPR/NIMHANS-ready reports for audits and maintain compliance with data privacy regulations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button onClick={handleGenerateReport}>
                        <FileDown className="mr-2 h-4 w-4" />
                        Generate Compliance Report
                    </Button>
                </CardContent>
            </Card>
       </div>
    </div>
  );
}
