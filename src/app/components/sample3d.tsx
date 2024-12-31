"use client";
import React from "react";
import { PinContainer } from "./ui/3dpin";
import Image from "next/image";
import Link from "next/link";
export default function AnimatedPin() {
  const Platforms = [
    {
      name: "Codeforces",
      link: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029920.png?f=webp&w=256",
      url: "https://codeforces.com/",
    },
    {
      name: "Codechef",
      link: "https://user-images.githubusercontent.com/63710339/185728318-0b976716-4f78-4a0a-a377-1643cc18a57e.png",
      url: "https://www.codechef.com/",
    },
    {
      name: "Leetcode",
      link: "https://shopallpremium.com/wp-content/uploads/2022/02/LeetCode_logo_rvs-1.png",
      url: "https://leetcode.com/",
    },
  ];
  return (
    <>
      {Platforms.map((platform, index) => (
        <div
          className="h-[50rem] w-full md:flex lg:flex hidden items-center overflow-scroll"
          key={index}
        >
          <Link href={platform.url} passHref target="_blank">
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
          </Link>
        </div>
      ))}
    </>
  );
}
