"use client";

import React from "react";
// import ParticlesComponent from "../../components/particles";
import CodeForces from "../../components/Codeforces";
import Leetcode from "../../components/Leetcode";
import Codechef from "../../components/Codechef";
// import Image from "next/image";
import FloatingDock from "../../components/ContestNavbar";
import { Tabs } from "../../components/ui/tabs";

export default function Contest() {
  const tabs = [
    {
      title: "Codeforces",
      value: "Codeforces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-red-400 to-red-900">
          <div>
            <p>Codeforces</p>
            <CodeForces />
          </div>
        </div>
      ),
    },
    {
      title: "Codechef",
      value: "Codechef",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-brown-400 to-brown-800">
          <p>Codechef</p>
          <Codechef />
        </div>
      ),
    },
    {
      title: "LeetCode",
      value: "LeetCode",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-gray-700 to-gray-900">
          <p>Leetcode</p>
          <Leetcode />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-4xl mx-auto w-full  items-start justify-start my-20">
        <Tabs tabs={tabs} />
      </div>
      <FloatingDock />
    </div>
  );
}

// const Home = () => {
//   return (
//     <div className="App">
//       <div className="content">
//         <section>
//           <CodeForces />
//         </section>
//         <section>
//           <Leetcode />
//         </section>
//         <section>
//           <Codechef />
//         </section>
//       </div>
//       <ParticlesComponent />
//       <FloatingDock />
//     </div>
//   );
// };

// export default Home;
