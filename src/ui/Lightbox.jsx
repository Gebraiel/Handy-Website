import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
import { IoIosCloseCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Lightbox({ images, active, closeLightbox }) {
  const [activeImage, setActiveImage] = useState(active);
  const { i18n } = useTranslation();
  function handleNext() {
    activeImage < images.length - 1 && setActiveImage(activeImage + 1);
  }
  function handlePrev() {
    activeImage > 0 && setActiveImage(activeImage - 1);
  }
  useEffect(() => {
    function handler(e) {
      e.key == "Escape" && closeLightbox();
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-row gap-5 w-screen h-screen fixed z-[1000] inset-0 bg-[rgba(0,0,0,0.3)] justify-center items-center px-5"
    >
      <button
        disabled={activeImage == 0}
        onClick={handlePrev}
        className="flex justify-center items-center  text-white"
      >
        {i18n.language == "en" ? (
          <FaArrowCircleLeft className="text-2xl" />
        ) : (
          <FaArrowCircleRight className="text-2xl" />
        )}
      </button>
      <div className="m-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            initial={{ x: 100, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            src={images[activeImage]}
            alt="Lightbox Image"
          />
        </AnimatePresence>
      </div>
      <button
        disabled={activeImage == images.length - 1}
        onClick={handleNext}
        className="flex justify-center items-center text-white"
      >
        {i18n.language == "en" ? (
          <FaArrowCircleRight className="text-2xl" />
        ) : (
          <FaArrowCircleLeft className="text-2xl" />
        )}
      </button>

      <button>
        <IoIosCloseCircle
          className="text-2xl absolute right-5 top-5 text-white"
          onClick={closeLightbox}
        />
      </button>
    </motion.div>
  );
}
