"use client";
import { useState } from "react";
import { Lens } from "@/app/components/ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
interface LensDemoProps {
  url: string;
}
export const LensDemo: React.FC<LensDemoProps> = ({ url }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto p-8 my-10 z-50">
        <div className="relative z-50">
          <Lens hovering={hovering} setHovering={setHovering}>
            <Image
              src={url}
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="py-4 relative z-50"
          >
            <h2 className="text-blue-900 dark:text-white text-2xl text-left font-bold">
              Code | Compile | Learn
            </h2>
            <p className="text-black dark:text-neutral-200 text-left  mt-4">
              Try out different languages, data structures, algorithms and much
              more.Coding together is always FUN!!.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
