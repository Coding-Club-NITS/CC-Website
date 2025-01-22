"use client";

import React from "react";
import ParticlesComponent from "@/app/components/particles";
import CodeForces from "@/app/components/Codeforces";
import Leetcode from "@/app/components/Leetcode";
import Codechef from "@/app/components/Codechef";
// import Image from "next/image";
import FloatingDock from "@/app/components/ContestNavbar";
import SmoothScrolling from "@/app/components/smoothScroll";
// import { Tabs } from "@/app/components/ui/tabs";

const items = [
  {
    title: "Codeforces",
    icon: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029920.png?f=webp&w=256"
        alt="Codeforces"
        width={24}
        height={24}
        className="w-full h-full object-contain"
      />
    ),
    href: "https://codeforces.com/contests",
  },
  {
    title: "CodeChef",
    icon: (
      <img
        src="https://user-images.githubusercontent.com/63710339/185728318-0b976716-4f78-4a0a-a377-1643cc18a57e.png"
        alt="CodeChef"
        width={24}
        height={24}
        className="w-full h-full object-contain"
      />
    ),
    href: "https://www.codechef.com/contests",
  },
  {
    title: "Leetcode",
    icon: (
      <img
        src="https://shopallpremium.com/wp-content/uploads/2022/02/LeetCode_logo_rvs-1.png"
        alt="Leetcode"
        width={24}
        height={24}
        className="w-full h-full object-contain"
      />
    ),
    href: "https://www.leetcode.com/contest",
  },
];

<FloatingDock items={items} />;

const Home = () => {
  return (
    <div className="App bg-white dark:bg-transparent">
      <SmoothScrolling>
        <div>
          <section>
            <SmoothScrolling>
              <CodeForces />
            </SmoothScrolling>
          </section>
          <section>
            <SmoothScrolling>
              <Leetcode />
            </SmoothScrolling>
          </section>
          <section>
            <SmoothScrolling>
              {" "}
              <Codechef />
            </SmoothScrolling>
          </section>
        </div>
      </SmoothScrolling>
      <ParticlesComponent id="particles" />
      <FloatingDock items={items} />
    </div>
  );
};

export default Home;
