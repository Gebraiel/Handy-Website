import React, { useEffect, useState } from 'react'

export default function Bullets({length,active,setActive,handleClick}) {
  const [activeBullet,setActiveBullet] = useState(0);
    useEffect(()=>{
        setActiveBullet(active);
    },[active]);
  const bullets = new Array(length).fill(null);
  return (
    bullets.map((_,index)=><button key={index} className={`w-4 h-4 rounded-full border border-white transition-colors duration-300 ${index === activeBullet ? "bg-primary" : "bg-transparent"}`} onClick={()=>handleClick(setActive(index))}></button>)
  )
}
