import React, { useContext } from "react";
import CategoriesContext from "../../context/CategoriesContext";
import Category from "./Category";

export default function ProductCategories() {
  const categories = useContext(CategoriesContext);
  return (
    <div className="space-y-5">

      {
        categories.map((category)=> <Category category={category} key={category.id}/> )
      }
    </div>
  );
}

