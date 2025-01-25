import React from 'react'
import TimelineStage from './TimelineStage'

export default function Timeline() {
    const stages=[
        {
            details:"Habibco Trade Co. acquired Alex Converta and introduced a new Recard tissue machine.",
            date:"2016"
        },
        {
          details:"Construction began for a new converting plant in October 6th City.",
          date:"2017"
        },
        {
          details:"The October 6th City plant was launched, followed by the commissioning of paper tissue machines in Borg El Arab.",
          date:"2018"
        },
        {
          details:"Plans were set to introduce a state-of-the-art wet wipes line and hygienic disposable plant in October 6th City.",
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
