"use client";
import React, { useEffect } from "react";
import { PinContainer } from "./ui/3dpin";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedPin() {
  const Platforms = [
    {
      name: "Codeforces",
      link: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-3029920.png?f=webp&w=256",
      url: "https://codeforces.com/",
      desc: "Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov.",
    },
    {
      name: "Codechef",
      link: "https://user-images.githubusercontent.com/63710339/185728318-0b976716-4f78-4a0a-a377-1643cc18a57e.png",
      url: "https://www.codechef.com/",
      desc: "CodeChef is a competitive programming website. It is a non-commercial competitive programming community maintained by Directi, an Indian software company.",
    },
    {
      name: "Leetcode",
      link: "https://shopallpremium.com/wp-content/uploads/2022/02/LeetCode_logo_rvs-1.png",
      url: "https://leetcode.com/",
      desc: "LeetCode is a platform for learning and improving coding skills with the goal of being a better programmer. It is a website that provides a large number of coding problems for people to solve.",
    },
  ];

  useEffect(() => {
    // GSAP ScrollTrigger animation for all cards
    const pins = gsap.utils.toArray(".pin") as HTMLElement[]; // Explicitly type the result as HTMLElement[]

    pins.forEach((pin, index) => {
      gsap.fromTo(
        pin,
        {
          scale: 0, // Start from small size (scaled down)
          rotation: -180, // Start from a rotated state
          opacity: 0, // Initial opacity
        },
        {
          scale: 1, // Final size (normal scale)
          rotation: 0, // Final rotation (no rotation)
          opacity: 1, // Fade in effect
          duration: 1,
          delay: index * 0.2, // Staggered delay for each card
          scrollTrigger: {
            trigger: pin,
            start: "top 100%", // Trigger when 50% of the card is in view (halfway scroll)
            end: "bottom", // End when the card leaves the screen
            scrub: false, // Do not scrub, let the animation run independently
            once: true, // The animation runs once and doesn't reset
          },
        }
      );
    });
  }, []);

  return (
    <>
      {Platforms.map((platform) => (
        <div className="h-[50rem] w-full md:flex lg:flex hidden items-center overflow-scroll pin">
          <Link
            href={platform.url}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <PinContainer title={platform.name} desc={platform.desc}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
                <h3 className="max-w-xs font-bold text-base text-slate-100"></h3>
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
