import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import MediaCenter from "./pages/MediaCenter";
import Sectors from "./pages/Sectors";
import Sustainability from "./pages/Sustainability";
import WhyHandy from "./pages/WhyHandy";
import Category from "./pages/Category";
import {loader as productsLoader} from './pages/Category';
import {loader as productLoader} from './pages/Product';
import Product from "./pages/Product";
// import {loader as categoriesLoader} from "./pages/Products";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/contact",
        element:<Contact />
      },{
        path:"/products",
        element:<Products />,
      }
      ,{
        path:"/about",
        element:<About />
      }
      ,{
        path:"/contact",
        element:<Contact />
      }
      ,{
        path:"/media-center",
        element:<MediaCenter />
      }
      ,{
        path:"/sectors",
        element:<Sectors />
      }
      ,{
        path:"/sustainability",
        element:<Sustainability />
      }
      ,{
        path:"/why-handy",
        element:<WhyHandy />
      }
      ,{
        path:"/category/:categoryId",
        element:<Category />,
        loader:productsLoader
      },
      {
        path:"/product/:productId",
        element:<Product />,
        loader:productLoader
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
