import React from 'react'
import Banner from '../ui/Banner'
import Paragraph from '../ui/Paragraph'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'

export default function Health() {
      const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <>
        <Banner image={'/Safety/banner.webp'} />
        <Section>
            <SectionTitle className='mb-10'>
                Health & Safety Measures
            </SectionTitle>
            <Paragraph size='lg' >
            At Handy, we prioritize the health and safety of our team. Our commitment to a safe workplace includes
            </Paragraph>
            <ul className='list-disc pl-8 py-5 space-y-2' >
                <li>
                    <b>Routine Inspections : </b> Regular safety checks to spot and address potential risks.
                </li>
                <li>
                    <b>Emergency Preparedness : </b> Ongoing fire drills, evacuation plans, and first-aid training.
                </li>
                <li>
                    <b>Employee Training : </b> Comprehensive safety training for all staff.
                </li>
                <li>
                    <b>Personal Protective Equipment (PPE) : </b> Ensuring the use of necessary protective gear.
                </li>
                <li>
                    <b>Ergonomic Workstations : </b> Designed to prevent injuries and enhance comfort.
                </li>
                <li>
                    <b>Clean Environment : </b> Keeping a tidy, hazard-free workspace.
                </li>
                <li>
                    <b>Air Quality & Ventilation : </b> Maintaining optimal air quality for a healthier environment.
                </li>
            </ul>
            <Paragraph size='lg' className='text-center text-primary font-semibold'>
                By combining proactive measures with continuous improvements, we ensure a safe, supportive workplace for all.

            </Paragraph>
        </Section>
    </>
    
  )
}
