"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function FooterComp() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-yellow-400/50">
      <div className="mt-12 w-full border-t border-blue-gray-50 py-6 px-6 flex flex-col items-center md:flex-row md:justify-between">
        {/* Left Section: Organization Info */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold">Coding Club, NIT Silchar</p>
          <p className="text-xs text-gray-600 dark:text-yellow-400/50">
            Inspiring Innovation & Excellence in Tech
          </p>
        </div>

        {/* Center: Contact Info */}
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <p className="text-sm font-semibold">Contact Us</p>
          <a
            href="mailto:codingclub@nits.ac.in"
            className="text-xs text-gray-600 dark:text-yellow-400/50 flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaEnvelope className="h-4 w-4" />
            codingclub@nits.ac.in
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-black dark:text-yellow-400/50 hover:text-blue-600 transition"
          >
            <FaFacebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-black dark:text-yellow-400/50 hover:text-pink-600 transition"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-black dark:text-yellow-400/50 hover:text-blue-400 transition"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full text-center text-xs py-3 border-t border-gray-300 dark:border-gray-700">
        &copy; 2024 Coding Club NIT Silchar. All Rights Reserved.
      </div>
    </footer>
  );
}
