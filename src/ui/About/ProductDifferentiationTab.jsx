import React from 'react'
import Section from '../Section'
import FadeLeft from '../Animation/FadeLeft'
import FadeRight from '../Animation/FadeRight'

export default function ProductDifferentiationTab() {
  return (
    <Section className='!pt-0'>
      <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
      <div className='w-full xl:w-1/2'>
        <b className='text-xl'>Product Differentiation</b>
        <ul className='list-disc pl-7 pt-5 space-y-1'>
          <FadeLeft delay={0}>
            <li className=''>
              <b>Superior Quality: </b>Soft, strong, and highly absorbent.
              
            </li>
          </FadeLeft>
          <FadeLeft delay={0.1}>
            <li className=''>
              <b>Eco-Friendliness: </b>Crafted from sustainable materials like recycled paper and bamboo.
              
            </li>
          </FadeLeft>
         <FadeLeft delay={0.2}>
           <li className=''>
            <b>Innovative Designs: </b>
            Distinctive patterns and packaging that attract attention.

          </li>
         </FadeLeft>
         
          <FadeLeft delay={0.3}>
            <li className=''>
            <b>Specialized Products: </b> Tailored solutions for sensitive skin and extra-strength needs.
          </li>
          </FadeLeft>
          <FadeLeft delay={0.4}>
            <li className=''>
            <b>Natural Ingredients: </b> Enriched with aloe vera and chamomile for health-conscious consumers.

          </li>
          </FadeLeft>
        </ul>
      </div>
      <div className=''>
        <FadeRight>
            <img src="/About/Product Differentiation.webp" alt="Product Differentiation" className='2xl:h-auto 2xl:w-full xl:w-[400px] xl:h-[300px] xl:object-cover ' />
        </FadeRight>
      </div>
    </div>
    </Section>
  )
}
