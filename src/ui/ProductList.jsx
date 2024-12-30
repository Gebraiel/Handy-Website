import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function ProductList({ products, view ,filter}) {
  const categoryName = products[0]?.category?.name;
  const [filteredProducts,setFilteredProducts] = useState(products);
  
  useEffect(()=>{
    if(filter != 'all')
        setFilteredProducts(products.filter((product) => product.package.toLowerCase() == filter.toLowerCase()))
    else
        setFilteredProducts(products);

  },[filter])  
  return (
        filteredProducts.map((product, index) => (
        <div
          className={`${
            view == "list"
              ? "flex flex-col md:flex-row items-center"
              : "flex flex-col items-center"
          } bg-white shadow-md`}
          key={index}
        >
          <div
            className={`w-full ${view == "list" ? " lg:w-1/4" : ""}`}
          >
            <img
              className="m-auto"
              src={product.image}
              alt="Product Image"
            />
          </div>
          <div
            className={`flex flex-col ${
              view == "list" ? "lg:flex-row" : "items-center"
            } justify-between p-5 flex-grow w-full`}
          >
            <div>
              <h1 className="text-primary text-3xl font-bold">
                {product.title}
              </h1>
            {
                categoryName.toLowerCase().includes('jumbo') ? 
                <ul className="list-disc pl-5 mt-5">
                    {product.details.split(",").map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                
                :
                <p>{product.subtitle}</p> 
                 
               
            }
            </div>
            {
                !categoryName.toLowerCase().includes('jumbo') &&
                <div className="mt-5">
                <Link
                    to={`/product/${product.id}`}
                    className="py-2 px-3 bg-primary text-white font-bold"
                >
                    Details
                </Link>
                </div>
            }
          </div>
        </div>
      ))
  );
}
