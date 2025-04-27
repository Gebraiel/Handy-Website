import React from 'react'
import Section from '../Section'

export default function BrandDifferentiationTab() {
  return (
    <Section className='!pt-0'>
      <div className='flex justify-center xl:justify-between items-center flex-wrap gap-y-5'>
    <div className='w-full xl:w-1/2'>
      <b className='text-xl'>Brand Differentiation</b>
      <ul className='list-disc pl-7 pt-5 space-y-2'>
        <li className=''>
          <b>Strong Brand Identity: </b>Memorable logo, tagline, and unique brand story.

          
        </li>
        <li className=''>
          <b>Effective Marketing: </b>Engaging social media, influencer collaborations, and targeted ads.
          
        </li>
        <li className=''>
          <b>Customer Loyalty: </b>
          Rewarding programs that keep customers coming back.

        </li>
        <li className=''>
          <b>Community Engagement: </b> Active involvement in local initiatives for a positive brand image.

        </li>
      </ul>
    </div>
    <div className=''>
      <img src="/About/Brand Differentiation.webp" alt="Brand Differentiation" />
    </div>
  </div>
    </Section>
  )
}
