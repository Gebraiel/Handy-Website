import React from 'react'
import Section from './Section'

export default function Banner({children={},image}) {
    console.log(image)
    return (
        <Section style={{'background-image': `url(${image})`}}  className='bg-cover h-[500px]'>{children}</Section>
    )
}
