import { HeroParallax } from './components/ui/hero-parallax'
import { StickyScroll } from './components/ui/scroll';
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/ui/comments";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Siddhid Saha",
    title: "Moderator Coding Club NITS",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {
  const products = [
    {
      title: "Sessions",
      link:  "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524959/mo5fk0clewmk3wwtfree.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524959/mo5fk0clewmk3wwtfree.jpg?_s=public-apps"
    },
    {
      title: "Code-Intium",
      link: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718526037/IMG20231104200715_ydkaee.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718526037/IMG20231104200715_ydkaee.jpg?_s=public-apps"
    },
    {
      title: "The Family",
      link: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524961/b8ydp5nvc0kryeyl9n8w.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524961/b8ydp5nvc0kryeyl9n8w.jpg?_s=public-apps"
    },
    {
      title: "Contests",
      link: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524986/txgmdrlbtvdpmvq7cfng.jpg?_s=public-apps",
      thumbnail: "https://res.cloudinary.com/dtpmqu6lw/image/upload/fl_preserve_transparency/v1718524986/txgmdrlbtvdpmvq7cfng.jpg?_s=public-apps"
    },
  ];
  
  const scrollContent = [
    {
      title: "Contests",
      description:
        "Participate in exciting coding contests organized by the Coding Club. Test your skills against peers, solve challenging problems, and win amazing prizes. Join our contests to enhance your problem-solving abilities and coding prowess.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Contests
        </div>
      ),
    },
    {
      title: "Workshops",
      description:
        "Attend our hands-on workshops to learn new technologies and tools. Our workshops cover a wide range of topics, from web development to machine learning. Gain practical knowledge and experience by building real-world projects.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://picsum.photos/200/300"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Workshop demo"
          />
        </div>
      ),
    },
    {
      title: "Coding Classes",
      description:
        "Join our coding classes to improve your programming skills. Whether you're a beginner or an advanced coder, our classes are designed to cater to all levels. Learn from experienced instructors and become proficient in various programming languages.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Coding Classes
        </div>
      ),
    },
    {
      title: "Speaker Sessions",
      description:
        "Attend speaker sessions with industry experts and alumni. Gain insights into the latest trends in technology, career advice, and much more. Our speaker sessions are a great opportunity to learn from the best and stay updated with the industry.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Speaker Sessions
        </div>
      ),
    },
  ];

  
  return (
    <>
      <HeroParallax products={products}/>
      <StickyScroll content={scrollContent}/>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </> 
  );
}
