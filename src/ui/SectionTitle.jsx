import React from 'react'

export default function SectionTitle({children,className=""}) {

  return (
        <h1 className={` 2xl:text-4xl xl:text-3xl md:text-[2rem] text-3xl  text-center leading-10 font-bold  text-primary  2xl:mb-24 xl:mb-5 mb-10 ${className}`}>{children}</h1>
  )
}
