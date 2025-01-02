import React from "react";
import { Link } from "react-router-dom";

export default function Category({category}) {
    console.log(category)
  return (
    <div className="flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 ">
      <div className="max-w-[500px]">
        <img src={category.image}alt="Category Image" />
      </div>
      <div className="w-full lg:w-1/2">
        <b className="text-4xl text-secondary capitalize">{category.name}</b>
        <p className="my-5 text-md">
        {
          !category.description ? `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          doloribus sed aperiam aspernatur quos dolor architecto obcaecati a
          magnam totam excepturi in molestias veniam ipsum accusantium, qui
          sapiente officiis voluptatum?` : category.description
        }
        </p>
        <Link to={`/category/${category.id}`} className="text-primary font-bold">
          Learn More
        </Link>
      </div>
    </div>
  );
}
