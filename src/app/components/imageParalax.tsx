"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useRef } from "react";
import Link from "next/link";
import { ShootingStars } from "@/app/components/ui/shooting-stars";
// Smooth Scroll Hero Section
export const ImageParallax: React.FC = () => {
  return (
    <div className="bg-yellow-200/0">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <div className="bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-red-900 to-red-900/0 backdrop-blur-lg" />
        <ShootingStars />
        <TextEditorsList />
        <Hero />
        <div className="bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-red-900/0 to-red-900" />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 650;

const Hero: React.FC = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <ParallaxImages />
    </div>
  );
};

const ParallaxImages: React.FC = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
        alt="VS Code Logo"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg"
        alt="JetBrains Logo"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg"
        alt="Vim Logo"
        start={-1000}
        end={-100}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Breezeicons-apps-48-sublime-text.svg/800px-Breezeicons-apps-48-sublime-text.svg.png"
        alt="Sublime Text Logo"
        start={-500}
        end={-150}
        className="w-5/12"
      />
    </div>
  );
};

interface ParallaxImgProps {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

const ParallaxImg: React.FC<ParallaxImgProps> = ({
  className,
  alt,
  src,
  start,
  end,
}) => {
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const textEditors = [
  {
    name: "Visual Studio Code",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    description:
      "A powerful and lightweight code editor developed by Microsoft with extensive extension support.",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "JetBrains IDEs",
    logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg",
    description:
      "A collection of intelligent IDEs like WebStorm, PyCharm, and IntelliJ IDEA designed for professional developers.",
    link: "https://www.jetbrains.com/",
  },
  {
    name: "Vim",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg",
    description:
      "A highly customizable and efficient text editor known for its modal editing and speed.",
    link: "https://www.vim.org/download.php",
  },
  {
    name: "Sublime Text",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Breezeicons-apps-48-sublime-text.svg/800px-Breezeicons-apps-48-sublime-text.svg.png",
    description:
      "A sleek and fast text editor with a focus on simplicity and performance.",
    link: "https://www.sublimetext.com/",
  },
];

const TextEditorsList: React.FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12 text-4xl font-black uppercase text-white"
      >
        Popular Code Editors
      </motion.h1>
      {textEditors.map((editor) => (
        <motion.div
          key={editor.name}
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
        >
          <div className="flex items-center gap-4">
            <img src={editor.logo} alt={editor.name} className="w-12 h-12" />
            <div>
              <p className="mb-1.5 text-xl text-white">{editor.name}</p>
              <p className="text-sm text-gray-400">{editor.description}</p>
            </div>
          </div>
          <Link
            href={editor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 flex items-center gap-1"
          >
            Download <FiDownload />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default ImageParallax;
