
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import { translations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';

export default function OurTeamPage() {
  const { locale } = useLanguage();
  const t = translations[locale];
  const teamMembers = t.teamPage.members;

  const staticTeamData = [
    {
        imageUrl: '/Divyansh_kumar.png',
        imageHint: 'male software engineer',
        linkedin: 'https://www.linkedin.com/in/divyansh-kumar-a4529922a/',
    },
    {
        imageUrl: '/Ayush_raj.jpeg',
        imageHint: 'male AI engineer',
        linkedin: 'https://www.linkedin.com/in/ayushr20/',
    },
    {
        imageUrl: '/vishesh_yadav.png',
        imageHint: 'Male software engineer',
        linkedin: 'https://www.linkedin.com/in/vishesh-yadav-51227a283/',
    },
    {
        imageUrl: '/Anshika Yadav.jpeg',
        imageHint: 'Female software engineer',
        linkedin: 'https://www.linkedin.com/in/anshika-yadav-6a0b03366/',
    },
    {
        imageUrl: '/Aman Pal.jpeg',
        imageHint: 'Male UX designer',
        linkedin: 'https://www.linkedin.com/in/aman-pal-b447ba242/',
    },
    {
        imageUrl: '/Divya Chauhan.jpg',
        imageHint: 'Female content Expert',
        linkedin: 'https://www.linkedin.com/in/divya-chauhan-51327a339/',
    },
];

  return (
    <div className="w-full">
      <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-24 lg:pb-32 bg-primary/5 flex justify-center">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline" dangerouslySetInnerHTML={{ __html: t.teamPage.headline.replace("ManoMitra", "<span class='text-primary'>ManoMitra</span>") }} />
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl lg:text-lg mt-4">
                {t.teamPage.subheadline}
            </p>
        </div>
      </section>

      <section id="team-members" className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="flex flex-col items-center text-center p-6 bg-card hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="relative h-40 w-40 mb-4">
                    <Image
                        src={staticTeamData[index].imageUrl}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="rounded-full object-cover"
                        data-ai-hint={staticTeamData[index].imageHint}
                    />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold font-headline">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-0 mt-4 flex-grow">
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
                <Link href={staticTeamData[index].linkedin} target="_blank" className="mt-4 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
