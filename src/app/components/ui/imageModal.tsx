import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const ImageModal = ({
  isOpen,
  setIsOpen,
  image,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  image: string | null;
}) => {
  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ translateX: -800 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 1000 }}
            onClick={(e) => e.stopPropagation()}
            // className="bg-white rounded-lg shadow-xl  max-w-[90vw] max-h-[90vh]"
          >
            <img
              src={image}
              alt="Modal Image"
              className="max-w-[90vw] max-h-[90vh] object-contain p-5  bg-white"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
