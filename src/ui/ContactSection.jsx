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
            <FaMapMarkerAlt className="w-[24px]  text-2xl" />
            <Paragraph className="font-medium" size="sm">
              <a href="https://maps.app.goo.gl/sQavxE64RvDio4LT8" target="_blank">
              Block No.13, Second Industrial Zone, New Borg El Arab City,
              Alexandria, Egypt.
              </a>
            </Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaEnvelopeOpen className="w-[24px] text-2xl" />
            <Paragraph className="font-medium"><a href="mailto:tissue.mill@handy.com.eg">tissue.mill@handy.com.eg</a></Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaTty className="w-[24px] text-2xl" />
            <Paragraph className="font-medium flex flex-col">
              <a href="tel:+2034626379">+2 03 4626379</a>
              <a href="tel:+2034626425">+2 03 4626425</a>
            </Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaPhone className="w-[24px] text-2xl" />
            <Paragraph className="font-medium"><a href="tel:+2 0122390783">+2 0122390783</a></Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaFax className="w-[24px] text-2xl" />
            <Paragraph className="font-medium"><a href="tel:+2034626164">+2 03 4626164</a></Paragraph>
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
            <FaMapMarkerAlt className="w-[24px] text-2xl" />
            <Paragraph className="font-medium" size="sm">
              <a href="https://maps.app.goo.gl/4VppVHX4RHzxSv348" target="_blank">
              Block No. (86,87,88), Fourth Industrial Zone, October 6th City,
              Giza, Egypt.
              </a>
              
            </Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaEnvelopeOpen className="w-[24px] text-2xl" />
            <Paragraph className="font-medium"> <a href="mailto:info@handy.com.eg">info@handy.com.eg</a></Paragraph>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaTty className="w-[24px] text-2xl" />
            <Paragraph className="font-medium flex flex-col">
              <a href="tel:+20238333156">+2 02 38333156</a>
            </Paragraph>
          </li>

          <li className="flex items-center gap-5 text-primary">
            <FaFax className="w-[24px] text-2xl" />
            <Paragraph className="font-medium"><a href="tel:+20238333157">+2 02 38333157</a></Paragraph>
          </li>
        </ul>
      </div>
    </div>
  );
}
