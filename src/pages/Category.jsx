import React from 'react'
import { useParams ,useLoaderData ,useNavigation} from 'react-router-dom'
import axios from '../../node_modules/axios/index';
import Section from '../ui/Section';
import Loader from '../ui/Loader';
import Banner from '../ui/Banner';
import SectionTitle from '../ui/SectionTitle';

export default function Category() {
  const {categoryName} = useParams();
  const products = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state ==='loading' ;
  console.log(isLoading);
  console.log(products);
  if(isLoading)
    return <Loader />
  return (
    <>
        <Banner image="/banner/slider-1.png" className='flex justify-center items-center '>
          <h1 className='text-primary text-5xl font-bold text-center'>{categoryName}</h1>
        </Banner>  
        <Section>
            <div className='space-y-5'>
                {products.map((product,index)=>{
                    return (
                      <div className='flex flex-col md:flex-row items-center bg-white shadow-md' key={index}>
                          <div className='w-full lg:w-1/4 '>
                              <img src={product.image} alt="Product Image" />
                          </div>
                          <div className='flex flex-col lg:flex-row justify-between p-5 flex-grow w-full'>
                              <div>
                                  <h1 className='text-primary text-3xl font-bold'>{product.title}</h1>
                                  <p>
                                      {product.details}    
                                  </p> 
                              </div>   
                              <div className='mt-5'>
                                  <button className='py-2 px-3 bg-primary text-white font-bold'>Details</button>
                              </div>   
                          </div>
                      </div>
                    )
                })}
            </div>
        </Section>
    </>
  )
}

export async function loader({params}) {
  console.log("params",params);
  return axios('http://localhost:3000/products').then((data)=>{
    let products = data.data;
    const {categoryName} = params;
    return products.filter((product)=>product.category.toLowerCase() == categoryName.toLowerCase() )
  }).catch((error)=>{
    console.log(error);
    return {};
  })
}
