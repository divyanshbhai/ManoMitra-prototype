"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { JournalEntry, Mood } from '@/lib/types';
import { ArrowRight, Calendar, Flame, Lightbulb, TrendingUp, Zap } from 'lucide-react';
import { Calendar as CalendarView } from '@/components/ui/calendar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { format, isSameDay } from 'date-fns';

const mockJournalEntries: JournalEntry[] = [
    { id: '1', date: '2023-01-09T10:00:00Z', mood: 'Anxious', tags: ['Exams', 'Future'], notes: 'Felt overwhelming pressure about the upcoming final exams and placement interviews. Worried about not meeting expectations.', color: 'hsl(var(--destructive))' },
    { id: '2', date: '2023-01-10T18:30:00Z', mood: 'Stressed', tags: ['Friends', 'Conflict'], notes: 'Had a small argument with a friend. Feeling a bit down about it.', color: 'hsl(var(--primary))' },
    { id: '3', date: '2023-01-11T14:15:00Z', mood: 'Calm', tags: ['Relaxing', 'Music'], notes: 'Spent the evening listening to music. Felt much more relaxed and at peace.', color: 'hsl(var(--chart-2))' },
    { id: '4', date: '2023-01-12T09:00:00Z', mood: 'Hopeful', tags: ['Career', 'Planning'], notes: 'Attended a career counseling session and got some clarity. Feeling more hopeful.', color: 'hsl(var(--accent))' },
    { id: '5', date: '2023-01-13T12:00:00Z', mood: 'Stressed', tags: ['Workload', 'Deadlines'], notes: 'Juggling multiple assignments. Finding it hard to focus.', color: 'hsl(var(--primary))' },
    { id: '6', date: '2023-01-14T20:00:00Z', mood: 'Neutral', tags: ['Routine'], notes: 'Just a regular day. Nothing much to report.', color: 'hsl(var(--muted-foreground))' },
    { id: '7', date: '2023-01-15T11:00:00Z', mood: 'Hopeful', tags: ['Weekend', 'Break'], notes: 'Looking forward to the weekend break.', color: 'hsl(var(--accent))' },
];

const weeklyMoodData = [
  { day: 'Mon', mood: 2 }, // Anxious
  { day: 'Tue', mood: 3 }, // Stressed
  { day: 'Wed', mood: 5 }, // Calm
  { day: 'Thu', mood: 4 }, // Hopeful
  { day: 'Fri', mood: 3 }, // Stressed
  { day: 'Sat', mood: 4 }, // Neutral -> Hopeful
  { day: 'Sun', mood: 5 }, // Hopeful -> Calm
];

export default function InsightsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date('2023-01-15'));

    const getMoodForDay = (day: Date): Mood | undefined => {
        return mockJournalEntries.find(entry => isSameDay(new Date(entry.date), day)) as Mood | undefined;
    }

    const Day = ({ date }: { date: Date }) => {
        const mood = getMoodForDay(date);
        return (
            <div className="relative h-full">
                {mood && (
                    <div
                        className="absolute inset-0 rounded-md w-full h-full"
                        style={{ backgroundColor: mood.color, opacity: 0.3 }}
                    />
                )}
                 <div className="relative z-10">{format(date, "d")}</div>
            </div>
        );
    };

    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">My Insights</h1>
                <p className="text-muted-foreground">Visualize your mood trends and discover patterns in your wellness journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                        <Zap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12 Days</div>
                        <p className="text-xs text-muted-foreground">Keep it up!</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
                        <Flame className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">45 Days</div>
                         <p className="text-xs text-muted-foreground">You've done it before!</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><TrendingUp/> Weekly Mood Trend</CardTitle>
                            <CardDescription>Your mood fluctuations over the last week.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={200}>
                                <AreaChart data={weeklyMoodData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: 'hsl(var(--background))',
                                            border: '1px solid hsl(var(--border))',
                                            borderRadius: 'var(--radius)',
                                        }}
                                    />
                                    <Area type="monotone" dataKey="mood" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorMood)" />
                                    <XAxis dataKey="day" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} stroke="hsl(var(--border))" />
                                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} stroke="hsl(var(--border))" hide={true}/>
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                    <Card>
                         <CardHeader>
                            <CardTitle className="font-headline flex items-center gap-2"><Calendar/> Mood Calendar</CardTitle>
                             <CardDescription>Your logged moods for January 2023.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <CalendarView
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="p-0"
                                components={{ Day }}
                                month={new Date('2023-01-15')}
                            />
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <div className="flex items-center gap-3 text-primary">
                                <Lightbulb className="h-6 w-6"/>
                                <CardTitle className="font-headline text-2xl">New Insight Available</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                We've noticed a pattern. It seems your anxiety levels are often higher around exam periods.
                            </p>
                            <Card className="p-4 bg-muted border-l-4 border-primary">
                                <h4 className="font-semibold mb-1">What makes me Anxious</h4>
                                <p className="text-sm text-muted-foreground">"Felt overwhelming pressure about the upcoming final exams and placement interviews."</p>
                            </Card>
                            <Button className="w-full">
                                Explore Resources for Exam Stress <ArrowRight className="ml-2"/>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
