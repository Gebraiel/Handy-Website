import React from 'react'

export default function AdditionalStrengthsTab() {
  return (
    <div className='flex justify-center xl:justify-between items-center flex-wrap gap-y-5'>
    <div className='w-full xl:w-1/2'>
      <b className='text-xl'>Additional Strengths</b>
      <ul className='list-disc pl-7 pt-5 space-y-3'>
        <li className=''>
          <b>Price Competitiveness: </b>Great value without compromising quality.

          
        </li>
        <li className=''>
          <b>Reliable Supply Chain: </b>Consistent availability to keep customers satisfied.

          
        </li>
        <li className=''>
          <b>Exceptional Customer Service: </b>
          Building trust with outstanding support.

        </li>
      </ul>
    </div>
    <div className=''>
      <img src="/About/01.jpg" alt="Brand Differentiation" />
    </div>
  </div>
  )
}
