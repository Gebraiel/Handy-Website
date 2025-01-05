import React from 'react'

export default function SectionTitle({children,className=""}) {

  return (
        <h1 className={`text-3xl md:text-[2rem] 2xl:text-4xl text-center leading-10 font-bold  text-primary ${className}`}>{children}</h1>
  )
}
