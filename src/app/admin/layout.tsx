// This layout is intentionally left blank to allow different admin layouts.
// See src/app/admin/institution/layout.tsx and src/app/admin/organisation/layout.tsx

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
