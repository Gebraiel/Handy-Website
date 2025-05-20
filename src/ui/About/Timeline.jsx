import React from 'react'
import TimelineStage from './TimelineStage'

export default function Timeline() {
    const stages=[
        {
            details:"Handy Paper’s first factory was established in New Borg El-Arab City, Alexandria, featuring the iconic Recard machine and producing up to 15 tons of jumbo tissue rolls per day.",
            date:"1989"
        },
        {
            details:"Habibco Trade Co. acquired Alex Converta and introduced a new Recard tissue machine.",
            date:"2016"
        },
        {
          details:"Construction began on a new converting plant in October 6th City.",
          date:"2017"
        },
        {
          details:"The October 6th City plant was inaugurated, followed by the commissioning of tissue paper machines in Borg El-Arab.",
          date:"2018"
        },
        {
          details:"Plans were initiated to introduce a state-of-the-art wet wipes line and a hygienic disposable products plant in October 6th City.",
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
