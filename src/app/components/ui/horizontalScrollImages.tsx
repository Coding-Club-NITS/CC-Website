"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import images from "@/data/homedata.json";
import ImageModal from "@/app/components/ui/imageModal";

interface ImageData {
  title: string;
  link: string;
  thumbnail: string;
}

const HSI: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh]  bg-gradient-to-b from-blue-900/10  via-deep-purple-700/40 to-black"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {images.map((image: ImageData, index: number) => (
            <a key={index} onClick={() => openModal(image.thumbnail)}>
              <Card image={image} />
            </a>
          ))}
        </motion.div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        image={selectedImage}
      />
    </section>
  );
};

const Card: React.FC<{ image: ImageData }> = ({ image }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 grayscale transition-all duration-300 hover:grayscale-0">
      <div
        style={{
          backgroundImage: `url(${image.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {image.title}
        </p>
      </div>
    </div>
  );
};

export default HSI;
