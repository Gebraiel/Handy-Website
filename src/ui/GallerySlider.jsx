import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import SliderLightbox from './SliderLightbox';
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";

export default function Slider({images,noOfCols}) {
  const [x,setX] = useState(0);
  const [cols,setCols] = useState(noOfCols);
  const [active,setActive] = useState(-1);

  const size=images.length;

  const [noOfNext,setNoOfNext] = useState(size - cols);
  const [noOfPrev,setNoOfPrev] = useState(0);
  const [widthOfCol,setWidthOfCol] = useState( window.innerWidth / cols);

  console.log(widthOfCol)
  const calculateColumnWidth = () => {
    const newCols = window.innerWidth <= 500 ? 1 : window.innerWidth <= 720 ? 2 : noOfCols;
    setCols(newCols);
    console.log(window.innerWidth)
    setWidthOfCol(window.innerWidth / newCols); // Recalculate column width
    
  };
  function closeLightbox(){
    setActive(-1);
  }
  function handleNext(){
    setX(x - Math.floor(widthOfCol));
    setNoOfNext(noOfNext - 1);
    setNoOfPrev(noOfPrev + 1)
  }
  function handlePrev(){
    setX(x + Math.floor(widthOfCol));
    setNoOfPrev(noOfPrev - 1);
    setNoOfNext(noOfNext + 1)
  }

  useEffect(()=>{
    calculateColumnWidth()
    window.addEventListener("resize",calculateColumnWidth)
    return ()=> window.removeEventListener('resize',calculateColumnWidth);
    },[])

  useEffect(()=>{
    setNoOfNext(size-cols);
  },[cols])
  return (
    <>
        <div style={{transform:`translateX(${x}px)`,width:`${widthOfCol * size}px`}} className="flex  transition-transform duration-500">
                {images.map((image,index)=> <div key={index} style={{width:widthOfCol}} className='px-5'><button className='bg-blue-500 text-white w-full' onClick={()=>setActive(index)}><img src={image} alt="Gallery Image" /></button> </div> )}
        </div>
        <div className='flex justify-end gap-1'>
          <button disabled={noOfPrev == 0} className='py-3  text-primary text-2xl disabled:text-[#ccc] ' onClick={handlePrev}><HiArrowSmallLeft/></button>
          <button disabled={noOfNext == 0} className='py-3  text-primary text-2xl disabled:text-[#ccc] ' onClick={handleNext}><HiArrowSmallRight/></button>
        </div>
           
        <AnimatePresence>
            {active >=0 &&  <SliderLightbox images={images} active={active} closeLightbox={closeLightbox}/>}
        </AnimatePresence>
    
    </>
  )
}