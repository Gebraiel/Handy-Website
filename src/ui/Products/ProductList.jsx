import React, { useEffect, useState } from "react";
import Product from "./Product";
import JumboProductsList from "./JumboProductsList";
import {motion} from "motion/react"
export default function ProductList({ products, view, filter }) {
  const categoryName = products[0]?.category?.name;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const isJumbo = categoryName.toLowerCase().includes("jumbo");

  useEffect(() => {
    if(filter.package == 'all' && filter.subcategory == ""){
      setFilteredProducts(products);
    }else{
      let newProducts = products;
      if(filter.subcategory){
          newProducts=newProducts.filter(
            (product) => product.subcategory?.toLowerCase().trim() == filter.subcategory.toLowerCase()
          )
      }
      if(filter.package !='all'){

          newProducts=newProducts.filter(
            (product) => {
              return product.package.toLowerCase() == filter.package.toLowerCase()
            }
          )
      }
      setFilteredProducts(newProducts);
    }
    
  },[filter]);
  if(isJumbo)
    return(
      <JumboProductsList products={products} view={view}/>
    )
  return (
    <motion.div
      className={`${
        view == "list"
          ? "space-y-5"
          : "grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {
        filteredProducts.map((product, index) => (
          <Product
            product={product}
            categoryName={categoryName}
            view={view}
            key={index}
          />
          ))
      }
    </motion.div>
  );
}
