import React, { useEffect, useState } from "react";
import Section from "../Section";
import Paragraph from "../Paragraph";
import SectionTitle from "../SectionTitle";
import GallerySlider from "./GallerySlider";
import { motion } from "motion/react";
import { getImagesFromBucket } from "../../services/sectors";
import SwiperSlider from "./SwiperSlider";
import FadeLeft from "../Animation/FadeLeft";
import FadeIn from "../Animation/FadeIn";
const parentVarient = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const childrenVairent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export default function HandyWetWipes() {
  let [sectorImages, setSectorImages] = useState([]);
  useEffect(() => {
    async function getImages() {
      const images = await getImagesFromBucket("sectors", "Wet Wipes");
      setSectorImages(images);
    }
    getImages();
  }, []);
  return (
    <div>
      <Section className="!py-0 ">
        {/* <SectorsNavigation /> */}
        <div className="lg:block hidden">
          <FadeLeft>
            <img src="/sectors/sector3.webp" alt="" />
          </FadeLeft>
        </div>
        <div className="lg:hidden">
          <FadeLeft>
            <img src="/sectors/Handy Wet Wipes.webp" alt="" />
          </FadeLeft>
        </div>
        <div className="2xl:my-[50px] my-[50px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5 !text-left">
              Handy Wet Wipes
            </SectionTitle>
            <div className="space-y-3">
              <div>
                <b>Established : 2018</b>
                <Paragraph size="md" className="text-justify m-auto">
                  Since its inception, our wet wipes plant has been at the
                  forefront of producing premium-quality products that meet both
                  local and international standards. With a steadfast commitment
                  to customer satisfaction, we take pride in the positive
                  feedback we’ve received from consumers around the globe.
                </Paragraph>
              </div>
              <div>
                <b>State-of-the-Art Production Facility</b>
                <Paragraph size="md" className="text-justify m-auto">
                  Built to adhere to Good Manufacturing Practices (GMP), our
                  facility maintains strict hygiene standards across production
                  floors, laboratories, and warehouses. Equipped with a 40-roll
                  capacity machine, it produces various wipe sizes with an
                  impressive output of up to 3,000 cartons per day, ranking
                  among the most productive in the Middle East.
                </Paragraph>
              </div>
              <div>
                <b>Water and Chemical Systems</b>
                <Paragraph size="md" className="text-justify m-auto">
                  An automated water purification system ensures water quality
                  that meets European Pharmacopoeia and WHO standards.
                </Paragraph>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-[#f1eeee]">
        <div className="2xl:my-[50px] my-[50px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5">Production Process</SectionTitle>
            <Paragraph size="md" className="text-center">
              Using state-of-the-art converting machinery, our production process
              transforms jumbo rolls into high-quality tissue products through the
              following precise steps
            </Paragraph>
          </FadeIn>
          <motion.div
            variants={parentVarient}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 2xl:gap-10 gap-5 items-stretch 2xl:my-16 my-8"
          >
            <motion.div variants={childrenVairent} className={`text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                1
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Non-Woven Fabric Production
              </h4>
              <Paragraph size="sm" className="text-center">
                <b>Fiber Preparation</b>  
                <p>Raw materials like wood pulp or
                polyester are processed into fibers.</p>
              </Paragraph>
              <Paragraph size="sm" className="text-center">
                <b>Web Formation</b>
                <p>Fibers are transformed into a web using
                spun lace or air-laid techniques.</p>
              </Paragraph>
              <Paragraph size="sm" className="text-center">
                <b>Roll Formation</b>
                <p>The web is rolled into master rolls.</p>
              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center  `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                2
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Slitting and Rewinding
              </h4>
              <Paragraph size="sm" className="text-center">
                Master rolls are cut into narrower rolls and rewound for
                processing.
              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                3
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Solution Formulation
              </h4>
              <Paragraph size="sm" className="text-center">
                Ingredients like water, surfactants, and emollients are mixed to
                create the cleaning solution.
              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                4
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Impregnation
              </h4>
              <Paragraph size="sm" className="text-center">
                Fabric is impregnated with the solution, ensuring precise
                saturation for performance.
              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                5
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Folding and Cutting
              </h4>
              <Paragraph size="sm" className="text-center group-[]:">
                The fabric is folded and cut into individual wipes or sheets.
              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                6
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Packaging
              </h4>
              <Paragraph size="sm" className="text-center">
                Wipes are sealed in containers, pouches, or canisters to
                maintain quality.
              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                7
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Labelling and Secondary Packaging
              </h4>
              <Paragraph size="sm" className="text-center">
                Labels with product details are applied, and wipes are packed
                into cartons for shipment.
              </Paragraph>
            </motion.div>
          </motion.div>
          
        </div>
        <div className="2xl:mb-[50px] mb-[25px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5 !text-left">
            Key Drivers of Excellence
          </SectionTitle>
          <Paragraph size="md">Our plant thrives on the synergy of:</Paragraph>

          </FadeIn>
          <ul className="list-disc pl-5">
            <FadeLeft>
              <li>
                <Paragraph size="sm">
                  <b>Quality Control</b> : Ensures consistency and safety.
                </Paragraph>
              </li>
            </FadeLeft>
            <FadeLeft delay={0.1}>
              <li>
              <Paragraph size="sm">
                <b>Hygiene</b> : Prevents contamination.
              </Paragraph>
            </li>
            </FadeLeft>
            <FadeLeft delay={0.2}>
              <li>
              <Paragraph size="sm">
                <b>Regulatory Compliance</b> : Guarantees adherence to standards
                .
              </Paragraph>
            </li>
            </FadeLeft>
            <FadeLeft delay={0.3}>
              <li>
              <Paragraph size="sm">
                <b>Innovation</b> : Drives the creation of superior products.
              </Paragraph>
            </li>
            </FadeLeft>
          </ul>
        </div>
      </Section>
      <Section type="fullscreen" className="bg-[#f1eeee] px-5">
        {sectorImages && <SwiperSlider images={sectorImages}/>}
      </Section>
    </div>
  );
}
