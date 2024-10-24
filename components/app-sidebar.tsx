"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "1902 Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "1902 Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "1902 Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Expenses",
          url: "/dashboard",
        },
        {
          title: "Categories",
          url: "/dashboard",
        },
        {
          title: "Payment Method",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Expenses",
          url: "#",
        },
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Payment Method",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Expenses",
          url: "#",
        },
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Payment Method",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Expenses",
          url: "#",
        },
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Payment Methods",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Expense Tracker",
      url: "#",
      icon: Frame,
    },
    {
      name: "Consumption Tracker",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Goal Tracker",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
