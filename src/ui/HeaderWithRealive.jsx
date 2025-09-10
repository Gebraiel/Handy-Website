import React, { useContext, useState } from 'react'
import Header from './Header';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath } from '../services/localization';
import CategoriesContext from '../context/CategoriesContext';

export default function HeaderWithRealive({render}) {
const {t,i18n} = useTranslation("Common")
const [isRelative,setIsRelative] = useState(false);
const categories = useContext(CategoriesContext);
const currentLanguage = i18n.language;
const categoriesMenu = categories.map((category)=>{
  const submenu = category.subcategories.length>0 ? category.subcategories.map((subcategory)=>{
    const submenuItem = {title:subcategory.title,link:getLocalizedPath(`/category/${category.id}?filter=${subcategory.id}`,i18n.language)}
    return submenuItem;
  }) : []
  const menuItem = {title:category.title,link:getLocalizedPath(`/category/${category.id}`,i18n.language),hasSubMenu:category.subcategories.length>0,submenu};
  return menuItem;
})
// [
//     {
//       title:t("Jumbo Rolls"),
//       link:getLocalizedPath("/category/2",currentLanguage)
//     },
//     {
//       title:t("Facial Tissues"),
//       link:getLocalizedPath("/category/1",currentLanguage)
//     },

//     {
//       title:t("Toilet Tissues"),
//       link:getLocalizedPath("/category/4",currentLanguage)
//     },
//     {
//       title:t("Home Care"),
//       link:getLocalizedPath("/category/3",currentLanguage)
//     },
//      {
//       title:t("Wet Wipes"),
//       link:getLocalizedPath("/category/5",currentLanguage),
//       hasSubMenu:true,
//       submenu:[
//         {
//           title:t("BABY CARE"),
//           link:getLocalizedPath("/category/5?filter=BABY CARE",currentLanguage)
//         },
//         {
//           title:t("MAKEUP REMOVING"),
//           link:getLocalizedPath("/category/5?filter=MAKEUP REMOVING",currentLanguage)
//         },
//         {
//           title:t("GERM DEFENCE"),
//           link:getLocalizedPath("/category/5?filter=GERM DEFENCE",currentLanguage)
//         },
//         {
//           title:t("ALL-PURPOSE USE"),
//           link:getLocalizedPath("/category/5?filter=ALL-PURPOSE USE",currentLanguage)
//         },
//         {
//           title:t("PREMIUM REFRESHMENT"),
//           link:getLocalizedPath("/category/5?filter=PREMIUM REFRESHMENT",currentLanguage)
//         },
//       ]
//     }



//   ]
const menu = [
    {title:t("Home"),link:getLocalizedPath("/",currentLanguage)},
    {title:t("About Us"),link:getLocalizedPath("/about",currentLanguage)},
    {title:t("Sectors"),link:getLocalizedPath("/sectors",currentLanguage),hasSubMenu:true,submenu:[
      {title:t("Handy Paper"),link:getLocalizedPath("/sectors/handy-paper",currentLanguage)},
      {title:t("Handy Tissue Products"),link:getLocalizedPath("/sectors/handy-tissue-products",currentLanguage)},
      {title:t("Wet Wipes"),link:getLocalizedPath("/sectors/handy-wet-wipes",currentLanguage)},
    ]},
    {
      title:t("Products"),link:getLocalizedPath("/products",currentLanguage),hasSubMenu:true,submenu:categoriesMenu
    },
    {title:t("Sustainability"),link:getLocalizedPath("/sustainability",currentLanguage)},
    {title:t("Media Center"),link:getLocalizedPath("/media-center",currentLanguage)},
    {title:t("Contact Us"),link:getLocalizedPath("/contact",currentLanguage)},

  ]
  return (
    <>
        <Header menu={menu} isAbsolute={!isRelative }/>
        {render(setIsRelative)}
    </>
  )
}
