"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Clock, ListChecks } from 'lucide-react';
import { Assessment } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

const mockAssessments: Assessment[] = [
    {
        id: '1',
        title: 'Stress & Anxiety Check-in',
        description: 'A quick check-in based on the GAD-7 scale to help you understand your current anxiety levels.',
        tags: ['Anxiety', 'Stress', 'Quick'],
        duration: 5,
        imageUrl: '/Stress & Anxiety Check-in.png',
        imageHint: 'calm lotus flower',
    },
    {
        id: '2',
        title: 'Depression Screener (PHQ-9)',
        description: 'A standard assessment to screen for symptoms of depression and understand their severity.',
        tags: ['Depression', 'Mood', 'Clinical'],
        duration: 10,
        imageUrl: '/Depression Screener (PHQ-9).png',
        imageHint: 'gentle rain window',
    },
    {
        id: '3',
        title: 'Work-Life Balance Quiz',
        description: 'Evaluate how well you are balancing your professional and personal life.',
        tags: ['Work', 'Lifestyle', 'Self-reflection'],
        duration: 8,
        imageUrl: '/Work-Life Balance Quiz.png',
        imageHint: 'balanced stones beach',
    },
];

export default function AssessmentsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Mental Wellness Assessments</h1>
                <p className="text-muted-foreground">Screen for common mental health conditions and personalize your journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockAssessments.map((assessment) => (
                    <Card key={assessment.id} className="flex flex-col group overflow-hidden hover:shadow-lg transition-shadow">
                         <div className="relative h-48 w-full">
                            <Image 
                                src={assessment.imageUrl} 
                                alt={assessment.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={assessment.imageHint}
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{assessment.title}</CardTitle>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {assessment.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{assessment.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{assessment.duration} min</span>
                            </div>
                            <Button asChild>
                                <Link href="#">
                                    Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
