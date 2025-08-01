import { useEffect, useRef, useState } from "react";
import Logo from "/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCaretDown,FaCaretRight } from "react-icons/fa6";

import SubMenu from "./SubMenu";
import FadeIn from "./Animation/FadeIn";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLocalizedPath } from "../services/localization";
import { FaCaretLeft } from "react-icons/fa";
// import i18n from "src/utils/i18n";

export default function Header({menu,isAbsolute}) {
  const {i18n} = useTranslation()
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null); // Reference for the header element
  const headerHeight = useRef(0); // نحتفظ بيه مرة واحدة
  const currentLanguage = i18n.language;
  const headerClasses = isAbsolute ? "absolute text-white":"relative bg-primary text-white";
  useEffect(() => {
    if (headerRef.current) {
      headerHeight.current = headerRef.current.offsetHeight;
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > headerHeight.current);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      dir="ltr"
      className={`transition-all duration-300 left-0 top-0 w-screen z-50  text-white ${!isAbsolute || isSticky || show ? "bg-primary bg-contain bg-[url('/pattern.png')]" : ""} ${
        isSticky
          ? "fixed animate-fadeDown z-[51]"
          : headerClasses
      }  ` }
    >
      <div className="relative">
        <div className="container  sm:w-[90%] flex items-center justify-between m-auto p-5">
          <Link to={getLocalizedPath("/",currentLanguage)} className="max-w-40">
            <FadeIn delay={0.3}>
              <img src={Logo} alt="Logo" />
            </FadeIn>
          </Link>
          <div className="xl:hidden">
            <button onClick={() => setShow(!show)}>
              { !show ? <GiHamburgerMenu className="text-2xl" /> : <IoCloseSharp className="text-2xl" />}
            </button>

           <div className={`max-h-[80vh] absolute overflow-scroll transition-all duration-300 ${show?'left-0':'left-full'} top-full w-full bg-primary text-white z-50 transition-all duration-300`}>
             <ul
              className={`overflow-scroll`}
            >
              {
                menu.map((item)=>
                  item.hasSubMenu ?
                    <SubMenu item={item} closeHeader={()=>setShow(false)}/>
                    :
                  <li className=" border border-l-0 border-r-0  bg-primary uppercase font-bold " >
                      <NavLink to={item.link} end={item.hasSubMenu ? false : true} onClick={()=>setShow(false)} className={`flex gap-1 p-5 items-center w-full text-white `} >
                        {item.title}
                      </NavLink>
                  </li>

                )
              }
              <LanguageSwitcher menuLength={menu.length}/>

            </ul>
           </div>

          </div>
          <div className="hidden xl:block ">
            <ul className="flex gap-10 ">
              {menu.map((item,index)=>
                <FadeIn delay={0.1 * index}>
                  <li className="uppercase font-bold relative has-submenu text-xs" key={index}>
                  <NavLink to={item.link} end={item.hasSubMenu ? false : true} className={({ isActive }) => `${item.hasSubMenu ? 'flex gap-1 items-center ' : ""} ${isActive ? (isSticky || !isAbsolute ? 'text-secondary' : 'text-primary') : 'text-white'} `

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

                              <Link to={child.link}  className="flex gap-1 items-center">
                                {child.title}
                                { child.hasSubMenu ?  currentLanguage =='ar' ? <FaCaretLeft /> :<FaCaretRight /> : <></>}

                              </Link>
                              {
                                //Second Level Submenu
                                child.hasSubMenu &&
                                <ul className="text-white w-52 absolute start-full top-0 opacity-0 hidden submenu">
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
                </FadeIn>
              )}
              <LanguageSwitcher menuLength={menu.length}/>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
