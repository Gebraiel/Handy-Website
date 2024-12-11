import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null); // Reference for the header element

  useEffect(() => {
    function scrollHandle() {
      setIsSticky(window.scrollY > headerRef.current.offsetHeight);
    }
    document.addEventListener("scroll", scrollHandle);
    return () => {
      document.removeEventListener("scroll", scrollHandle);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className={`transition-all duration-300 ${
        isSticky
          ? "sticky left-0 top-0 bg-primary text-white"
          : "relative bg-transparent "
      } container flex items-center justify-between m-auto p-5 `}
    >
      <Link to="/" className="w-52">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="lg:hidden">
        <button onClick={() => setShow(!show)}>
          <GiHamburgerMenu className="text-2xl" />
        </button>
        {show && (
          <ul
            className={`absolute left-0 top-full w-full transition-all duration-300  bg-primary text-white ${
              show ? "max-h-[395px] opacity-100" : "max-h-0 opacity-0"
            } `}
          >
            <li className=" border border-l-0 border-r-0 p-5 uppercase font-bold">
              <NavLink to="about">About Us</NavLink>
            </li>
            <li className=" border border-l-0 border-r-0 p-5 uppercase font-bold">
              <NavLink to="why-handy">Why Handy</NavLink>
            </li>
            <li className=" border border-l-0 border-r-0 p-5 uppercase font-bold">
              <NavLink to="sectors">Sectors</NavLink>
            </li>
            <li className=" border border-l-0 border-r-0 p-5 uppercase font-bold">
              <NavLink to="products">Products</NavLink>
            </li>
            <li className=" border border-l-0 border-r-0 p-5 uppercase font-bold">
              <NavLink to="sustainability">Sustainability</NavLink>
            </li>
            <li className=" border border-l-0 border-r-0 p-5 uppercase font-bold">
              <NavLink to="certificates">Certificates</NavLink>
            </li>
          </ul>
        )}
      </div>
      <div className="hidden lg:block ">
        <ul className="flex gap-5 ">
          <li className="uppercase font-bold">
            <NavLink to="about ">About Us</NavLink>
          </li>
          <li className="uppercase font-bold">
            <NavLink to="why-handy">Why Handy</NavLink>
          </li>
          <li className="uppercase font-bold">
            <NavLink to="sectors">Sectors</NavLink>
          </li>
          <li className="uppercase font-bold">
            <NavLink to="products">Products</NavLink>
          </li>
          <li className="uppercase font-bold">
            <NavLink to="sustainability">Sustainability</NavLink>
          </li>
          <li className="uppercase font-bold">
            <NavLink to="certificates">Certificates</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
