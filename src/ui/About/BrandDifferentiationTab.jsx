import React from 'react'
import Section from '../Section'
import FadeLeft from '../Animation/FadeLeft'
import FadeRight from '../Animation/FadeRight'

export default function BrandDifferentiationTab() {
  return (
    <Section className='!pt-0'>
      <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
    <div className='w-full xl:w-1/2'>
      <b className='text-xl'>Brand Differentiation</b>
      <ul className='list-disc pl-7 pt-5 space-y-2'>
        <FadeLeft delay={0.1}>
          <li className=''>
          <b>Strong Brand Identity: </b>Memorable logo, tagline, and unique brand story.

          
        </li>
        </FadeLeft>
        <FadeLeft delay={0.2}>
<li className=''>
          <b>Effective Marketing: </b>Engaging social media, influencer collaborations, and targeted ads.
          
        </li>
        </FadeLeft>
        <FadeLeft delay={0.3}>
          <li className=''>
          <b>Customer Loyalty: </b>
          Rewarding programs that keep customers coming back.

        </li>
        </FadeLeft>
        <FadeLeft delay={0.4}>
          <li className=''>
          <b>Community Engagement: </b> Active involvement in local initiatives for a positive brand image.

        </li>
        </FadeLeft>
      </ul>
    </div>
    <div className=''>
      <FadeRight>
              <img src="/About/Brand Differentiation.webp" alt="Brand Differentiation"  className='2xl:h-auto 2xl:w-full xl:w-[400px] xl:h-[300px] xl:object-cover ' />
      </FadeRight>
    </div>
  </div>
    </Section>
  )
}
