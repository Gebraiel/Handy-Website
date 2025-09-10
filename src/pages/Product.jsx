import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Section from "../ui/Section";
import {  getProduct } from "../services/products";
import Paragraph from "../ui/Paragraph";
import ToastSuccess from "../ui/ToastSuccess";
import { AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import OutletContext from "../context/OutletContext";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import FadeLeft from "../ui/Animation/FadeLeft";
import FadeRight from "../ui/Animation/FadeRight";
import FadeIn from "../ui/Animation/FadeIn";
import Loader from "../ui/Loader";
import { useTranslation } from "react-i18next";
import { getLocalizedPath } from "../services/localization";
import Error from "./ErrorPage";

export default function Product() {
  const {
    product,error
  } = useLoaderData();
  const{i18n,t} = useTranslation("Common")
  const isArabic = i18n.language =='ar';
  const {title,image,text,number_of_pieces,category,sub_category,prev_id,next_id} = product;
  const {id:categoryId,title:categoryName} = category;
  // const localizedProduct = {...product,title:isArabic?product['title-ar']:product.title,details:isArabic ? product['details-ar'] : product.details,subtitle:isArabic ? product['subtitle-ar'] : product.subtitle};
  // const {
  //     id,
  //     title,
  //     image,
  //     details,
  //     subcategory,
  //     category,
  //   } = localizedProduct;
  // const categoryName = isArabic ? category["name-ar"] : category["name-en"];
  // const categoryId = category.id;
  // const prevIndex = products.findIndex((product) => product.id == id) - 1;
  // const nextIndex = products.findIndex((product) => product.id == id) + 1;
  const [showToast, setShowToast] = useState(false);
  // const productTitle = title.split("<br>");
  const currentLanguage = i18n.language
  function copyToClipboard() {
    navigator.clipboard.writeText(location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }
  const navigate = useNavigate();
  const setIsRelative = useContext(OutletContext);
  useEffect(() => {
    setIsRelative(true);
    return () => {
      setIsRelative(false);
    };
  }, []);
const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  if(error) return <Error error={{code:error.code,message:error.message}}/>
  return (
    <FadeIn>
      <Section className="!py-[25px] ">
        <div className="text-[#ccc]  text-xs font-bold uppercase">
          <Link
            to={getLocalizedPath("/",currentLanguage)}
            className="hover:text-primary transition-colors duration-300"
          >
            {t("Home")}{" "}
          </Link>
          /{" "}
          <Link
            to={getLocalizedPath("/products",currentLanguage)}
            className="hover:text-primary transition-colors duration-300"
          >
            {t("Products")}{" "}
          </Link>
          {" "}

          {sub_category ?
            <>
              <Link to={getLocalizedPath(`/category/${categoryId}`,currentLanguage)}>
                {categoryName}
              </Link>
              {" "}
              /{" "}
              <Link  className="text-primary" to={getLocalizedPath(`/category/${categoryId}?filter=${sub_category.title}`,currentLanguage)}>
                {sub_category.title}
              </Link>
            </>
            :
            <Link className="text-primary" to={getLocalizedPath(`/category/${categoryId}`,currentLanguage)}>
              / {categoryName}
            </Link>
          }
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {image && (
            <div className="w-full lg:w-1/2">
              <FadeLeft>
                <img src={image} alt="product image" />
              </FadeLeft>
            </div>
          )}
          <div className="space-y-5 w-full lg:w-1/2 ">
            <FadeRight>
                <div>
              <h2 className="text-primary text-xl lg:text-3xl font-bold">
                <>
                  <span>{title}</span>
                  {
                  number_of_pieces &&
                  <>
                    <br />
                    <span>{number_of_pieces}</span>
                  </>
                  }
                </>

              </h2>
              <Paragraph className="text-secondary font-semibold" size="lg">
                {categoryName}
              </Paragraph>
            </div>
            </FadeRight>
            <FadeRight>
                <div className="product-details" dangerouslySetInnerHTML={{__html: text}}/>
            </FadeRight>
            <FadeIn>
                <button className="w-full button" onClick={copyToClipboard}>
              {t("Share")}
            </button>
            </FadeIn>
            <div className="flex justify-between items-center">
              <FadeLeft>
                <button
                onClick={() => navigate(getLocalizedPath(`/product/${prev_id}`,currentLanguage))}
                className={"button flex gap-1 items-center "}
                disabled={prev_id == null}
              >
                <span>
                  {isArabic ? <HiArrowSmallRight /> :<HiArrowSmallLeft />}

                </span>
                {t("Previous Product")}
              </button>
              </FadeLeft>
              <FadeRight>
                <button
                onClick={() => navigate(getLocalizedPath(`/product/${next_id}`,currentLanguage))}
                className="button flex gap-1 items-center"
                disabled={next_id==null}
              >
                {t("Next Product")}
                <span>
                  {isArabic ? <HiArrowSmallLeft /> : <HiArrowSmallRight />}
                </span>
              </button>
              </FadeRight>
            </div>
          </div>
        </div>
      </Section>
      <AnimatePresence>
        {showToast && (
          <ToastSuccess message={t("Product URL Copied To Clipboard")} />
        )}
      </AnimatePresence>
    </FadeIn>
  );
}

export async function loader({ params }) {
  const { productId } = params;
  const lang = params.lang || "en";
  const {product,error} = await getProduct(lang,Number(productId));
  // const subcategory = product.subcategory
  // const products = await getCategoryProducts(product.category.id,subcategory);

  return { product,error};
}
