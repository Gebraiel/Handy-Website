import React, { useContext, useEffect, useMemo, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Section from "../ui/Section";
import Loader from "../ui/Loader";
import Banner from "../ui/Banner";
import { getCategoryProducts } from "../services/products";
import CategoryNavigation from "../ui/Categories/CategoryNavigation";
import { CiBoxList } from "react-icons/ci";
import { RiGalleryView2 } from "react-icons/ri";
import ProductList from "../ui/Products/ProductList";
import SectionTitle from "../ui/SectionTitle";
import CategoriesContext from "../context/CategoriesContext";
import { useSearchParams } from "react-router-dom";
import FadeIn from "../ui/Animation/FadeIn";
import { useTranslation } from "react-i18next";

export default function Category() {
  console.log("Category");
  const {i18n,t} = useTranslation("Common")
  const [view, setView] = useState("list");
  const [packagesList, setPackagesList] = useState([]);
  const[filter,setFilter] = useState({package:"all",subcategory:""});
  const isArabic = i18n.language =='ar';
  const [searchParams] = useSearchParams();
  const {products,categoryId} = useLoaderData();
  const localizedProducts = useMemo(()=>{
    return products.map((product)=>{
      return {...product,title:isArabic?product['title-ar']:product.title,details:isArabic ? product['details-ar'] : product.details,subtitle:isArabic ? product['subtitle-ar'] : product.subtitle,package:isArabic ? product['package-ar']:product.package}
    });
  },[products])

  const categories = useContext(CategoriesContext);
  const localizedCategories = categories.map((category)=>{
    return {...category,name:isArabic ? category['name-ar']:category['name-en']};
  })
  const category = localizedCategories.find((category)=>category.id == categoryId);
  const categoryName = category.name;

  useEffect(() => {
    let set = new Set();
    localizedProducts.map((product) => product.package && set.add(product.package));
    setPackagesList(Array.from(set));
    setFilter({package:'all',subcategory:searchParams.get('filter')});
  }, [localizedProducts]);

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <FadeIn>
      <Banner
        image={category.banner ? category.banner : "/banner/slider-1.png"}
        className="flex justify-center items-center bg-[55%] sm:bg-cover"
      />

      <Section>
        <SectionTitle className="text-primary font-bold text-center capitalize">
          {categoryName || "Products"}
        </SectionTitle>
        <div className="flex justify-center flex-wrap items-center mb-5">
          <CategoryNavigation id={categoryId} />
        </div>
        {

              <div className="flex justify-end mb-5 gap-5">

                <select
                  defaultValue="all"
                  className="border-b py-3 focus:outline-none sm:w-fit w-full"
                  onChange={(e) => setFilter({...filter,package:e.target.value})}
                >
                  <option value="all">{t("All Packages")}</option>
                  {packagesList.map((item, index) => (
                    <option key={index}> {item} </option>
                  ))}
                </select>
                <div className="hidden md:flex gap-2 text-3xl">
                    <button
                      className={`${view == "list" ? "text-primary font-bold" : ""}`}
                      onClick={() => setView("list")}
                    >
                      <CiBoxList />
                    </button>
                    <button
                      className={`${view == "gallery" ? "text-primary font-bold" : ""}`}
                      onClick={() => setView("gallery")}
                    >
                      <RiGalleryView2 />
                    </button>
                  </div>
              </div>

        }


        <div>
          {products.length > 0 ? (
              <ProductList products={products} view={view} filter={filter}/>
            )
          : (
            <SectionTitle>No Products Found</SectionTitle>
          )}
        </div>


      </Section>

    </FadeIn>
  );
}

export async function loader({ params }) {
  const { categoryId } = params;
  const products = await getCategoryProducts(Number(categoryId));
  console.log(products);
  return {products,categoryId};
}
