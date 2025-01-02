import React from 'react'

export default function Paragraph({children,className="",size='sm'}) {
  const fontSize={
    'sm' : 'text-sm',
    'md' : 'text-md',
    'lg' : 'text-lg',
  }
  return (
    <p className={`${fontSize[size]} ${className}`}>{children}</p>
  )
}
