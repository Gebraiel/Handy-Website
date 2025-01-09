import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { getCategories } from "../services/categories";
import { useLoaderData } from "react-router-dom";
import CategoriesContext from "../context/CategoriesContext";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
  const categories=useLoaderData();
  console.log(categories);
  const categoriesMenu = categories.map((category) => ({
    title: category.name,
    link: `/category/${category.id}`,
  }));  
  const menu = [
    {title:"About Us",link:"/about"},
    {title:"Why Handy",link:"/why-handy"},
    {title:"Sectors",link:"/sectors"},
    {
      title:"Products",link:"/products",hasSubMenu:true,submenu:categoriesMenu
    },
    {title:"Sustainability",link:"/sustainability"},
    {title:"Media Center",link:"/media-center"},
    {title:"Contact Us",link:"/contact"},
    
  ]
  return (
    <CategoriesContext.Provider value={categories}>
      <ScrollToTop />
      <Header menu={menu}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </CategoriesContext.Provider>
  );
}
export async function loader(){
  return await getCategories();
}