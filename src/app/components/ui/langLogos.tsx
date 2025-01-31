"use client";
import { motion, MotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
  translate: MotionValue<number>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-40 w-[10rem] relative flex-shrink-0 z-20"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          layout="fill"
          objectFit="cover"
          className="object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
    </motion.div>
  );
};

export default ProductCard;
