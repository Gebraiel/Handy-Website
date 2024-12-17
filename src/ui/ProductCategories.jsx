import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCategories() {
  return (
    <div className='space-y-5'>
        <div className='flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 '>
            <div className='max-w-[500px]'>
                <img src="/categories/facial.jpg" alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
                <b className='text-4xl text-secondary'>Facial Tissues</b>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus sed aperiam aspernatur quos dolor architecto obcaecati a magnam totam excepturi in molestias veniam ipsum accusantium, qui sapiente officiis voluptatum?
                </p>
                <Link to="" className="text-primary font-bold">Learn More</Link>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 '>
            <div className='max-w-[500px]'>
                <img src="/categories/kitchen.jpg" alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
                <b className='text-4xl text-secondary'>Home Care</b>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus sed aperiam aspernatur quos dolor architecto obcaecati a magnam totam excepturi in molestias veniam ipsum accusantium, qui sapiente officiis voluptatum?
                </p>
                <Link to="" className="text-primary font-bold">Learn More</Link>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 '>
            <div className='max-w-[500px]'>
                <img src="/categories/jumbo.jpg" alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
                <b className='text-4xl text-secondary'>Jumbo</b>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus sed aperiam aspernatur quos dolor architecto obcaecati a magnam totam excepturi in molestias veniam ipsum accusantium, qui sapiente officiis voluptatum?
                </p>
                <Link to="" className="text-primary font-bold">Learn More</Link>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 '>
            <div className='max-w-[500px]'>
                <img src="/categories/toilet.jpg" alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
                <b className='text-4xl text-secondary'>Toilet</b>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus sed aperiam aspernatur quos dolor architecto obcaecati a magnam totam excepturi in molestias veniam ipsum accusantium, qui sapiente officiis voluptatum?
                </p>
                <Link to="" className="text-primary font-bold">Learn More</Link>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:odd:flex-row lg:even:flex-row-reverse  justify-between items-center gap-5 '>
            <div className='max-w-[500px]'>
                <img src="/categories/wipes.jpg" alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
                <b className='text-4xl text-secondary'>Wet Wipes</b>
                <p className=''>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus sed aperiam aspernatur quos dolor architecto obcaecati a magnam totam excepturi in molestias veniam ipsum accusantium, qui sapiente officiis voluptatum?
                </p>
                <Link to="" className="text-primary font-bold">Learn More</Link>
            </div>
        </div>
       

    </div>
  )
}
