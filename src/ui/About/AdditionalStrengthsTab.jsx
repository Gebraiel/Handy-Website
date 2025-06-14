import React from 'react'
import Section from '../Section'

export default function AdditionalStrengthsTab() {
  return (
    <Section className='!pt-0'>
        <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
    <div className='w-full xl:w-1/2'>
      <b className='text-xl'>Additional Strengths</b>
      <ul className='list-disc pl-7 pt-5 space-y-3'>
        <li className=''>
          <b>Price Competitiveness: </b>Great value without compromising quality.

          
        </li>
        <li className=''>
          <b>Reliable Supply Chain: </b>Consistent availability to keep customers satisfied.

          
        </li>
        <li className=''>
          <b>Exceptional Customer Service: </b>
          Building trust with outstanding support.

        </li>
      </ul>
    </div>
    <div className=''>
      <img src="/About/Additional strength.webp" alt="Brand Differentiation"  className='2xl:h-auto 2xl:w-full xl:w-[400px] xl:h-[300px] xl:object-cover ' />
    </div>
  </div>
    </Section>
  )
}
