import React, { useEffect, useState } from 'react'

export default function Counter({counter,duration,countBy}) {
  const [num,setNum] = useState(0);
  useEffect(()=>{
    if(num < counter)
        setTimeout(()=>setNum(num+countBy) , duration/counter)
    else
      setNum(counter)
  },[num])
  return (
    <span className='font-bold text-primary text-2xl'>{num}</span>
  )
}
