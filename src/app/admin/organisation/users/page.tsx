import EmployeesTable from '@/components/employees-table';

export default function ManageEmployeesPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Employees</h1>
                <p className="text-muted-foreground">View and manage employee accounts for your organisation.</p>
            </div>
            <EmployeesTable />
        </div>
    );
}
