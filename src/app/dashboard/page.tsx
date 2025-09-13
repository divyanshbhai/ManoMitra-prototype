import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Redirect page for the base /dashboard route
export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">User Portal</h1>
      <p className="text-muted-foreground mb-8">Please select which dashboard to proceed to:</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/dashboard/student">Student Dashboard</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/dashboard/employee">Employee Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
