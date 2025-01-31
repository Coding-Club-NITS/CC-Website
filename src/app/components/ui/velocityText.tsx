"use client";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <section ref={targetRef} className="bg-black text-gray-500/50">
      <div className="flex h-screen items-center overflow-hidden">
        <motion.pre
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-pre text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          {`
         Palindrome | Anagram | Substring | Dynamic Programming | Array |  
        Strings | Linked List | Trees | Graphs | Sorting | Searching |  
        Recursion | Backtracking | Bit Manipulation | Greedy | Divide & Conquer |  
        Permutation | Combination | Subarray | Memoization | Matrix |  
        Stack | Queue | Heap | Binary Search | BFS | DFS |  
        Kadane's Algorithm | Two Pointers | Sliding Window | Trie | Segment Tree |
          `}
        </motion.pre>
      </div>
    </section>
  );
};

export default VelocityText;
