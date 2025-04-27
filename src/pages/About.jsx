import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import Banner from '../ui/Banner'
import Section from '../ui/Section'
import Paragraph from '../ui/Paragraph'
import Tabs from '../ui/Tabs'
import ProductDifferentiationTab from '../ui/About/ProductDifferentiationTab'
import AdditionalStrengthsTab from '../ui/About/AdditionalStrengthsTab'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'
import Timeline from '../ui/About/Timeline'
import BrandDifferentiationTab from '../ui/About/BrandDifferentiationTab'

export default function About() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <>
      <Banner image={'/About/cover.webp'}/>

      <Section>
        <SectionTitle className='!text-left'>About Us</SectionTitle>
          
        <Paragraph size='md' className=''>
          Alex Converta is an Egyptian leader in tissue paper production, specializing in both white and colored paper, and converting it into essential hygiene products like facial tissues, handkerchiefs, toilet rolls, table napkins, kitchen towels, and sanitary towels.
  "From a humble beginning to becoming a trusted household name, Handy's journey is marked by innovation, resilience, and a dedication to making everyday life better for millions." In 2016, Habibco Trade Co. acquired Alex Converta and invested in cutting-edge Recard tissue machines to boost production.

          </Paragraph>
      </Section>
      <Section className='bg-[#f1eeee]'>
        <SectionTitle >Our Journey</SectionTitle>
        <Timeline/>
      </Section>
      <Section className='!pb-0'>
        <SectionTitle >What Makes Handy Stand Out ?</SectionTitle>
      </Section>
        <Tabs links={["Product Differentiation","Brand Differentiation","Additional Strengths"]}>
          <ProductDifferentiationTab/>
          <BrandDifferentiationTab />
          <AdditionalStrengthsTab/>
        </Tabs>
    </>

  )
}
