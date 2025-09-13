"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, PlusCircle, BookText, Video, Mic2 } from 'lucide-react';
import { Resource } from '@/lib/types';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

const mockResources: Resource[] = [
  { id: 1, title: 'Understanding Anxiety', type: 'Article', language: 'English', description: 'A deep dive into what anxiety is and how to manage it.', imageUrl: 'https://picsum.photos/400/250', imageHint: "calm lake Himalayas", link: '#' },
  { id: 2, title: 'Mindful Meditation', type: 'Meditation', language: 'Hindi', description: 'A guided meditation session to calm your mind.', imageUrl: 'https://picsum.photos/400/251', imageHint: "person meditating yoga", link: '#' },
  { id: 3, title: 'Coping with Exam Stress', type: 'Video', language: 'Tamil', description: 'Strategies to handle the pressure of exams.', imageUrl: 'https://picsum.photos/400/252', imageHint: "Indian student studying", link: '#' },
  { id: 4, title: 'The Power of Positive Thinking', type: 'Article', language: 'Bengali', description: 'Learn how to reframe your thoughts for a better outlook.', imageUrl: 'https://picsum.photos/400/253', imageHint: "Indian sunrise", link: '#' },
];

const ResourceIcon = ({ type }: { type: Resource['type'] }) => {
  switch (type) {
    case 'Article': return <BookText className="h-5 w-5 text-muted-foreground" />;
    case 'Video': return <Video className="h-5 w-5 text-muted-foreground" />;
    case 'Meditation': return <Mic2 className="h-5 w-5 text-muted-foreground" />;
    default: return null;
  }
};

export default function ResourceManagementPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Resource Library</CardTitle>
            <CardDescription>A list of all available resources in the system.</CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2" />
                    Add New Resource
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Resource</DialogTitle>
                    <DialogDescription>Fill in the details below to add a new resource to the library.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">Title</Label>
                        <Input id="title" placeholder="e.g., Understanding Anxiety" className="col-span-3" />
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Textarea id="description" placeholder="A short description of the resource." className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="type" className="text-right">Type</Label>
                         <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select resource type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Article">Article</SelectItem>
                                <SelectItem value="Video">Video</SelectItem>
                                <SelectItem value="Meditation">Meditation</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="language" className="text-right">Language</Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Hindi">Hindi</SelectItem>
                                <SelectItem value="Tamil">Tamil</SelectItem>
                                <SelectItem value="Bengali">Bengali</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="link" className="text-right">Link/URL</Label>
                        <Input id="link" placeholder="https://example.com/resource" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save Resource</Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockResources.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell className="font-medium">
                    <div>{resource.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">{resource.description}</div>
                </TableCell>
                <TableCell>
                    <Badge variant="outline" className="gap-1.5 pl-1.5">
                        <ResourceIcon type={resource.type} />
                        {resource.type}
                    </Badge>
                </TableCell>
                <TableCell>
                    <Badge variant="secondary">{resource.language}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
