import ResourceManagementPage from '@/components/resource-management-page';

export default function ManageResourcesPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Resources</h1>
                <p className="text-muted-foreground">Add, edit, and manage resources available to your members.</p>
            </div>
            <ResourceManagementPage />
        </div>
    );
}
