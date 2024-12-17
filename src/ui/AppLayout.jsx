import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  const menu = [
    {title:"About Us"},
    {title:"Why Handy"},
    {title:"Sectors"},
    {title:"Products"},
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
