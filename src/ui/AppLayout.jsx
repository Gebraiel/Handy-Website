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

export default function AppLayout() {
  const matches = useMatches()
  const isProducts = matches[1].pathname.includes('/product/');
  const isNotFound = matches[0].params['*'] != undefined;
  const navigation = useNavigation();
  // const isRelative = isNotFound || isProducts;
  const [isRelative,setIsRelative] = useState(false);
  const categories = useLoaderData();
  console.log(categories);
  // const categoriesMenu = categories.map((category) => ({
  //   title: category.name,
  //   link: `/category/${category.id}`,
  // }));  
  //Jumbo 
  //Home Care
  //Facial 
  //Toilet
  //Wet Wipes

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
  ]
  const otherLinks=[
    {title:"Health & Safety Measures",link:"/health"},
    {title:"Customer Support",link:"/support"},
    {title:"Our Branches",link:"/branches"},
  ]

  return (
    <CategoriesContext.Provider value={categories} >
      <ScrollToTop />
      <Header menu={menu} isAbsolute={!isRelative }/>
      <main>
        <AnimatePresence>
          <OutletContext.Provider value={setIsRelative}>
              <Outlet/>
          </OutletContext.Provider>
        </AnimatePresence>
      </main>
      <Footer mainLinks={menu} otherLinks={otherLinks}/>
    </CategoriesContext.Provider>
  );
}
export async function loader(){
  return await getCategories();
}