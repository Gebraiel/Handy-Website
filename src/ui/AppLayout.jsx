import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { getCategories } from "../services/categories";
import { useLoaderData } from "react-router-dom";
import CategoriesContext from "../context/CategoriesContext";
import ScrollToTop from "./ScrollToTop";
import {AnimatePresence} from "motion/react";
import OutletContext from "../context/OutletContext";
import HeaderWithRealive from "./HeaderWithRealive";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getLocalizedPath } from "../services/localization";
import Error from "../pages/ErrorPage";
import i18n from "../utils/i18n";

export default function AppLayout() {
  const {categories,error} = useLoaderData();
  const{t,i18n}=useTranslation("Common");
  const currentLanguage = i18n.language;

  const otherLinks=[
    {title:t("Health & Safety Measures"),link:getLocalizedPath("/health",currentLanguage)},
    {title:t("Customer Support"),link:getLocalizedPath("/support",currentLanguage)},
    {title:t("Our Branches"),link:getLocalizedPath("/branches",currentLanguage)},
  ]
  const footerMenu = [
    {title:t("Home"),link:getLocalizedPath("/",currentLanguage)},
    {title:t("About Us"),link:getLocalizedPath("/about",currentLanguage)},
    {title:t("Sectors"),link:getLocalizedPath("/sectors",currentLanguage)},
    {
      title:t("Products"),link:getLocalizedPath("/products",currentLanguage)
    },
    {title:t("Sustainability"),link:getLocalizedPath("/sustainability",currentLanguage)},
    {title:t("Media Center"),link:getLocalizedPath("/media-center",currentLanguage)},
    {title:t("Contact Us"),link:getLocalizedPath("/contact",currentLanguage)},
  ]

  useEffect(()=>{
    document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", i18n.language === "ar" ? "ar" : "en");

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
              {error ? <Error error={{code:error.code,message:error.message}}/> : <Outlet/>}
            </AnimatePresence>
          </OutletContext.Provider>
        </AnimatePresence>
      </main>}/>
      <Footer mainLinks={footerMenu} otherLinks={otherLinks}/>
    </CategoriesContext.Provider>
  );
}
export async function loader({params}){
  let lang = params.lang || "en";
  const {categories,error} = await getCategories(lang);
  return {categories,error};
}