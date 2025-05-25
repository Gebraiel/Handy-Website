import React, { useState } from "react";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Banner from "../ui/Banner";
import Paragraph from "../ui/Paragraph";
import Gallery from "../ui/Sustainability/Gallery";
import Loader from "../ui/Loader";
import { useNavigation } from "react-router-dom";
import {AnimatePresence} from "motion/react"
import Lightbox from "../ui/Lightbox";
const sustainabilityLength = 14;
const sustainabilityImagesArray = Array.from(
  { length: sustainabilityLength },
  (_, i) =>
    `/sustainability/sign system-${i + 1 < 10 ? "0" + (i + 1) : i + 1}.jpg`
);
const lightBoxImagesLength = 15;
const lightBoxImages = Array.from(
  { length: lightBoxImagesLength },
  (_, i) =>
    `/School Visit/School${i + 1}.webp`
);

export default function Sustainability() {
  const [active,setActive] = useState(-1);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  function closeLightbox(){
    setActive(-1);
  }
  return (
    
    <>
      <Banner
        image="/Banners/sustainability.webp"
        className="flex items-center justify-center"
      />
      <Section>
        <SectionTitle>Sustainability</SectionTitle>

        <div className="flex flex-col gap-5 justify-between">
          <div className="w-full space-y-5">
          <Paragraph className="text-justify" size="md">
          At Handy, sustainability isn’t just a goal; it’s a core value.
We lead with purpose, prioritizing responsible sourcing, efficient production processes, and eco-friendly packaging to minimize our environmental footprint and contribute to a greener future.
          </Paragraph>
          <Paragraph className="text-justify" size="md">
          Since our founding, we have focused on creating lasting value for society, nature, and humanity. Our commitment is reflected in the use of Recard to recycle high-quality waste paper and the integration of virgin pulp with selected recycled materials, reducing waste and promoting circularity.
          </Paragraph>
          
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(14,1fr)] gap-5 mt-10 m-auto">
            {sustainabilityImagesArray.map((e,index) => (
              <img src={e} key={index}/>
            ))}
          </div>
        </div>
      </Section>

      <Section >
        <SectionTitle>School Visits</SectionTitle>

        <Paragraph className="text-justify mb-10" size="md">
          Guided by the United Nations Global Compact and Sustainable Development Goals, we ensure that all our activities are aligned with these principles. With a shared mission to leave a better world for future generations, we are proud of the positive contributions we make to both the environment and the communities we serve.
          </Paragraph>

        <Gallery handleClick={setActive} images={lightBoxImages}/>
        <AnimatePresence>
            {active > -1 &&  <Lightbox images={lightBoxImages} active={active} closeLightbox={closeLightbox}/>}
        </AnimatePresence>      </Section>
    </>
  );
}
