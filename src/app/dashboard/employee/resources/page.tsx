"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Resource } from '@/lib/types';
import Image from 'next/image';
import { BookText, Video, Mic2, Search, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const mockResources: Resource[] = [
  { id: 1, title: 'Managing Workplace Stress', type: 'Article', language: 'English', description: 'Strategies to identify and manage stress in a professional environment.', imageUrl: 'https://picsum.photos/400/250', imageHint: "calm office plant", link: '#' },
  { id: 2, title: 'Guided Breathing for Focus', type: 'Meditation', language: 'Hindi', description: 'A short, guided breathing exercise to recenter yourself during a busy workday.', imageUrl: 'https://picsum.photos/400/251', imageHint: "person breathing desk", link: '#' },
  { id: 3, title: 'Preventing Burnout', type: 'Video', language: 'English', description: 'Learn to recognize the signs of burnout and take proactive steps to prevent it.', imageUrl: 'https://picsum.photos/400/252', imageHint: "tired employee desk", link: '#' },
  { id: 4, title: 'Effective Time Management', type: 'Article', language: 'English', description: 'Techniques to organize your tasks, prioritize effectively, and reduce feeling overwhelmed.', imageUrl: 'https://picsum.photos/400/253', imageHint: "organized desk planner", link: '#' },
  { id: 5, title: 'Desk Yoga for Relaxation', type: 'Video', language: 'English', description: 'Simple yoga stretches you can do at your desk to relieve tension.', imageUrl: 'https://picsum.photos/400/254', imageHint: "person stretching office", link: '#' },
  { id: 6, title: 'Navigating Team Conflicts', type: 'Article', language: 'Hindi', description: 'Constructive ways to handle disagreements and build stronger team relationships.', imageUrl: 'https://picsum.photos/400/255', imageHint: "two people talking", link: '#' },
];

const ResourceIcon = ({ type }: { type: Resource['type'] }) => {
  switch (type) {
    case 'Article': return <BookText className="h-5 w-5 text-muted-foreground" />;
    case 'Video': return <Video className="h-5 w-5 text-muted-foreground" />;
    case 'Meditation': return <Mic2 className="h-5 w-5 text-muted-foreground" />;
    default: return null;
  }
};

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredResources = mockResources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (languageFilter === 'All' || resource.language === languageFilter) &&
    (typeFilter === 'All' || resource.type === typeFilter)
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Resource Hub</h1>
        <p className="text-muted-foreground">Find articles, videos, and guided meditations to support your mental wellness journey.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search resources..." 
            className="pl-10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={languageFilter} onValueChange={setLanguageFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Languages</SelectItem>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Hindi">Hindi</SelectItem>
            <SelectItem value="Tamil">Tamil</SelectItem>
            <SelectItem value="Bengali">Bengali</SelectItem>
          </SelectContent>
        </Select>
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Types</SelectItem>
            <SelectItem value="Article">Article</SelectItem>
            <SelectItem value="Video">Video</SelectItem>
            <SelectItem value="Meditation">Meditation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? filteredResources.map(resource => (
          <Card key={resource.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image 
                src={resource.imageUrl} 
                alt={resource.title}
                fill
                objectFit="cover"
                data-ai-hint={resource.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{resource.title}</CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                  <div className="flex items-center gap-1.5"><ResourceIcon type={resource.type} /> {resource.type}</div>
                  <div className="flex items-center gap-1.5">{resource.language}</div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={resource.link} target="_blank">
                  Open Resource <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )) : (
            <p className="col-span-full text-center text-muted-foreground mt-8">No resources found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
