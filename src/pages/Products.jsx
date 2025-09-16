import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import ProductCategories from "../ui/Categories/ProductCategories";
import Banner from "../ui/Banner";
import { useNavigation, useLoaderData } from "react-router-dom";
import FadeIn from "../ui/Animation/FadeIn";
import Loader from "../ui/Loader";
import { useTranslation } from "react-i18next";
export default function Products() {
  const file = useLoaderData();
  const navigation = useNavigation();
  const { t: tHome } = useTranslation("Home");
  const { t: tCommon } = useTranslation("Common");
  const downloadFile = async () => {
    const response = await fetch(file);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Products Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <FadeIn>
      <Banner image={"/Banners/products.webp"} />

      <Section>
        <SectionTitle className="!leading-tight">
          <p className="text-secondary ">{tHome("Handy-Products-Heading")}</p>
          <p className="text-primary">{tHome("Handy-Products-Subheading")}</p>
        </SectionTitle>
        <ProductCategories />
        <div className="text-center mt-10">
          <a
            href="files/Product%20Catalog.pdf"
            download="Product Catalog"
            className="button"
          >
            {tCommon("Download Catalog")}
          </a>
        </div>
      </Section>
    </FadeIn>
  );
}
