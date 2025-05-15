import { useState } from "react";
import Gallery from "../Sustainability/Gallery";
import {AnimatePresence} from "motion/react"; 
import Lightbox from "../Lightbox";
export default function Certificates() {
  const [active,setActive] = useState(-1);
  const certificates = ['/certificates/certificates1.webp','/certificates/certificates2.webp','/certificates/certificates3.webp']
  function closeLightbox(){
    setActive(-1);
  }
  return (
    // <div className="flex flex-col md:flex-row justify-center gap-5">
    //   <div className="">
    //     <img
    //       className="border shadow-lg w-[350px] m-auto"
    //       src="/certificates/certificates1.webp"
    //       alt=""
    //     />
    //   </div>
    //   <div className="">
    //     <img
    //       className="border shadow-lg w-[350px] m-auto"
    //       src="/certificates/certificates2.webp"
    //       alt=""
    //     />
    //   </div>
    //   <div className="">
    //     <img
    //       className="border shadow-lg w-[350px] m-auto"
    //       src="/certificates/certificates3.webp"
    //       alt=""
    //     />
    //   </div>
    // </div>
    <>
        <Gallery handleClick={setActive} images={certificates}/>
        <AnimatePresence>
            {active > -1 &&  <Lightbox images={certificates} active={active} closeLightbox={closeLightbox}/>}
        </AnimatePresence>
    </>
  );
}
