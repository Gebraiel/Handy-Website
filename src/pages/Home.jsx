import AboutSection from "../ui/Home/AboutSection";
import Features from "../ui/Home/Features";
import Section from "../ui/Section";

import ContactSection from "../ui/ContactSection";
import Slider from "../ui/Home/Slider";
import HandyBackground from "../ui/Home/HandyBackground";
import Certificates from "../ui/Home/Certificates";
import SectionTitle from "../ui/SectionTitle";
import { Link,useNavigation } from "react-router-dom";
import ProductCategories from "../ui/Categories/ProductCategories";
import Banner from "../ui/Banner";
import Paragraph from "../ui/Paragraph";
import { FaMedal } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import React from "react";
import Loader from "../ui/Loader";
import FadeIn from "../ui/Animation/FadeIn";
import FadeDown from "../ui/Animation/FadeDown";
import FadeLeft from "../ui/Animation/FadeLeft";
import { useTranslation } from "react-i18next";
import '../utils/i18n';
import { getLocalizedPath } from "../services/localization";


const sustainabilityLength = 14;
const sustainabilityImagesArray = Array.from(
  { length: sustainabilityLength },
  (_, i) =>
    `/sustainability/sign-${
      i + 1 < 10 ? "0" + (i + 1) : i + 1
    }.webp`
);


