import React, { useState } from 'react'
import { NavLink ,Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa6";

export default function SubMenu({item}) {
  const [show,setShow] = useState(false);
  const [showSubmenu] = useState(false);
  return (
    
        <li className=" border border-l-0 border-r-0  bg-primary uppercase font-bold " onClick={()=>setShow(!show)}>
            <NavLink to={`${item.link}`} className={`flex gap-1 p-5 items-center w-fit text-white`} >
                {item.title}
                <FaCaretDown /> 
            </NavLink>
            {
                show &&
                <ul className="bg-primary text-white w-full">
                {
                    item.submenu.map((child)=>
                    child.hasSubMenu ?
                        <li className=" border-y py-4 px-8 ">
                            <Link to={child.link} className="flex gap-1 items-center" onClick={()=>showSubmenu}>
                                {child.title}
                                <FaCaretDown/>
                            </Link>
                        </li>   
                    :
                        <li className=" border-y py-4 px-8">
                            <Link to={child.link}>
                                {child.title}
                                
                            </Link>
                            
                        </li>
                    )
                }
                </ul>
            }
        </li>
        
    
  )
}
