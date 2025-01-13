import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

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
                  mainLinks.map((link,index) => <li><Link key={index} to={link.link}>{link.title}</Link></li>)
                }
                
              </ul>
              <ul className="uppercase">
                {
                  otherLinks.map((link,index) => <li><Link key={index} to={link.link}>{link.title}</Link></li>)
                }
                
                
              </ul>
            </div>
          </div>
          
        </div>
        <div className="space-y-3">
          <h5 className="text-secondary font-bold text-3xl">Contact Us</h5>
          <ul className="space-y-5">
            <li className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl" />
              <p className="font-bold">
                Block No.13, Second Industrial Zone, New Borg El Arab City,
                Alexandria, Egypt.
              </p>
            </li>
            <li className="flex items-center gap-5">
              <FaEnvelopeOpen className="text-3xl" />
              <p className="font-bold">tissue.mill@handy.com.eg</p>
            </li>
            <li className="flex items-center gap-5 ">
              <FaMapMarkerAlt className="text-3xl" />
              <p className="font-bold">
                Block No. (86,87,88), Fourth Industrial Zone, October 6th City,
                Giza, Egypt.
              </p>
            </li>
            <li className="flex items-center gap-5">
              <FaEnvelopeOpen className="text-3xl" />
              <p className="font-bold">info@handy.com.eg</p>
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
