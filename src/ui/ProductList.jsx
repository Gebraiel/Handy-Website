import React, { useEffect, useState } from "react";
import Product from "./Product";
import JumboProductsList from "./JumboProductsList";

export default function ProductList({ products, view, filter }) {
  const categoryName = products[0]?.category?.name;
  const [filteredProducts, setFilteredProducts] = useState(products);
  const isJumbo = categoryName.toLowerCase().includes("jumbo");

  useEffect(() => {
    if (filter != "all")
      setFilteredProducts(
        products.filter(
          (product) => product.package.toLowerCase() == filter.toLowerCase()
        )
      );
    else setFilteredProducts(products);
  }, [filter]);
  if(isJumbo)
    return(
  
      // <div className="flex flex-col lg:flex-row gap-10 items-baseline">
      //   <div className="space-y-5">
      //     <div className="text-center">
      //       <p className="text-center text-2xl font-bold border-t-2 border-primary bg-white text-primary shadow-md p-5">Virgin Pulp</p>
      //     </div>
      //     {products.filter((product) => product.subtitle.toLowerCase() == 'virgin pulp').map((product) => <JumboProduct product={product} view='gallery' key={product.id}/>)}
      //   </div>
      //   <div className="space-y-5">
      //     <div className="text-center">
      //       <p className="text-2xl font-bold border-t-2 border-primary bg-white text-primary shadow-md p-5">Economy</p>
      //     </div>
      //     {products.filter((product) => product.subtitle.toLowerCase() == 'economy').map((product) => <JumboProduct product={product} view='gallery' key={product.id}/>)}

      //   </div>
      // </div>
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
