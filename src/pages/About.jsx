import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Banner from '../ui/Banner'
import Section from '../ui/Section'
import Paragraph from '../ui/Paragraph'
import Timeline from '../ui/Timeline'
import Tabs from '../ui/Tabs'
import ProductDifferentiationTab from '../ui/ProductDifferentiationTab'
import BrandDifferentiationTab from '../ui/BrandDifferentiationTab'
import AdditionalStrengthsTab from '../ui/AdditionalStrengthsTab'

export default function About() {
  return (
    <>
      <Banner image={'/banner/slider-1.png'} >
        <SectionTitle className="!leading-tight !mb-0">
          About Us
        </SectionTitle>
      </Banner>
      <Section>
        <SectionTitle className='mb-10'>About Alex Converta</SectionTitle>
          
        <Paragraph size='md' className='text-center'>
          Alex Converta is an Egyptian leader in tissue paper production, specializing in both white and colored paper, and converting it into essential hygiene products like facial tissues, handkerchiefs, toilet rolls, table napkins, kitchen towels, and sanitary towels.
  "From a humble beginning to becoming a trusted household name, Handy's journey is marked by innovation, resilience, and a dedication to making everyday life better for millions." In 2016, Habibco Trade Co. acquired Alex Converta and invested in cutting-edge Recard tissue machines to boost production.

          </Paragraph>
      </Section>
      <Section className='!py-0'>
        <SectionTitle className='mb-10'>Our Journey</SectionTitle>
        <Timeline/>
      </Section>

      <Section>
        <SectionTitle className='mb-10'>What Makes Handy Stand Out ?</SectionTitle>
        <Tabs links={["Product Differentiation","Brand Differentiation","Additional Strengths"]}>
          <ProductDifferentiationTab/>
          <BrandDifferentiationTab />
          <AdditionalStrengthsTab/>
        </Tabs>
      </Section>
    </>

  )
}
