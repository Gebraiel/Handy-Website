import React from 'react'
import Section from './Section'
import Paragraph from './Paragraph'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import SectionTitle from './SectionTitle';
export default function HandyPaperSector() {
  return (
    <>
     <Section className="!py-0">
        {/* <SectorsNavigation /> */}
        
        <div className="m-auto max-w-[700px]">
          <img src="/sectors/sector1.jpg" alt="" />
        </div>
        
        <div className="max-w-[600px] m-auto mt-5">
          <div>
            <SectionTitle className="!text-left mb-5 !max-w-[66ch] !mx-auto">
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
      <Section type="fullscreen">
          <MapContainer
            center={[33.854721, 35.862285]}
            className='h-96'
            zoom={4}
            scrollWheelZoom={true}
          >
              <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
            <Marker position={[33.854721, 35.862285]}>
              <Popup>
                Lebanon
              </Popup>
            </Marker>
            <Marker position={[39.074208, 21.824312]}>
              <Popup>
                Greece
              </Popup>
            </Marker>
            <Marker position={[35.126413, 33.429859]}>
              <Popup>
                Cyprus
              </Popup>
            </Marker>
            <Marker position={[23.885942	, 45.079162]}>
              <Popup>
                KSA
              </Popup>
            </Marker>
            <Marker position={[29.31166	,47.481766]}>
              <Popup>
                Kuwait
              </Popup>
            </Marker>
            <Marker position={[31.791702	,-7.09262]}>
              <Popup>
                Morocco
              </Popup>
            </Marker>
            <Marker position={[34.802075	,38.996815]}>
              <Popup>
                Syria
              </Popup>
            </Marker>
            <Marker position={[12.862807	,38.996815]}>
              <Popup>
                Sudan
              </Popup>
            </Marker>
       
          </MapContainer>
      </Section>
      <Section className="!pt-0">
      <div className="max-w-[600px] m-auto mt-5">

          <SectionTitle className="my-5 !text-left">
            Paper Making Process
          </SectionTitle>
          <Paragraph size="md">
            The production of tissue paper involves several key steps:
          </Paragraph>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <b>Pulping</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Raw Material</b> : Virgin wood pulp or recycled paper.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph size="sm">
                    <b>Pulping Process</b> : The raw material is processed into
                    a fibrous slurry.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Refining</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Fiber Modification</b> : Adjusts fiber length and
                    strength, influencing softness and absorbency.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Screening</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Impurity Removal</b> : The pulp is screened to remove
                    dirt or knots.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Forming</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Sheet Formation</b> : The pulp is spread onto a moving
                    mesh, forming a wet sheet.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Pressing</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Water Removal</b> : The wet sheet is pressed to remove
                    excess water.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Drying</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Moisture Removal</b> : The pressed sheet is dried by
                    heated cylinders.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Creping</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Surface Embossing</b> : The dried paper is embossed to
                    create a soft, textured surface.
                  </Paragraph>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </Section>
      </>
  )
}