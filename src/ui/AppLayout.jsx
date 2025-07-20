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
      link:"/category/2"
    },
    {
      title:t("Facial Tissues"),
      link:"/category/1"
    },
    {
      title:t("Wet Wipes"),
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
    },
    {
      title:t("Toilet Tissues"),
      link:"/category/4"
    },
    {
      title:t("Home Care"),
      link:"/category/3"
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