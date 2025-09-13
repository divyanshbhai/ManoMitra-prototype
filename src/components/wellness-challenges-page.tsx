"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Wind, Zap } from 'lucide-react';
import Image from 'next/image';

const challenges = [
    {
        id: '1',
        title: '7 Days of Calm',
        description: 'Commit to a short, guided meditation every day for one week to cultivate a sense of peace.',
        icon: <Wind className="h-8 w-8 text-primary" />,
        tags: ['Mindfulness', 'Beginner'],
        status: 'joined',
        imageUrl: '/7 Days of Calm.png',
        imageHint: 'calm serene lake',
    },
    {
        id: '2',
        title: 'Digital Detox Weekend',
        description: 'Disconnect from screens for 48 hours to recharge your mind and connect with the world around you.',
        icon: <Shield className="h-8 w-8 text-primary" />,
        tags: ['Digital Well-being', 'Intermediate'],
        status: 'new',
        imageUrl: '/Digital Detox Weekend.png',
        imageHint: 'person reading book nature',
    },
    {
        id: '3',
        title: 'Gratitude Journaling Streak',
        description: 'Write down three things you\'re grateful for each day for two weeks to shift your perspective.',
        icon: <Zap className="h-8 w-8 text-primary" />,
        tags: ['Positive Psychology', 'All Levels'],
        status: 'new',
        imageUrl: '/Gratitude Journaling Streak.png',
        imageHint: 'journal pen sunset',
    },
];

export default function WellnessChallengesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Wellness Challenges</h1>
                <p className="text-muted-foreground">Join community challenges to build healthy habits and improve your well-being together.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((challenge) => (
                    <Card key={challenge.id} className="flex flex-col group overflow-hidden hover:shadow-lg transition-shadow">
                         <div className="relative h-48 w-full">
                            <Image 
                                src={challenge.imageUrl} 
                                alt={challenge.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={challenge.imageHint}
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{challenge.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {challenge.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{challenge.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            {challenge.status === 'joined' ? (
                                <Button className="w-full" disabled>
                                    <CheckCircle className="mr-2" /> Joined
                                </Button>
                            ) : (
                                <Button className="w-full">
                                    Join Challenge
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
