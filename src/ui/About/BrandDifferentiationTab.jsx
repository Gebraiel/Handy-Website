import React from 'react'
import Section from '../Section'
import FadeLeft from '../Animation/FadeLeft'
import FadeRight from '../Animation/FadeRight'
import { useTranslation } from 'react-i18next'

export default function BrandDifferentiationTab() {
  const {t} = useTranslation("About");
  return (
    <Section className='!pt-0'>
      <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
    <div className='w-full xl:w-1/2'>
      <b className='text-xl'>{t("Brand Differentiation")}</b>
      <ul className='list-disc ps-7 pt-5 space-y-2'>
        <FadeLeft delay={0.1}>
          <li className=''>
          <b>{t("Strong-Brand-Identity-Heading")}: </b>{t("Strong-Brand-Identity-Content")}


        </li>
        </FadeLeft>
        <FadeLeft delay={0.2}>
<li className=''>
          <b>{t("Effective-Marketing-Heading")}: </b>{t("Effective-Marketing-Content")}

        </li>
        </FadeLeft>
        <FadeLeft delay={0.3}>
          <li className=''>
          <b>{t("Customer-Loyalty-Heading")}: </b>{t("Customer-Loyalty-Content")}

        </li>
        </FadeLeft>
        <FadeLeft delay={0.4}>
          <li className=''>
          <b>{t("Community-Engagement-Heading")}: </b>{t("Community-Engagement-Content")}

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
