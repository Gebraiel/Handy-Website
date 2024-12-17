import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";

export default function Header({menu}) {
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
      className={`transition-all duration-300  left-0 top-0 w-full z-50  text-white ${
        isSticky
          ? "fixed animate-fadeDown bg-primary bg-[url('/pattern.png')]"
          : "absolute bg-transparent"
      }  `}
    >
      <div className="container flex items-center justify-between m-auto p-5">
        <Link to="/" className="w-52">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="lg:hidden">
          <button onClick={() => setShow(!show)}>
            { !show ? <GiHamburgerMenu className="text-2xl" /> : <IoCloseSharp className="text-2xl" />}
          </button>
          {show && (
            <ul
              className={`absolute left-0 top-full w-full transition-all duration-300 ${
                show ? "max-h-[395px] opacity-100" : "max-h-0 opacity-0"
              } `}
            >
              {menu.map((item)=>
              <li className=" border border-l-0 border-r-0  bg-primary uppercase font-bold group">
                <NavLink to={`${item.link}`} className={(isActive)=> `flex gap-1 p-5 items-center ${isActive ? "text-secondary" : "text-white"}`} >
                  {item.title}
                  { item.hasSubMenu && <FaCaretDown /> }
  
                </NavLink>
                {
                  item.hasSubMenu &&
                   <ul className="bg-primary text-white w-full  group-hover:block group-hover:animate-slideDown max-h-0 hidden">
                      {
                        item.submenu.map((child)=>
                          <li className=" border-y py-4 px-8"><Link to={child.link}>{child.title}</Link></li>
                        )
                      }
                    </ul>
                } 
              </li>)}
            </ul>
          )}
        </div>
        <div className="hidden lg:block ">
          <ul className="flex gap-5 ">
            {menu.map((item)=>
              <li className="uppercase font-bold relative group">
                <NavLink to={`${item.link}`} className={({ isActive }) => 
                        isActive ? (isSticky ? 'text-secondary' : 'text-primary') : `text-white ${item.hasSubMenu ? 'flex gap-1 items-center' : ""}`
                }>
                      {item.title}
                    { item.hasSubMenu && <FaCaretDown /> }

                </NavLink>
                {
                  item.hasSubMenu &&
                   <ul className="bg-primary text-white w-52 absolute right-0 top-full  group-hover:block group-hover:animate-fadeUp opacity-0 hidden">
                      {
                        item.submenu.map((child)=>
                          <li className="border-b-2 p-4"><Link to={child.link}>{child.title}</Link></li>
                        )
                      }
                    </ul>
                } 
              </li>  
            )}
            
          </ul>
        </div>
      </div>
    </header>
  );
}
