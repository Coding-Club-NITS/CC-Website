"use client";
import React from "react";
import { PinContainer } from "./ui/3dpin";
import Image from "next/image";
export default function AnimatedPin() {
  const Platforms = [
    {
      name: "Codeforces",
      link: "/codeforces.png",
      url: "https://codeforces.com/",
    },
    {
      name: "Codechef",
      link: "/codechef.png",
      url: "https://www.codechef.com/",
    },
    {
      name: "Leetcode",
      link: "/leetcode.png",
      url: "https://leetcode.com/",
    },
  ];
  return (
    <>
      {Platforms.map((platform, index) => (
        <div className="h-[50rem] w-full flex items-center" key={index}>
          <PinContainer title={platform.name} href={platform.url}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
              <h3 className="max-w-xs  font-bold  text-base text-slate-100"></h3>
              <div className="text-base font-normal">
                <Image
                  src={platform.link}
                  alt={platform.name}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </>
  );
}
