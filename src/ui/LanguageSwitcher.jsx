import React from 'react'
import FadeIn from './Animation/FadeIn'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

export default function LanguageSwitcher({menuLength}) {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation()
    function changeLanguage(lang){
        const path = location.pathname;
        const segments = path.split("/");
        if (lang === "ar") {
            // لو مش بالفعل عربي، ضيف "ar"
            if (segments[1] !== "ar") {
                navigate(`/ar${path}`);
            }
            } else {
            // لو بتحوّل للإنجليزي، احذف "ar" من الـ path
            if (segments[1] === "ar") {
                const newPath = `/${segments.slice(2).join("/")}`;
                navigate(newPath || "/");
            }
        }
        i18n.changeLanguage(lang);


    }
    return (
        <>
            <FadeIn delay={menuLength *0.1}>
            <li className="uppercase font-bold relative has-submenu text-xs border border-l-0 border-r-0 p-5 xl:p-0 xl:border-0">
                <button className='xl:w-auto w-full' onClick={()=>changeLanguage("ar")}><p className='flex gap-1'><img width={20} src="/Flags/ar.svg"/> AR</p></button>
            </li>
            </FadeIn>
            <FadeIn delay={menuLength *0.1}>
            <li>
                <li className="uppercase font-bold relative has-submenu text-xs border border-l-0 border-r-0 p-5 xl:p-0 xl:border-0">
                    <button className='xl:w-auto w-full' onClick={()=>changeLanguage("en")}><p className='flex gap-1'><img src="/Flags/en.svg"/> EN</p></button>
                </li>
            </li>
            </FadeIn>
        </>
    )
}
