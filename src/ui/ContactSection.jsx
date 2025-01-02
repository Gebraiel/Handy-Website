import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaTty } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="flex justify-between gap-16 flex-col md:flex-row lg:max-w-[1000px] m-auto">
      <div className="w-full">
        <div className="flex relative gap-3 items-center text-2xl text-primary font-semibold border-b-2 border-[#ececec] pb-5 before:content-[''] before:w-14 before:h-1 before:bg-[rgba(9,33,109,0.7)] before:absolute before:left-0 before:-bottom-1 before:-translate-y-1/2">
          <FaMapMarkedAlt className="text-3xl text-[rgba(9,33,109,0.7)]" />{" "}
          HANDY TISSUE MILL
        </div>
        <ul className="py-8 space-y-5">
          <li className="flex items-center gap-5 text-primary">
            <FaMapMarkerAlt className="text-2xl" />
            <p className="font-medium">
              Block No.13, Second Industrial Zone, New Borg El Arab City,
              Alexandria, Egypt.
            </p>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaEnvelopeOpen className="text-2xl" />
            <p className="font-medium">tissue.mill@handy.com.eg</p>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaTty className="text-2xl" />
            <p className="font-medium flex flex-col">
              <span>+2 03 4626379</span>
              <span>+2 03 4626425</span>
            </p>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaPhone className="text-2xl" />
            <p className="font-medium">+2 0122390783</p>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaFax className="text-2xl" />
            <p className="font-medium">+2 03 4626164</p>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <div className="flex relative gap-3 items-center text-2xl text-primary font-semibold border-b-2  border-[#ececec] pb-5 before:content-[''] before:w-14 before:h-1 before:bg-[rgba(9,33,109,0.7)] before:absolute before:left-0 before:-bottom-1 before:-translate-y-1/2">
          <FaMapMarkedAlt className="text-3xl text-[rgba(9,33,109,0.7)]" />{" "}
          HANDY CONVERTING PLANT
        </div>
        <ul className="py-8 space-y-5">
          <li className="flex items-center gap-5 text-primary">
            <FaMapMarkerAlt className="text-2xl" />
            <p className="font-medium">
              Block No. (86,87,88), Fourth Industrial Zone, October 6th City,
              Giza, Egypt.
            </p>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaEnvelopeOpen className="text-2xl" />
            <p className="font-medium">info@handy.com.eg</p>
          </li>
          <li className="flex items-center gap-5 text-primary">
            <FaTty className="text-2xl" />
            <p className="font-medium flex flex-col">
              <span>+2 02 38333156</span>
            </p>
          </li>

          <li className="flex items-center gap-5 text-primary">
            <FaFax className="text-2xl" />
            <p className="font-medium">+2 02 38333157</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
