import { useEffect, useState } from "react";
import Paragraph from "../Paragraph";

export default function Features({features}) {
  const[cols,setCols] = useState(features.length);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      setCols(window.innerWidth <= 991 ? 1:features.length);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{gridTemplateColumns : `repeat(${cols},1fr)` }} className={`grid xl:justify-start justify-center gap-5 items-stretch text-white`}>
    
    {
        features.map((feature,index)=>{
          return(
            <div key={index} className={`bg-contain bg-[url('/pattern.png')] text-center py-16 px-9 bg-gray transition-all duration-300  border-4 border-[#e06c61]`}>
              <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl">
                {feature.icon}
              </div>
              <h4 className="sm:text-2xl text-xl font-bold my-5">{feature.title}</h4>
              <Paragraph className="text-[#b0cbd3]" size="sm">
                {feature.description}
              </Paragraph>
            </div>
          )
        })  
      }
      {/* <div className="bg-contain bg-[url('/pattern.png')] text-center py-16 px-9 bg-gray transition-all duration-300 outline outline-8 outline-transparent hover:outline-[#e06c61] ">
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
      </div> */}
    </div>
  );
}
