import { useState } from "react";
import Gallery from "../Sustainability/Gallery";
import { AnimatePresence } from "motion/react";
import Lightbox from "../Lightbox";
export default function Certificates() {
  const [active, setActive] = useState(-1);
  const certificates = [
    "/certificates/certificates1.webp",
    "/certificates/certificates2.webp",
    "/certificates/certificates3.webp",
  ];
  function closeLightbox() {
    setActive(-1);
  }
  return (
    <>
      <Gallery handleClick={setActive} images={certificates} />
      <AnimatePresence>
        {active > -1 && (
          <Lightbox
            images={certificates}
            active={active}
            closeLightbox={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}
