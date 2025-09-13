import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import EmployeeSidebar from '@/components/employee-sidebar';

export default function EmployeeDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <EmployeeSidebar />
      <SidebarInset>
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-lg font-semibold md:text-2xl">Employee Dashboard</h1>
        </header>
        <main className="flex-1 p-4 md:p-8 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
