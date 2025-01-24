import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { FaEnvelopeOpen } from "react-icons/fa";
import Paragraph from "./Paragraph";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer({mainLinks,otherLinks}) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white bg-[length:60%] bg-[url('/pattern.png')]">
      <div className="container w-[80%] border-t-0 py-24 m-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
        <div className="">
          <Link to="/" className="block w-52">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="">
          <div className="space-y-3">            
            <h5 className="text-secondary font-bold text-3xl">Pages</h5>
            <div className="flex gap-10 flex-wrap">
              <ul className="uppercase">
                {
                  mainLinks.map((link) => <li><Link key={link} to={link.link}>{link.title}</Link></li>)
                }
                
              </ul>
              <ul className="uppercase">
                {
                  otherLinks.map((link) => <li><Link key={link} to={link.link}>{link.title}</Link></li>)
                }
                
                
              </ul>
            </div>
          </div>
          
        </div>
        <div className="space-y-3">
          <h5 className="text-secondary font-bold text-3xl">Contact Us</h5>
          <ul className="space-y-5">
            <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
              <FaLocationDot className="text-3xl"/>
              <Paragraph size="sm" className="text-center sm:text-left">Block No.13, Second Industrial Zone, New Borg El Arab City,
              Alexandria, Egypt.</Paragraph>
            </li>
            <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
              <FaEnvelopeOpen className="text-3xl" />
              <Paragraph size="sm" className="text-center sm:text-left">tissue.mill@handy.com.eg</Paragraph>
            </li>
            <li className="flex flex-col sm:flex-row items-center justify-start gap-5 ">
              <FaLocationDot className="text-3xl"/>
              <Paragraph size="sm" className="text-center sm:text-left"> Block No. (86,87,88), Fourth Industrial Zone, October 6th City,
              Giza, Egypt.</Paragraph>
            </li>
            <li className="flex flex-col sm:flex-row items-center justify-start gap-5">
              <FaEnvelopeOpen className="text-3xl" />
              <Paragraph size="sm" className="text-center sm:text-left">info@handy.com.eg</Paragraph>
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
