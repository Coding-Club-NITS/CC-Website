"use client";
import React from "react";
import {
  IconHome,
  IconTrophy,
  IconStar,
  IconUsers,
  IconChartBar,
  IconSchool,
  IconTimeline,
  IconInfoCircle,
  IconArchive,
  // IconMail,
} from "@tabler/icons-react"; // Ensure you import the Timeline icon
import { FloatingDockMobile } from "./ContestNavbar";
import { motion } from "framer-motion";

const navItems = [
  { title: "Home", href: "/", icon: <IconHome size={20} /> },
  { title: "Contests", href: "contests", icon: <IconTrophy size={20} /> },
  { title: "Hall of Fame", href: "fame", icon: <IconStar size={20} /> },
  { title: "Team", href: "members", icon: <IconUsers size={20} /> },
  { title: "PCD", href: "pcd", icon: <IconChartBar size={20} /> },
  { title: "Alumni", href: "alumini", icon: <IconSchool size={20} /> },
  { title: "Resources", href: "resources", icon: <IconArchive size={20} /> },
  { title: "Timeline", href: "events", icon: <IconTimeline size={20} /> },
  { title: "About Us", href: "aboutus", icon: <IconInfoCircle size={20} /> }, // Added About Us here
  // { title: "Contact Us", href: "contact", icon: <IconMail size={20} /> }, // Retained Contact Us
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation for child elements
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Navbar() {
  return (
    <nav className="absolute w-full z-50 p-5">
      {/* Mobile Navigation */}
      <FloatingDockMobile items={navItems} className="fixed bottom-9 right-8" />

      <div className="flex items-center justify-end">
        <div className="hidden lg:block">
          <motion.ul
            className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="block p-5 lg:p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-500 transition-all duration-300 transform hover:scale-110 hover:text-gray-800"
                variants={itemVariants}
              >
                <a
                  href={item.href}
                  className="flex items-center transition-colors hover:text-red-500"
                >
                  {item.icon}
                  {item.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}
