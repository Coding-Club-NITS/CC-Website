import { HeroParallax } from './components/ui/hero-parallax'
import ScrollCards from './components/scrollcards'


import { InfiniteMovingCards } from "./components/ui/comments";
import { FlipWordsDemo } from './components/flipword';
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
  

  
  return (
    <>
      <HeroParallax products={products}/>
      <ScrollCards/>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
      <FlipWordsDemo/>
    </> 
  );
}
