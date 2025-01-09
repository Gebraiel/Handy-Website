import React, { useEffect, useState } from 'react'
import Section from './Section';
import SectionTitle from './SectionTitle';
import { useParams } from 'react-router-dom';

export default function SectorsNavigation({children}) {
  const {sectorName} = useParams();
  const [active,setActive] = useState(0);
  useEffect(()=>{
    if(sectorName){
      switch(sectorName){
        case "handy-paper":
          setActive(0)
          break;
          case "handy-tissue-products":
            setActive(1);
            break
          case "handy-wet-wipes":
            setActive(2);
            break;
      }
    }
  },[])
  return (
   <>
    <Section className=''>
      <SectionTitle className="mb-10">Our Sectors</SectionTitle>

      <div className='flex flex-col lg:flex-row gap-3'>
          <button onClick={()=> setActive(0)} className=
          {`border-t-2 ${active == 0 ? "border-primary":"border-transparent"} hover:border-primary transition-all sm:text-xl text-md flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`}>
              Handy Paper
          </button>
          <button onClick={()=> setActive(1)} className=
          {`border-t-2 ${active == 1 ? "border-primary":"border-transparent"} hover:border-primary transition-all sm:text-xl text-md flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`} >
              Handy Tissue Products
          </button>
          <button onClick={()=> setActive(2)} className=
          {`border-t-2 ${active == 2 ? "border-primary":"border-transparent"} hover:border-primary transition-all sm:text-xl text-md flex-grow text-md capitalize text-primary font-semibold bg-white shadow-lg py-3 px-5 w-full`}>
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
