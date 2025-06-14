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
  useEffect(()=>{
    async function getImages(){
      const images = await getImagesFromBucket('sectors','handy-paper');
      setSectorImages(images);
    }
    getImages()
  },[])
  return (
    <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} exit={{opacity:0,x:100}}>
     <Section className="!py-0">        
        <div className='lg:block hidden'>
          <img src="/sectors/sector1.webp" alt="" />
        </div>
        <div className='lg:hidden'>
          <img src="/sectors/Handy Paper.webp" alt="" />
        </div>
        
        <div className=" m-auto 2xl:my-[50px] my-[25px]">
          <div>
            <SectionTitle className="2xl:mb-5 !max-w-[66ch] !mx-auto !text-left">
              Handy Paper
            </SectionTitle>
            <Paragraph size="md" className="text-justify m-auto">
              In the heart of New Borg El-Arab City, Alexandria, our first
              factory stands as a testament to innovation and heritage. Home to
              the iconic ‘Recard’ machine from 1989, this tissue paper mill was
              relocated to the facility, originally producing jumbo rolls with
              an impressive capacity of up to 15 tons/day.
            </Paragraph>

            <Paragraph size="md" className="text-justify m-auto my-3">
              In 2016, we introduced advanced virgin pulp machinery from Italy’s
              RECARD, boosting production to 80 tons/day. Following renovations,
              the factory embraced recycling by combining virgin pulp and waste
              paper, contributing to our sustainability efforts while continuing
              jumbo roll production.
            </Paragraph>
            <Paragraph size="lg" className="text-justify m-auto">
              This facility serves markets across KSA, Lebanon, Greece, Cyprus,
              Kuwait, Morocco, Kenya, and West
              Africa.
            </Paragraph>
          </div>

        </div>
      </Section>
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
      <Section className="bg-[#f1eeee]">
      <div >

         
            <SectionTitle className='2xl:mb-5'>
              Paper Making Process
            </SectionTitle>
            <Paragraph size="md" className='text-center'>
              The production of tissue paper involves several key steps:
            </Paragraph>
          <motion.div variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 2xl:gap-10 gap-5 items-stretch 2xl:my-16 my-8">
                
                <motion.div variants={childrenVairent} className={`text-center `} >
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    1
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Pulping</h4>
                  <Paragraph size="sm" className="sm:text-left">
                    <b>Raw Material</b> : Virgin wood pulp or recycled paper.
                  </Paragraph>
                  <Paragraph size="sm" className="sm:text-left">
                    <b>Pulping Process</b> : The raw material is processed into
                    a fibrous slurry.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent} className={` text-center  `} >
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    2
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Refining</h4>
                  <Paragraph size="sm" className="sm:text-left">
                    <b>Fiber Modification</b> : Adjusts fiber length and
                    strength, influencing softness and absorbency.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                   3
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Screening</h4>
                  <Paragraph size="sm" className="sm:text-left">
                    <b>Impurity Removal</b> : The pulp is screened to remove
                    dirt or knots.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    4
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Forming</h4>
                  <Paragraph size="sm" className="sm:text-left">
                  <b>Sheet Formation</b> : The pulp is spread onto a moving
                  mesh, forming a wet sheet.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    5
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Pressing</h4>
                  <Paragraph size="sm" className="sm:text-left group-[]:">
                    <b>Water Removal</b> : The wet sheet is pressed to remove
                    excess water.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    6
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Drying</h4>
                  <Paragraph size="sm" className="sm:text-left">
                    <b>Moisture Removal</b> : The pressed sheet is dried by
                    heated cylinders.
                  </Paragraph>
                </motion.div>
                <motion.div variants={childrenVairent}  className={` text-center `}>
                  <div className="pb-5 border-b-2 border-secondary w-fit m-auto text-3xl text-[#b0cbd3] font-extrabold">
                    7
                  </div>
                  <h4 className="text-2xl font-bold my-5 text-primary">Creping</h4>
                  <Paragraph size="sm" className="sm:text-left">
                  <b>Surface Embossing</b> : The dried paper is embossed to
                  create a soft, textured surface.
                  </Paragraph>
                </motion.div>
          </motion.div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3  lg:w-full">
          <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><img src="/tissue-roll.png" alt="" className="w-12" /> <b>Tissue Paper Mill Capacity</b></div>
            <Counter counter="25000"  />

            <Paragraph size="sm">
              Tons / Year 
            </Paragraph>
          </div>
          
          <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><FaPeopleGroup  className="size-12" /> <b>Employee in Handy Paper Mill</b></div>
            <Counter counter="148" />

            <Paragraph size="sm">
              Tons / Year 
            </Paragraph>
          </div>
         
          <div className="p-5 bg-white shadow-md  text-center space-y-5 ">
            <div className="flex flex-col items-center gap-2 justify-center text-lg"><FaGlobeAmericas  className="size-12" /> <b>Export Countries in Handy Paper Mill</b></div>
            <Counter counter="12" />

            <Paragraph size="sm">
              Tons / Year 
            </Paragraph>
          </div>
         
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
      </motion.div>
  )
}
