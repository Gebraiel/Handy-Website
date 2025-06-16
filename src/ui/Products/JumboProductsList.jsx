import React, { useState } from "react";
import JumboProduct from "./JumboProduct";
import FadeIn from "../Animation/FadeIn";

export default function JumboProductsList({products,view}) {
  const [filter,setFilter] = useState('virgin pulp');
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 mb-10">
        
            <button className={`flex-grow text-center text-2xl font-bold bg-white text-primary shadow-md p-5 ${filter =='virgin pulp' ?"border-t-2" : ""}`} onClick={()=>setFilter('virgin pulp')}>
              Virgin Pulp
            </button>
       
            <button className={`flex-grow text-2xl font-bold  bg-white text-primary shadow-md p-5 ${filter =='economy' ?"border-t-2" : ""}`} onClick={()=> setFilter('economy')}>
              Economy
            </button>
          
      </div>
      <div className={`${
        view == "list"
          ? "space-y-5"
          : "grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}>
        {products
          .filter((product) => product.subtitle.toLowerCase() == filter)
          .map((product,index) => (
            <FadeIn key={product.id} delay={index*0.01}>
              <JumboProduct product={product} view={view} />
            </FadeIn>
          ))}
      </div>
    </>
  );
}
