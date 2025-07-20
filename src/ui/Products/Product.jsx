import React from "react";
import { Link } from "react-router-dom";
import JumboProduct from "./JumboProduct";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "../../services/localization";

export default function Product({product,view,categoryName}) {
  const {t,i18n} = useTranslation("Common");
  const isJumbo = categoryName.toLowerCase().includes("jumbo");
  const isArabic = i18n.language =='ar';

  const localizedProduct = {...product,title:isArabic?product['title-ar']:product.title,details:isArabic ? product['details-ar'] : product.details,subtitle:isArabic ? product['subtitle-ar'] : product.subtitle};
  console.log(localizedProduct);
  const title = localizedProduct.title.split('<br>').join("");
  console.log(title);
  const currentLanguage = i18n.language;
  if(isJumbo)
      return <JumboProduct product={localizedProduct} view={view}/>
  return (
    <div
      className={`${
        view == "list"
          ? "flex flex-col md:flex-row items-center"
          : "flex flex-col items-center"
      } bg-white shadow-md`}

    >

        <div className={`w-full  ${view == "list" ? " pl-5 lg:w-1/4" : ""}`}>
              {
                  localizedProduct.image ?
                  <Link to={getLocalizedPath(`/product/${localizedProduct.id}`,currentLanguage)}><img className="m-auto" src={localizedProduct.image} alt="Product Image" /></Link>
                  :
                  <div className="bg-white w-full aspect-square"></div>
              }
        </div>

      <div
        className={`flex flex-col ${
          view == "list" ? "lg:flex-row" : "items-center"
        } justify-between p-5 flex-grow w-full`}
      >
        <div>
          <h1 className="text-primary text-xl font-bold"><Link to={getLocalizedPath(`/product/${localizedProduct.id}`,currentLanguage)}>{title}</Link></h1>
          {isJumbo ? (
            <ul className="list-disc pl-5 mt-5">
              {
                localizedProduct.details.split(",").map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          ) : (
            <p>{localizedProduct.subtitle}</p>
          )}
        </div>
        <div className="mt-5">
            <Link
            to={getLocalizedPath(`/product/${localizedProduct.id}`,currentLanguage)}
            className="button"
            >
            {t("Details")}
            </Link>
        </div>

      </div>
    </div>
  );
}
