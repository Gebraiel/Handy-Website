import React, { useState } from 'react'
import Header from './Header';
import { useTranslation } from 'react-i18next';

export default function HeaderWithRealive({render}) {
const {t} = useTranslation("Common")
const [isRelative,setIsRelative] = useState(false);
const categoriesMenu = [
    {
      title:t("Jumbo Rolls"),
      link:"/category/2"
    },
    {
      title:t("Facial Tissues"),
      link:"/category/1"
    },

    {
      title:t("Toilet Tissues"),
      link:"/category/4"
    },
    {
      title:t("Home Care"),
      link:"/category/3"
    },
     {
      title:t("Wet Wipes"),
      link:"/category/5",
      hasSubMenu:true,
      submenu:[
        {
          title:t("BABY CARE"),
          link:"/category/5?filter=BABY CARE"
        },
        {
          title:t("MAKEUP REMOVING"),
          link:"/category/5?filter=MAKEUP REMOVING"
        },
        {
          title:t("GERM DEFENCE"),
          link:"/category/5?filter=GERM DEFENCE"
        },
        {
          title:t("ALL-PURPOSE USE"),
          link:"/category/5?filter=ALL-PURPOSE USE"
        },
        {
          title:t("PREMIUM REFRESHMENT"),
          link:"/category/5?filter=PREMIUM REFRESHMENT"
        },
      ]
    }



  ]

const menu = [
    {title:t("Home"),link:"/"},
    {title:t("About Us"),link:"/about"},
    {title:t("Sectors"),link:"/sectors",hasSubMenu:true,submenu:[
      {title:t("Handy Paper"),link:"/sectors/handy-paper"},
      {title:t("Handy Tissue Products"),link:"/sectors/handy-tissue-products"},
      {title:t("Wet Wipes"),link:"/sectors/handy-wet-wipes"},
    ]},
    {
      title:t("Products"),link:"/products",hasSubMenu:true,submenu:categoriesMenu
    },
    {title:t("Sustainability"),link:"/sustainability"},
    {title:t("Media Center"),link:"/media-center"},
    {title:t("Contact Us"),link:"/contact"},

  ]
  return (
    <>
        <Header menu={menu} isAbsolute={!isRelative }/>
        {render(setIsRelative)}
    </>
  )
}
