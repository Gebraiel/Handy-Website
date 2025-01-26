import React from 'react'
import Banner from '../ui/Banner'
import SectionTitle from '../ui/SectionTitle'
import Section from '../ui/Section'
import ContactSection from '../ui/ContactSection'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'
import Form from '../ui/Contact/Form'

export default function Contact() {
    const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
       <>
         <Banner image={'/Contact/banner.webp'} />
            
       
         <Section>  
            <SectionTitle className=" mb-10">
              Contact Us
            </SectionTitle>    
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
