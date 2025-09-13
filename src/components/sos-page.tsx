
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

export default function SosPage() {
    return (
        <div className="w-full max-w-4xl px-4 py-12">
            <Card className="border-4 border-destructive shadow-2xl">
                <CardHeader className="text-center space-y-4">
                    <LifeBuoy className="mx-auto h-16 w-16 text-destructive" />
                    <CardTitle className="text-4xl font-extrabold font-headline text-destructive">Urgent Help Needed?</CardTitle>
                    <CardDescription className="text-xl text-muted-foreground">
                        You are not alone. Please reach out. Help is available 24/7.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold font-headline mb-2">Tele MANAS Helpline</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground">
                            Tele MANAS is a free, confidential, 24/7 mental health service provided by the Government of India. You can speak with a trained counselor in your local language for support with any mental health concern.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-primary/10 rounded-lg text-center">
                            <h3 className="text-lg font-semibold text-primary">Toll-Free Number 1</h3>
                            <p className="text-4xl font-bold my-2">14416</p>
                             <Button asChild className="w-full text-lg p-6">
                                <a href="tel:14416"><Phone className="mr-2"/> Call Now</a>
                            </Button>
                        </div>
                         <div className="p-6 bg-primary/10 rounded-lg text-center">
                            <h3 className="text-lg font-semibold text-primary">Toll-Free Number 2</h3>
                            <p className="text-4xl font-bold my-2">1-800-891-4416</p>
                             <Button asChild className="w-full text-lg p-6">
                                <a href="tel:1-800-891-4416"><Phone className="mr-2"/> Call Now</a>
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                     <Button asChild variant="link">
                        <Link href="/">Return to Homepage</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
