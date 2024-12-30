"use client";
import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconHome,
  IconTrophy,
  IconStar,
  IconUsers,
  IconChartBar,
  IconSchool,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";

export default function SidebarNavigation() {
  const navItems = [
    { label: "Home", href: "/", icon: <IconHome size={20} /> },
    { label: "Contests", href: "contests", icon: <IconTrophy size={20} /> },
    { label: "Hall of Fame", href: "fame", icon: <IconStar size={20} /> },
    { label: "Team", href: "members", icon: <IconUsers size={20} /> },
    { label: "PCD", href: "pcd", icon: <IconChartBar size={20} /> },
    { label: "Alumni", href: "alumini", icon: <IconSchool size={20} /> },
    {
      label: "Interview Experience",
      href: "interview",
      icon: <IconBriefcase size={20} />,
    },
    { label: "Contact Us", href: "about", icon: <IconMail size={20} /> },
  ];

  return (
    <div className="absolute z-50">
      <Sidebar>
        <SidebarBody>
          {navItems.map((item, index) => (
            <SidebarLink key={index} link={item} />
          ))}
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
