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
import {  useNavigation } from "react-router-dom";
import FadeIn from "../ui/Animation/FadeIn";
import FadeLeft from "../ui/Animation/FadeLeft";
import FadeRight from "../ui/Animation/FadeRight";
import { useTranslation } from "react-i18next";
export default function Sectors() {
  const{t:tCommon,i18n} = useTranslation("Common");
  const{t:tSectors} = useTranslation("Sectors");
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
        <div className="flex items-center justify-between gap-10 flex-col lg:flex-row">
          <FadeLeft>
            <SectionTitle className="!mb-0">{tCommon("Sectors")}</SectionTitle>
          </FadeLeft>
          <FadeRight>
            <Paragraph size="md" className={`${i18n.language != 'ar' ? "text-start" : "text-justify" } py-5 max-w-[66ch]`}>
             {tSectors("Sectors-Content")}
            </Paragraph>
          </FadeRight>
        </div>
      </Section>
      <Section className="bg-primary">
        <SectionTitle className="text-white">{tSectors("Machinery")}</SectionTitle>
        <Features
          minWidth="300"
          features={[
            {
              icon: <MdOutlineSpeed />,
              title: tSectors("Machinery-Heading-01"),
              description: tSectors("Machinery-Content-01"),
            },

            {
              icon: <SlEnergy />,
              title: tSectors("Machinery-Heading-02"),
              description: tSectors("Machinery-Content-02"),
            },

            {
              icon: <FaTools />,
              title: tSectors("Machinery-Heading-03"),
              description: tSectors("Machinery-Content-03"),
            },
          ]}
        />
      </Section>
      <SectorsNavigation links={[tCommon("Handy Paper") ,tCommon("Handy Tissue Products"),tCommon("Wet Wipes")]} />
    </FadeIn>
  );
}
