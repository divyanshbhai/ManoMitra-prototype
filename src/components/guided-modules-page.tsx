"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Waves, Zap } from 'lucide-react';
import Link from 'next/link';

const modules = [
    {
        id: '1',
        title: 'Foundations of Mindful Thinking',
        description: 'Learn to observe your thoughts without judgment and reduce the power of negative thinking patterns.',
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        tags: ['CBT', 'Mindfulness', 'Beginner'],
    },
    {
        id: '2',
        title: 'Managing Exam & Deadline Stress',
        description: 'Develop practical strategies to cope with academic or work-related pressure and perform your best.',
        icon: <Zap className="h-8 w-8 text-primary" />,
        tags: ['Stress Management', 'Productivity'],
    },
    {
        id: '3',
        title: 'Building Emotional Resilience',
        description: 'Cultivate the skills to navigate emotional challenges and bounce back from setbacks.',
        icon: <Waves className="h-8 w-8 text-primary" />,
        tags: ['DBT', 'Emotional Regulation'],
    },
];

export default function GuidedModulesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Guided Modules</h1>
                <p className="text-muted-foreground">Interactive, self-paced exercises based on proven therapeutic techniques.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                    <Card key={module.id} className="flex flex-col group hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
                             <div className="p-3 bg-primary/10 rounded-lg">
                                {module.icon}
                            </div>
                            <div className="grid gap-1">
                                <CardTitle className="font-headline text-xl">{module.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow px-6">
                            <CardDescription>{module.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild className="w-full">
                                <Link href="#">
                                    Begin Module <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
