import React from 'react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import ProductCategories from '../ui/Categories/ProductCategories'
import Banner from '../ui/Banner'
import { useNavigation } from "react-router-dom"
import Loader from '../ui/Loader'
export default function Products() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <>
      <Banner image={'/Banners/products.webp'} >
         <SectionTitle className="!leading-tight !mb-0">
            <h1 className="text-secondary ">Handy Products</h1>
            <h1 className="text-primary">Clean, fresh, and on-the-go Quality That Speaks for Itself</h1>
          </SectionTitle>
      </Banner>
    
      <Section>      
          <ProductCategories />
      </Section>
    </>
    
  )
}
