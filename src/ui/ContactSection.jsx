import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaTty } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import Paragraph from "./Paragraph";

export default function ContactSection() {
  return (
    <div className="flex justify-between flex-wrap gap-16 flex-col md:flex-row  m-auto">
      <div className="">
        <div className="flex relative gap-3 items-center text-xl text-primary font-semibold border-b-2 border-[#ececec] pb-5 before:content-[''] before:w-14 before:h-1 before:bg-[rgba(9,33,109,0.7)] before:absolute before:left-0 before:-bottom-1 before:-translate-y-1/2">
          <FaMapMarkedAlt className="text-3xl text-[rgba(9,33,109,0.7)]" />{" "}
          HANDY TISSUE MILL
        </div>
        <ul className="py-8 space-y-5">
          <li className="flex items-center gap-5 text-primary">
            <FaMapMarkerAlt className="text-2xl" />
            <Paragraph className="font-medium" size="sm">
              Block No.13, Second Industrial Zone, New Borg El Arab City,
              Alexandria, Egypt.
            </Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaEnvelopeOpen className="text-2xl" />
            <Paragraph className="font-medium">tissue.mill@handy.com.eg</Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaTty className="text-2xl" />
            <Paragraph className="font-medium flex flex-col">
              <span>+2 03 4626379</span>
              <span>+2 03 4626425</span>
            </Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaPhone className="text-2xl" />
            <Paragraph className="font-medium">+2 0122390783</Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaFax className="text-2xl" />
            <Paragraph className="font-medium">+2 03 4626164</Paragraph>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="flex relative gap-3 items-center text-xl text-primary font-semibold border-b-2  border-[#ececec] pb-5 before:content-[''] before:w-14 before:h-1 before:bg-[rgba(9,33,109,0.7)] before:absolute before:left-0 before:-bottom-1 before:-translate-y-1/2">
          <FaMapMarkedAlt className="text-3xl text-[rgba(9,33,109,0.7)]" />{" "}
          HANDY CONVERTING PLANT
        </div>
        <ul className="py-8 space-y-5">
          <li className="flex items-center gap-5 text-primary">
            <FaMapMarkerAlt className="text-2xl" />
            <Paragraph className="font-medium" size="sm">
              Block No. (86,87,88), Fourth Industrial Zone, October 6th City,
              Giza, Egypt.
            </Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaEnvelopeOpen className="text-2xl" />
            <Paragraph className="font-medium">info@handy.com.eg</Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaTty className="text-2xl" />
            <Paragraph className="font-medium flex flex-col">
              <span>+2 02 38333156</span>
            </Paragraph>
          </li>

          <li className="flex items-center gap-5 text-primary">
            <FaFax className="text-2xl" />
            <Paragraph className="font-medium">+2 02 38333157</Paragraph>
          </li>
        </ul>
      </div>
    </div>
  );
}
