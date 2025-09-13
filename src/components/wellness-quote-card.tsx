import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function WellnessQuoteCard() {
    return (
        <Card className="relative flex flex-col justify-end text-white overflow-hidden group hover:shadow-xl transition-shadow">
            <Image
                src="https://picsum.photos/400/500"
                alt="Calm scenery representing wellness"
                data-ai-hint="calm scenery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <CardContent className="relative z-10 p-6">
                <blockquote className="text-xl font-semibold font-headline">
                    “The goal is not to be perfect by the end, the goal is to be better today.”
                </blockquote>
                <p className="text-sm text-white/80 mt-2">- Simon Sinek (Adapted)</p>
            </CardContent>
        </Card>
    );
}
