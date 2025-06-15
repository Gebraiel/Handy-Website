import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";
import FadeLeft from "../Animation/FadeLeft";
import FadeRight from "../Animation/FadeRight";

export default function Category({category}) {
  return (
    <div className="flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 ">
      <div className="max-w-[350px] m-auto">
        <FadeLeft  className="mix-blend-multiply">
          <img src={category.image}alt="Category Image" />
        </FadeLeft>
      </div>
      <div className="w-full lg:w-1/2">
        <FadeRight>
          <b className="text-2xl text-secondary capitalize">{category.name}</b>
        <Paragraph className="my-5">
        {
          !category.description ? `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          doloribus sed aperiam aspernatur quos dolor architecto obcaecati a
          magnam totam excepturi in molestias veniam ipsum accusantium, qui
          sapiente officiis voluptatum?` : category.description
        }
        </Paragraph>
        <Link to={`/category/${category.id}`} className="text-primary font-bold">
          Learn More
        </Link>
        </FadeRight>
      </div>
    </div>
  );
}
