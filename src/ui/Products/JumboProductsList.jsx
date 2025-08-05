import React, { useEffect, useState } from "react";
import JumboProduct from "./JumboProduct";
import FadeLeft from "../Animation/FadeLeft";
import { useTranslation } from "react-i18next";

export default function JumboProductsList({products,view}) {
  const {i18n,t} = useTranslation("Common");
  const [filter,setFilter] = useState("Virgin Pulp");
  const productDetails = [
    {
      heading:t("Applications"),
      paragraph:t("Applications-Content")
    },
    {
      heading:t("Roll-Width"),
      paragraph:t("Roll-Width-Content")
    },
    {
      heading:t("Basis-Weight"),
      paragraph:t("Basis-Weight-Content")
    },
    {
      heading:t("Number-Plies"),
      paragraph:t("Number-Plies-Content")
    },
  ]
  console.log(t(filter))
  return (
    <>
      {/* <div className="flex flex-col md:flex-row gap-10 mb-10">

            <button className={`flex-grow text-center text-2xl font-bold bg-white text-primary shadow-md p-5 ${filter == "Virgin Pulp" ?"border-t-2" : ""}`} onClick={()=>setFilter("Virgin Pulp")}>
              {t("Virgin Pulp")}
            </button>

            <button className={`flex-grow text-2xl font-bold  bg-white text-primary shadow-md p-5 ${filter == "Recycled Paper" ?"border-t-2" : ""}`} onClick={()=> setFilter("Recycled Paper")}>
              {t("Recycled Paper")}
            </button>

      </div> */}
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
          <ul className="list-disc list-inside">
            {
              productDetails.map((detail)=>
                  <li key={detail.heading}>
                    <b>{detail.heading}</b>

                    <span>{detail.paragraph}</span>
                  </li>
              )
            }
          </ul>
      </div>
    </>
  );
}
