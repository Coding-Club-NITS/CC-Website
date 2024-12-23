import React from 'react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Contests', href: 'contests' },
    { name: 'Hall of Fame', href: 'fame' },
    { name: 'Team', href: 'members' },
    { name: 'PCD', href: 'pcd' },
    { name: 'Alumni', href: 'alumini' },
    { name: 'Interview Experience', href: 'interview' },
    { name: 'Contact US', href: 'about' },
  ];

  return (
    <nav className="absolute w-full z-10 pt-5 pr-5">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
        >
        </a>
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
