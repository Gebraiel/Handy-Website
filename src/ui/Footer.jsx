import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { FaEnvelopeOpen } from "react-icons/fa";
import Paragraph from "./Paragraph";
import { FaLocationDot } from "react-icons/fa6";
import { FaTty } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer({mainLinks,otherLinks}) {
  const year = new Date().getFullYear();
  console.log("FOOTER")
  return (
    <footer className="bg-primary text-white bg-[length:60%] bg-[url('/pattern.png')]">
      <div className="container w-[80%] border-t-0 py-24 m-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 p-5">
        <div className="">
          <Link to="/" className="block w-52">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="">
          <div className="space-y-3">            
            <h5 className="text-secondary font-bold text-3xl">Pages</h5>
            <div className="">
              <ul className="uppercase">
                {
                  mainLinks.map((link,index) => <li key={index}><Link  to={link.link}>{link.title}</Link></li>)
                }
                
              </ul>
              <ul className="uppercase">
                {
                  otherLinks.map((link,index) => <li key={index}><Link  to={link.link}>{link.title}</Link></li>)
                }
                
                
              </ul>
            </div>
          </div>
          
        </div>
        <div className="space-y-10">
          <div>
            <h5 className="text-secondary font-bold text-xl">HANDY TISSUE MILL
            </h5>
            <ul className="space-y-5 mt-5">
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
                <FaLocationDot className="text-3xl"/>
                <Paragraph size="sm" className="text-center sm:text-left"><a href="https://maps.app.goo.gl/sQavxE64RvDio4LT8" target="_blank">Block No.13, Second Industrial Zone, New Borg El Arab City,
                Alexandria, Egypt.</a></Paragraph>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
                <FaEnvelopeOpen className="text-3xl" />
                <Paragraph size="sm" className="text-center sm:text-left"><a href="mailto:tissue.mill@handy.com.eg">tissue.mill@handy.com.eg</a></Paragraph>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5 ">
                 <FaTty className="text-3xl" />
                  <Paragraph className="text-center sm:text-left font-medium flex flex-col">
                    <a href="tel:+2 03 4626379">+2 03 4626379</a>
                    <a href="tel:+2 03 4626425">+2 03 4626425</a>
                  </Paragraph>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
                <FaFax className="w-[24px] text-3xl" />
                <Paragraph className="text-center sm:text-left font-medium"><a href="tel:+2 03 4626164">+2 03 4626164</a></Paragraph>
              </li>
            </ul>
          </div>
         

        </div>
        <div>
            <h5 className="text-secondary font-bold text-xl">HANDY CONVERTING PLANT
            </h5>
            <ul className="space-y-5 mt-5">
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
                <FaLocationDot className="text-3xl"/>
                <Paragraph size="sm" className="text-center sm:text-left"><a href="https://maps.app.goo.gl/4VppVHX4RHzxSv348" target="_blank">Block No. (86,87,88), Fourth Industrial Zone, October 6th City,
                Giza, Egypt.</a></Paragraph>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
                <FaEnvelopeOpen className="text-3xl" />
                <Paragraph size="sm" className="text-center sm:text-left"><a href="mailto:info@handy.com.eg">info@handy.com.eg</a></Paragraph>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5 ">
                 <FaTty className="text-3xl" />
                  <Paragraph className="text-center sm:text-left font-medium flex flex-col">
                    <a href="tel:+2 02 38333156">+2 02 38333156</a>
                  </Paragraph>
              </li>
              <li className="flex items-center gap-5 ">
                <IoLogoWhatsapp className="w-[24px] text-2xl" />
                <Paragraph className="font-medium flex flex-col">
                  <a href="https://wa.me/+201286644171" target="_blank">+2 01286644171</a>
                </Paragraph>
              </li>
              
              <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
                <FaFax className="w-[24px] text-3xl" />
                <Paragraph className="text-center sm:text-left font-medium"><a href="tel:+2 02 38333157">+2 02 38333157</a></Paragraph>
              </li>
            </ul>
          </div>
      </div>
      <div className="text-center py-5">
        <p>
          Copyright By <b>RASANS</b> - {year}
        </p>
      </div>
    </footer>
  );
}
