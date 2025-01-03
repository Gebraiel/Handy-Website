import React from 'react'
import axios from '../../node_modules/axios/index'
import { useLoaderData } from 'react-router-dom'
import Section from '../ui/Section';
import Banner from '../ui/Banner';
import SectionTitle from '../ui/SectionTitle';
import { getProduct } from '../services/products';
import Paragraph from '../ui/Paragraph';

export default function Product() {
    const {title,image,details,category:{name:categoryName}} = useLoaderData();
  return (
        <>
            <Banner image='/banner/slider-1.png' className='flex items-center justify-center'>
                <SectionTitle className='mb-[0px]'>
                
                    {title}

                </SectionTitle>
            </Banner>
            <Section className='!py-[50px]'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
                    <div className='w-full lg:w-1/2'>
                        <img src={image} alt="product image" />
                    </div>
                    <div className='space-y-5 w-full lg:w-1/2 '>
                        <div>
                            <h2 className='text-primary text-xl lg:text-3xl font-bold'>{title}</h2>
                            <Paragraph className='text-secondary font-semibold' size="lg">{categoryName}</Paragraph>
                        </div>
                        <ul className='list-disc pl-5'>{details.split(',').map((item,index)=><li key={index}>{item}</li>)}</ul>
                        <button className='w-full bg-primary text-white py-3 font-bold'>Share</button>
                    </div>
                </div>
            </Section>
        </>  
    )
}

export async function loader({params}){
    const {productId} = params
    const product = (await getProduct(Number(productId)))[0];
    return product;
}
