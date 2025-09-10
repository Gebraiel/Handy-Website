import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "../Paragraph";
import FadeLeft from "../Animation/FadeLeft";
import FadeRight from "../Animation/FadeRight";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "../../services/localization";
import FadeIn from "../Animation/FadeIn";

export default function Category({category}) {
  const {t,i18n} = useTranslation("Common");
  const currentLanguage = i18n.language;
  return (
    <div className="flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 ">
      <div className="max-w-[350px] m-auto">
        <FadeIn  className="mix-blend-multiply">
          <Link to={getLocalizedPath(`/category/${category.id}`,currentLanguage)}><img src={category.image}alt="Category Image" /></Link>
        </FadeIn>
      </div>
      <div className="w-full lg:w-1/2">
        <FadeIn>
          <b className="text-2xl text-secondary capitalize"><Link to={getLocalizedPath(`/category/${category.id}`,currentLanguage)}>{
          category.title
        }</Link></b>
        <Paragraph className="my-5">
        {
          category.text
        }
        </Paragraph>
        <Link to={getLocalizedPath(`/category/${category.id}`,currentLanguage)} className="text-primary font-bold">
          {t("Learn More")}
        </Link>
        </FadeIn>
      </div>
    </div>
  );
}
