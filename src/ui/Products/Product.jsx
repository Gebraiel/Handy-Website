import React from "react";
import { Link } from "react-router-dom";
import JumboProduct from "./JumboProduct";

export default function Product({product,view,categoryName}) {
  const isJumbo = categoryName.toLowerCase().includes("jumbo");
  if(isJumbo)
      return <JumboProduct product={product} view={view}/>
  return (
    <div
      className={`${
        view == "list"
          ? "flex flex-col md:flex-row items-center"
          : "flex flex-col items-center"
      } bg-white shadow-md`}
      
    >
      <div className={`w-full  ${view == "list" ? " pl-5 lg:w-1/4" : ""}`}>
        <img className="m-auto" src={product.image} alt="Product Image" />
      </div>
      <div
        className={`flex flex-col ${
          view == "list" ? "lg:flex-row" : "items-center"
        } justify-between p-5 flex-grow w-full`}
      >
        <div>
          <h1 className="text-primary text-xl font-bold">{product.title}</h1>
          {isJumbo ? (
            <ul className="list-disc pl-5 mt-5">
              {product.details.split(",").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{product.subtitle}</p>
          )}
        </div>     
        <div className="mt-5">
            <Link
            to={`/product/${product.id}`}
            className="py-2 px-3 bg-primary text-white font-bold"
            >
            Details
            </Link>
        </div>
        
      </div>
    </div>
  );
}
