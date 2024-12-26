import React from 'react'

export default function SectionTitle({children,className=""}) {

  return (
        <h1 className={`text-3xl lg:text-4xl xl:text-5xl text-center leading-10 font-bold mb-10 lg:mb-20  text-primary ${className}`}>{children}</h1>
  )
}
