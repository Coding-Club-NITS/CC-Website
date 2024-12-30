"use client";
import React, { useEffect } from "react";
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
import Link from "next/link";
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

  const handleMouseEnter = () => {
    document.body.classList.add("overflow-hidden");
  };

  const handleMouseLeave = () => {
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    // Cleanup to ensure the class is removed if the component unmounts
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div
      className="absolute top-0 z-50 hover:bg-white/10 hover:backdrop-blur-md h-full p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Sidebar>
        <SidebarBody>
          {navItems.map((item, index) => (
            <Link href={item.href}>
              <SidebarLink key={index} link={item} />
            </Link>
          ))}
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
