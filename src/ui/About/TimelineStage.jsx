import React, { useState } from 'react'
import { motion } from "motion/react"
import Paragraph from '../Paragraph';
import { useTranslation } from 'react-i18next';
export default function TimelineStage({stage,index}) {
  const{i18n} = useTranslation();
  const isArabic = i18n.language =='ar';
  const[active,setActive] = useState(false);
  const [isEven] = useState(index % 2 == 0);
  const parentVarient = {
    hidden:{opacity:0},
    visible:{opacity:1,transition:{
      when:"beforeChildren"
    }}
  }
  const childrenVarient = {
    hidden:{opacity:0},
    visible:{opacity:1}
  }
  return (
        <div className='flex content-center items-center md:gap-16 '>

            <motion.div variants={parentVarient} initial="hidden" whileInView="visible" viewport={{once:true}} className={`rounded-full p-6 w-3 h-3 flex justify-center items-center bg-primary text-white relative z-10 md:-translate-x-0 ${isArabic ? 'translate-x-[47%]' : '-translate-x-[47%]'}`}>
              <motion.div variants={childrenVarient} className={`hidden md:block w-[33ch] absolute text-black bg-white shadow-lg  px-3 py-5 after:contents-[""] after:block after:border-transparent after:border-8 after:absolute after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0  ${isEven ? `${isArabic?'md:translate-x-5':'md:-translate-x-5'} end-full after:start-full after:border-s-white after:border-e-transparent` :`start-full after:end-full after:border-e-white ${isArabic?'-translate-x-5':'translate-x-5'} `}  `}>
                {
                  <Paragraph size="sm">
                    {stage.details}
                  </Paragraph>
                }

              </motion.div>
              <p>{stage.date}</p>
            </motion.div>
            <motion.div variants={childrenVarient} initial="hidden" whileInView="visible" className='block md:hidden'>

              <motion.div variants={childrenVarient} className={` max-w-full text-black bg-white shadow-lg px-3 py-5 after:contents-[""] after:block after:border-transparent after:border-8 after:absolute after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0  after:end-full after:border-e-white relative`}>
                  {
                    <Paragraph size="sm">
                      {stage.details}
                    </Paragraph>
                  }

                </motion.div>
            </motion.div>
        </div>
  )
}
