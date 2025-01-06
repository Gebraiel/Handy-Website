import React from "react";
import Section from "./Section";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
export default function HandyWetWipes() {
  return (
    <>
      <Section className="!py-0">
        {/* <SectorsNavigation /> */}

        <div>
          <img src="/sectors/sector3.jpg" alt="" />
        </div>

        <div className="mt-5">
          <div>
            <SectionTitle className="!text-left mb-5">
              Handy Wet Wipes
            </SectionTitle>
            <div className="space-y-3">
              <div>
                <b>Established : 2018</b>
                <Paragraph size="md" className="text-justify m-auto">
                  Since its inception, our wet wipes plant has been at the
                  forefront of producing premium-quality products that meet both
                  local and international standards. With a steadfast commitment
                  to customer satisfaction, we take pride in the positive
                  feedback we’ve received from consumers around the globe.
                </Paragraph>
              </div>
              <div>
                <b>State-of-the-Art Production Facility</b>
                <Paragraph size="md" className="text-justify m-auto">
                  Built to adhere to Good Manufacturing Practices (GMP), our
                  facility maintains strict hygiene standards across production
                  floors, laboratories, and warehouses. Equipped with a 40-roll
                  capacity machine, it produces various wipe sizes with an
                  impressive output of up to 3,000 cartons per day, ranking
                  among the most productive in the Middle East.
                </Paragraph>
              </div>
              <div>
                <b>Water and Chemical Systems</b>
                <Paragraph size="md" className="text-justify m-auto">
                  An automated water purification system ensures water quality
                  that meets European Pharmacopoeia and WHO standards.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="mt-5">
          <SectionTitle className="my-5 !text-left">
            Production Process
          </SectionTitle>
          <Paragraph size="md">
            Using state-of-the-art converting machinery, our production process
            transforms jumbo rolls into high-quality tissue products through the
            following precise steps:
          </Paragraph>

          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <b>Non-Woven Fabric Production</b>
              <ul className="list-[circle] pl-5">
                <li>
                  <Paragraph size="sm">
                    <b>Fiber Preparation</b> : Raw materials like wood pulp or
                    polyester are processed into fibers.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph size="sm">
                    <b>Web Formation</b> : Fibers are transformed into a web
                    using spun lace or air-laid techniques.
                  </Paragraph>
                </li>
                <li>
                  <Paragraph size="sm">
                    <b>Roll Formation</b> : The web is rolled into master rolls.
                  </Paragraph>
                </li>
              </ul>
            </li>
            <li>
              <b>Slitting and Rewinding</b> : Master rolls are cut into narrower
              rolls and rewound for processing.
            </li>
            <li>
              <b>Solution Formulation</b> : Ingredients like water, surfactants,
              and emollients are mixed to create the cleaning solution.
            </li>
            <li>
              <b>Impregnation</b> : Fabric is impregnated with the solution,
              ensuring precise saturation for performance.
            </li>
            <li>
              <b>Folding and Cutting</b> : The fabric is folded and cut into
              individual wipes or sheets.
            </li>
            <li>
              <b>Packaging</b> : Wipes are sealed in containers, pouches, or
              canisters to maintain quality.
            </li>
            <li>
              <b>Labelling and Secondary Packaging</b> : Labels with product
              details are applied, and wipes are packed into cartons for
              shipment.
            </li>
          </ol>
        </div>
        <div className="mt-5">
          <SectionTitle className="my-5 !text-left">
            Key Drivers of Excellence
          </SectionTitle>
          <Paragraph size="md">Our plant thrives on the synergy of:</Paragraph>

          <ul className="list-disc pl-5">
            <li>
              <Paragraph size="sm">
                <b>Quality Control</b> : Ensures consistency and safety.
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Hygiene</b> : Prevents contamination.
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Regulatory Compliance</b> : Guarantees adherence to standards .
              </Paragraph>
            </li>
            <li>
              <Paragraph size="sm">
                <b>Innovation</b> : Drives the creation of superior products.
              </Paragraph>
            </li>
          </ul>

         
        </div>
      </Section>
    </>
  );
}
