/* eslint-disable */
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "./cficon";
import SmoothScrolling from "../smoothScroll";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex flex-col">
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <div className="text-lg md:text-xl font-thin bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.description}
          </div>
        </div>
        <Link
          href={card.profile}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <Icon />
        </Link>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardType = {
  title: string;
  src: string;
  description: string;
  profile: string;
};

export default function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.2 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup ScrollTrigger
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <SmoothScrolling>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-8xl mx-auto md:px-2 w-full">
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        ))}
      </div>
    </SmoothScrolling>
  );
}
