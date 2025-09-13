
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
import { LayoutDashboard, Bot, BookHeart, CalendarCheck, Users, LogOut, MessageSquareHeart, ClipboardList, History, BrainCircuit, Trophy, UserPlus, Pill, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '/dashboard/student', label: 'Dashboard', icon: <LayoutDashboard /> },
  { href: '/dashboard/student/chat', label: 'AI Chat', icon: <Bot /> },
  { href: '/dashboard/student/roleplay', label: 'Role-play Chat', icon: <MessageSquareHeart /> },
  { href: '/dashboard/student/assessments', label: 'Assessments', icon: <ClipboardList /> },
  { href: '/dashboard/student/guided-modules', label: 'Guided Modules', icon: <BrainCircuit /> },
  { href: '/dashboard/student/insights', label: 'My Insights', icon: <History /> },
  { href: '/dashboard/student/resources', label: 'Resources', icon: <BookHeart /> },
  { href: '/dashboard/student/counselors', label: 'Counselors', icon: <Users /> },
  { href: '/dashboard/student/events', label: 'Events', icon: <CalendarCheck /> },
  { href: '/dashboard/student/medication-reminders', label: 'Medication Reminders', icon: <Pill /> },
  { href: '/dashboard/student/forum', label: 'Forum', icon: <Users /> },
  { href: '/dashboard/student/challenges', label: 'Challenges', icon: <Trophy /> },
  { href: '/dashboard/student/buddy-connect', label: 'Buddy Connect', icon: <UserPlus /> },
  { href: '/dashboard/student/games', label: 'Games', icon: <Gamepad2 /> },
];

export default function StudentSidebar() {
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
                        isActive={pathname === item.href || (item.href !== '/dashboard/student' && pathname.startsWith(item.href))}
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
                    <AvatarImage src="/STUDENT USER LOGO.png" data-ai-hint="Indian student avatar" alt="Student" />
                    <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="group-data-[collapsible=icon]:hidden">
                    <p className="font-semibold">Student User</p>
                    <p className="text-xs text-muted-foreground">student@example.edu</p>
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
