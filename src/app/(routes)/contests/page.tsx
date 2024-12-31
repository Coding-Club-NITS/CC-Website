"use client";

import React from "react";
import ParticlesComponent from "../../components/particles";
import CodeForces from "../../components/Codeforces";
import Leetcode from "../../components/Leetcode";
import Codechef from "../../components/Codechef";
// import Image from "next/image";
import FloatingDock from "../../components/ContestNavbar";
// import { Tabs } from "../../components/ui/tabs";

// export default function Contest() {
//   const tabs = [
//     {
//       title: "Codeforces",
//       value: "Codeforces",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-red-400 to-red-900">
//           <div>
//             <p>Codeforces</p>
//             <CodeForces />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Codechef",
//       value: "Codechef",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-brown-400 to-brown-800">
//           <p>Codechef</p>
//           <Codechef />
//         </div>
//       ),
//     },
//     {
//       title: "LeetCode",
//       value: "LeetCode",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
//           <p>Leetcode</p>
//           <Leetcode />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-4xl mx-auto w-full  items-start justify-start my-20">
//         <Tabs tabs={tabs} />
//       </div>
//       <FloatingDock />
//     </div>
//   );
// }
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
    <div className="App">
      <div className="">
        <section>
          <CodeForces />
        </section>
        <section>
          <Leetcode />
        </section>
        <section>
          <Codechef />
        </section>
      </div>
      <ParticlesComponent id="particles" />
      <FloatingDock items={items} />
    </div>
  );
};

export default Home;
