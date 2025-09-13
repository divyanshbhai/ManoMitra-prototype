import EventManagementPage from '@/components/event-management-page';

export default function ManageEventsPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Events</h1>
                <p className="text-muted-foreground">Create and schedule workshops, webinars, and other events.</p>
            </div>
            <EventManagementPage />
        </div>
    );
}
