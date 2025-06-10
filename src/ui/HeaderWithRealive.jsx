import React, { useState } from 'react'
import Header from './Header';

export default function HeaderWithRealive({render}) {
const [isRelative,setIsRelative] = useState(false);
const categoriesMenu = [
    {
      title:"Jumbo Rolls",
      link:"/category/2"
    },
    {
      title:"Facial Tissues",
      link:"/category/1"
    },
   
    {
      title:"Toilet Tissues",
      link:"/category/4"
    },
    {
      title:"Home Care",
      link:"/category/3"
    },
     {
      title:"Wet Wipes",
      link:"/category/5",
      hasSubMenu:true,
      submenu:[
        {
          title:"BABY CARE",
          link:"/category/5?filter=BABY CARE"
        },
        {
          title:"MAKEUP REMOVING",
          link:"/category/5?filter=MAKEUP REMOVING"
        },
        {
          title:"GERM DEFENCE",
          link:"/category/5?filter=GERM DEFENCE"
        },
        {
          title:"ALL-PURPOSE USE",
          link:"/category/5?filter=ALL-PURPOSE USE"
        },
        {
          title:"PREMIUM REFRESHMENT",
          link:"/category/5?filter=PREMIUM REFRESHMENT"
        },
      ]
    }
    
   
    
  ]
  
const menu = [
    {title:"Home",link:"/"},
    {title:"About Us",link:"/about"},
    {title:"Sectors",link:"/sectors",hasSubMenu:true,submenu:[
      {title:"Handy Paper",link:"/sectors/handy-paper"},
      {title:"Handy Tissue Products",link:"/sectors/handy-tissue-products"},
      {title:"Wet Wipes",link:"/sectors/handy-wet-wipes"},
    ]},
    {
      title:"Products",link:"/products",hasSubMenu:true,submenu:categoriesMenu
    },
    {title:"Sustainability",link:"/sustainability"},
    {title:"Media Center",link:"/media-center"},
    {title:"Contact Us",link:"/contact"},
    {title:<p className='flex gap-1'><img src="/Flags/ar.svg"/> AR</p>},
    {title:<p className='flex gap-1'><img src="/Flags/en.svg"/> EN</p>}
  ]
  return (
    <>
        <Header menu={menu} isAbsolute={!isRelative }/>
        {render(setIsRelative)}
    </>
  )
}
