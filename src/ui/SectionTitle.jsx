import React from 'react'

export default function SectionTitle({children,style=""}) {

  return (
        <h1 className={`text-5xl text-center leading-10 font-bold mb-20 text-primary ${style}`}>{children}</h1>
  )
}
