import React, { useEffect, useState } from 'react'
import Section from './Section'
import {AnimatePresence} from "motion/react"
export default function Tabs({children,links,active=0,ref}) {
  const[activeTab,setActiveTab] = useState(active);   
  
  useEffect(()=>{
    setActiveTab(active);
  },[active])
  return (
   <>
        <Section className='!py-0'>
            <div className='flex flex-col lg:flex-row gap-3 mb-10'>
                {
                    links.map((link,index)=>  
                    <button key={index} onClick={()=> setActiveTab(index)} className=
                    {`border-t-2 ${activeTab == index ? "border-primary":"border-transparent"} hover:border-primary transition-all sm:text-xl text-md flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`}>
                        {link}
                    </button>)
                }        
            </div>
        </Section>
        <div ref={ref}></div>
        {
            <AnimatePresence mode="wait">
                {children[activeTab]}
            </AnimatePresence>
        }
    </>
  )
}
