import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {AnimatePresence} from "motion/react";
import Lightbox from '../Lightbox';

export default function SwiperSlider({images}) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [active,setActive] = useState(-1);
    function closeLightbox(){
        setActive(-1);
    }
    return (
        <div className='flex flex-col-reverse'>
            <div className='flex justify-end gap-1 mb-4'>
                <button ref={prevRef} className="py-3 text-primary text-2xl disabled:text-[#ccc]">
                <HiArrowSmallLeft />
                </button>
                <button ref={nextRef} className="py-3 text-primary text-2xl disabled:text-[#ccc]">
                <HiArrowSmallRight />
                </button>
            </div>
            <div>
                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                        0: {
                        slidesPerView: 1,
                        },
                        768: {
                        slidesPerView: 2,
                        },
                        1024: {
                        slidesPerView: 3,
                        }
                    }
                }
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                }}
                >
                    {
                        images.map((image,index)=> 
                        <SwiperSlide key={index} className="cursor-pointer" onClick={()=>setActive(index)}><img src={image} alt="Gallery Image" /></SwiperSlide>)
                    }
                

                </Swiper>

                <AnimatePresence>
                    {active >=0 &&  <Lightbox images={images} active={active} closeLightbox={closeLightbox}/>}
                </AnimatePresence>
            </div>
            
        </div>
    )
}
