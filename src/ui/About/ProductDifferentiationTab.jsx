import Section from '../Section'
import FadeLeft from '../Animation/FadeLeft'
import FadeRight from '../Animation/FadeRight'
import { useTranslation } from 'react-i18next'

export default function ProductDifferentiationTab() {
  const{t}=useTranslation("About")
  return (
    <Section className='!pt-0'>
      <div className='flex justify-center xl:justify-between items-start flex-wrap gap-y-5'>
      <div className='w-full xl:w-1/2'>
        <b className='text-xl'>{t("Product Differentiation")}</b>
        <ul className='list-disc ps-7 pt-5 space-y-1'>
          <FadeLeft delay={0}>
            <li className=''>
              <b>{t("Superior-Quality-Heading")}: </b>{t("Superior-Quality-Content")}

            </li>
          </FadeLeft>
          <FadeLeft delay={0.1}>
            <li className=''>
              <b>{t("Eco-Friendliness-Heading")}: </b>{t("Eco-Friendliness-Content")}

            </li>
          </FadeLeft>
         <FadeLeft delay={0.2}>
           <li className=''>
            <b>{t("Innovative-Designs-Heading")}: </b>
            {t("Innovative-Designs-Content")}

          </li>
         </FadeLeft>

          <FadeLeft delay={0.3}>
            <li className=''>
            <b>{t("Specialized-Products-Heading")}: </b> {t("Specialized-Products-Content")}
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
