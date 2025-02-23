// FocusCards.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { CodeForcesIcon } from "../icons/CodeForcesIcon";
import { SiLeetcode, SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
  }) => {
    // Use the Cloudinary URL directly from card.src.
    const initialImageUrl = card.src || "/default-avatar.jpg";
    const [imgSrc, setImgSrc] = useState(initialImageUrl);

    // (Optional) Debug: Log the image URL to ensure it's correct.
    // console.log(`Card [${card.title}] image URL:`, initialImageUrl);

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden w-full transition-all duration-300 ease-out",
          "aspect-[4/5] sm:aspect-[3/4] md:h-96", // Maintain aspect ratio across breakpoints
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={imgSrc}
          alt={card.title}
          fill
          className="object-cover w-full h-full rounded-lg"
          onError={() => setImgSrc("/default-avatar.jpg")}
          unoptimized
          priority
        />

        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-2xl font-bold text-white mb-2">{card.title}</div>

          <div className="flex gap-4 mb-4">
            {card.profile?.Codeforces && (
              <Link
                href={card.profile.Codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                title="Codeforces"
              >
                <CodeForcesIcon size={24} />
              </Link>
            )}

            {card.profile?.Leetcode && (
              <Link
                href={card.profile.Leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
                title="LeetCode"
              >
                <SiLeetcode size={24} />
              </Link>
            )}

            {card.profile?.LinkedIn && (
              <Link
                href={card.profile.LinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-600 transition-colors"
                title="LinkedIn"
              >
                <SiLinkedin size={24} />
              </Link>
            )}

            {card.profile?.Facebook && card.profile.Facebook !== "-" && (
              <Link
                href={card.profile.Facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors"
                title="Facebook"
              >
                <FaFacebook size={24} />
              </Link>
            )}
          </div>

          {/* Email */}
          {card.email && (
            <div className="flex items-center gap-2 text-white">
              <MdEmail size={20} />
              <span className="text-sm">{card.email}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default function FocusCards({ cards }: { cards: any[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Sort cards alphabetically by title
  const sortedCards = [...cards].sort((a, b) => a.title.localeCompare(b.title));

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

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-8xl mx-auto w-full px-4 sm:px-6 md:px-2">
      {sortedCards.map((card, index) => (
        <div
          key={card.title + index}
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
  );
}
