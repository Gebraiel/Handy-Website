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

export default function AppLayout() {
  const {categories,products} = useLoaderData();
  const{t,i18n}=useTranslation("Common");
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
    {title:t("Health & Safety Measures"),link:"/health"},
    {title:t("Customer Support"),link:"/support"},
    {title:t("Our Branches"),link:"/branches"},
  ]
  const footerMenu = [
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