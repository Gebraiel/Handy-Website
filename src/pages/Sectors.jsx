import React from "react";
import Banner from "../ui/Banner";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";
import Paragraph from "../ui/Paragraph";
import { MdOutlineSpeed } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";


import Features from "../ui/Home/Features";
import { FaTools } from "react-icons/fa";
import SectorsNavigation from "../ui/Sectors/SectorsNavigation";
import Loader from "../ui/Loader";
import { useNavigation } from "react-router-dom";
import FadeIn from "../ui/Animation/FadeIn";
import FadeLeft from "../ui/Animation/FadeLeft";
import FadeRight from "../ui/Animation/FadeRight";
export default function Sectors() {
  console.log("Sectors");

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;

  return (
    <FadeIn>
      <Banner
        image="/sectors/cover.webp"
        className="flex justify-center items-center "
      />
      <Section>
        <div className="flex items-center justify-between gap-10">
          <FadeLeft>
            <SectionTitle className="!mb-0">Sectors</SectionTitle>
          </FadeLeft>
          <FadeRight>
            <Paragraph size="md" className="text-justify py-5 max-w-[66ch]">
              We take immense pride in the machinery and equipment that
              distinguish Handy from other factories, showcasing our commitment to
              innovation, efficiency, and sustainability.
            </Paragraph>
          </FadeRight>
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
 
     
    </FadeIn>
  );
}
