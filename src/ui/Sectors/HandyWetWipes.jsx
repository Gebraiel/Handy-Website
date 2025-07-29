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
import { useTranslation } from "react-i18next";
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
  const{t:tCommon} = useTranslation("Common");
  const{t:tSectors} = useTranslation("Sectors");
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
            <SectionTitle className="2xl:mb-5 !text-start">
              {tCommon("Wet Wipes")}
            </SectionTitle>
            <div className="space-y-3">
              <div>
                <b>{tSectors("Handy-Wet-Wipes-Establised-Heading-01")}</b>
                <Paragraph size="md" className="text-justify m-auto">
                  {tSectors("Handy-Wet-Wipes-Establised-Content-01")}
                </Paragraph>
              </div>
              <div>
                <b>{tSectors("Handy-Wet-Wipes-Establised-Heading-02")}</b>
                <Paragraph size="md" className="text-justify m-auto">
                  {tSectors("Handy-Wet-Wipes-Establised-Content-02")}
                </Paragraph>
              </div>
              <div>
                <b>{tSectors("Handy-Wet-Wipes-Establised-Heading-03")}</b>
                <Paragraph size="md" className="text-justify m-auto">
                  {tSectors("Handy-Wet-Wipes-Establised-Content-03")}
                </Paragraph>

              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-[#f1eeee]">
        <div className="2xl:my-[50px] my-[50px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5">{tSectors("Production-Process")}</SectionTitle>
            <Paragraph size="md" className="text-center">
              {tSectors("Production-Process-Content")}

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
                {tSectors("Non-Woven-Fabric-Production")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Non-Woven-Fabric-Production-Content")}

              </Paragraph>

            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center  `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                2
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                {tSectors("Non-Woven-Folding")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Non-Woven-Folding-Content")}

              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                3
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                {tSectors("Solution-Formulation")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Solution-Formulation-Content")}

              </Paragraph>
            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                4
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                {tSectors("Impregnation")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Impregnation-Content")}

              </Paragraph>

            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                5
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                {tSectors("Folding-Cutting")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Folding-Cutting-Content")}

              </Paragraph>

            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                6
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                {tSectors("Wet-Wipes-Packaging")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Wet-Wipes-Packaging-Content")}

              </Paragraph>

            </motion.div>
            <motion.div variants={childrenVairent} className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                7
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                {tSectors("Labelling-Secondary-Packaging")}
              </h4>
              <Paragraph size="sm" className="text-center">
                {tSectors("Labelling-Secondary-Packaging-Content")}

              </Paragraph>

            </motion.div>
          </motion.div>

        </div>
        <div className="2xl:mb-[50px] mb-[25px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5 !text-start">
            {tSectors("Key Drivers of Excellence")}
          </SectionTitle>
          <Paragraph size="md">{tSectors("Wet-Wipes-Key-Excellence-Content")}</Paragraph>

          </FadeIn>
          <ul className="list-disc ps-5">
            <FadeLeft>
              <li>
                <Paragraph size="sm">
                  <b>{tSectors("Quality-Control")}</b> : {tSectors("Quality-Control-Content")}
                </Paragraph>
              </li>
            </FadeLeft>
            <FadeLeft delay={0.1}>
              <li>
              <Paragraph size="sm">
                <b>{tSectors("Hygiene")}</b> : {tSectors("Hygiene-Content")}
              </Paragraph>
            </li>
            </FadeLeft>
            <FadeLeft delay={0.2}>
              <li>
              <Paragraph size="sm">
                <b>{tSectors("Regulatory-Compliance")}</b> : {tSectors("Regulatory-Compliance-Content")}
              </Paragraph>
            </li>
            </FadeLeft>
            <FadeLeft delay={0.3}>
              <li>
              <Paragraph size="sm">
                <b>{tSectors("Innovation")}</b> : {tSectors("Innovation-Content")}
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
