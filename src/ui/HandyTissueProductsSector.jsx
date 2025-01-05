import React from 'react'
import Section from './Section'
import Paragraph from './Paragraph'
import SectionTitle from './SectionTitle'
export default function HandyTissueProductsSector() {
  return (
     <>
             <Section className="!pb-5">
                {/* <SectorsNavigation /> */}
                
                <div className="m-auto max-w-[700px]">
                  <img src="/sectors/sector2.jpg" alt="" />
                </div>
                
                <div className="max-w-[600px] m-auto mt-5">
                  <div>
                    <SectionTitle className="!text-left mb-5 !max-w-[66ch] !mx-auto">
                      Handy Tissue Products 
                    </SectionTitle>
                    <Paragraph size="md" className="text-justify m-auto">
                    In 2018, we took a bold step forward by establishing our second facility in 6th of October City. Equipped with cutting-edge South Korean technology and highly automated packaging systems, this plant reflects our commitment to innovation and efficiency.

                    </Paragraph>
        
                    <Paragraph size="md" className="text-justify m-auto my-3">
                    This advanced facility specializes in producing a versatile range of tissue paper products tailored to meet diverse consumer needs, including facial tissues, toilet paper, kitchen towels, table napkins, handkerchiefs, and C-fold towels.
    
                    </Paragraph>
        
                  </div>
        
                </div>
              </Section>
              
              <Section className="!pt-0">
              <div className="max-w-[600px] m-auto mt-5">
        
                  <SectionTitle className="my-5 !text-left">
                  The Transformation Process :  From Jumbo Rolls to Everyday Essentials
    
                  </SectionTitle>
                  <Paragraph size="md">
                    Using state-of-the-art converting machinery, our production process transforms jumbo rolls into high-quality tissue products through the following precise steps:
    
                  </Paragraph>
                  
                    <ul className="list-disc pl-5">
                        <li>
                          <Paragraph size="sm">
                            <b>Unwinding</b> : Jumbo rolls are fed into machines with care to ensure seamless processing.
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Embossing</b> : Patterns like ripples and diamonds are added to enhance texture, softness, and absorbency.
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Perforation</b> : Clean, adjustable perforations allow easy tearing and versatile product lengths.
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Folding</b> : Products are folded into uniform shapes, whether sheets, rolls, or interfolded packs.
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Cutting</b> : Advanced cutters shape each item to precise dimensions for consistency.
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Winding</b> : Clean, adjustable perforations allow easy tearing and versatile product lengths.
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Packaging</b> : Finished products are carefully wrapped, ensuring quality while showcasing Handy's branding.
    
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Palletizing</b> : Packaged items are efficiently stacked for optimal storage and transport.
    
                          </Paragraph>
                        </li>
                    </ul>
                </div>
                <div className="max-w-[600px] m-auto mt-5">
        
                  <SectionTitle className="my-5 !text-left">
                  Key Drivers of Excellence
    
                  </SectionTitle>
                  <Paragraph size="md">
                    Our plant thrives on the synergy of:
    
                  </Paragraph>
                  
                    <ul className="list-disc pl-5">
                        <li>
                          <Paragraph size="sm">
                            <b>Advanced Machinery</b> : Delivering precision and efficiency at every stage.
    
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>High-Quality Materials</b> : Ensuring superior softness, strength, and absorbency.
    
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Expert Operators</b> : Skilled hands and sharp eyes maintain production standards
                            .
                          </Paragraph>
                        </li>
                        <li>
                          <Paragraph size="sm">
                            <b>Robust Quality Checks</b> : Guaranteeing defect-free, top-tier products.
                          </Paragraph>
                        </li>
    
                    </ul>
    
                    <Paragraph size="lg" className='mt-3'>
                    With this facility, Handy Tissue Products continues to set new benchmarks in hygiene product manufacturing, blending cutting-edge technology with an unwavering commitment to quality.
                    </Paragraph>
                </div>
              </Section>
            </>
  )
}
