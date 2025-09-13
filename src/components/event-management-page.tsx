"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type Event = {
    date: Date;
    title: string;
    type: "Workshop" | "Webinar" | "Session";
};

const mockEvents: Event[] = [
    { date: new Date(2024, 6, 15), title: "Stress Management Workshop", type: "Workshop" },
    { date: new Date(2024, 6, 22), title: "Mindfulness Webinar", type: "Webinar" },
    { date: new Date(2024, 6, 22), title: "Group Therapy Session", type: "Session" },
];

export default function EventManagementPage() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    
    const Day = ({ date, ...props }: { date: Date; [key: string]: any }) => {
        const eventsForDay = mockEvents.filter(event => new Date(event.date).toDateString() === date.toDateString());
        return (
            <div className="relative h-full">
                {eventsForDay.length > 0 && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                       {eventsForDay.map((event, index) => (
                         <div key={index} className={`h-1.5 w-1.5 rounded-full ${
                            event.type === 'Workshop' ? 'bg-primary' :
                            event.type === 'Webinar' ? 'bg-accent' : 'bg-destructive'
                         }`} />
                       ))}
                    </div>
                )}
                 <div className="relative z-10">{date.getDate()}</div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle>Event Calendar</CardTitle>
                                <CardDescription>Schedule and view all upcoming events.</CardDescription>
                            </div>
                           <Dialog>
                                <DialogTrigger asChild>
                                    <Button>
                                        <PlusCircle className="mr-2" />
                                        Create New Event
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Create New Event</DialogTitle>
                                        <DialogDescription>Fill in the details to schedule a new event.</DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="title" className="text-right">Title</Label>
                                            <Input id="title" placeholder="e.g., Mindfulness Workshop" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="description" className="text-right">Description</Label>
                                            <Textarea id="description" placeholder="A short description of the event." className="col-span-3" />
                                        </div>
                                         <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="date" className="text-right">Date</Label>
                                            <Input id="date" type="date" className="col-span-3" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Schedule Event</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="p-0"
                            components={{ Day: (props) => <Day {...props} date={props.displayMonth.getMonth() === props.date.getMonth() ? props.date : new Date()} /> }}
                        />
                    </CardContent>
                </Card>
            </div>
             <div className="md:col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {mockEvents.filter(e => e.date >= new Date()).map(event => (
                            <div key={event.title} className="flex items-center gap-4">
                                <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                                    <span className="text-sm font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                                    <span className="text-lg font-bold">{new Date(event.date).getDate()}</span>
                                </div>
                                <div>
                                    <p className="font-semibold">{event.title}</p>
                                    <Badge variant={
                                        event.type === 'Workshop' ? 'default' :
                                        event.type === 'Webinar' ? 'secondary' : 'destructive'
                                    }>{event.type}</Badge>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
