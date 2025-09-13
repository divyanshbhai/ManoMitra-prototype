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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type Counselor = {
  id: string;
  name: string;
  email: string;
  specialties: string[];
  status: 'Active' | 'Onboarding' | 'Inactive';
  imageUrl: string;
  imageHint: string;
};

const mockCounselors: Counselor[] = [
  { id: '1', name: 'Dr. Anjali Sharma', email: 'anjali.sharma@counselors.com', specialties: ['Stress & Anxiety', 'Depression'], status: 'Active', imageUrl: 'https://picsum.photos/200/201', imageHint: 'Indian female counselor' },
  { id: '2', name: 'Mr. Rohan Desai', email: 'rohan.desai@counselors.com', specialties: ['Work-Life Balance', 'Relationships'], status: 'Active', imageUrl: 'https://picsum.photos/200/202', imageHint: 'Indian male counselor' },
  { id: '3', name: 'Dr. Priya Krishnan', email: 'priya.krishnan@counselors.com', specialties: ['Career Counseling', 'Self-esteem'], status: 'Onboarding', imageUrl: 'https://picsum.photos/200/203', imageHint: 'Indian woman professional' },
  { id: '4', name: 'Mrs. Sunita Banerjee', email: 'sunita.banerjee@counselors.com', specialties: ['Family Issues', 'Burnout'], status: 'Inactive', imageUrl: 'https://picsum.photos/200/204', imageHint: 'Indian professional woman' },
];

const StatusBadge = ({ status }: { status: Counselor['status'] }) => {
    switch (status) {
        case 'Active': return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">{status}</Badge>;
        case 'Onboarding': return <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100">{status}</Badge>;
        case 'Inactive': return <Badge className="bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-100">{status}</Badge>;
        default: return <Badge variant="secondary">{status}</Badge>;
    }
}

export default function CounselorsManagementTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Counselor Roster</CardTitle>
        <CardDescription>A list of all counselors associated with your institution.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Counselor</TableHead>
              <TableHead>Specialties</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCounselors.map((counselor) => (
              <TableRow key={counselor.id}>
                <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={counselor.imageUrl} alt={counselor.name} data-ai-hint={counselor.imageHint} />
                            <AvatarFallback>{counselor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div>{counselor.name}</div>
                            <div className="text-sm text-muted-foreground">{counselor.email}</div>
                        </div>
                    </div>
                </TableCell>
                <TableCell>
                    <div className="flex flex-wrap gap-1">
                        {counselor.specialties.map(spec => <Badge key={spec} variant="secondary">{spec}</Badge>)}
                    </div>
                </TableCell>
                <TableCell>
                    <StatusBadge status={counselor.status} />
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
                      <DropdownMenuItem>View Schedule</DropdownMenuItem>
                      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
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
