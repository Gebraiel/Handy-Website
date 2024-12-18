import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const menu = [
    {title:"About Us",link:"/about"},
    {title:"Why Handy",link:"/why-handy"},
    {title:"Sectors",link:"/sectors"},
    {
      title:"Products",link:"/products",hasSubMenu:true,submenu:
      [
        {
          title:"Facial Tissues",
          link:"/category/facial",
        },
        {
          title:"Jumbo Rolls",
          link:"/category/jumbo",
        },
        {
          title:"Home Care",
          link:"/category/home-care",
        },
        {
          title:"Toilet Tissues",
          link:"/category/toilet",
        },
        {
          title:"Wet Wipes",
          link:"/category/wipes",
        },
      ]
    },
    {title:"Sustainability",link:"/sustainability"},
    {title:"Media Center",link:"/media-center"},
    {title:"Contact Us",link:"/contact"},
    
  ]
  return (
    <div className="">
      <Header menu={menu}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
