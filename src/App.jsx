import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, useRevalidator } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import MediaCenter from "./pages/MediaCenter";
import Sectors from "./pages/Sectors";
import Sustainability from "./pages/Sustainability";
import Category from "./pages/Category";
import {loader as productsLoader} from './pages/Category';
import {loader as productLoader} from './pages/Product';
import {loader as categoriesLoader} from './ui/AppLayout';
import {loader as mediaLoader} from './pages/MediaCenter';
import {loader as singleBlogLoader} from './pages/SingleBlog';
import {loader as singleGalleryLoader} from './pages/MediaGallery';

import Product from "./pages/Product";
import CustomerSupport from "./pages/CustomerSupport";
import Health from "./pages/Health";
import Branches from "./pages/Branches";
import Error from "./pages/ErrorPage";
import { useTranslation } from "react-i18next";
import SingleBlog from "./pages/SingleBlog";
import MediaGallery from "./pages/MediaGallery";
// import {loader as categoriesLoader} from "./pages/Products";

function App() {
  const routerChildren = [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"contact",
        element:<Contact />
      },{
        path:"products",
        element:<Products />,

      }
      ,{
        path:"about",
        element:<About />
      }
      ,{
        path:"contact",
        element:<Contact />
      }
      ,{
        path:"media-center",
        element:<MediaCenter />,
        loader:mediaLoader
      }
      ,
      {
        path: "media-center/blogs/:id",
        element: <SingleBlog />,
        loader: singleBlogLoader
      },
      {
        path: "media-center/gallery/:id",
        element: <MediaGallery />,
        loader:singleGalleryLoader
      },

      {
        path:"sectors/",
        element:<Sectors />,
      },{
        path:"sectors/:sectorName",
        element:<Sectors />
      }
      ,{
        path:"sustainability",
        element:<Sustainability />
      }
      ,{
        path:"category/:categoryId",
        element:<Category />,
        loader:productsLoader
      },
      {
        path:"product/:productId",
        element:<Product />,
        loader:productLoader
      },
      {
        path:"support",
        element:<CustomerSupport />
      },
      {
        path:"health",
        element:<Health/>
      },
      {
        path:"branches",
        element:<Branches/>
      },{
        path:"*",
        element:<Error error={{code:"404!",message:"Page Not Found"}}/>
      }
    ]
    const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    loader: categoriesLoader,
    children: routerChildren,
  },
  {
    path:"/:lang",
    element: <LanguageWrapper> <AppLayout /> </LanguageWrapper>,
    loader: categoriesLoader,
    children: routerChildren,
  }
]);
  return <RouterProvider router={router} />;
}
function LanguageWrapper({children}){
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== "ar") {
      i18n.changeLanguage("ar");
    }
  }, [i18n]);

  return children;
}
export default App;
