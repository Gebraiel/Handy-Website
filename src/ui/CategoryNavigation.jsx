import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/categories'
import { Link } from 'react-router-dom';

export default function CategoryNavigation({id}) {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            setCategories(await getCategories())
        }
        fetchData();
    },[])
    return (
    <div className='flex flex-col gap-2 w-full md:w-auto md:flex-row md:flex-wrap justify-center  md:items-center'>
        {
            categories.length > 0 && 
            categories.map((category)=>{
                return( 
                    <Link to={`/category/${category.id}`} key={category.id} className={`capitalize p-5 transition-colors duration-300 rounded hover:bg-primary hover:text-white  text-2xl  ${id === category.id ? "bg-primary text-white font-bold" :""}`}>{category.name}</Link>
                    
                )
            })
        }
    </div>
  )
}
