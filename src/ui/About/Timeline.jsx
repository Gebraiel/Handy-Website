import React from 'react'
import TimelineStage from './TimelineStage'
import { useTranslation } from 'react-i18next'

export default function Timeline() {
  const{t}=useTranslation("About");
    const stages=[
        {
            details:t("History-01"),
            date:"1989"
        },
        {
            details:t("History-02"),
            date:"2016"
        },
        {
          details:t("History-03"),
          date:"2017"
        },
        {
          details:t("History-04"),
          date:"2018"
        },
        {
          details:t("History-05"),
          date:"2020"
        },
    ]
  return (
    <div className='relative grid grid-cols-1 md:place-items-center place-items-start md:gap-20 gap-5'>
        {stages.map((stage,index) =><TimelineStage stage={stage} index={index} key={index} /> ) }
        <div className='w-1 h-full absolute bg-black -z-0'></div>
    </div>
  )
}
