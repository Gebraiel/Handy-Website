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
   useEffect(()=>{
     async function getImages(){
       const images = await getImagesFromBucket('sectors','Handy Tissue');
       setSectorImages(images);
     }
     getImages()
   },[])
  return (
    <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:100}}>
      <Section className="!py-0">
        {/* <SectorsNavigation /> */}

        <div className='lg:block hidden'>
          <img src="/sectors/sector2.webp" alt="" />
        </div>
        <div className='lg:hidden'>
          <img src="/sectors/Handy Tissue Products.webp" alt="" />
        </div>
        <div className="2xl:my-[50px] my-[25px]">
          <div>
            <SectionTitle className="2xl:mb-5 !text-left">
              Handy Tissue Products
            </SectionTitle>
            <Paragraph size="md" className="text-justify m-auto">
              In 2018, we took a bold step forward by establishing our second
              facility in 6th of October City. Equipped with cutting-edge South
              Korean technology and highly automated packaging systems, this
              plant reflects our commitment to innovation and efficiency.
            </Paragraph>

            <Paragraph size="md" className="text-justify m-auto my-3">
              This advanced facility specializes in producing a versatile range
              of tissue paper products tailored to meet diverse consumer needs,
              including facial tissues, toilet paper, kitchen towels, table
              napkins, handkerchiefs, and C-fold towels.
            </Paragraph>
          </div>
        </div>
      </Section>

      <Section className="bg-[#f1eeee]">
        <div className="2xl:my-[50px] my-[25px]">
          <SectionTitle className="2xl:mb-5 !leading-tight ">
          <p className=" text-primary">The Transformation Process</p>
          <p className="text-secondary">From Jumbo Rolls to Everyday Essentials</p>
             
          </SectionTitle>
          <Paragraph size="md" className="text-center">
            Using state-of-the-art converting machinery, our production process
            transforms jumbo rolls into high-quality tissue products through the
            following precise steps:
          </Paragraph>
           <motion.div variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 2xl:gap-10 gap-5 items-stretch 2xl:my-16 my-8">
                
                <motion.div variants={childrenVairent} className={`text-center `} >
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    1
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">
                    Unwinding
                  </h4>
                  <Paragraph size="sm" className="sm:text-left">
                    Jumbo rolls are fed into machines with care to ensure seamless
                    processing.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent} className={` text-center  `} >
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      2
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">
                      Embossing
                    </h4>
                    <Paragraph size="sm" className="sm:text-left">
                      Patterns like ripples and diamonds are added to enhance texture,
                      softness, and absorbency.
                    </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    3
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">
                    Perforation
                  </h4>
                  <Paragraph size="sm" className="sm:text-left">
                    Clean, adjustable perforations allow easy tearing and versatile
                    product lengths.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      4
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">Folding</h4>
                    <Paragraph size="sm" className="sm:text-left">
                      Products are folded into uniform shapes, whether sheets, rolls,
                      or interfolded packs.
                    </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      5
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">Cutting</h4>
                    <Paragraph size="sm" className="sm:text-left group-[]:">
                      Advanced cutters shape each item to precise dimensions for
                      consistency.
                    </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      6
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">Winding</h4>
                    <Paragraph size="sm" className="sm:text-left">
                      Clean, adjustable perforations allow easy tearing and versatile
                      product lengths.
                    </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    7
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">
                    Packaging
                  </h4>
                  <Paragraph size="sm" className="sm:text-left">
                    Finished products are carefully wrapped, ensuring quality while
                    showcasing Handy's branding.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    8
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">
                    Palletizing
                  </h4>
                  <Paragraph size="sm" className="sm:text-left">
                    Packaged items are efficiently stacked for optimal storage and
                    transport.
                  </Paragraph>
                </motion.div>
          </motion.div>
          
        </div>
        <div className="mb-[50px]">
          <SectionTitle className="2xl:mb-5 !text-left">
            Key Drivers of Excellence
          </SectionTitle>
          <Paragraph size="md">Our plant thrives on the synergy of:</Paragraph>

          <ul className="list-disc pl-5">
            <li>
              <Paragraph size="sm">
                <b>Advanced Machinery</b> : Delivering precision and efficiency
                at every stage.
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>High-Quality Materials</b> : Ensuring superior softness,
                strength, and absorbency.
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Expert Operators</b> : Skilled hands and sharp eyes maintain
                production standards .
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Robust Quality Checks</b> : Guaranteeing defect-free,
                top-tier products.
              </Paragraph>
            </li>
          </ul>

          <Paragraph size="lg" className="mt-3">
            With this facility, Handy Tissue Products continues to set new
            benchmarks in hygiene product manufacturing, blending cutting-edge
            technology with an unwavering commitment to quality.
          </Paragraph>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  lg:w-full">

            <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>Tissue Paper Converting Plant Capacity</b></div>

              <Counter counter="1000"  /> 
              <Paragraph size="sm">
                Tons / Year 
              </Paragraph>
            </div>
            
            <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><FaPeopleGroup  className="size-12" /> <b>Employee in Converting Plant</b></div>

              <Counter counter="112" /> 
              <Paragraph size="sm">
                Tons / Year 
              </Paragraph>
            </div>
          
            <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><FaGlobeAmericas  className="size-12" /> <b>Export Countries in Converting Plant Capacity</b></div>

              <Counter counter="10" duration={5000} countBy={10} /> 
              <Paragraph size="sm">
                Tons / Year 
              </Paragraph>
            </div>
          </div>
      </Section>
      <Section type="fullscreen" className="bg-[#f1eeee]  px-5">
        {sectorImages&&<SwiperSlider images={sectorImages}/>}
      </Section>
    </motion.div>
  );
}
