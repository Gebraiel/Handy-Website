import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CategoriesContext from '../../context/CategoriesContext';
import { useTranslation } from 'react-i18next';

export default function CategoryNavigation({id}) {
    const categories = useContext(CategoriesContext);
    const{i18n} = useTranslation();
    const isArabic = i18n.language =='ar';
    const localizedCategories = categories.map((category)=>{
        return {...category,name:isArabic ? category['name-ar']:category['name-en']};
    })
    console.log(localizedCategories);
    return (
    <div className='flex flex-col gap-2 w-full md:w-auto md:flex-row md:flex-wrap justify-center  md:items-center'>
        {
            localizedCategories.length > 0 &&
            localizedCategories.map((category)=>{
                console.log(category.id == id);
                return(
                    <Link to={`/category/${category.id}`} key={category.id} className={`capitalize p-5 transition-colors duration-300 rounded hover:bg-primary hover:text-white  text-lg  ${id == category.id ? "bg-primary text-white font-bold" :""}`}>{category.name}</Link>
                )
            })
        }
    </div>
  )
}
