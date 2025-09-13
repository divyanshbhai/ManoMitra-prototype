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
import { Student } from '@/lib/types';
import { MoreHorizontal } from 'lucide-react';

const mockStudents: Student[] = [
  { id: '1', name: 'Ravi Kumar', email: 'ravi.kumar@example.edu', branch: 'Computer Science', status: 'Active', engagement: 'High' },
  { id: '2', name: 'Priya Singh', email: 'priya.singh@example.edu', branch: 'Mechanical Engineering', status: 'Active', engagement: 'Medium' },
  { id: '3', name: 'Amit Patel', email: 'amit.patel@example.edu', branch: 'Electronics', status: 'Inactive', engagement: 'Low' },
  { id: '4', name: 'Sunita Gupta', email: 'sunita.gupta@example.edu', branch: 'Civil Engineering', status: 'Active', engagement: 'High' },
  { id: '5', name: 'Vikram Reddy', email: 'vikram.reddy@example.edu', branch: 'Biotechnology', status: 'Active', engagement: 'Low' },
];

const EngagementBadge = ({ level }: { level: Student['engagement'] }) => {
    switch (level) {
        case 'High': return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">High</Badge>;
        case 'Medium': return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">Medium</Badge>;
        case 'Low': return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">Low</Badge>;
        default: return <Badge variant="secondary">{level}</Badge>;
    }
}

export default function StudentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Accounts</CardTitle>
        <CardDescription>A list of all student users in the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">
                    <div>{student.name}</div>
                    <div className="text-sm text-muted-foreground">{student.email}</div>
                </TableCell>
                <TableCell>{student.branch}</TableCell>
                <TableCell>
                    <Badge variant={student.status === 'Active' ? 'default' : 'destructive'} className={student.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}>
                        {student.status}
                    </Badge>
                </TableCell>
                <TableCell>
                  <EngagementBadge level={student.engagement} />
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
