import React, { useState } from 'react'
import Section from './Section';

export default function SectorsNavigation({children}) {
  const [active,setActive] = useState(0);
  return (
   <>
    <Section>
      <div className='flex flex-col lg:flex-row gap-3 mb-5'>
          <button onClick={()=> setActive(0)} className=
          {`border-t-2 ${active == 0 ? "border-primary":"border-transparent"} hover:border-primary transition-all  flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`}>
              Handy Paper
          </button>
          <button onClick={()=> setActive(1)} className=
          {`border-t-2 ${active == 1 ? "border-primary":"border-transparent"} hover:border-primary transition-all  flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`} >
              Handy Tissue Products
          </button>
          <button onClick={()=> setActive(2)} className=
          {`border-t-2 ${active == 2 ? "border-primary":"border-transparent"} hover:border-primary transition-all  flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`}>
              Handy Wet Wipes
          </button>
        
      </div>
    </Section>
    {
      children[active]
    }
   </>
   
  )
}
