import React from "react";

export default function JumboProduct({ product, view }) {
  return (
    <div className={`${view == "list" ? "flex flex-col md:flex-row items-center" : "flex flex-col items-center" } bg-white shadow-md`}>
      <div className={`w-full  ${view == "list" ? " p-5 lg:w-1/4" : ""}`}>
        <img className="m-auto" src={product.image} alt="Product Image" />
      </div>
      <div
        className={`flex flex-col ${
          view == "list" ? "lg:flex-row" : ""
        } justify-between p-5 flex-grow w-full`}
      >
        <div>
          <h1 className="text-primary text-3xl font-bold">{product.title}</h1>
           {/* <h2 className="text-secondary text-xl font-bold my-2 capitalize">{product.subtitle}</h2> */}
          <ul className="list-disc pl-5 mt-5">
            {product.details.split(",").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
