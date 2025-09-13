
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart3, Users, LogOut, ShieldCheck, LifeBuoy, BookHeart, CalendarPlus, Settings } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '/admin/organisation', icon: <BarChart3 />, label: 'Analytics' },
  { href: '/admin/organisation/users', icon: <Users />, label: 'Manage Employees' },
  { href: '/admin/organisation/counselors', icon: <LifeBuoy />, label: 'Manage Counselors' },
  { href: '/admin/organisation/resources', icon: <BookHeart />, label: 'Manage Resources' },
  { href: '/admin/organisation/events', icon: <CalendarPlus />, label: 'Manage Events' },
  { href: '/admin/organisation/moderation', icon: <ShieldCheck />, label: 'Community Moderation' },
  { href: '/admin/organisation/integrations', icon: <Settings />, label: 'Integrations' },
];

export default function OrganisationAdminSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
        <SidebarHeader>
            <Link href="/" className="flex items-center gap-2 px-2" prefetch={false}>
                <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={180} height={45} className="group-data-[collapsible=icon]:hidden"/>
                <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={40} height={40} className="hidden group-data-[collapsible=icon]:block"/>
            </Link>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
            {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        tooltip={{children: item.label}}
                    >
                        <Link href={item.href}>
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
             <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:justify-center">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://picsum.photos/100/101" data-ai-hint="Indian admin avatar" alt="Admin" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden">
                    <p className="font-semibold">Org. Admin</p>
                    <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
            </div>
            <Button asChild variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:w-auto p-2">
                <Link href="/login">
                    <LogOut className="mr-2 group-data-[collapsible=icon]:mr-0" />
                    <span className="group-data-[collapsible=icon]:hidden">Logout</span>
                </Link>
            </Button>
        </SidebarFooter>
    </Sidebar>
  );
}
