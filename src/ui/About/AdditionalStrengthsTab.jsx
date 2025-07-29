import React from 'react'
import Section from '../Section'
import FadeLeft from '../Animation/FadeLeft'
import FadeRight from '../Animation/FadeRight'
import { useTranslation } from 'react-i18next'

export default function AdditionalStrengthsTab() {
  const {t}=useTranslation("About");
  return (
    <Section className='!pt-0'>
        <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
    <div className='w-full xl:w-1/2'>
      <b className='text-xl'>{t("Additional Strengths")}</b>
      <ul className='list-disc ps-7 pt-5 space-y-3'>
        <FadeLeft delay={0.1}>
          <li className=''>
            <b>{t("Advanced-Laboratories-Heading")}: </b>{t("Advanced-Laboratories-Content")}
          </li>
        </FadeLeft>
        <FadeLeft delay={0.2}>
          <li className=''>
            <b>{t("Price-Competitiveness-Heading")}: </b>{t("Price-Competitiveness-Content")}
          </li>
        </FadeLeft>
        <FadeLeft delay={0.3}>
        <li className=''>
          <b>{t("Reliable-Supply-Chain-Heading")}: </b>{t("Reliable-Supply-Chain-Content")}
        </li>
        </FadeLeft>
        <FadeLeft delay={0.4}>
        <li className=''>
          <b>{t("Exceptional-Customer-Service-Heading")}: </b>{t("Exceptional-Customer-Service-Content")}

        </li>
        </FadeLeft>
      </ul>
    </div>
    <div className=''>
      <FadeRight>
              <img src="/About/Additional strength.webp" alt="Brand Differentiation"  className='2xl:h-auto 2xl:w-full xl:w-[400px] xl:h-[300px] xl:object-cover ' />
      </FadeRight>
    </div>
  </div>
    </Section>
  )
}