export default function Home() {
  console.log("Home");
  const { t ,i18n,ready} = useTranslation(['Home',"Common"]); // نفس الـ namespace
  const currentLanguage = i18n.language;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading || !ready) return <Loader />;
  const slides=[
    {
      image:{
        desktop:"/banner/slider-1.webp",
        mobile:"/banner/slider-1-mobile.webp"
      },
      content:{
        heading:t("heading1", { ns: 'Home' }),
        subtitle:t("subtitle1", { ns: 'Home' })
      }
    },
    {
      image:{
        desktop:"/banner/slider-2.webp",
        mobile:"/banner/slider-2-mobile.webp"
      },
      content:{
        heading:t("heading2", { ns: 'Home' }),
        subtitle:t("subtitle2", { ns: 'Home' })
      }
    },
    {
      image:{
        desktop:"/banner/slider-3.webp",
        mobile:"/banner/slider-3-mobile.webp"
      },
      content:{
        heading:t("heading3", { ns: 'Home' }),
        subtitle:t('subtitle3', { ns: 'Home' })
      }
    },{
      image:{
        desktop:"/banner/slider-4.webp",
        mobile:"/banner/slider-4-mobile.webp"
      },
      content:{
        heading:t("heading4", { ns: 'Home' }),
        subtitle:""
      }
    }
    ,{
      image:{
        desktop:"/banner/slider-5.webp",
        mobile:"/banner/slider-5-mobile.webp"
      },
      content:{
        heading:t("heading5", { ns: 'Home' }),
        subtitle:""
      }
    }
  ]
  return (
    <FadeIn>

      <Section  type="fullscreen">
        <Slider
          slides={slides}
        />
      </Section>
        <Section className="relative">
          <HandyBackground className="xl:!bg-[bottom_-250px_left_-100px]"/>
          <SectionTitle className="!leading-tight">
            <p className="text-secondary ">{t("About-Heading", { ns: 'Home' })}</p>
            <p className="text-primary">{t("About-Subtitle", { ns: 'Home' })}</p>
          </SectionTitle>


          <Paragraph className="text-center text-primary">
           {t("About-Content")}
          </Paragraph>
          <AboutSection />
        </Section>

        <Section className={"bg-primary"}>
        <SectionTitle className="text-white">{t("Why-Handy", { ns: 'Home' })}</SectionTitle>
        <Features minWidth="300" features={
          [
              {icon: <FaMedal />,title:t("Feateurs-Heading-01", { ns: 'Home' }),description:t("Feateurs-Content-01", { ns: 'Home' })},

              {icon:<FaThumbsUp />,title:t("Feateurs-Heading-02", { ns: 'Home' }),description:t("Feateurs-Content-02", { ns: 'Home' })},

              {icon: <RiLeafFill />,title:t("Feateurs-Heading-03", { ns: 'Home' }),description:t("Feateurs-Content-03", { ns: 'Home' })},

              {icon: <FaGlobe />,title:t("Feateurs-Heading-04", { ns: 'Home' }),description:t("Feateurs-Content-04", { ns: 'Home' })}
          ]
        }/>
      </Section>

      <Section className={"bg-[aliceblue]"}>
        <SectionTitle>{t("Sectors", { ns: 'Common' })}</SectionTitle>
        <FadeDown>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="w-full bg-white">
            <Link to={getLocalizedPath("/sectors/handy-paper",currentLanguage)} className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                01
              </p>
              <img src='/sectors/Handy Paper.webp' alt="Handy Paper Sector"  />
            </Link>

            <div className="p-3">
              <Link to={getLocalizedPath("/sectors/handy-paper",currentLanguage)}><b className="text-2xl text-primary">{t("Handy Paper",{ns:"Common"})}</b></Link>
              <Paragraph className="mt-2">
                {t("Sectors-Content-01",{ns:"Home"})}
              </Paragraph>
              <Link className="text-primary font-bold" to={getLocalizedPath("/sectors/handy-paper",currentLanguage)}>{t("Learn More",{ns:"Common"})}</Link>

            </div>
          </div>
          <div className="w-full bg-white">
            <Link to={getLocalizedPath("/sectors/handy-tissue-products",currentLanguage)} className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                02
              </p>
              <img src='/sectors/Handy Tissue Products.webp' alt="Handy Tissue Products Sector"  />
            </Link>

            <div className="p-3">
              <Link to={getLocalizedPath("/sectors/handy-tissue-products",currentLanguage)}><b className="text-2xl text-primary">{t("Handy Tissue Products",{ns:"Common"})}</b></Link>
              <Paragraph className="mt-2 text-md">
                 {t("Sectors-Content-02",{ns:"Home"})}
              </Paragraph>
              <Link className="text-primary font-bold" to={getLocalizedPath("/sectors/handy-tissue-products",currentLanguage)}>{t("Learn More",{ns:"Common"})}</Link>

            </div>
          </div>
          <div className="w-full bg-white">
            <Link to={getLocalizedPath("/sectors/handy-wet-wipes",currentLanguage)} className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                03
              </p>
              <img src='/sectors/Handy Wet Wipes.webp' alt="Wet Wipes Sector"  />
            </Link>

            <div className="p-3 ">
              <Link to={getLocalizedPath("/sectors/handy-wet-wipes",currentLanguage)}><b className="text-2xl text-primary">{t("Wet Wipes",{ns:"Common"})}</b></Link>
              <Paragraph className="mt-2 text-md">
                 {t("Sectors-Content-03",{ns:"Home"})}
              </Paragraph>
              <Link className="text-primary font-bold" to={getLocalizedPath("/sectors/handy-wet-wipes",currentLanguage)}>{t("Learn More",{ns:"Common"})}</Link>
            </div>
          </div>
        </div>
        </FadeDown>
      </Section>

      <Banner image="/banner.webp" className=" text-center">
        <FadeIn>
          <b className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl xl:leading-tight text-white">
          {t("Banner-Heading",{ns:"Home"})}
        </b>
        </FadeIn>
      </Banner>
      <Section className="bg-[#f1eeee]">
        <FadeLeft>
          <SectionTitle className="!leading-tight">
          <>
            <p className="text-secondary ">{t("Handy-Products-Heading",{ns:"Home"})}</p>
            <p className="text-primary">{t("Handy-Products-Subheading",{ns:"Home"})}</p>
          </>
        </SectionTitle>
        </FadeLeft>
        <ProductCategories />
      </Section>
      <Section >
        <SectionTitle>{t("Sustainability",{ns:"Common"})}</SectionTitle>


        <FadeIn>
          <Paragraph className="text-primary">
          {t("Sustainabilty-Content",{ns:"Home"})}
        </Paragraph>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(14,1fr)] gap-5 mt-10 m-auto">
          {sustainabilityImagesArray.map((e,index) => (
            <FadeIn delay={index*0.1}>
              <img src={e} key={index} />
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section
        className={
          "bg-[url(/slider-4.webp)] bg-center bg-cover  text-center relative"
        }
      >
        <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.4)] "></div>
        <Paragraph className="text-white z-10 relative font-medium" size="lg">
          {t("Banner-Content-02",{ns:"Home"})}
        </Paragraph>
      </Section>

      <Section className="relative">
        <HandyBackground />
        <SectionTitle>{t("Certificates",{ns:"Common"})}</SectionTitle>
        <Certificates />
      </Section>


      {/* <Section>
        <SectionTitle className="mb-10">Contact Us</SectionTitle>
        <ContactSection />
      </Section> */}
    </FadeIn>
  );
}
