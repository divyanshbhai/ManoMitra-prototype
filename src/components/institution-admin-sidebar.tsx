
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
  { href: '/admin/institution', icon: <BarChart3 />, label: 'Analytics' },
  { href: '/admin/institution/users', icon: <Users />, label: 'Manage Students' },
  { href: '/admin/institution/counselors', icon: <LifeBuoy />, label: 'Manage Counselors' },
  { href: '/admin/institution/resources', icon: <BookHeart />, label: 'Manage Resources' },
  { href: '/admin/institution/events', icon: <CalendarPlus />, label: 'Manage Events' },
  { href: '/admin/institution/moderation', icon: <ShieldCheck />, label: 'Community Moderation' },
  { href: '/admin/institution/integrations', icon: <Settings />, label: 'Integrations' },
];

export default function InstitutionAdminSidebar() {
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
                    <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="Indian admin avatar" alt="Admin" />
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden">
                    <p className="font-semibold">Inst. Admin</p>
                    <p className="text-xs text-muted-foreground">admin@example.edu</p>
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
