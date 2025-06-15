import React from 'react'
import Section from '../Section'

export default function ProductDifferentiationTab() {
  return (
    <Section className='!pt-0'>
      <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
      <div className='w-full xl:w-1/2'>
        <b className='text-xl'>Product Differentiation</b>
        <ul className='list-disc pl-7 pt-5 space-y-1'>
          <li className=''>
            <b>Superior Quality: </b>Soft, strong, and highly absorbent.
            
          </li>
          <li className=''>
            <b>Eco-Friendliness: </b>Crafted from sustainable materials like recycled paper and bamboo.
            
          </li>
          <li className=''>
            <b>Innovative Designs: </b>
            Distinctive patterns and packaging that attract attention.

          </li>
          <li className=''>
            <b>Specialized Products: </b> Tailored solutions for sensitive skin and extra-strength needs.
          </li>
          <li className=''>
            <b>Natural Ingredients: </b> Enriched with aloe vera and chamomile for health-conscious consumers.

          </li>
        </ul>
      </div>
      <div className=''>
        <img src="/About/Product Differentiation.webp" alt="Product Differentiation" className='2xl:h-auto 2xl:w-full xl:w-[400px] xl:h-[300px] xl:object-cover ' />
      </div>
    </div>
    </Section>
  )
}
