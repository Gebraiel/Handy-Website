import { FaMedal } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import Paragraph from "../Paragraph";
export default function Process() {
  return (
    <div className="flex flex-wrap justify-center gap-5 items-stretch ">
      <div className="bg-contain bg-[url('/pattern.png')] lg:basis-[300px] basis-[500px] text-center py-16 px-9 transition-all duration-300">
        <div className="w-fit m-auto text-3xl text-primary p-10 rounded-full border-2 border-secondary">
          <FaMedal />
        </div>
        <h4 className="text-2xl font-bold my-5 border-b-2 border-secondary pb-5">
          Pulping
        </h4>
        <Paragraph size="sm" className="text-left">
          <b>Raw Material</b> : Virgin wood pulp or recycled paper.
        </Paragraph>
        <Paragraph size="sm" className="text-left">
          <b>Pulping Process</b> : The raw material is processed into a fibrous
          slurry.
        </Paragraph>
      </div>
      <div className="bg-contain bg-[url('/pattern.png')] lg:basis-[300px] basis-[500px] text-center py-16 px-9 transition-all duration-300">
        <div className="w-fit m-auto text-3xl text-primary p-10 rounded-full border-2 border-secondary">
          <FaThumbsUp />
        </div>
        <h4 className="text-2xl font-bold my-5 border-b-2 border-secondary pb-5">
          Trusted
        </h4>
        <p className="text-sm">
          Years of experience with advanced technology to deliver top-tier
          hygiene products.
        </p>
      </div>
      <div className="bg-contain bg-[url('/pattern.png')] lg:basis-[300px] basis-[500px] text-center py-16 px-9 transition-all duration-300">
        <div className="w-fit m-auto text-3xl text-primary p-10 rounded-full border-2 border-secondary">
          <RiLeafFill />
        </div>
        <h4 className="text-2xl font-bold my-5 border-b-2 border-secondary pb-5">
          Eco Friendly
        </h4>
        <p className="text-sm">
          We prioritize sustainability, crafting products that are as kind to
          the planet as they are to you.
        </p>
      </div>
      <div className="bg-contain bg-[url('/pattern.png')] lg:basis-[300px] basis-[500px] text-center py-16 px-9 transition-all duration-300">
        <div className="w-fit m-auto text-3xl text-primary  p-10 rounded-full border-2 border-secondary">
          <FaGlobe />
        </div>
        <h4 className="text-2xl font-bold my-5 border-b-2 border-secondary pb-5">
          Global Reach
        </h4>
        <p className="text-sm ">
          Exporting to over 10 countries, HANDY products are trusted worldwide.
        </p>
      </div>
    </div>
  );
}
