import Accordion from "./Accordion";
import handy from "../../assets/handy.webp";
import SectionTitle from "../SectionTitle";
import Paragraph from "../Paragraph";
const accordions = [
  {
    heading: "Our Mission",
    content:
      "To provide innovative, high-quality hygiene solutions that elevate your daily life while championing sustainability.",
  },
  {
    heading: "Our Vision",
    content:
      "To become the world’s leading hygiene brand, celebrated for our commitment to excellence, innovation, and environmental responsibility.",
  },
];
export default function AboutSection() {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between gap-14 2xl:mt-32 mt-16 ">
        <div className="lg:w-2/3">
          <div className="">
            <Paragraph className="font-semibold text-primary">
              OUR MISSION & VISION
            </Paragraph>
            <SectionTitle className="!text-left">
              <p className="text-secondary 2xl:my-5 xl:my-1"> +35 Years of</p>
              <p className="text-primary">
                Redefining hygiene standards in Egypt
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
