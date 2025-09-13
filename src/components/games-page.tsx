"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Droplets, Puzzle, Play } from 'lucide-react';
import Link from 'next/link';

const games = [
    {
        id: '1',
        title: 'Mindful Coloring',
        description: 'Unwind and express your creativity with digital coloring pages designed to promote relaxation.',
        icon: <Droplets className="h-8 w-8 text-primary" />,
    },
    {
        id: '2',
        title: 'Focus Puzzles',
        description: 'Engage your mind with a collection of puzzles that challenge your focus and problem-solving skills in a calm setting.',
        icon: <Puzzle className="h-8 w-8 text-primary" />,
    },
    {
        id: '3',
        title: 'Calm Connect',
        description: 'A soothing pattern-matching game that helps quiet your thoughts and improve concentration.',
        icon: <Brain className="h-8 w-8 text-primary" />,
    },
];

export default function GamesPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Games for Relaxation</h1>
                <p className="text-muted-foreground">Take a break and unwind with these calming mini-games.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                    <Card key={game.id} className="flex flex-col group hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-start gap-4 space-y-0 p-6">
                             <div className="p-3 bg-primary/10 rounded-lg">
                                {game.icon}
                            </div>
                            <div className="grid gap-1">
                                <CardTitle className="font-headline text-xl">{game.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow px-6">
                            <CardDescription>{game.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Button asChild className="w-full">
                                <Link href="#">
                                    <Play className="mr-2" /> Play Now
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
