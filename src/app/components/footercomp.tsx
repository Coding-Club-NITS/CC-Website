"use client";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

export default function FooterComp() {
  const socialLinks = [
    {
      icon: FaFacebook,
      color: "bg-blue-600",
      href: "https://facebook.com/codingclubnits",
    },
    {
      icon: FaInstagram,
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
      href: "https://instagram.com/coding_club_nits",
    },
    {
      icon: FaGithub,
      color: "bg-gray-800",
      href: "https://github.com/coding-club-nits",
    },
    { icon: FaTwitter, color: "bg-blue-400", href: "#" },
  ];

  return (
    <footer className="relative bg-white text-black dark:bg-black dark:text-yellow-400/50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <FaCode
                className={`w-4 h-4 transform rotate-${Math.random() * 360}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-blue-gray-50">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaLaptopCode className="w-6 h-6" />
              <h3 className="text-lg font-bold">Coding Club</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-yellow-400/50">
              Empowering tech enthusiasts at NIT Silchar through innovative
              coding challenges, workshops, and collaborative projects.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <a
              href="mailto:codingclub@nits.ac.in"
              className="inline-flex items-center gap-2 text-sm hover:text-blue-500 dark:hover:text-yellow-400 transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              codingclub@nits.ac.in
            </a>
            <div className="flex gap-4 mt-6 md:mt-0">
              {[
                { icon: FaFacebook, href: "#", color: "hover:text-blue-500" },
                { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
                { icon: FaGithub, href: "#", color: "hover:text-gray-300" },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`text-gray-400 transition ${color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-4 text-center text-sm border-t border-gray-200 dark:border-gray-800">
          <p>
            &copy; {new Date().getFullYear()} Coding Club NIT Silchar |
            <span className="mx-2">
              Crafted with
              <span className="text-red-500 mx-1">❤</span>
              by tech enthusiasts
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
