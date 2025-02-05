"use client";

import { motion } from "framer-motion";

const PageLoader = () => {
  const bits = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      {bits.map((bit) => {
        const isOne = Math.random() > 0.5;
        return (
          <motion.div
            key={bit}
            className={`absolute text-2xl font-bold ${
              isOne ? "text-red-500" : "text-yellow-800"
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: "50vh", opacity: 1 }}
            transition={{
              duration: Math.random() * 2 + 0.5,
              repeat: Infinity,
              delay: 0,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}vw`,
            }}
          >
            {isOne ? "1" : "0"}
          </motion.div>
        );
      })}
    </div>
  );
};

export default PageLoader;
