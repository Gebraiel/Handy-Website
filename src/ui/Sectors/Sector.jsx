import { useEffect, useState } from 'react'
import Section from '../Section'
import Paragraph from '../Paragraph'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import SectionTitle from '../SectionTitle';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { motion } from "motion/react"
import SwiperSlider from './SwiperSlider';
import Counter from "../Counter";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import FadeLeft from '../Animation/FadeLeft';
import FadeIn from '../Animation/FadeIn';
import { useTranslation } from 'react-i18next';
const parentVarient = {
  visible:{
    transition:{
      staggerChildren:0.3
    }
  }
}
const childrenVairent={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}


export default function Sector({sector}) {
  const{t:tCommon,i18n}=useTranslation("Common");
  const {t:tSectors} = useTranslation("Sectors");
  const sectorImages = sector.gallery.map((img) => img.image);
  return (
    <div>
     <Section className="!py-0">
        <div className='lg:block hidden'>
          <FadeLeft>
            <img src={sector.image} alt={sector.title} />
          </FadeLeft>
        </div>
        <div className='lg:hidden'>
          <FadeLeft>
            <img src={sector.image} alt="" />
          </FadeLeft>
        </div>

        <div className=" m-auto 2xl:my-[50px] my-[25px]">
          <div>
            <FadeIn>
              <SectionTitle className="2xl:mb-5 !max-w-[66ch] !mx-auto !text-start">
                {sector.title}
              </SectionTitle>
            <Paragraph size="md" className="text-justify m-auto">
              <span dangerouslySetInnerHTML={{__html:sector.description_one}}/>
            </Paragraph>
            </FadeIn>
          </div>

        </div>
      </Section>
      {sector.iframe_map && <FadeIn>
        <Section className='2xl:mt-[50px] mt-[25px]' type="fullscreen">
          <MapContainer
            center={[33.854721, 35.862285]}
            className='h-96 z-10'
            zoom={4}
            scrollWheelZoom={false}
            worldCopyJump={true}  // Prevents the map from repeating
            noWrap={true}
          >
             <TileLayer
  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>
            <Marker position={[33.854721, 35.862285]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
            <Marker position={[39.074208, 21.824312]}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
            <Marker position={[35.126413, 33.429859]}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
            <Marker position={[23.885942	, 45.079162]}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
            <Marker position={[29.31166	,47.481766]}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
            <Marker position={[31.791702	,-7.09262]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
          </MapContainer>
      </Section>
      </FadeIn>}
      {
      sector.steps.length>0 &&
        <Section className="bg-[#f1eeee]">
        <div >


            <FadeIn>
              <SectionTitle className='2xl:mb-5'>
                {sector.sub_title_one}
              </SectionTitle>
              <Paragraph size="md" className='text-center'>
                {sector.sub_title_two}
              </Paragraph>
            </FadeIn>
            <motion.div  variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 2xl:gap-10 gap-5 items-stretch 2xl:my-16 my-8">
                  {sector.steps.map((stat,index)=>
                    <motion.div variants={childrenVairent} className={`text-center `} >
                    <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                      {index+1}
                    </div>
                    <h4 className="text-2xl font-bold my-5 text-primary">{stat.title}</h4>
                    <Paragraph size="sm" className="text-center">
                      <span  dangerouslySetInnerHTML={{__html:stat.description}}/>
                    </Paragraph>

                  </motion.div>
                  )}

            </motion.div>
          </div>
        {sector.description_two &&
        <div className="mb-[50px]" dangerouslySetInnerHTML={{__html:sector.description_two}} />

                  }
        </Section>
      }
     {
      sector.statistics.length>0 &&
        <Section>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  lg:w-full">
              {sector.statistics.map((stat,index)=>
                <FadeIn delay={index*0.1}>
                  <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
                    <div className="flex flex-col items-center gap-2 justify-center text-sm"><img src={stat.image} alt="statstic icon" className="w-12" /> <b>{stat.title}</b></div>
                    <Counter counter={"25000"}  />

                    <Paragraph size="sm">
                      {tSectors("Tons / Year")}
                    </Paragraph>
                  </div>
                </FadeIn>
              )}


            </div>
          </Section>
      }
      <Section type="fullscreen" className='overflow-x-hidden bg-[#f1eeee] px-5' >
        {
          sectorImages.length>0
          &&
          // <GallerySlider images={sectorImages} noOfCols={3}/>
          <SwiperSlider key={i18n.language} images={sectorImages}/>
        }
      </Section>
      </div>
  )
}
