import CounselorsManagementTable from '@/components/counselors-management-table';

export default function ManageCounselorsPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Counselors</h1>
                <p className="text-muted-foreground">Onboard, view, and manage counselors for your organisation.</p>
            </div>
            <CounselorsManagementTable />
        </div>
    );
}
