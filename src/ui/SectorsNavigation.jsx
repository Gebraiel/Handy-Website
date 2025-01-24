import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Tabs from './Tabs';
import HandyPaperSector from './HandyPaperSector';
import HandyTissueProductsSector from './HandyTissueProductsSector';
import HandyWetWipes from './HandyWetWipes';
import SectionTitle from './SectionTitle';
export default function SectorsNavigation({links}) {
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
  },[sectorName])
  return (
        <>
        <SectionTitle className='my-[50px]'>Our Sectors</SectionTitle>
        <Tabs links={links} active={active}>
          <HandyPaperSector />
          <HandyTissueProductsSector />
          <HandyWetWipes />
        </Tabs>
        </>
  )
}
