"use client";
import { HeroParallax } from "./ui/hero-parallax";
import homedata from "../../data/homedata.json";
import event from "../../data/newEvent.json";
import Link from "next/link";

export default function Parallax() {
  return (
    <div>
      {event.visible && (
        <button className="absolute z-40 right-10 m-10">
          <Link href="/register">
            <div className="px-8 py-5  hover:bg-red-500  bg-gradient-to-r from-indigo-500 to-purple-500 rounded relative transition duration-2000 text-white  animate-bounce">
              {event.title}
            </div>
          </Link>
        </button>
      )}
      <HeroParallax products={homedata} />
    </div>
  );
}
