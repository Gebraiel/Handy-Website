import { useEffect, useState } from "react";
import Paragraph from "../Paragraph";
import FadeIn from "../Animation/FadeIn";

export default function Features({ features }) {
  const [cols, setCols] = useState(features.length);
  useEffect(() => {
    const handleResize = () => {
      setCols(window.innerWidth <= 991 ? 1 : features.length);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}
      className={`grid xl:justify-start justify-center gap-5 items-stretch text-white`}
    >
      {features.map((feature, index) => {
        return (
          <FadeIn delay={0.1 * index} key={index}>
            <div
              className={`bg-contain bg-[url('/pattern.png')] h-full text-center py-8 px-9 bg-gray transition-all duration-300  border-4 border-[#e06c61]`}
            >
              <div className="pb-2 border-b-2 border-secondary w-fit m-auto text-3xl">
                {feature.icon}
              </div>
              <h4 className="sm:text-2xl text-xl font-bold my-5">
                {feature.title}
              </h4>
              <Paragraph className="text-[#b0cbd3]" size="sm">
                {feature.description}
              </Paragraph>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
