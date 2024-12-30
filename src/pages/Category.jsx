import React, { useEffect, useState } from 'react'
import { useLoaderData ,useNavigation} from 'react-router-dom'
import Section from '../ui/Section';
import Loader from '../ui/Loader';
import Banner from '../ui/Banner';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { getCategoryProducts } from '../services/products';
import CategoryNavigation from '../ui/CategoryNavigation';
import { CiBoxList } from "react-icons/ci";
import { RiGalleryView2 } from "react-icons/ri";

export default function Category() {
  const[view,setView]=useState('list');
  const products = useLoaderData();
  
  const categoryName = products[0]?.category?.name;
  console.log(categoryName.toLowerCase().includes('jumbo'));
  const categoryId = products[0]?.category?.id;
  const navigation = useNavigation();
  const isLoading = navigation.state ==='loading' ;
  
  // console.log(isLoading);
  console.log(products);
  if(isLoading)
    return <Loader />
  return (
    <>
        <Banner image="/banner/slider-1.png" className='flex justify-center items-center '>
          <h1 className='text-primary text-5xl font-bold text-center capitalize'>{categoryName || "Products" }</h1>
        </Banner>  
        <Section>
          <div className='flex justify-start md:justify-center gap-5 lg:justify-between flex-wrap items-center mb-5'>
            <CategoryNavigation id={categoryId}/>
            <div className='hidden md:flex gap-2 text-3xl'>
              <button className={`${view =='list' ? "text-primary font-bold" :""}`} onClick={()=>setView('list')}><CiBoxList /></button>
              <button className={`${view =='gallery' ? "text-primary font-bold" :""}`} onClick={()=>setView('gallery')}><RiGalleryView2 /></button>
            </div>
          </div>
           <div>
           {
              products.length > 0 ? 
              categoryName.toLowerCase().includes('jumbo') ? 
                  <div className={`${view =='list' ? "space-y-5" :"grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                  {products.map((product,index)=>
                      
                        <div className={`${view =='list' ? "flex flex-col md:flex-row items-center": "flex flex-col items-center"} bg-white shadow-md`} key={index}>
                            <div className={`w-full ${view =='list' ? " lg:w-1/4" : ""}`}>
                                <img className='m-auto' src={product.image} alt="Product Image" />
                            </div>
                            <div className={`flex flex-col ${view == 'list'? "lg:flex-row" : "items-center"} justify-between p-5 flex-grow w-full`}>
                                <div>
                                    <h1 className='text-primary text-3xl font-bold'>{product.title}</h1>
                                    <ul className='list-disc pl-5 mt-5'>{product.details.split(',').map((item,index)=><li key={index}>{item}</li>)}</ul>
                                </div>   
                              
                            </div>
                        </div>
                      
                  )}
                  </div>
                  : 
                  <div className={`${view =='list' ? "space-y-5" :"grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
                  {products.map((product,index)=>
                      
                        <div className={`${view =='list' ? "flex flex-col md:flex-row items-center": "flex flex-col items-center"} bg-white shadow-md`} key={index}>
                            <div className={`w-full ${view =='list' ? " lg:w-1/4" : ""}`}>
                                <img className='m-auto' src={product.image} alt="Product Image" />
                            </div>
                            <div className={`flex flex-col ${view == 'list'? "lg:flex-row" : "items-center"} justify-between p-5 flex-grow w-full`}>
                                <div>
                                    <h1 className='text-primary text-3xl font-bold'>{product.title}</h1>
                                    <p>
                                        {product.subtitle}    
                                    </p> 
                                </div>   
                                <div className='mt-5'>
                                    <Link to={`/product/${product.id}`} className='py-2 px-3 bg-primary text-white font-bold'>Details</Link>
                                </div>   
                            </div>
                        </div>
                      
                  )}
                  </div>
              : 
              <SectionTitle className="mb-1">No Products Found</SectionTitle>
            }
           </div>
        </Section>
    </>
  )
}

export async function loader({params}) {
  const {categoryId} = params;

  const products = getCategoryProducts(Number(categoryId));
  return products;
}
