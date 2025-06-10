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
import {loader as fileLoader} from './pages/Products';

import Product from "./pages/Product";
import CustomerSupport from "./pages/CustomerSupport";
import Health from "./pages/Health";
import Branches from "./pages/Branches";
import Error from "./pages/PageNotFound";
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
        loader:fileLoader
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
      },
      { 
        path:"/branches",
        element:<Branches/>
      },{
        path:"*",
        element:<Error />
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
