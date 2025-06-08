import React, { useContext, useEffect } from 'react'
import Banner from '../ui/Banner'
import SectionTitle from '../ui/SectionTitle'
import Section from '../ui/Section'
import ContactSection from '../ui/ContactSection'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'
import Form from '../ui/Contact/Form'
import OutletContext from '../context/OutletContext'

export default function Contact() {
    console.log("Contact");

  const setRelative = useContext(OutletContext);
  
  // setRelative(true);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log("Contact");
  useEffect(()=>{
    setRelative(true);
    return ()=>{
      setRelative(false);
    }
  },[])
  return (
       <>
         {/* <Banner image={'/Contact/banner.webp'} className='!bg-[55%]' />
            
        */}
         <Section>  
            <SectionTitle >
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
