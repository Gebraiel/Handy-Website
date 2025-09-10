import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

import Tabs from '../Tabs';
import HandyPaperSector from './HandyPaperSector';
import HandyTissueProductsSector from './HandyTissueProductsSector';
import HandyWetWipes from './HandyWetWipes';
import SectionTitle from '../SectionTitle';
import { useTranslation } from 'react-i18next';
import Sector from './Sector';
import Section from '../Section';
import SwiperSlider from './SwiperSlider';
export default function SectorsNavigation({links}) {
  const {t:tSectors,i18n} = useTranslation("Sectors");
  const {sectorName} = useParams();
  const [active,setActive] = useState(0);
  const sectorsSection = useRef(null);
  // const links = sectors.map((sector)=> sector.title)
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
          <SectionTitle className='my-[50px]' >{tSectors("Our-Sectors")}</SectionTitle>
          {/* <Tabs links={links} active={active} ref={sectorsSection}>
            {sectors.map((sector)=><Sector sector={sector}/>)}
          </Tabs> */}
          <Tabs links={links} active={active} ref={sectorsSection}>
            <HandyPaperSector />
            <HandyTissueProductsSector />
            <HandyWetWipes />
          </Tabs>
          {/* <Section type="fullscreen" className='overflow-x-hidden bg-[#f1eeee] px-5' >
            {
              sectors[active].gallery.length > 0
              &&
              <SwiperSlider key={i18n.language} images={sectors[active].gallery}/>
            }
          </Section> */}
        </>
  )
}
