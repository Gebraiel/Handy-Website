import React, { useState } from 'react'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function Tabs({children,links,active=0}) {
  const[activeTab,setActiveTab] = useState(active);      
  return (
   <>
        <div className='flex flex-col lg:flex-row gap-3 mb-10'>
            {
                links.map((link,index)=>  
                <button key={index} onClick={()=> setActiveTab(index)} className=
                {`border-t-2 ${activeTab == index ? "border-primary":"border-transparent"} hover:border-primary transition-all sm:text-xl text-md flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`}>
                    {link}
                </button>)
            }        
        </div>
        {
            children[activeTab]
        }
    </>
  )
}