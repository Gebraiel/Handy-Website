import React, { useContext, useEffect, useState } from "react";
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

export default function Category() {
  const [view, setView] = useState("list");
  const [packagesList, setPackagesList] = useState([]);
  const[filter,setFilter] = useState({package:"all",subcategory:""});

  const [searchParams] = useSearchParams();
  const {products,categoryId} = useLoaderData();
  const categories = useContext(CategoriesContext);
  const category = categories.find((category)=>category.id == categoryId);
  const categoryName = category.name;

  useEffect(() => {
    let set = new Set();
    products.map((product) => product.package && set.add(product.package));
    setPackagesList(Array.from(set));
    setFilter({package:'all',subcategory:searchParams.get('filter')});
  }, [products]);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <>
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
                  <option value="all">All Packages</option>
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
    </>
  );
}

export async function loader({ params }) {
  const { categoryId } = params;
  const products = await getCategoryProducts(Number(categoryId));
  console.log(products);
  return {products,categoryId};
}
