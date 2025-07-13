import React from 'react'
import { useEffect, useState } from 'react'
import Section from '../Section'
import Paragraph from '../Paragraph'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import SectionTitle from '../SectionTitle';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { motion } from "motion/react"
import GallerySlider from './GallerySlider';
import { getImagesFromBucket } from '../../services/sectors';
import SwiperSlider from './SwiperSlider';
import Counter from "../Counter";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import FadeLeft from '../Animation/FadeLeft';
import FadeIn from '../Animation/FadeIn';
import {AnimatePresence} from "motion/react"
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


export default function HandyPaperSector() {
  let [sectorImages,setSectorImages] = useState([]);
  const{t:tCommon}=useTranslation("Common");
  const {t:tSectors} = useTranslation("Sectors");

  useEffect(()=>{
    async function getImages(){
      const images = await getImagesFromBucket('sectors','handy-paper');
      setSectorImages(images);
    }
    getImages()
  },[])
  return (
    <div>
     <Section className="!py-0">

        <div className='lg:block hidden'>
          <FadeLeft>
            <img src="/sectors/sector1.webp" alt="" />
          </FadeLeft>
        </div>
        <div className='lg:hidden'>
          <FadeLeft>
            <img src="/sectors/Handy Paper.webp" alt="" />
          </FadeLeft>
        </div>

        <div className=" m-auto 2xl:my-[50px] my-[25px]">
          <div>
            <FadeIn>
              <SectionTitle className="2xl:mb-5 !max-w-[66ch] !mx-auto !text-start">
                {tCommon("Handy Paper")}
              </SectionTitle>
            <Paragraph size="md" className="text-justify m-auto">
              {tSectors("Handy-Paper-Content-01")}
            </Paragraph>

            <Paragraph size="md" className="text-justify m-auto my-3">
              {tSectors("Handy-Paper-Content-02")}

            </Paragraph>
            <Paragraph size="lg" className="text-justify m-auto">
              {tSectors("Handy-Paper-Content-03")}
            </Paragraph>
            </FadeIn>
          </div>

        </div>
      </Section>
      <FadeIn>
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
      </FadeIn>
      <Section className="bg-[#f1eeee]">
      <div >


          <FadeIn>
             <SectionTitle className='2xl:mb-5'>
              {tSectors("Handy-Paper-Process-Section-Heading")}
            </SectionTitle>
            <Paragraph size="md" className='text-center'>
              {tSectors("Handy-Paper-Process-Section-Content")}
            </Paragraph>
          </FadeIn>
          <motion.div variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 2xl:gap-10 gap-5 items-stretch 2xl:my-16 my-8">

                <motion.div variants={childrenVairent} className={`text-center `} >
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    1
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Pulping")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Raw-Material")}</b>
                    <p>{tSectors("Raw-Material-Content")}</p>
                  </Paragraph>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Pulping-Process")}</b>
                    <p>{tSectors("Pulping-Process-Content")}</p>

                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent} className={` text-center  `} >
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    2
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Refining")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Fiber-Modification")}</b>
                    <p>{tSectors("Fiber-Modification-Content")}</p>

                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                   3
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Screening")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Impurity-Removal")}</b>
                    <p>{tSectors("Impurity-Removal-Content")}</p>

                  </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    4
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Forming")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Sheet-Formation")}</b>
                    <p>{tSectors("Sheet-Formation-Content")}</p>

                  </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    5
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Pressing")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Water-Removal")}</b>
                    <p>{tSectors("Water-Removal-Content")}</p>

                  </Paragraph>

                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    6
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Drying")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Moisture-Removal")}</b>
                    <p>{tSectors("Moisture-Removal-Content")}</p>

                  </Paragraph>


                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    7
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">{tSectors("Creping")}</h4>
                  <Paragraph size="sm" className="text-center">
                    <b>{tSectors("Surface-Embossing")}</b>
                    <p>{tSectors("Surface-Embossing-Content")}</p>

                  </Paragraph>

                </motion.div>
          </motion.div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  lg:w-full">
          <FadeIn>
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-sm"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>{tSectors("Tissue Paper Mill Capacity")}</b></div>
            <Counter counter="25000"  />

            <Paragraph size="sm">
              {tSectors("Tons / Year")}
            </Paragraph>
          </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-sm"><FaPeopleGroup  className="size-12" /> <b>{tSectors("Employee in Handy Paper Mill")}</b></div>
            <Counter counter="148" />

            <Paragraph size="sm">
              {tSectors("Employee")}
            </Paragraph>
          </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-sm"><FaGlobeAmericas  className="size-12" /> <b>{tSectors("Export Countries in Handy Paper Mill")}</b></div>
            <Counter counter="12" />

            <Paragraph size="sm">
              {tSectors("Country")}

            </Paragraph>
          </div>
          </FadeIn>

        </div>
      </Section>
      <Section type="fullscreen" className='overflow-x-hidden bg-[#f1eeee] px-5' >
        {
          sectorImages.length>0
          &&
          // <GallerySlider images={sectorImages} noOfCols={3}/>
          <SwiperSlider images={sectorImages}/>
        }
      </Section>
      </div>
  )
}
