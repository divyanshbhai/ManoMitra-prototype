import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Check, X } from 'lucide-react';

type FlaggedPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  reason: string;
  flaggedBy: string;
  avatarUrl: string;
  avatarHint: string;
};

const mockFlaggedPosts: FlaggedPost[] = [
  { id: 1, title: "This is unacceptable!", excerpt: "This post contains harmful advice and should be removed immediately. It's dangerous and irresponsible.", author: "AnonymousTiger", reason: "Harmful Content", flaggedBy: "ConcernedUser", avatarUrl: "https://picsum.photos/100/101", avatarHint: "tiger drawing" },
  { id: 2, title: "Spam link in post", excerpt: "The user 'NewJoinee' posted a link to a commercial website. This seems like spam.", author: "NewJoinee", reason: "Spam or Commercial Content", flaggedBy: "ForumRegular", avatarUrl: "https://picsum.photos/100/105", avatarHint: "robot icon" },
  { id: 3, title: "Personal attack", excerpt: "'You are all clueless!' - this comment is a personal attack against multiple users in the thread.", author: "AnxiousApple", reason: "Harassment or Bullying", flaggedBy: "SupportivePeer", avatarUrl: "https://picsum.photos/100/103", avatarHint: "peacock feather" },
];

export default function CommunityModerationQueue() {
  return (
    <div className="space-y-6">
      {mockFlaggedPosts.map(post => (
        <Card key={post.id} className="border-l-4 border-destructive">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post.avatarUrl} alt={post.author} data-ai-hint={post.avatarHint} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>Post by {post.author}</span>
                </div>
              </div>
              <Badge variant="destructive" className="flex items-center gap-2 text-base">
                <AlertTriangle className="h-4 w-4" />
                {post.reason}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4 text-base text-foreground italic">"{post.excerpt}"</CardDescription>
            <p className="text-sm text-muted-foreground">Flagged by: {post.flaggedBy}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-end gap-2 bg-muted/50 p-3">
             <Button variant="outline">
                <Check className="mr-2 h-4 w-4" />
                Dismiss Flag
             </Button>
             <Button variant="destructive">
                <X className="mr-2 h-4 w-4" />
                Remove Post
             </Button>
          </CardFooter>
        </Card>
      ))}
       {mockFlaggedPosts.length === 0 && (
            <Card className="text-center p-12">
                <CardContent>
                    <Check className="mx-auto h-12 w-12 text-green-500"/>
                    <h2 className="mt-4 text-xl font-semibold">Moderation Queue Clear</h2>
                    <p className="mt-2 text-muted-foreground">There are no flagged posts to review at this time.</p>
                </CardContent>
            </Card>
        )}
    </div>
  );
}
