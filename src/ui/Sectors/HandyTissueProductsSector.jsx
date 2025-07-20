import React, { useEffect, useState } from "react";
import Section from "../Section";
import Paragraph from "../Paragraph";
import SectionTitle from "../SectionTitle";
import GallerySlider from "./GallerySlider";
import {motion} from 'motion/react';
import { getImagesFromBucket } from "../../services/sectors";
import SwiperSlider from "./SwiperSlider";
import Counter from "../Counter";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import FadeLeft from "../Animation/FadeLeft";
import FadeIn from "../Animation/FadeIn";
import { useTranslation } from "react-i18next";
const parentVarient = {

  visible:{
    transition:{
      staggerChildren:0.3
    }
  }
}
const childrenVairent={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}

export default function HandyTissueProductsSector() {
   let [sectorImages,setSectorImages] = useState([]);
   const{t:tCommon,i18n}=useTranslation("Common");
   const{t:tSectors}=useTranslation("Sectors");
   useEffect(()=>{
     async function getImages(){
       const images = await getImagesFromBucket('sectors','Handy Tissue');
       setSectorImages(images);
     }
     getImages()
   },[])
  return (
    <div>
      <Section className="!py-0">
        {/* <SectorsNavigation /> */}

        <div className='lg:block hidden'>
          <FadeLeft>
            <img src="/sectors/sector2.webp" alt="" />
          </FadeLeft>
        </div>
        <div className='lg:hidden'>
          <FadeLeft>
            <img src="/sectors/Handy Tissue Products.webp" alt="" />
          </FadeLeft>
        </div>

        <div className="2xl:my-[50px] my-[25px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5 !text-start">
              {tCommon("Handy Tissue Products")}
            </SectionTitle>
            <Paragraph size="md" className="text-justify m-auto">
              {tSectors("Handy-Tissue-Products-Content-01")}
            </Paragraph>

            <Paragraph size="md" className="text-justify m-auto my-3">
              {tSectors("Handy-Tissue-Products-Content-02")}


            </Paragraph>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-[#f1eeee]">
        <div className="2xl:my-[50px] my-[25px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5 !leading-tight ">
            <p className=" text-primary">{tSectors("Transformation-Process-Heading-01")}</p>
            <p className="text-secondary">{tSectors("Transformation-Process-Heading-02")}</p>

            </SectionTitle>
            <Paragraph size="md" className="text-center">
              {tSectors("Transformation-Process-Content")}
            </Paragraph>
          </FadeIn>
           <motion.div variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 2xl:gap-10 gap-5 items-stretch 2xl:my-16 my-8">

                <motion.div variants={childrenVairent} className={`text-center `} >
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    1
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">
                    {tSectors("Unwinding")}
                  </h4>
                  <Paragraph size="sm" className="text-center">
                    {tSectors("Unwinding-Content")}

                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent} className={` text-center  `} >
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      2
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Embossing")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Embossing-Content")}

                    </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    3
                  </div>
                   <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Perforation")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Perforation-Content")}

                    </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      4
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Folding")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Folding-Content")}

                    </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      5
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Cutting")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Cutting-Content")}

                    </Paragraph>


                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      6
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Winding")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Winding-Content")}

                    </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    7
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Packaging")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Packaging-Content")}

                    </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    8
                  </div>
                   <h4 className="text-2xl font-bold my-5 text-primary">
                      {tSectors("Palletizing")}
                    </h4>
                    <Paragraph size="sm" className="text-center">
                      {tSectors("Palletizing-Content")}

                    </Paragraph>

                </motion.div>
          </motion.div>

        </div>
        <div className="mb-[50px]">
          <FadeIn>
            <SectionTitle className="2xl:mb-5 !text-start">
              {tSectors("Key Drivers of Excellence")}
          </SectionTitle>
          <Paragraph size="md">{tSectors("Handy-Tissue-Key-Excellence-Content-01")}</Paragraph>

          </FadeIn>
          <ul className="list-disc ps-5">
            <FadeLeft>
            <li>
              <Paragraph size="sm">
                <b>{tSectors("Advanced-Machinery")}</b> : {tSectors("Advanced-Machinery-Content")}
              </Paragraph>
            </li>

            </FadeLeft>
            <FadeLeft delay={0.1}>
              <li>
              <Paragraph size="sm">
                <b>{tSectors("High-Quality-Materials")}</b> : {tSectors("High-Quality-Materials-Content")}
              </Paragraph>
            </li>
            </FadeLeft>
            <FadeLeft delay={0.2}>
              <li>
              <Paragraph size="sm">
                <b>{tSectors("Expert-Operators")}</b> : {tSectors("Expert-Operators-Content")}
              </Paragraph>
            </li>
            </FadeLeft>
            <FadeLeft delay={0.3}>
              <li>
              <Paragraph size="sm">
                <b>{tSectors("Robust-Quality-Checks")}</b> : {tSectors("Robust-Quality-Checks-Content")}
              </Paragraph>
            </li>
            </FadeLeft>
          </ul>

          <FadeIn delay={0.4}>
            <Paragraph size="lg" className="mt-3">
            {tSectors("Handy-Tissue-Key-Excellence-Content-02")}
          </Paragraph>
          </FadeIn>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  lg:w-full">

            <FadeIn>
              <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-sm"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>{tSectors("Tissue Paper Converting Plant Capacity")}</b></div>

              <Counter counter="10000"  />
              <Paragraph size="sm">
                {tSectors("Tons / Year")}
              </Paragraph>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                          <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-sm"><FaPeopleGroup  className="size-12" /> <b>{tSectors("Employee in Converting Plant")}</b></div>

              <Counter counter="112" />
              <Paragraph size="sm">
                {tSectors("Employee")}
              </Paragraph>
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-sm"><FaGlobeAmericas  className="size-12" /> <b>{tSectors("Export Countries in Converting Plant")}</b></div>

              <Counter counter="10" duration={5000} countBy={10} />
              <Paragraph size="sm">
                {tSectors("Country")}

              </Paragraph>
            </div>
            </FadeIn>
          </div>
      </Section>
      <Section type="fullscreen" className="bg-[#f1eeee]  px-5">
        {sectorImages&&<SwiperSlider key={i18n.language} images={sectorImages}/>}
      </Section>
    </div>
  );
}
