import React from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../node_modules/axios/index';

export default function Category({products}) {
  const {categoryName} = useParams();
  console.log(products);
  return (
      <div>Category</div>
    // <div>
    //     {products.map((product)=>{
    //         <div className='flex'>
    //             <div className='w-52'>
    //                 <img src={product.image} alt="Product Image" />
    //             </div>
    //             <div className='flex justify-between p-5'>
    //                 <div>
    //                     <h1>{product.title}</h1>
    //                     <p>
    //                         {product.details}    
    //                     </p> 
    //                 </div>   
    //                 <div>
    //                     <button className=''>Details</button>
    //                 </div>   
    //             </div>
    //         </div>
    //     })}
    // </div>
  )
}

export async function loader() {
  axios('http://localhost:3000/products').then((data)=>{
    console.log(data.data)
    return data.data;
  }).catch((error)=>{
    console.log(error);
    return {};
  })
}
