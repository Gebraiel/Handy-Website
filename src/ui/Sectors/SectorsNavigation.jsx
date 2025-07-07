import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

import Tabs from '../Tabs';
import HandyPaperSector from './HandyPaperSector';
import HandyTissueProductsSector from './HandyTissueProductsSector';
import HandyWetWipes from './HandyWetWipes';
import SectionTitle from '../SectionTitle';
export default function SectorsNavigation({links}) {
  const {sectorName} = useParams();
  const [active,setActive] = useState(0);
  const sectorsSection = useRef(null);
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
        default:
          setActive(0);
      }
    }
  },[sectorName])
  useEffect(()=>{
    let timeout ;
    if(sectorName){
     timeout = setTimeout(() => {
      const offset = window.innerWidth < 768 ? 100 : 200;
      const element = sectorsSection.current;
      if (element) {
        const topPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: topPosition,
          behavior: 'smooth',
        });
      }
    }, 100); // جرب 100ms أو زوّدها لو لسه في تأخير في render
    }
    return ()=>{
      clearTimeout(timeout)
    }
  },[sectorName])
  return (
        <>
        <SectionTitle className='my-[50px]' >Our Sectors</SectionTitle>
        <Tabs links={links} active={active} ref={sectorsSection}>
          <HandyPaperSector />
          <HandyTissueProductsSector />
          <HandyWetWipes />
        </Tabs>
        
        </>
  )
}
