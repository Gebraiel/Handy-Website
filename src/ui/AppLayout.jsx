import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getCategories } from "../services/categories";
import { useLoaderData } from "react-router-dom";
import CategoriesContext from "../context/CategoriesContext";
import ScrollToTop from "./ScrollToTop";
import { useMatches } from "react-router-dom";
import {AnimatePresence} from "motion/react";
import { useNavigation } from "react-router-dom";
import { useState } from "react";
import OutletContext from "../context/OutletContext";
import { getProducts } from "../services/products";
import HeaderWithRealive from "./HeaderWithRealive";
import FadeIn from "./Animation/FadeIn";
 
export default function AppLayout() {
  const {categories,products} = useLoaderData();
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
    },
    {
      title:"Toilet Tissues",
      link:"/category/4"
    },
    {
      title:"Home Care",
      link:"/category/3"
    }
    
   
    
  ]
  const otherLinks=[
    {title:"Health & Safety Measures",link:"/health"},
    {title:"Customer Support",link:"/support"},
    {title:"Our Branches",link:"/branches"},
  ]
  const footerMenu = [
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
  ]
  return (
    <CategoriesContext.Provider value={categories} >
      <ScrollToTop />
      
      <HeaderWithRealive render={(setIsRelative)=>
      <main>
        <AnimatePresence>
          <OutletContext.Provider value={setIsRelative}>
              <Outlet/>
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