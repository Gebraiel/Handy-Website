import Accordion from "./Accordion";
import handy from "../assets/handy.jpeg";
import SectionTitle from "./SectionTitle";
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
      <div className="flex lg:flex-row flex-col justify-between gap-14 mt-32">
        <div className="lg:w-2/3">
          <div className="mb-16 mt-20">
            <h5 className="font-semibold text-primary">
              OUR MISSION & VISION
            </h5>
            <SectionTitle className="!text-left">
                      <p className="text-secondary my-3">              +35 Years of
                      </p>
                      <p className="text-primary">              redefining hygiene standards in Egypt
                      </p>
            </SectionTitle>

          </div>
          <div className="flex flex-col gap-5 justify-center mt-5 xl:w-1/2">
            {accordions.map((accordion, index) => (
              <Accordion accordion={accordion} key={index} />
            ))}
          </div>
        </div>
        <div className="max-w-[400px] m-auto">
          <img className="m-auto" src={handy} alt="" />
        </div>
      </div>
    </>
  );
}
