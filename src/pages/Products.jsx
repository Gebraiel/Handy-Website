import React from 'react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import ProductCategories from '../ui/Categories/ProductCategories'
import Banner from '../ui/Banner'
import { getCatalog } from '../services/products'
import { useNavigation,useLoaderData } from 'react-router-dom'
export default function Products() {
  const file = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
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
  return (
    <>
      <Banner image={'/Banners/products.webp'} />
        
    
      <Section>      
        <SectionTitle className="!leading-tight">
          <p className="text-secondary ">Handy Products</p>
          <p className="text-primary">Clean, fresh, and on-the-go Quality That Speaks for Itself</p>
        </SectionTitle>
        <ProductCategories />
         <div className="text-center mt-10">
            <button onClick={downloadFile} className="button">Download Catalog</button>
          </div>
      </Section>
    </>
    
  )
}
export async function loader(){
  const file = await getCatalog();
  return file;
}