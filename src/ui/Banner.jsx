import React from 'react'
import Section from './Section'

export default function Banner({children,image,className=""}) {
    return (
        <Section style={{'backgroundImage': `url(${image})`}}  className={`bg-cover h-[500px] flex justify-center items-center ${children ? "overlay " :" "} ${className}`} >
            {
                children && 
                <div className="relative z-10">
                    {children}
                </div>
            }
        </Section>
    )
}
