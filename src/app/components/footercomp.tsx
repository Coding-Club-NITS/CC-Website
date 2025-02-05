"use client";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function FooterComp() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-yellow-400/50">
      <div className="mt-12 w-full border-t border-blue-gray-50 py-6 px-6 flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold">Coding Club, NIT Silchar</p>
          <p className="text-xs text-gray-600 dark:text-yellow-400/50">
            Inspiring Innovation & Excellence in Tech through collaborative
            learning and projects.
          </p>
        </div>

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

        <div className="flex flex-row gap-4 mt-4 md:mt-0">
          {[
            { icon: FaFacebook, color: "bg-blue-600" },
            { icon: FaInstagram, color: "bg-pink-600" },
            { icon: FaTwitter, color: "bg-blue-400" },
            { icon: FaGithub, color: "bg-gray-800" },
          ].map(({ icon: Icon, color }, index) => (
            <a key={index} href="#" className="relative group">
              <div className="relative cursor-pointer">
                <div
                  className={`absolute inset-0 ${color} scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom rounded-full`}
                ></div>
                <Icon className="h-10 w-10 text-black dark:text-yellow-400/50 relative group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full text-center text-xs py-3 border-t border-gray-300 dark:border-gray-700">
        &copy; 2024 Coding Club NIT Silchar. All Rights Reserved. Follow us on
        our social media for updates on events and projects.
      </div>
    </footer>
  );
}
