import React from 'react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import ProductCategories from '../ui/Categories/ProductCategories'
import Banner from '../ui/Banner'
import { getCatalog } from '../services/products'
import { useNavigation,useLoaderData } from 'react-router-dom'
import FadeIn from '../ui/Animation/FadeIn'
import Loader from '../ui/Loader'
import { useTranslation } from 'react-i18next'
export default function Products() {
  const file = useLoaderData();
  const navigation = useNavigation();
  const{t:tHome}=useTranslation("Home");
  const{t:tCommon}=useTranslation("Common");
  const downloadFile = async () => {
    const response = await fetch(file); // file هو الرابط من Supabase
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Products Catalog.pdf"; // اسم الملف عند التحميل
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url); // تنظيف الرابط من الذاكرة

  };
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <FadeIn>
      <Banner image={'/Banners/products.webp'} />


      <Section>
        <SectionTitle className="!leading-tight">
          <p className="text-secondary ">{tHome("Handy-Products-Heading")}</p>
          <p className="text-primary">{tHome("Handy-Products-Subheading")}</p>
        </SectionTitle>
        <ProductCategories />
         <div className="text-center mt-10">
            <button onClick={downloadFile} className="button">{tCommon("Download Catalog")}</button>
          </div>
      </Section>
    </FadeIn>

  )
}
export async function loader(){
  const file = await getCatalog();
  return file;
}