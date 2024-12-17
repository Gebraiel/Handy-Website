import Accordion from "./Accordion";
import handy from "../assets/handy.jpeg";
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
        <div className="lg:w-2/5">
          <div className="mb-16 mt-20">
            <h5 className="font-semibold text-primary">
              OUR MISSION & VISION
            </h5>
            <h2 className="text-6xl font-bold text-secondary my-3">
              +35 Years of
            </h2>
            <h3 className="text-3xl font-bold text-primary">
              redefining hygiene standards in Egypt
            </h3>
          </div>
          <div className="flex flex-col gap-5 justify-center mt-5">
            {accordions.map((accordion, index) => (
              <Accordion accordion={accordion} key={index} />
            ))}
          </div>
        </div>
        <div className="">
          <img className="m-auto" src={handy} alt="" />
        </div>
      </div>
    </>
  );
}
