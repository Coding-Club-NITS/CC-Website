"use client";
import { HeroParallax } from "./ui/hero-parallax";
import homedata from "../../data/homedata.json";
import event from "../../data/newEvent.json";
import Link from "next/link";

export default function Parallax() {
  return (
    <div>
      {event.visible && (
        <button className="absolute z-50 m-5">
          <Link href="/register">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" />
            <div className="px-8 py-5 rounded-md relative group transition duration-200 text-white hover:bg-red-500">
              {event.title}
            </div>
          </Link>
        </button>
      )}
      <HeroParallax products={homedata} />
    </div>
  );
}
