"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, BookHeart, CalendarCheck, Users, Star, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import WellnessQuoteCard from '@/components/wellness-quote-card';
import { Progress } from '@/components/ui/progress';

const features = [
  {
    title: 'AI Wellness Chat',
    description: 'Talk to ManoMitra, your AI companion, anytime.',
    href: '/dashboard/student/chat',
    icon: <Bot className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Resource Hub',
    description: 'Explore articles, videos, and meditations.',
    href: '/dashboard/student/resources',
    icon: <BookHeart className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Find a Counselor',
    description: 'Book a confidential appointment with a professional.',
    href: '/dashboard/student/counselors',
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Peer Forum',
    description: 'Connect with others in our safe community.',
    href: '/dashboard/student/forum',
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

export default function StudentDashboardContent() {
  return (
    <div className="space-y-6">
      <Card className="bg-destructive/10 border-destructive/20 text-destructive-foreground">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <div>
              <CardTitle className="font-headline text-destructive">Need Urgent Help?</CardTitle>
              <CardDescription className="text-destructive/80">If you are in a crisis, please reach out now.</CardDescription>
            </div>
          </div>
          <Button asChild variant="destructive">
            <Link href="/sos">Contact Helplines</Link>
          </Button>
        </CardHeader>
      </Card>
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome back, Student!</h1>
        <p className="text-muted-foreground">We're here to support you on your wellness journey.</p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 flex flex-col justify-between p-6 bg-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
           <div className="flex flex-col md:flex-row items-center gap-6">
             <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
              <Image
                src="/Person practicing yoga for wellness.png"
                alt="Person practicing yoga for wellness"
                fill
                className="rounded-full object-cover shadow-lg"
                data-ai-hint="yoga wellness"
              />
             </div>
              <div className="text-center md:text-left">
                <CardTitle className="font-headline text-2xl mb-2">Your Weekly Wellness Tip</CardTitle>
                <CardDescription className="text-base mb-4">
                  Practice the 4-7-8 breathing technique to calm your mind. Inhale for 4 seconds, hold for 7, and exhale for 8. Repeat a few times for instant calm.
                </CardDescription>
                 <Button asChild>
                    <Link href="/dashboard/student/resources">Discover More Techniques</Link>
                </Button>
              </div>
           </div>
        </Card>

        <WellnessQuoteCard />

      </div>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Star className="text-yellow-400 fill-yellow-400" /> Avatar Progression</CardTitle>
                <CardDescription>Your wellness level grows as you build healthy habits. Keep it up!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-primary">Level 5: Mindful Master</span>
                    <span className="text-sm text-muted-foreground">500/800 XP</span>
                </div>
                <Progress value={62.5} />
                 <Button variant="outline">View Badges & Streaks</Button>
            </CardContent>
        </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.href} className="flex flex-col justify-between hover:shadow-lg transition-shadow overflow-hidden group">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-4 bg-card">
              <div className="p-2 bg-primary/10 rounded-lg">
                {feature.icon}
              </div>
              <div className="grid gap-1">
                <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="p-4 bg-muted/50 group-hover:bg-muted transition-colors">
                  <Button asChild variant="link" className="p-0 h-auto text-sm">
                    <Link href={feature.href}>
                      Go to {feature.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
