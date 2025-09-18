import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as productsLoader } from "./pages/Category";
import { loader as mediaLoader } from "./pages/MediaCenter";
import { loader as singleGalleryLoader } from "./pages/MediaGallery";
import { loader as productLoader } from "./pages/Product";
import { loader as singleBlogLoader } from "./pages/SingleBlog";
import AppLayout, { loader as categoriesLoader } from "./ui/AppLayout";
import Loader from "./ui/Loader";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const MediaCenter = lazy(() => import("./pages/MediaCenter"));
const Sectors = lazy(() => import("./pages/Sectors"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Category = lazy(() => import("./pages/Category"));
const Product = lazy(() => import("./pages/Product"));
const CustomerSupport = lazy(() => import("./pages/CustomerSupport"));
const Health = lazy(() => import("./pages/Health"));
const Branches = lazy(() => import("./pages/Branches"));
const SingleBlog = lazy(() => import("./pages/SingleBlog"));
const MediaGallery = lazy(() => import("./pages/MediaGallery"));
const Error = lazy(() => import("./pages/ErrorPage"));
function App() {
  const routerChildren = [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "media-center",
      element: <MediaCenter />,
      loader: mediaLoader,
    },
    {
      path: "media-center/blogs/:id",
      element: <SingleBlog />,
      loader: singleBlogLoader,
    },
    {
      path: "media-center/gallery/:id",
      element: <MediaGallery />,
      loader: singleGalleryLoader,
    },

    {
      path: "sectors/",
      element: <Sectors />,
    },
    {
      path: "sectors/:sectorName",
      element: <Sectors />,
    },
    {
      path: "sustainability",
      element: <Sustainability />,
    },
    {
      path: "category/:categoryId",
      element: <Category />,
      loader: productsLoader,
    },
    {
      path: "product/:productId",
      element: <Product />,
      loader: productLoader,
    },
    {
      path: "support",
      element: <CustomerSupport />,
    },
    {
      path: "health",
      element: <Health />,
    },
    {
      path: "branches",
      element: <Branches />,
    },
    {
      path: "*",
      element: <Error error={{ code: "404!", message: "Page Not Found" }} />,
    },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      loader: categoriesLoader,
      children: routerChildren,
    },
    {
      path: "/:lang",
      element: (
        <LanguageWrapper>
          <AppLayout />
        </LanguageWrapper>
      ),
      loader: categoriesLoader,
      children: routerChildren,
    },
  ]);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
function LanguageWrapper({ children }) {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== "ar") {
      i18n.changeLanguage("ar");
    }
  }, [i18n]);

  return children;
}
export default App;
