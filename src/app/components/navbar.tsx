// "use client";
// import React, { useEffect } from "react";
// import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
// import {
//   IconHome,
//   IconTrophy,
//   IconStar,
//   IconUsers,
//   IconChartBar,
//   IconSchool,
//   IconBriefcase,
//   IconMail,
// } from "@tabler/icons-react";
// import Link from "next/link";
// export default function SidebarNavigation() {
//   const navItems = [
//     { label: "Home", href: "/", icon: <IconHome size={20} /> },
//     { label: "Contests", href: "contests", icon: <IconTrophy size={20} /> },
//     { label: "Hall of Fame", href: "fame", icon: <IconStar size={20} /> },
//     { label: "Team", href: "members", icon: <IconUsers size={20} /> },
//     { label: "PCD", href: "pcd", icon: <IconChartBar size={20} /> },
//     { label: "Alumni", href: "alumini", icon: <IconSchool size={20} /> },
//     {
//       label: "Interview Experience",
//       href: "interview",
//       icon: <IconBriefcase size={20} />,
//     },
//     { label: "Contact Us", href: "about", icon: <IconMail size={20} /> },
//   ];

//   const handleMouseEnter = () => {
//     document.body.classList.add("overflow-hidden");
//   };

//   const handleMouseLeave = () => {
//     document.body.classList.remove("overflow-hidden");
//   };

//   useEffect(() => {
//     return () => document.body.classList.remove("overflow-hidden");
//   }, []);

//   return (
//     <div
//       className="absolute top-0 z-50 hover:bg-white/10 hover:backdrop-blur-md h-full p-2"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Sidebar>
//         <SidebarBody>
//           {navItems.map((item, index) => (
//             <Link href={item.href}>
//               <SidebarLink key={index} link={item} />
//             </Link>
//           ))}
//         </SidebarBody>
//       </Sidebar>
//     </div>
//   );
// }
import React from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Contests", href: "contests" },
    { name: "Hall of Fame", href: "fame" },
    { name: "Team", href: "members" },
    { name: "PCD", href: "pcd" },
    { name: "Alumni", href: "alumini" },
    { name: "Interview Experience", href: "interview" },
    { name: "Contact US", href: "about" },
  ];

  return (
    <nav className="absolute w-full z-10 pt-5 pr-5">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
        ></a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-gray-500"
              >
                <a
                  href={item.href}
                  className="flex items-center transition-colors hover:text-red-500"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
