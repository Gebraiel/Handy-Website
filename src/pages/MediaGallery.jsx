import Gallery from "../ui/Sustainability/Gallery";
import FadeIn from "../ui/Animation/FadeIn";
import Banner from "../ui/Banner";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useState } from "react";
// import { AnimatePresence } from "framer-motion/dist";
import Lightbox from "../ui/Lightbox";
// import Lightbox from "src/ui/Lightbox";

export default function MediaGallery() {

      const [active,setActive] = useState(-1);
    

    const sustainabilityLength = 14;
const sustainabilityImagesArray = Array.from(
  { length: sustainabilityLength },
  (_, i) =>
    `/sustainability/sign system-${i + 1 < 10 ? "0" + (i + 1) : i + 1}.jpg`
);
const lightBoxImagesLength = 14;
const lightBoxImages = Array.from(
  { length: lightBoxImagesLength },
  (_, i) =>
    `/School Visit/School${i + 1}.webp`
);

  const blog = {
    title: "Getting Started with React",

  }

  return (
    <>
       <FadeIn>
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('../../public/Banners/sustainability.webp')` }}>
        <div className="absolute inset-0 flex items-center justify-start lg:ps-[110px] ps-4">
          <h1 className="text-5xl font-bold text-white">
           {blog?.title}
          </h1>
        </div>
      </section>
      <FadeIn>
        <Section className="!pt-30 !pb-0">
        <SectionTitle className="!mb-10">
            Media Gallery
        </SectionTitle>

   
      </Section>
      </FadeIn>

      <Section className="!py-30">
   

        <Gallery handleClick={setActive} images={lightBoxImages}/>
        {/* <AnimatePresence>
            {active > -1 &&  <Lightbox images={lightBoxImages} active={active} closeLightbox={closeLightbox}/>}
        </AnimatePresence>     */}
          </Section>
    </FadeIn>
    </>
  )
}
