import { useEffect, useRef, useState } from "react";
import Logo from "/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import SubMenu from "./SubMenu";

export default function Header({menu,isAbsolute}) {
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null); // Reference for the header element

  const headerClasses = isAbsolute ? "transition-all duration-300 absolute left-0 top-0 w-full z-50  text-white":"bg-primary text-white"; 
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

      className={`transition-all duration-300  left-0 top-0 w-full z-50  text-white ${!isAbsolute || isSticky ? "bg-primary bg-contain bg-[url('/pattern.png')]" : ""} ${
        isSticky
          ? "fixed animate-fadeDown  z-[51]"
          : headerClasses
      }  ` }
    >
      <div className="container w-[90%] flex items-center justify-between m-auto p-5">
        <Link to="/" className="max-w-40">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="xl:hidden">
          <button onClick={() => setShow(!show)}>
            { !show ? <GiHamburgerMenu className="text-2xl" /> : <IoCloseSharp className="text-2xl" />}
          </button>
          {show && (
            <ul
              className={`absolute left-0 top-full w-full transition-all duration-300 ${
                show ? "max-h-[395px] opacity-100" : "max-h-0 opacity-0"
              } `}
            >
              {
                menu.map((item)=>
                  item.hasSubMenu ? 
                    <SubMenu item={item}/>
                    :
                  <li className=" border border-l-0 border-r-0  bg-primary uppercase font-bold " >
                    <NavLink to={`${item.link}`} className={`flex gap-1 p-5 items-center w-fit text-white `} >
                        {item.title}
                    </NavLink>
                  </li>
                )
              }
            </ul>
          )}
        </div>
        <div className="hidden xl:block ">
          <ul className="flex gap-10 ">
            {menu.map((item,index)=>
              <li className="uppercase font-bold relative has-submenu text-xs" key={index}>
                <NavLink to={`${item.link}`} className={({ isActive }) => `${item.hasSubMenu ? 'flex gap-1 items-center ' : ""} ${isActive ? (isSticky || !isAbsolute ? 'text-secondary' : 'text-primary') : 'text-white'} text-sm `
                        
                }>
                      {item.title}
                    { item.hasSubMenu && <FaCaretDown /> }

                </NavLink>
                {
                  //First Level Submenu
                  item.hasSubMenu &&
                   <ul className=" text-white w-52 pt-5 absolute left-0 top-full submenu  opacity-0 hidden">
                      {
                        item.submenu.map((child,index)=>
                          <li className="border-b-2 p-4 bg-primary relative has-submenu" key={index}>
                            
                            <Link to={child.link} className="flex gap-1 items-center">
                              {child.title}
                              { child.hasSubMenu && <FaCaretDown /> }

                            </Link>
                            {
                              //Second Level Submenu
                              child.hasSubMenu && 
                              <ul className="text-white w-52 absolute left-full top-0 opacity-0 hidden submenu">
                                {
                                  child.submenu.map((e,index)=>
                                    <li className="border-b-2 p-4 bg-primary" key={index}>
                                      
                                      <Link to={e.link}>{e.title}</Link>
                                      
                                    </li>
                                    
                                  )
                                }
                              </ul>
                            }  
                          </li>
                          
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
