import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Section from "../ui/Section";
import { getCategoryProducts, getProduct } from "../services/products";
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
import { useNavigation } from 'react-router-dom';

export default function Product() {
  console.log("Product");

  const {
    product: {
      id,
      title,
      image,
      details,
      subcategory,
      category: { name: categoryName, id: categoryId },
    },
    products,
  } = useLoaderData();
  const prevIndex = products.findIndex((product) => product.id == id) - 1;
  const nextIndex = products.findIndex((product) => product.id == id) + 1;
  const [showToast, setShowToast] = useState(false);
  const productTitle = title.split("<br>");
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
  return (
    <FadeIn>
      <Section>
        <div className="text-[#ccc]  text-xs font-bold uppercase">
          <Link
            to="/"
            className="hover:text-primary transition-colors duration-300"
          >
            Home{" "}
          </Link>
          /{" "}
          <Link
            to="/products"
            className="hover:text-primary transition-colors duration-300"
          >
            Products{" "}
          </Link>
          /{" "}
          <Link className="text-primary" to={`/category/${categoryId}`}>
            {categoryName}
          </Link>
          {subcategory && (
            <>
              {" "}
              /{" "}
              <Link to={`/category/${categoryId}?filter=${subcategory}`}>
                {subcategory}
              </Link>
            </>
          )}
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
                {title.includes("<br>") ? (
                  <>
                    <span>{productTitle[0]}</span>
                    <br />
                    <span>{productTitle[1]}</span>
                  </>
                ) : (
                  <>
                    <span>{title}</span>
                  </>
                )}
              </h2>
              <Paragraph className="text-secondary font-semibold" size="lg">
                {categoryName}
              </Paragraph>
            </div>
            </FadeRight>
            <FadeRight>
                <ul className="list-disc pl-5">
              {details.split("|").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            </FadeRight>
            <FadeIn>
                <button className="w-full button" onClick={copyToClipboard}>
              Share
            </button>
            </FadeIn>
            <div className="flex justify-between items-center">
              <FadeLeft>
                <button
                onClick={() => navigate(`/product/${products[prevIndex].id}`)}
                className={"button flex gap-1 items-center "}
                disabled={prevIndex < 0}
              >
                <span>
                  <HiArrowSmallLeft />
                </span>
                Previous Product
              </button>
              </FadeLeft>
              <FadeRight>
                <button
                onClick={() => navigate(`/product/${products[nextIndex].id}`)}
                className="button flex gap-1 items-center"
                disabled={nextIndex >= products.length}
              >
                Next Product
                <span>
                  <HiArrowSmallRight />
                </span>
              </button>
              </FadeRight>
            </div>
          </div>
        </div>
      </Section>
      <AnimatePresence>
        {showToast && (
          <ToastSuccess message={"Product URL Copied To Clipboard"} />
        )}
      </AnimatePresence>
    </FadeIn>
  );
}

export async function loader({ params }) {
  const { productId } = params;
  const product = (await getProduct(Number(productId)))[0];
  const products = await getCategoryProducts(product.category.id);
  return { product, products };
}
