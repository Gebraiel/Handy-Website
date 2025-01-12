import React from "react";
import Banner from "../ui/Banner";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";
import Paragraph from "../ui/Paragraph";
import Counter from "../ui/Counter";
import { MdOutlineSpeed } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import Features from "../ui/Home/Features";
import { FaTools } from "react-icons/fa";
import SectorsNavigation from "../ui/SectorsNavigation";
import HandyPaperSector from "../ui/HandyPaperSector";
import HandyTissueProductsSector from "../ui/HandyTissueProductsSector";
import HandyWetWipes from "../ui/HandyWetWipes";


export default function Sectors() {
  return (
    <>
      <Banner
        image="/banner/slider-1.png"
        className="flex justify-center items-center "
      >
        <SectionTitle className="text-primary font-bold text-center capitalize">
          Sectors
        </SectionTitle>
      </Banner>
      <Section>
        <div className="flex flex-col lg:flex-row items-center gap-10">
         
          <div className="flex flex-col md:flex-row justify-center lg:justify-start  gap-5 ">
            <div className="p-5 bg-white  text-center space-y-5 lg:w-1/2 w-full">
              <b className="xl:text-2xl md:text-md">Capacity</b>
              <Counter counter="25000" duration={2000} countBy={100} />

              <Paragraph size="sm">
                Mtons / Year of Tissue Paper
              </Paragraph>
            </div>
            <div className="p-5 bg-white text-center  space-y-5 lg:w-1/2 w-full">
              <b className="xl:text-2xl md:text-md">Eco Friendly</b>
              <Counter counter="800" duration={2000} countBy={10} />
              <Paragraph size="sm">
                Mtons / Year of Converted Tissue Paper Products
              </Paragraph>
            </div>
          </div>
          <Paragraph size="md" className="text-justify py-5 max-w-[66ch]">
            We take immense pride in the machinery and equipment that
            distinguish Handy from other factories, showcasing our commitment to
            innovation, efficiency, and sustainability.
          </Paragraph>
        </div>
      </Section>
      <Section className="bg-primary">
        <SectionTitle className="text-white mb-10">Machinery</SectionTitle>
        <Features
          minWidth="300"
          features={[
            {
              icon: <MdOutlineSpeed />,
              title: "High-Speed Paper Machines",
              description: `These machines accelerate production, boosting capacity and reducing costs.`,
            },

            {
              icon: <SlEnergy />,
              title: "Energy-Efficient Paper Machines",
              description: `Designed to minimize energy consumption, these machines contribute to lower operating costs while benefiting the environment.
`,
            },

            {
              icon: <FaTools />,
              title: "Advanced Paper Finishing Equipment",
              description: `Our high-tech equipment produces premium-quality paper with finishes like coated, embossed, and textured paper, ensuring we meet diverse customer needs.
`,
            },
          ]}
        />
      </Section>

      <SectorsNavigation>
        <HandyPaperSector />
        <HandyTissueProductsSector />
        <HandyWetWipes />
      </SectorsNavigation>
    </>
  );
}
