import CommunityModerationQueue from '@/components/community-moderation-queue';

export default function CommunityModerationPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Community Moderation</h1>
                <p className="text-muted-foreground">Review and take action on content flagged by the community.</p>
            </div>
            <CommunityModerationQueue />
        </div>
    );
}
