import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

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
      <div
        className={`transition-all duration-300 overflow-hidden text-sm ${
          isOpen ? "max-h-50 mt-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
