"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Pill, Bell, CheckCircle, Trash2 } from 'lucide-react';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';

type Reminder = {
    id: number;
    medication: string;
    dosage: string;
    time: string;
    active: boolean;
    takenToday: boolean;
};

const mockReminders: Reminder[] = [
    { id: 1, medication: 'Sertraline', dosage: '50mg', time: '09:00 AM', active: true, takenToday: true },
    { id: 2, medication: 'Bupropion', dosage: '150mg', time: '09:00 AM', active: true, takenToday: false },
    { id: 3, medication: 'Melatonin', dosage: '5mg', time: '10:00 PM', active: false, takenToday: false },
];

export default function MedicationRemindersPage() {
    const [reminders, setReminders] = useState(mockReminders);

    const toggleTaken = (id: number) => {
        setReminders(reminders.map(r => r.id === id ? { ...r, takenToday: !r.takenToday } : r));
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight font-headline">Medication Reminders</h1>
                    <p className="text-muted-foreground">Manage your medication schedule and track your adherence.</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2" />
                            Add New Reminder
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                         <DialogHeader>
                            <DialogTitle>Add New Reminder</DialogTitle>
                            <DialogDescription>Fill in the details to schedule a new medication reminder.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="medication" className="text-right">Medication</Label>
                                <Input id="medication" placeholder="e.g., Sertraline" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="dosage" className="text-right">Dosage</Label>
                                <Input id="dosage" placeholder="e.g., 50mg" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="time" className="text-right">Time</Label>
                                <Input id="time" type="time" className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save Reminder</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reminders.map(reminder => (
                    <Card key={reminder.id} className={`flex flex-col ${reminder.active ? '' : 'opacity-60'}`}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div>
                                    <CardTitle className="font-headline text-xl flex items-center gap-2">
                                        <Pill /> {reminder.medication}
                                    </CardTitle>
                                    <CardDescription>{reminder.dosage}</CardDescription>
                                </div>
                                <Switch checked={reminder.active} onCheckedChange={() => setReminders(reminders.map(r => r.id === reminder.id ? { ...r, active: !r.active } : r))} />
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                           <div className="flex items-center gap-2 p-3 rounded-md bg-muted">
                                <Bell className="text-muted-foreground"/>
                                <span className="text-lg font-semibold">{reminder.time}</span>
                           </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button className="w-full" onClick={() => toggleTaken(reminder.id)} disabled={!reminder.active} variant={reminder.takenToday ? 'secondary' : 'default'}>
                                {reminder.takenToday ? (
                                    <>
                                        <CheckCircle className="mr-2" />
                                        Mark as Not Taken
                                    </>
                                ) : 'Mark as Taken'}
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Trash2 className="h-5 w-5 text-destructive" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                 {reminders.length === 0 && (
                    <Card className="md:col-span-3 text-center p-12">
                        <CardContent>
                            <Pill className="mx-auto h-12 w-12 text-muted-foreground"/>
                            <h2 className="mt-4 text-xl font-semibold">No Reminders Yet</h2>
                            <p className="mt-2 text-muted-foreground">Click "Add New Reminder" to get started.</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
