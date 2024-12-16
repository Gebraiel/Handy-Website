import React, { useEffect, useRef, useState } from 'react'

export default function Typing({word}) {
    const [typing,setTyping] = useState("");
    const index = useRef(0);
    useEffect(()=>{
        const timeOut = setTimeout(() => {
            setTyping((typing)=>typing += word[index.current++]);
        }, 150);
        if(typing===word)
            clearTimeout(timeOut);
    },[typing])
  return (
    <h1 className='text-3xl xl:text-5xl border-r-2 w-fit m-auto mb-2 animate-flashing'>{typing}</h1 >
  )
}
