import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
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
        element:<Products />
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
