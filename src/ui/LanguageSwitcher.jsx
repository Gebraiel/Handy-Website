import React from 'react'
import FadeIn from './Animation/FadeIn'
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({menuLength}) {
    const { i18n } = useTranslation();
    function changeLanguage(lang){
        const currentLanguage = i18n.language;
        if(currentLanguage != lang){
            i18n.changeLanguage(lang);
            document.dir = lang == 'ar' ? "rtl":"ltr";
        }
    }
    return (
        <>
            <FadeIn delay={menuLength *0.1}>
                <li className="uppercase font-bold relative has-submenu text-xs">
                <button onClick={()=>changeLanguage("ar")}><p className='flex gap-1'><img src="/Flags/ar.svg"/> AR</p></button>
                </li>
            </FadeIn>
            <FadeIn delay={menuLength *0.1}>
            <li>
                <li className="uppercase font-bold relative has-submenu text-xs">
                    <button onClick={()=>changeLanguage("en")}><p className='flex gap-1'><img src="/Flags/en.svg"/> EN</p></button>
                </li>
            </li>
            </FadeIn>
        </>
    )
}
