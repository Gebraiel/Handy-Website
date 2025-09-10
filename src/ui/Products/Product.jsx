import { Link } from "react-router-dom";
import JumboProduct from "./JumboProduct";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "../../services/localization";

export default function Product({product,view,categoryName}) {
  const {t,i18n} = useTranslation("Common");
  const title = product.title;
  const currentLanguage = i18n.language;

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
                product.image ?
                <Link to={getLocalizedPath(`/product/${product.id}`,currentLanguage)}><img className="m-auto" src={product.image} alt="Product Image" /></Link>
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
          <h1 className="text-primary text-xl font-bold"><Link to={getLocalizedPath(`/product/${product.id}`,currentLanguage)}>{title}</Link></h1>

          <p>{product.sub_title}</p>

        </div>
        <div className="mt-5">
            <Link
            to={getLocalizedPath(`/product/${product.id}`,currentLanguage)}
            className="button"
            >
            {t("Details")}
            </Link>
        </div>

      </div>
    </div>
  );
}
