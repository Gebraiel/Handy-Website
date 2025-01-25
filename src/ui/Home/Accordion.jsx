import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import Paragraph from "../Paragraph";
import {motion,AnimatePresence} from "framer-motion";

export default function Accordion({ accordion }) {
  const { heading, content } = accordion;
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="border-2 border-[#e5eaec] p-5 ">
      <div className="flex justify-between items-center">
        <b>{heading}</b>
        <button onClick={handleToggle} className="text-4xl text-primary">
          {isOpen ? <FaCircleMinus /> : <FaPlusCircle />}
        </button>
      </div>
      <AnimatePresence>
       {
         isOpen && 
         <motion.p
           key="content"
           layout
           initial={{height:0}}
           animate={{height:"auto"}}
           exit={{height:0}}
           transition={{ duration: 0.3 }}

           className={`text-sm overflow-hidden `}
         >
           
           {content}     
           
         </motion.p>
       }
      </AnimatePresence>

    </div>
  );
}
