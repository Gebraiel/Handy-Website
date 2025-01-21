import React from "react";
import Section from "./Section";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import GallerySlider from "./GallerySlider";
import {motion} from 'motion/react';

export default function HandyWetWipes() {
  return (
    <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:100}}>
      <Section className="!py-0">
        {/* <SectorsNavigation /> */}
        <div className='lg:block hidden'>
          <img src="/sectors/sector3.webp" alt="" />
        </div>
        <div className='lg:hidden'>
          <img src="/sectors/sector3.jpg" alt="" />
        </div>
        <div className="my-[50px]">
          <div>
            <SectionTitle className="mb-5 !text-left">
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
          </div>
        </div>
      </Section>

      <Section className="!py-0">
        <div className="my-[50px]">
          <SectionTitle className="my-5">
            Production Process
          </SectionTitle>
          <Paragraph size="md" className="text-center">
            Using state-of-the-art converting machinery, our production process
            transforms jumbo rolls into high-quality tissue products through the
            following precise steps
          </Paragraph>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-stretch my-16">
            <div className={`text-center`}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                1
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
              Non-Woven Fabric Production
              </h4>
              <Paragraph size="sm" className="sm:text-left">
              <b>Fiber Preparation</b> : Raw materials like wood pulp or
              polyester are processed into fibers.
              </Paragraph>
              <Paragraph size="sm" className="sm:text-left">
              <b>Web Formation</b> : Fibers are transformed into a web
                    using spun lace or air-laid techniques.
              </Paragraph>
              <Paragraph size="sm" className="sm:text-left">
              <b>Roll Formation</b> : The web is rolled into master rolls.
              </Paragraph>
            </div>
            <div className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                2
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
                Slitting and Rewinding
              </h4>
              <Paragraph size="sm" className="sm:text-left">
                Master rolls are cut into narrower
                rolls and rewound for processing.
              </Paragraph>
            </div>
            <div className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                3
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
              Solution Formulation
              </h4>
              <Paragraph size="sm" className="sm:text-left">
                Ingredients like water, surfactants,
                and emollients are mixed to create the cleaning solution.
              </Paragraph>
            </div>
            <div className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                4
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">Impregnation</h4>
              <Paragraph size="sm" className="sm:text-left">
                Fabric is impregnated with the solution,
                ensuring precise saturation for performance.
              </Paragraph>
            </div>
            <div className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                5
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">Folding and Cutting</h4>
              <Paragraph size="sm" className="sm:text-left group-[]:">
              The fabric is folded and cut into
              individual wipes or sheets.
              </Paragraph>
            </div>
            <div className={`text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                6
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">Packaging</h4>
              <Paragraph size="sm" className="sm:text-left">
              Wipes are sealed in containers, pouches, or
              canisters to maintain quality.
              </Paragraph>
            </div>
            <div className={` text-center `}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                7
              </div>
              <h4 className="text-2xl font-bold my-5 text-primary">
              Labelling and Secondary Packaging
              </h4>
              <Paragraph size="sm" className="sm:text-left">
              Labels with product
              details are applied, and wipes are packed into cartons for
              shipment.
              </Paragraph>
            </div>
 
          </div>
        </div>
        <div className="mb-[50px]">
          <SectionTitle className="my-5 !text-left">
            Key Drivers of Excellence
          </SectionTitle>
          <Paragraph size="md">Our plant thrives on the synergy of:</Paragraph>

          <ul className="list-disc pl-5">
            <li>
              <Paragraph size="sm">
                <b>Quality Control</b> : Ensures consistency and safety.
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Hygiene</b> : Prevents contamination.
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Regulatory Compliance</b> : Guarantees adherence to standards .
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Innovation</b> : Drives the creation of superior products.
              </Paragraph>
            </li>
          </ul>

         
        </div>
      </Section>
      <Section type="fullscreen" >
        <GallerySlider images={['/sectors/sector1.webp','/sectors/sector2.webp','/sectors/sector3.webp']} noOfCols={3}/>
      </Section>
    </motion.div>
  );
}
