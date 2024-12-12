import { useState } from "react";
import nextArrow from "../assets/icon-next.svg";
import prevArrow from "../assets/icon-previous.svg";
function Slider({ images, headings }) {
  const [active, setActive] = useState(0);
  function handleNext() {
    setActive((active) => (active == images.length - 1 ? 0 : active + 1));
  }

  function handlePrev() {
    setActive((active) => (active == 0 ? images.length - 1 : active - 1));
  }

  return (
    <div className="relative h-[calc(100vh)] ">
      <div className="absolute w-full h-full left-0 top-0 bg-[#09216d] opacity-30 z-10"></div>
      <div className={`relative h-full`}>
        {images.map((image, index) => (
          <img
            src={image}
            className={`transition-all absolute duration-500 ease-in-out w-full h-full left-0 top-0 object-cover ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            key={image}
          />
        ))}
      </div>
      <div className="text-center w-full h-full  absolute left-0 top-0 flex justify-center items-center z-10 text-white">
        <div className="animate-fadeUp" key={active}>
          <p className="relative w-fit m-auto z-0 before:content-[''] whitespace-nowrap overflow-hidden before:absolute before:left-0 before:animate- before:top-0 before:w-full before:h-full before:bg-[#7f8789] before:">
            Hello
          </p>
          <h1 className={`w-[80%] m-auto text-3xl font-bold sm:text-5xl  `}>
            {headings[active].heading}
          </h1>
        </div>
      </div>
      <div className=" w-full flex h-full justify-center items-end sm:justify-between sm:items-center gap-5 pb-5 px-5 absolute left-0 top-0 z-20">
        <button
          className="bg-white w-10 h-10 flex justify-center items-center rounded-full"
          onClick={handlePrev}
        >
          <img src={prevArrow} />
        </button>
        <button
          className="bg-white w-10 h-10 flex justify-center items-center rounded-full"
          onClick={handleNext}
        >
          <img src={nextArrow} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
