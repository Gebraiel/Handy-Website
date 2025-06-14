import React from "react";
import Banner from "../ui/Banner";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";
import Paragraph from "../ui/Paragraph";
import { MdOutlineSpeed } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

import Features from "../ui/Home/Features";
import { FaTools } from "react-icons/fa";
import SectorsNavigation from "../ui/Sectors/SectorsNavigation";
import Loader from "../ui/Loader";
import { useNavigation } from "react-router-dom";
export default function Sectors() {
  console.log("Sectors");

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  

  return (
    <>
      <Banner
        image="/sectors/cover.webp"
        className="flex justify-center items-center "
      />
      <Section>
        <div className="flex items-center justify-between gap-10">
          <SectionTitle className="!mb-0">Sectors</SectionTitle>

          {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  lg:w-full">
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
              <div className="flex flex-col items-center gap-2 justify-center text-lg"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>Tissue Paper Mill Capacity</b></div>
              <Counter counter="25000"  />

              <Paragraph size="sm">
                Tons / Year 
              </Paragraph>
            </div>
            <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>Tissue Paper Converting Plant Capacity</b></div>

              <Counter counter="100"  /> 
              <Paragraph size="sm">
                Tons / Year 
              </Paragraph>
            </div>
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
              <div className="flex flex-col items-center gap-2 justify-center text-lg"><FaPeopleGroup  className="size-12" /> <b>Employee in Handy Paper Mill</b></div>
              <Counter counter="148" />

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
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
              <div className="flex flex-col items-center gap-2 justify-center text-lg"><FaGlobeAmericas  className="size-12" /> <b>Export Countries in Handy Paper Mill</b></div>
              <Counter counter="12" />

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
          </div> */}
          <Paragraph size="md" className="text-justify py-5 max-w-[66ch]">
            We take immense pride in the machinery and equipment that
            distinguish Handy from other factories, showcasing our commitment to
            innovation, efficiency, and sustainability.
          </Paragraph>
        </div>
      </Section>
      <Section className="bg-primary">
        <SectionTitle className="text-white">Machinery</SectionTitle>
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

      <SectorsNavigation links={["Handy Paper" ,"Handy Tissue Products","Handy Wet Wipes"]} />
 
     
    </>
  );
}
