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
import SectorsNavigation from "../ui/Sectors/SectorsNavigation";
import Loader from "../ui/Loader";
import { useNavigation } from "react-router-dom";
export default function Sectors() {

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  
  if (isLoading) return <Loader />;

  return (
    <>
      <Banner
        image="/banner/slider-1.png"
        className="flex justify-center items-center "
      />
      <Section>
        <SectionTitle className="mb-10">Sectors</SectionTitle>
        <div className="flex flex-col  items-center gap-10">
         
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2  lg:w-full">
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
              <div className="flex flex-col items-center gap-2 justify-center text-lg"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>Tissue Paper Mill Capacity</b></div>
              <Counter counter="25000" duration={2000} countBy={100} />

              <Paragraph size="sm">
                Mtons / Year 
              </Paragraph>
            </div>
            <div className="p-5 bg-white shadow-md text-center  space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>Tissue Paper Converting Plant Capacity</b></div>

              <Counter counter="800" duration={2000} countBy={10} /> 
              <Paragraph size="sm">
                Mtons / Year 
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

      <SectorsNavigation links={["Handy Paper" ,"Handy Tissue Products","Handy Wet Wipes"]} />
 
     
    </>
  );
}
