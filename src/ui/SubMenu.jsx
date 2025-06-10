import React, { useState } from 'react'
import { NavLink ,Link } from 'react-router-dom'
import { FaCaretRight,FaCaretDown } from "react-icons/fa6";
import {AnimatePresence,motion} from "motion/react";
export default function SubMenu({item}) {
  const [show,setShow] = useState(false);
  const [showSubmenu,setShowSubmenu] = useState(false);
  return (
    
        <li className=" border border-l-0 border-r-0  bg-primary uppercase font-bold ">

            <button className='w-full' onClick={()=>setShow(!show)}>
                <NavLink to={`${item.link}`} className={`flex gap-1 p-5 items-center w-fit text-white`} >
                    {item.title}
                    <FaCaretDown /> 
                </NavLink>
            </button>
            
                <AnimatePresence>
                    {
                        show &&
                        <motion.ul className="bg-primary text-white w-full h-0 opacity-0" initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>
                        {
                            item.submenu.map((child)=>
                            child.hasSubMenu ?
                            
                                <li className=" border-y py-4 px-8 ">
                                    <button className='w-full' onClick={()=>setShowSubmenu(!showSubmenu)}>
                                        <Link to={child.link} className="flex gap-1 items-center w-fit" >
                                            {child.title}
                                            <FaCaretRight/>
                                        </Link>
                                    </button>
                                    <AnimatePresence>
                                        {
                                            showSubmenu &&
                                            <motion.ul className='h-0 opacity-0' initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>
                                                {child.submenu.map((grandChild)=> <li className='px-4 my-4'><Link to={grandChild.link}>{grandChild.title}</Link></li>)}
                                            </motion.ul>
                                        }
                                    </AnimatePresence>

                                </li>   
                                                    :
                                <li className=" border-y py-4 px-8">
                                    <Link to={child.link}>
                                        {child.title} 
                                    </Link>
                                    
                                </li>
                            )
                        }
                        </motion.ul>
                    }   
                </AnimatePresence>
            
        </li>
        
    
  )
}
