import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Counselor } from '@/lib/types';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockCounselors: Counselor[] = [
  { id: 1, name: 'Dr. Anjali Sharma', specialties: ['Stress & Anxiety', 'Depression'], languages: ['English', 'Hindi'], imageUrl: 'https://picsum.photos/200/201', imageHint: 'Indian female counselor' },
  { id: 2, name: 'Mr. Rohan Desai', specialties: ['Work-Life Balance', 'Relationships'], languages: ['English', 'Gujarati'], imageUrl: 'https://picsum.photos/200/202', imageHint: 'Indian male counselor' },
  { id: 3, name: 'Dr. Priya Krishnan', specialties: ['Career Counseling', 'Self-esteem'], languages: ['English', 'Tamil', 'Malayalam'], imageUrl: 'https://picsum.photos/200/203', imageHint: 'Indian woman professional' },
  { id: 4, name: 'Mrs. Sunita Banerjee', specialties: ['Family Issues', 'Burnout'], languages: ['English', 'Bengali'], imageUrl: 'https://picsum.photos/200/204', imageHint: 'Indian professional woman' },
];

export default function CounselorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Find a Counselor</h1>
        <p className="text-muted-foreground">Connect with professional counselors through your institution or organization for confidential support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCounselors.map(counselor => (
          <Card key={counselor.id} className="flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow">
            <Avatar className="h-24 w-24 mb-4 border-4 border-primary/50">
              <AvatarImage src={counselor.imageUrl} alt={counselor.name} data-ai-hint={counselor.imageHint} />
              <AvatarFallback>{counselor.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardHeader className="p-0 text-center">
              <CardTitle className="font-headline text-xl">{counselor.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-muted-foreground text-sm mb-2">Specialties</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {counselor.specialties.map(spec => <Badge key={spec} variant="secondary">{spec}</Badge>)}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-muted-foreground text-sm mb-2">Languages</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {counselor.languages.map(lang => <Badge key={lang} variant="outline">{lang}</Badge>)}
                </div>
              </div>
            </CardContent>
            <Button className="mt-4 w-full">Book Appointment</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
