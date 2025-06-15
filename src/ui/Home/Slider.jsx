import { useEffect, useMemo, useRef, useState } from "react";
import nextArrow from "../../assets/icon-next.svg";
import prevArrow from "../../assets/icon-previous.svg";
import Typing from "./Typing";
import Bullets from "./Bullets";
import {motion} from "motion/react";
function Slider({ slides}) {
  const [active, setActive] = useState(0);
  console.log("Slider rendering");
  let intervalRef = useRef(null)
  const intervalTime = 5000;
  function handleClick(fn){
    startInterval();
    fn();
  }
  function startInterval(){
    if(intervalRef.current){
      clearInterval(intervalRef.current)
    }
    intervalRef.current=setInterval(()=>{handleNext()},intervalTime);
  }
  function handleNext() {
    setActive((active) => (active == slides.length - 1 ? 0 : active + 1));
  }
  function handlePrev() {
    setActive((active) => (active == 0 ? slides.length - 1 : active - 1));
  }
  useEffect(()=>{
    startInterval();
    return ()=> clearInterval(intervalRef.current);
  },[])
  return (
    <div className="relative h-[calc(100vh)] ">
      <div className="absolute w-full h-full left-0 top-0 bg-[#09216d] opacity-30 z-10"></div>
      <div className={`relative h-full`}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="hidden lg:block">
              <img
              src={slide.image.desktop}
              className={`transition-all absolute duration-500 ease-in-out w-full h-full left-0 top-0 object-cover ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              key={slide.image.desktop}
            />
            </div>
            <div className="block lg:hidden">
              <img
                src={slide.image.mobile}
                  className={`transition-all absolute duration-500 ease-in-out w-full h-full left-0 top-0 object-cover ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
                key={slide.image.mobile}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center w-full h-full  absolute left-0 top-0 flex justify-center items-center z-10 text-white">
        {
          slides[active].content &&
          <div className="opacity-0 animate-fadeUp w-[90%]" key={active}>
            <Typing word={slides[active].content.subtitle}/>
            <h1 className={`text-4xl lg:text-5xl font-bold xl:text-6xl`}>
              {slides[active].content.heading}
            </h1>
          </div>
        }
      </div>
      <div className=" w-full hidden h-full justify-center items-end sm:flex sm:justify-between sm:items-center gap-5 pb-5 px-5 absolute left-0 top-0 z-20">
        <button
          className="bg-white w-10 h-10 flex justify-center items-center rounded-full"
          onClick={()=>handleClick(handlePrev)}
        >
          <img src={prevArrow} />
        </button>
        <button
          className="bg-white w-10 h-10 flex justify-center items-center rounded-full"
          onClick={()=>handleClick(handleNext)}
        >
          <img src={nextArrow} />
        </button>
      </div>
      <div className='flex gap-5 absolute w-full bottom-5 left-0 justify-center z-40'>
        <Bullets length={slides.length} active={active} setActive={setActive} handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default Slider;
