import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function LoginForm() {
  return (
    <Tabs defaultValue="student" className="w-full max-w-lg">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="institution_admin">Inst. Admin</TabsTrigger>
        <TabsTrigger value="employee">Employee</TabsTrigger>
        <TabsTrigger value="organisation_admin">Org. Admin</TabsTrigger>
        <TabsTrigger value="individual">Individual</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Student Login</CardTitle>
            <CardDescription>Login with the credentials provided by your institution.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student-email">Email</Label>
              <Input id="student-email" type="email" placeholder="student@example.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-password">Password</Label>
              <Input id="student-password" type="password" />
            </div>
            <Link href="/dashboard/student" passHref>
                <Button className="w-full">Login</Button>
            </Link>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="institution_admin">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Institution Admin Login</CardTitle>
            <CardDescription>Access the admin dashboard for your institution.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="inst-admin-email">Admin Email</Label>
              <Input id="inst-admin-email" type="email" placeholder="admin@example.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inst-admin-password">Password</Label>
              <Input id="inst-admin-password" type="password" />
            </div>
             <Link href="/admin/institution" passHref>
                <Button className="w-full">Login as Institution Admin</Button>
            </Link>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="employee">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Employee Login</CardTitle>
            <CardDescription>Login with the credentials provided by your organization.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employee-email">Email</Label>
              <Input id="employee-email" type="email" placeholder="employee@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employee-password">Password</Label>
              <Input id="employee-password" type="password" />
            </div>
            <Link href="/dashboard/employee" passHref>
              <Button className="w-full">Login</Button>
            </Link>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="organisation_admin">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Organisation Admin Login</CardTitle>
            <CardDescription>Access the admin dashboard for your organisation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org-admin-email">Admin Email</Label>
              <Input id="org-admin-email" type="email" placeholder="admin@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-admin-password">Password</Label>
              <Input id="org-admin-password" type="password" />
            </div>
            <Link href="/admin/organisation" passHref>
                <Button className="w-full">Login as Organisation Admin</Button>
            </Link>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="individual">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Individual Login</CardTitle>
            <CardDescription>Access your personal wellness dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="individual-email">Email</Label>
              <Input id="individual-email" type="email" placeholder="hello@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="individual-password">Password</Label>
              <Input id="individual-password" type="password" />
            </div>
            <Link href="/individual" passHref>
                <Button className="w-full">Login</Button>
            </Link>
             <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="#" className="underline hover:text-primary">
                    Sign up
                </Link>
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}