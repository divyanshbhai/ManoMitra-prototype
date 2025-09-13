
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ForumPost } from '@/lib/types';
import { ThumbsUp, MessageSquare, PlusCircle } from 'lucide-react';
import Link from 'next/link';

const mockPosts: ForumPost[] = [
  { id: 1, title: "Feeling overwhelmed with final year project", excerpt: "I'm in my final year and the pressure is immense. The project deadlines are clashing with my placement preparations. How are others managing this?", author: "AnonymousTiger", likes: 23, comments: 8, tags: ["Academic", "Stress"], avatarUrl: "https://picsum.photos/100/101", avatarHint: "tiger drawing" },
  { id: 2, title: "Struggling to make friends in a new city", excerpt: "I moved to a new city for college and I'm finding it really hard to connect with people. It feels lonely sometimes. Any advice?", author: "WanderingSoul", likes: 45, comments: 15, tags: ["Social", "Loneliness"], avatarUrl: "https://picsum.photos/100/102", avatarHint: "lotus flower" },
  { id: 3, title: "Tips for managing anxiety before presentations?", excerpt: "I have a major presentation next week and my anxiety is through the roof. What do you all do to stay calm and confident?", author: "AnxiousApple", likes: 18, comments: 12, tags: ["Anxiety", "Public Speaking"], avatarUrl: "https://picsum.photos/100/103", avatarHint: "peacock feather" },
  { id: 4, title: "How to deal with family expectations?", excerpt: "My parents have very high expectations for my career, and it's different from what I want to do. It's causing a lot of conflict. Has anyone gone through this?", author: "QuietRebel", likes: 32, comments: 11, tags: ["Family", "Career"], avatarUrl: "https://picsum.photos/100/104", avatarHint: "banyan tree" },
];

export default function ForumPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Peer Support Forum</h1>
          <p className="text-muted-foreground">A safe and anonymous space to share and connect with fellow members.</p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-5 w-5" />
            Create a New Post
        </Button>
      </div>
      
      <div className="space-y-6">
        {mockPosts.map(post => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                    <CardTitle className="font-headline text-xl mb-2"><Link href="#" className="hover:text-primary">{post.title}</Link></CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Avatar className="h-6 w-6">
                        <AvatarImage src={post.avatarUrl} alt={post.author} data-ai-hint={post.avatarHint} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>Posted by {post.author}</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-end flex-shrink-0">
                  {post.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ThumbsUp className="h-5 w-5" />
                <span>{post.likes} Likes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-5 w-5" />
                <span>{post.comments} Comments</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
