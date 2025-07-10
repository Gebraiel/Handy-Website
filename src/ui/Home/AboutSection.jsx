import Accordion from "./Accordion";
import handy from "../../assets/handy.webp";
import SectionTitle from "../SectionTitle";
import Paragraph from "../Paragraph";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const {t} = useTranslation("Home");

  const accordions = [
    {
      heading: t("Accordion1-Heading"),
      content:
        t("Accordion1-Content"),
    },
    {
      heading: t("Accordion2-Heading"),
      content:
         t("Accordion2-Content"),
    },
  ];
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between gap-14 2xl:mt-32 mt-16 ">
        <div className="lg:w-2/3">
          <div className="">
            <Paragraph className="font-semibold text-primary">
              {t("Our-Mission-Vision")}
            </Paragraph>
            <SectionTitle className="!text-start">
              <p className="text-secondary 2xl:my-5 xl:my-1"> {t("Vision-Content1")}</p>
              <p className="text-primary">
                {t("Vision-Content2")}
              </p>
            </SectionTitle>
          </div>
          <div className="flex flex-col gap-2 justify-center  bg-white">
            {accordions.map((accordion, index) => (
              <Accordion accordion={accordion} open={true} key={index} />
            ))}
          </div>
        </div>
        <div className=" max-w-[400px] xl:w-[400px] 2xl:w-full m-auto">
          <img className="m-auto xl:w-full xl:h-52 2xl:h-auto xl:object-cover" src={handy} alt=""  />
        </div>
      </div>
    </>
  );
}
