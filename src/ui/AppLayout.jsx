import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const menu = [
    {title:"About Us"},
    {title:"Why Handy"},
    {title:"Sectors"},
    {
      title:"Products",link:"/products",hasSubMenu:true,submenu:
      [
        {
          title:"Facial Tissues",
          link:"/products/pacial",
        },
        {
          title:"Jumbo Rolls",
          link:"/products/jumbo",
        },
        {
          title:"Home Care",
          link:"/products/home-care",
        },
        {
          title:"Toilet Tissues",
          link:"/products/toilet",
        },
        {
          title:"Wet Wipes",
          link:"/products/wipes",
        },
      ]
    },
    {title:"Sustainability"},
    {title:"Media Center"},
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
