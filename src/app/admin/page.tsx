import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Redirect page for the base /admin route
export default function AdminPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Admin Portal</h1>
      <p className="text-muted-foreground mb-8">Please select which admin dashboard to proceed to:</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/admin/institution">Institution Admin</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/admin/organisation">Organisation Admin</Link>
        </Button>
      </div>
    </div>
  );
}
