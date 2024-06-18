"use client";
import React from "react";
import { PinContainer } from "./ui/3dpin";
import Image from "next/image";
export default function AnimatedPin() {
  const Platforms=[
    {
      name:"Codeforces",
      link:"https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcer3l19eex0wy900b101.jpg",
      url:"https://codeforces.com/"
    },
    {
      name:"Codechef",
      link:"https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/zruiknbedz8yqafxbazb",
      url:"https://www.codechef.com/"
    },
    {
      name:"Leetcode",
      link:"https://pathrise-website-guide-wp.s3.us-west-1.amazonaws.com/guides/wp-content/uploads/2019/05/10175228/images-11.png",
      url:"https://leetcode.com/"
    },

  ]
  return (
    <>
      {Platforms.map((platform,index) => (
      <div className="h-[50rem] w-full flex items-center" key={index}>
      <PinContainer
        title={platform.name}
        href={platform.url}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
          <h3 className="max-w-xs  font-bold  text-base text-slate-100">
            
          </h3>
          <div className="text-base font-normal">
          <Image
        src={platform.link} alt={platform.name}
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
