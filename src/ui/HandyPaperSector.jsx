import React from 'react'
import Section from './Section'
import Paragraph from './Paragraph'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import SectionTitle from './SectionTitle';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Process from './Process';
import { FaMedal } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import Features from './Home/Features';
import { motion } from "motion/react"
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

  return (
    <>
     <Section className="!py-0">
        {/* <SectorsNavigation /> */}
        
        <div className='lg:block hidden'>
          <img src="/sectors/sector1.webp" alt="" />
        </div>
        <div className='lg:hidden'>
          <img src="/sectors/sector1.jpg" alt="" />
        </div>
        
        <div className=" m-auto mt-5">
          <div>
            <SectionTitle className="mb-5 !max-w-[66ch] !mx-auto !text-left">
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
              Kuwait, Morocco, Syria, Sudan, Kenya, the Caribbean, and West
              Africa.
            </Paragraph>
          </div>

        </div>
      </Section>
      <Section className='my-7' type="fullscreen">
          <MapContainer
            center={[33.854721, 35.862285]}
            className='h-96 '
            zoom={4}
            scrollWheelZoom={false}
          >
              <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
            <Marker position={[34.802075	,38.996815]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>

            </Marker>
            <Marker position={[12.862807	,38.996815]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
 
            </Marker>
       
          </MapContainer>
      </Section>
      <Section className="!pt-0">
      <div >

         
            <SectionTitle className="my-5 !text-left">
              Paper Making Process
            </SectionTitle>
            <Paragraph size="md" className=''>
              The production of tissue paper involves several key steps:
            </Paragraph>
          <motion.div variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-stretch my-16">
                
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
      </>
  )
}
