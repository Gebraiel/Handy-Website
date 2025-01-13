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
import Category from "./pages/Category";
import {loader as productsLoader} from './pages/Category';
import {loader as productLoader} from './pages/Product';
import {loader as categoriesLoader} from './ui/AppLayout';
import Product from "./pages/Product";
import Certificates from "./pages/Certificates";
import CustomerSupport from "./pages/CustomerSupport";
import Health from "./pages/Health";
// import {loader as categoriesLoader} from "./pages/Products";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: categoriesLoader,
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
        path:"/sectors/",
        element:<Sectors />
      },{
        path:"/sectors/:sectorName",
        element:<Sectors />
      }
      ,{
        path:"/sustainability",
        element:<Sustainability />
      }
      ,{
        path:"/certificates",
        element:<Certificates />
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
      },
      {
        path:"/support",
        element:<CustomerSupport />
      },
      {
        path:"/health",
        element:<Health/>
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
