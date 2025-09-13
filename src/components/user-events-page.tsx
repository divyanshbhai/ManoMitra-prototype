"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Video, Users, CheckCircle } from "lucide-react";
import { useState } from "react";

type Event = {
    date: Date;
    title: string;
    description: string;
    type: "Workshop" | "Webinar" | "Session";
    registered?: boolean;
};

const mockEvents: Event[] = [
    { date: new Date(2024, 6, 15), title: "Stress Management Workshop", description: "Learn practical techniques to manage stress effectively during this interactive workshop.", type: "Workshop", registered: true },
    { date: new Date(2024, 6, 22), title: "Mindfulness for Beginners Webinar", description: "An introduction to mindfulness practices that can help you stay calm and focused.", type: "Webinar" },
    { date: new Date(2024, 6, 22), title: "Group Therapy Session: Exam Anxiety", description: "A safe space to discuss and learn coping strategies for exam-related anxiety with a professional counselor.", type: "Session" },
    { date: new Date(2024, 7, 5), title: "Building Resilience Webinar", description: "Discover how to build mental and emotional resilience to navigate life's challenges.", type: "Webinar" },
];

export default function UserEventsPage() {
    const [events, setEvents] = useState(mockEvents);

    const handleRegister = (title: string) => {
        setEvents(events.map(event => event.title === title ? { ...event, registered: true } : event));
    }
    
    const EventIcon = ({ type }: { type: Event['type'] }) => {
        switch (type) {
          case 'Workshop': return <Users className="h-5 w-5 text-muted-foreground" />;
          case 'Webinar': return <Video className="h-5 w-5 text-muted-foreground" />;
          case 'Session': return <Users className="h-5 w-5 text-muted-foreground" />;
          default: return null;
        }
      };

    return (
         <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Events & Workshops</h1>
                <p className="text-muted-foreground">Join live sessions on various mental wellness topics.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card key={event.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline">{event.title}</CardTitle>
                             <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                                <div className="flex items-center gap-1.5"><EventIcon type={event.type} /> {event.type}</div>
                                <div className="flex items-center gap-1.5"><Calendar className="h-5 w-5 text-muted-foreground" /> {event.date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{event.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            {event.registered ? (
                                <Button className="w-full" disabled>
                                    <CheckCircle className="mr-2" /> Registered
                                </Button>
                            ) : (
                                <Button className="w-full" onClick={() => handleRegister(event.title)}>
                                    Register Now
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
