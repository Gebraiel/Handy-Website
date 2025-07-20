import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { getCategories } from "../services/categories";
import { useLoaderData } from "react-router-dom";
import CategoriesContext from "../context/CategoriesContext";
import ScrollToTop from "./ScrollToTop";
import {AnimatePresence} from "motion/react";
import OutletContext from "../context/OutletContext";
import { getProducts } from "../services/products";
import HeaderWithRealive from "./HeaderWithRealive";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getLocalizedPath } from "../services/localization";

export default function AppLayout() {
  const {categories,products} = useLoaderData();
  const{t,i18n}=useTranslation("Common");
  const currentLanguage = i18n.language;
  const categoriesMenu = [
    {
      title:t("Jumbo Rolls"),
      link:getLocalizedPath("/category/2",currentLanguage)
    },
    {
      title:t("Facial Tissues"),
      link:getLocalizedPath("/category/1",currentLanguage)
    },
    {
      title:t("Wet Wipes"),
      link:getLocalizedPath("/category/5",currentLanguage),
      hasSubMenu:true,
      submenu:[
        {
          title:"BABY CARE",
          link:getLocalizedPath("/category/5?filter=BABY CARE",currentLanguage)
        },
        {
          title:"MAKEUP REMOVING",
          link:getLocalizedPath("/category/5?filter=MAKEUP REMOVING",currentLanguage)
        },
        {
          title:"GERM DEFENCE",
          link:getLocalizedPath("/category/5?filter=GERM DEFENCE",currentLanguage)
        },
        {
          title:"ALL-PURPOSE USE",
          link:getLocalizedPath("/category/5?filter=ALL-PURPOSE USE",currentLanguage)
        },
        {
          title:"PREMIUM REFRESHMENT",
          link:getLocalizedPath("/category/5?filter=PREMIUM REFRESHMENT",currentLanguage)
        },
      ]
    },
    {
      title:t("Toilet Tissues"),
      link:getLocalizedPath("/category/4",currentLanguage)
    },
    {
      title:t("Home Care"),
      link:getLocalizedPath("/category/3",currentLanguage)
    }



  ]
  const otherLinks=[
    {title:t("Health & Safety Measures"),link:getLocalizedPath("/health",currentLanguage)},
    {title:t("Customer Support"),link:getLocalizedPath("/support",currentLanguage)},
    {title:t("Our Branches"),link:getLocalizedPath("/branches",currentLanguage)},
  ]
  const footerMenu = [
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

  useEffect(()=>{
    document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");

    document.documentElement.classList.remove("font-en", "font-ar");
    document.documentElement.classList.add(i18n.language === "ar" ? "font-ar" : "font-en");
  },[i18n.language])
  return (
    <CategoriesContext.Provider value={categories} >
      <ScrollToTop />

      <HeaderWithRealive render={(setIsRelative)=>
      <main>
        <AnimatePresence>
          <OutletContext.Provider value={setIsRelative}>
            <AnimatePresence mode="wait">
              <Outlet/>
            </AnimatePresence>
          </OutletContext.Provider>
        </AnimatePresence>
      </main>}/>
      <Footer mainLinks={footerMenu} otherLinks={otherLinks}/>
    </CategoriesContext.Provider>
  );
}
export async function loader(){
  const categories = await getCategories();
  const products = await getProducts();
  return {categories,products}
}