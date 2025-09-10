import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import JumboProduct from "./JumboProduct";
import FadeLeft from "../Animation/FadeLeft";
import { useParams, useSearchParams } from "react-router-dom/dist";
import { getCategory, getSubcategories } from "../../services/categories";

export default function JumboProductsList({products,view}) {
  const {i18n,t} = useTranslation("Common");
  const [filter,setFilter] = useState("");
  const [subcategories,setSubCategoies] = useState([]);
  const [searchParams]= useSearchParams();
  const searchParamsValue = searchParams.get("filter");

  const {categoryId} = useParams();
  const [productDetails,setDetails] = useState()
  useEffect(()=>{
    async function getSubCategories(){
      const {category} = await getCategory(i18n.language,categoryId);
      console.log(category)

      setSubCategoies(category.subcategories);
      setDetails(category.text_2)
      setFilter(searchParamsValue || category.subcategories[0].id)
    }
    getSubCategories();

  },[])

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 mb-10">
            {subcategories.length > 0 && subcategories.map((subcategory)=> <button className={`flex-grow text-center text-2xl font-bold bg-white text-primary shadow-md p-5 ${filter == subcategory.id ?"border-t-2" : ""}`} onClick={()=>setFilter(subcategory.id)}>
              {subcategory.title}
            </button>)}
      </div>
      <div
      // className={`${
      //   view == "list"
      //     ? "space-y-5"
      //     : "grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      // }`}
      >
        {/* {products
          .filter((product) => product.subcategory.toLowerCase() == filter.toLowerCase())
          .map((product,index) => (
            <FadeLeft key={product.id} delay={index*0.01}>
              <JumboProduct product={product} view={view} />
            </FadeLeft>
          ))} */}
          {products.length > 0 ? products.filter((product) => product.subcategory?.title.toLowerCase() == filter.toLowerCase())
          .map((product,index) => (
            <FadeLeft key={product.id} delay={index*0.01}>
              <JumboProduct product={product} view={view} />
            </FadeLeft>
          )) : <div dangerouslySetInnerHTML={{__html:productDetails}}/>}
      </div>
    </>
  );
}
