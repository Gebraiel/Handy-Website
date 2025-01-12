import React from 'react'
import Banner from '../ui/Banner'
import SectionTitle from '../ui/SectionTitle'
import Section from '../ui/Section'
import ContactSection from '../ui/ContactSection'
import Form from '../ui/Form'

export default function Contact() {
  return (
       <>
         <Banner image={'/banner/slider-1.png'} >
            <SectionTitle className="!leading-tight !mb-0">
              Contact Us
            </SectionTitle>
         </Banner>
       
         <Section>      
            <div className='flex lg:flex-row flex-col justify-between gap-10'>
              <div className='lg:w-1/2'>
              <ContactSection />
              </div>
              <div className="lg:w-1/2">
              <Form />
              </div>
            </div>
         </Section>
       </>
  )
}
