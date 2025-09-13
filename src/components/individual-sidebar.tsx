
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
import { LayoutDashboard, Bot, BookHeart, LogOut, MessageSquareHeart, ClipboardList, History, BrainCircuit, Pill, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '/individual', icon: <LayoutDashboard />, label: 'Dashboard' },
  { href: '/individual/chat', icon: <Bot />, label: 'AI Chat' },
  { href: '/individual/roleplay', icon: <MessageSquareHeart />, label: 'Role-play Chat' },
  { href: '/individual/assessments', icon: <ClipboardList />, label: 'Assessments' },
  { href: '/individual/guided-modules', label: 'Guided Modules', icon: <BrainCircuit /> },
  { href: '/individual/insights', label: 'My Insights', icon: <History /> },
  { href: '/individual/resources', icon: <BookHeart />, label: 'Resources' },
  { href: '/individual/medication-reminders', label: 'Medication Reminders', icon: <Pill /> },
  { href: '/individual/games', label: 'Games', icon: <Gamepad2 /> },
];

export default function IndividualSidebar() {
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
                        isActive={pathname === item.href || (item.href !== '/individual' && pathname.startsWith(item.href))}
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
                    <AvatarImage src="https://picsum.photos/id/21/200/200" data-ai-hint="Indian user avatar" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden">
                    <p className="font-semibold">User</p>
                    <p className="text-xs text-muted-foreground">user@email.com</p>
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
