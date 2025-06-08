import React from 'react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import ProductCategories from '../ui/Categories/ProductCategories'
import Banner from '../ui/Banner'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'
export default function Products() {
    console.log("Products");

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
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
            <a href="/files/Product Catalog.pdf" download='Products Catalog' className="button">Download Catalog</a>
          </div>
      </Section>
    </>
    
  )
}
