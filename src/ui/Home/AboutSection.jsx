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
      <div className="flex lg:flex-row flex-col justify-between gap-14 lg:mt-16 2xl:mt-32">
        <div className="lg:w-2/3">
          <div className="mb-16 mt-20">
            <Paragraph className="font-semibold text-primary">
              OUR MISSION & VISION
            </Paragraph>
            <SectionTitle className="!text-left">
              <p className="text-secondary my-3"> +35 Years of</p>
              <p className="text-primary">
                Redefining hygiene standards in Egypt
              </p>
            </SectionTitle>
          </div>
          <div className="flex flex-col gap-5 justify-center mt-5 bg-white">
            {accordions.map((accordion, index) => (
              <Accordion accordion={accordion} open={true} key={index} />
            ))}
          </div>
        </div>
        <div className="max-w-[400px] m-auto">
          <img className="m-auto"  src={handy} alt="" loading="lazy" />
        </div>
      </div>
    </>
  );
}
