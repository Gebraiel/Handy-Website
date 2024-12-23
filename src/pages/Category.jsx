import React from 'react'
import { useParams ,useLoaderData ,useNavigation} from 'react-router-dom'
import axios from '../../node_modules/axios/index';
import Section from '../ui/Section';
import Loader from '../ui/Loader';
import Banner from '../ui/Banner';
import SectionTitle from '../ui/SectionTitle';
import { Link } from 'react-router-dom';
import { getCategoryProducts } from '../services/products';

export default function Category() {
  const products = useLoaderData();
  const categoryName = products[0].category.name;
  const navigation = useNavigation();
  const isLoading = navigation.state ==='loading' ;
  // console.log(isLoading);
  console.log(products);
  if(isLoading)
    return <Loader />
  return (
    <>
        <Banner image="/banner/slider-1.png" className='flex justify-center items-center '>
          <h1 className='text-primary text-5xl font-bold text-center capitalize'>{categoryName}</h1>
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
                                  <Link to={`/product/${product.id}`} className='py-2 px-3 bg-primary text-white font-bold'>Details</Link>
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
  const {categoryId} = params;

  const products = getCategoryProducts(Number(categoryId));
  return products;
}
