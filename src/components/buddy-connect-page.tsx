"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserPlus, MessageSquare } from 'lucide-react';

const mockBuddies = [
    {
        id: 1,
        name: 'AnonymousPanther',
        avatarUrl: 'https://picsum.photos/100/106',
        avatarHint: 'panther illustration',
        sharedInterests: ['Final Year Project', 'Placement Stress'],
        bio: '"Juggling final year project and job hunting. Looking for someone to share strategies and keep each other motivated!"',
    },
    {
        id: 2,
        name: 'CreativeSparrow',
        avatarUrl: 'https://picsum.photos/100/107',
        avatarHint: 'sparrow drawing',
        sharedInterests: ['Work-Life Balance', 'Creative Burnout'],
        bio: '"Work in a creative field and struggling to switch off. Would love to connect with someone in a similar boat."',
    },
    {
        id: 3,
        name: 'QuietExplorer',
        avatarUrl: 'https://picsum.photos/100/108',
        avatarHint: 'mountain landscape',
        sharedInterests: ['Social Anxiety', 'New City'],
        bio: '"New to the city and finding it hard to make friends. Looking for a buddy to explore new places with and practice social skills."',
    },
];

export default function BuddyConnectPage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight font-headline">Buddy Connect</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Connect with a peer who understands what you're going through. Our AI matches you with a buddy based on shared experiences and challenges for mutual support.</p>
                 <Button size="lg" className="mt-6">
                    <UserPlus className="mr-2" /> Find a Buddy Now
                 </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockBuddies.map(buddy => (
                    <Card key={buddy.id} className="flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow">
                        <Avatar className="h-24 w-24 mb-4 border-4 border-primary/50">
                            <AvatarImage src={buddy.avatarUrl} alt={buddy.name} data-ai-hint={buddy.avatarHint} />
                            <AvatarFallback>{buddy.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <CardHeader className="p-0 text-center">
                            <CardTitle className="font-headline text-xl">{buddy.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4 mt-4">
                            <CardDescription className="italic">{buddy.bio}</CardDescription>
                            <div>
                                <h3 className="font-semibold text-muted-foreground text-sm mb-2">Shared Interests</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {buddy.sharedInterests.map(interest => <Badge key={interest} variant="secondary">{interest}</Badge>)}
                                </div>
                            </div>
                        </CardContent>
                        <Button className="mt-4 w-full">
                           <MessageSquare className="mr-2" /> Connect
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}
