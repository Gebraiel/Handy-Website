import React, { useEffect, useState } from "react";
import Product from "./Product";
import JumboProductsList from "./JumboProductsList";

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
          console.log('filter by subcategory');
          newProducts=newProducts.filter(
            (product) => product.subcategory?.toLowerCase() == filter.subcategory.toLowerCase()
          )
      }
      if(filter.package !='all'){
          console.log("filter by package");

          console.log(filter.package);
          newProducts=newProducts.filter(
            (product) => {
              console.log(product.package.toLowerCase() == filter.package.toLowerCase());
              return product.package.toLowerCase() == filter.package.toLowerCase()
            }
          )
      }
      console.log("Products After Filtertion: ",newProducts);
      setFilteredProducts(newProducts);
    }
    
  },[filter]);
  if(isJumbo)
    return(
      <JumboProductsList products={products} view={view}/>
    )
  return (
    <div
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
    </div>
  );
}
