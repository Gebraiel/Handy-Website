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


const sustainabilityLength = 14;
const sustainabilityImagesArray = Array.from(
  { length: sustainabilityLength },
  (_, i) =>
    `/sustainability/sign-${
      i + 1 < 10 ? "0" + (i + 1) : i + 1
    }.webp`
);


export default function Home() {
    const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <> 
      <Section type="fullscreen">
        <Slider
          slides={[
            {
              image:"/banner/slider-1.webp",
              content:{
                heading:"Innovative Solutions",
                subtitle:"We offer "
              }
            },
            {
              image:"/banner/slider-2.webp",
              content:{
                heading:"Modern, high-quality products",
                subtitle:"Proudly producing "
              }
            },
            {
              image:"/banner/slider-3.webp",
              content:{
                heading:"35 Years of redefining hygiene standards in Egypt",
                subtitle:"Experience more than "
              }
            },{
              image:"/banner/slider-3.webp"
            }
            ,{
              image:"/banner/slider-3.webp"
            }
          ]}
        />
      </Section>
      <Section className="relative">
        <HandyBackground />
        <SectionTitle className="!leading-tight">
          <p className="text-secondary ">Your Premium Hygiene Partner</p>
          <p className="text-primary">for Everyday Freshness</p>
        </SectionTitle>

  
        <Paragraph className="text-center text-primary">
          At HANDY, we’ve been redefining hygiene since 1978, bringing you
          products that make everyday life fresher, easier, and more
          comfortable. Whether at home or in business, our high-quality products
          are designed for maximum convenience, offering the perfect balance of
          strength, softness, and eco-friendly solutions.
        </Paragraph>
        <AboutSection />
      </Section>
      <Section className={"bg-primary"}>
        <SectionTitle className="text-white">Why Handy</SectionTitle>
        <Features minWidth="300" features={
          [
              {icon: <FaMedal />,title:"Certified Quality",description:`Our products are ISO 9001 & ISO 14001 certified, ensuring the highest
              standards.`},
              
              {icon:<FaThumbsUp />,title:"Trusted",description:`Years of experience with advanced technology to deliver top-tier
          hygiene products.`},
              
              {icon: <RiLeafFill />,title:"Eco Friendly",description:`We prioritize sustainability, crafting products that are as kind to
          the planet as they are to you.`},
              
              {icon: <FaGlobe />,title:"Global Reach",description:`Exporting to over 10 countries, HANDY products are trusted worldwide.`}
          ]
        }/>
      </Section>

      <Section className={"bg-[aliceblue]"}>
        <SectionTitle>Sectors</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="w-full bg-white">
            <Link to="/sectors/handy-paper" className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                01
              </p>
              <img src='/sectors/sector-01.webp' alt="Handy Paper Sector" />
            </Link>

            <div className="p-7 ">
              <Link to="/sectors/handy-paper"><b className="text-2xl text-primary">Handy Paper</b></Link>
              <Paragraph className="mt-5">
                Nestled in New Borg El-Arab City, Alexandria, our first factory
                houses the iconic ‘Recard’ machine from 1989, producing jumbo
                rolls. In 2016, we supercharged operations with RECARD
                technology, increasing capacity to 80 tons per day and launching
                a recycling initiative. This powerhouse serves markets across
                KSA, Lebanon, Greece, Cyprus, Kuwait, Morocco, Syria, Sudan,
                Kenya, the Caribbean, and West Africa.
              </Paragraph>
              <Link className="text-primary font-bold" to="/sectors/handy-paper">Learn more</Link>

            </div>
          </div>
          <div className="w-full bg-white">
            <Link to="/sectors/handy-tissue-products" className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                02
              </p>
              <img src='/sectors/sector-02.webp' alt="Handy Tissue Products Sector" />
            </Link>

            <div className="p-7">
              <Link to="/sectors/handy-tissue-products"><b className="text-2xl text-primary">Handy Tissue Products </b></Link>
              <Paragraph className="mt-5 text-md">
                In 2018, we expanded with a state-of-the-art facility in 6th of
                October City, powered by South Korean technology. This facility
                is where we craft everything from facial tissues to toilet
                paper, kitchen towels, table napkins, and handkerchiefs, all
                with a touch of innovation.
              </Paragraph>
              <Link className="text-primary font-bold" to="/sectors/handy-tissue-products">Learn more</Link>

            </div>
          </div>
          <div className="w-full bg-white">
            <Link to="/sectors/handy-wet-wipes" className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                03
              </p>
              <img src='/sectors/sector-03.webp' alt="Wet Wipes Sector" />
            </Link>

            <div className="p-7 ">
              <Link to="/sectors/handy-wet-wipes"><b className="text-2xl text-primary">Wet Wipes</b></Link>
              <Paragraph className="mt-5 text-md">
                Our Wet Wipes Plant, established in 2018, creates top-tier wipes
                that meet both local and global standards, delivering the
                perfect blend of convenience, safety, and hygiene.
              </Paragraph>
              <Link className="text-primary font-bold" to="/sectors/handy-wet-wipes">Learn more</Link>
            </div>
          </div>
        </div>
      </Section>
     
      <Banner image="/banner.webp" className=" text-center">
        <b className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl xl:leading-tight text-white">
          Proudly producing modern and high-quality products, using advanced
          machinery under the guidance of a skilled team
        </b>
      </Banner>
      <Section className="bg-[#f1eeee]">
        <SectionTitle className="!leading-tight">
          <>
            <p className="text-secondary ">Handy Products</p>
            <p className="text-primary">Clean, fresh, and on-the-go Quality That Speaks for Itself</p>
          </>
        </SectionTitle>
        <ProductCategories />
      </Section>
      <Section >
        <SectionTitle>Sustainability</SectionTitle>

        
        <Paragraph className="text-primary">
          We believe in sustainability at every step of our production. From
          eco-friendly materials to water purification systems meeting WHO
          standards, we strive to protect both the planet and your health. At
          HANDY, we create products that support a cleaner, greener future.
        </Paragraph>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-[repeat(14,1fr)] gap-5 mt-10 m-auto">
          {sustainabilityImagesArray.map((e,index) => (
            <img src={e} key={index}/>
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
          Since our founding, we've looked beyond commercial expectations,
          creating lasting value for society, nature, and humanity. Guided by
          the United Nations Global Compact and Sustainable Development Goals,
          we recycle high-quality waste paper with Recard and blend virgin pulp
          with selected recycled materials to reduce waste and promote
          circularity. We recently welcomed a school trip to our factory,
          sharing our commitment to sustainability with future generations and
          inspiring them to protect our planet.
        </Paragraph>
      </Section>

      <Section className="relative">
        <HandyBackground />
        <SectionTitle>Certificates</SectionTitle>
        <Certificates />
      </Section>
      

      {/* <Section>
        <SectionTitle className="mb-10">Contact Us</SectionTitle>
        <ContactSection />
      </Section> */}
    </>
  );
}
