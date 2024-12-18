import React from 'react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'

export default function Sustainability() {
  return (
    <Section>
        <SectionTitle>Sustainability</SectionTitle>

        
        <p className="text-primary text-xl">
          We believe in sustainability at every step of our production. From
          eco-friendly materials to water purification systems meeting WHO
          standards, we strive to protect both the planet and your health. At
          HANDY, we create products that support a cleaner, greener future.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
          {sustainabilityImagesArray.map((e) => (
            <img src={e} />
          ))}
        </div>
      </Section>
  )
}
