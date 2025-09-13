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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Student as Employee } from '@/lib/types'; // Reusing the type for now
import { MoreHorizontal } from 'lucide-react';

const mockEmployees: Employee[] = [
  { id: '6', name: 'Aarav Sharma', email: 'aarav.sharma@example.com', branch: 'Marketing', status: 'Active', engagement: 'High' },
  { id: '7', name: 'Diya Mehta', email: 'diya.mehta@example.com', branch: 'Human Resources', status: 'Inactive', engagement: 'Low' },
  { id: '8', name: 'Rohan Joshi', email: 'rohan.joshi@example.com', branch: 'Engineering', status: 'Active', engagement: 'Medium' },
  { id: '9', name: 'Anika Reddy', email: 'anika.reddy@example.com', branch: 'Sales', status: 'Active', engagement: 'High' },
  { id: '10', name: 'Kabir Kapoor', email: 'kabir.kapoor@example.com', branch: 'Finance', status: 'Active', engagement: 'Medium' },
];

const EngagementBadge = ({ level }: { level: Employee['engagement'] }) => {
    switch (level) {
        case 'High': return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">High</Badge>;
        case 'Medium': return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">Medium</Badge>;
        case 'Low': return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">Low</Badge>;
        default: return <Badge variant="secondary">{level}</Badge>;
    }
}

export default function EmployeesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Accounts</CardTitle>
        <CardDescription>A list of all employee users in the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">
                    <div>{employee.name}</div>
                    <div className="text-sm text-muted-foreground">{employee.email}</div>
                </TableCell>
                <TableCell>{employee.branch}</TableCell>
                <TableCell>
                    <Badge variant={employee.status === 'Active' ? 'default' : 'destructive'} className={employee.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}>
                        {employee.status}
                    </Badge>
                </TableCell>
                <TableCell>
                  <EngagementBadge level={employee.engagement} />
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
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">Suspend Account</DropdownMenuItem>
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
