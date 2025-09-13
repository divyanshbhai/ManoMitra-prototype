import StudentsTable from '@/components/students-table';

export default function ManageStudentsPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Students</h1>
                <p className="text-muted-foreground">View and manage student accounts for your institution.</p>
            </div>
            <StudentsTable />
        </div>
    );
}
