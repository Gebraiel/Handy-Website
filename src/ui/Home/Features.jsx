import { FaMedal } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";

export default function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch text-white">
      <div className="bg-contain bg-[url('/pattern.png')] text-center py-16 px-9 bg-gray transition-all duration-300 outline outline-8 outline-transparent hover:outline-[#e06c61] ">
        <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl">
          <FaMedal />
        </div>
        <h4 className="text-2xl font-bold my-5">Certified Quality</h4>
        <p className="text-sm text-[#b0cbd3]">
          Our products are ISO 9001 & ISO 14001 certified, ensuring the highest
          standards.
        </p>
      </div>
      <div className="bg-contain bg-[url('/pattern.png')] text-center py-16 px-9 bg-gray transition-all duration-300 outline outline-8 outline-transparent hover:outline-[#e06c61] ">
        <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl">
          <FaThumbsUp />
        </div>
        <h4 className="text-2xl font-bold my-5">Trusted</h4>
        <p className="text-sm text-[#b0cbd3]">
          Years of experience with advanced technology to deliver top-tier
          hygiene products.
        </p>
      </div>
      <div className="bg-contain bg-[url('/pattern.png')] text-center py-16 px-9 bg-gray transition-all duration-300 outline outline-8 outline-transparent hover:outline-[#e06c61] ">
        <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl">
          <RiLeafFill />
        </div>
        <h4 className="text-2xl font-bold my-5">Eco Friendly</h4>
        <p className="text-sm text-[#b0cbd3]">
          We prioritize sustainability, crafting products that are as kind to
          the planet as they are to you.
        </p>
      </div>
      <div className="bg-contain bg-[url('/pattern.png')] text-center py-16 px-9 bg-gray transition-all duration-300 outline outline-8 outline-transparent hover:outline-[#e06c61] ">
        <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl">
          <FaGlobe />
        </div>
        <h4 className="text-2xl font-bold my-5">Global Reach</h4>
        <p className="text-sm text-[#b0cbd3]">
          Exporting to over 10 countries, HANDY products are trusted worldwide.
        </p>
      </div>
    </div>
  );
}
