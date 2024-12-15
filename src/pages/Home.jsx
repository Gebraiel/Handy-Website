import AboutSection from "../ui/AboutSection";
import Features from "../ui/Features";
import Section from "../ui/Section";
import sector from "../assets/sector1.jpg";
import sector2 from "../assets/sector2.jpg";
import sector3 from "../assets/sector3.jpg";

import ContactSection from "../ui/ContactSection";
import Slider from "../ui/Slider";
import Products from "../ui/HandyProducts";
import HandyBackground from "../ui/HadnyBackground";
import Certificates from "../ui/Certificates";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  // const products = [
  //   {
  //     id:1,
  //     title:"Jumbo Rolls",
  //     category:"Jumbo Rolls",
  //     image:"",
  //   }
  // ]
  const [loading, setLoading] = useState(true);
  const sustainabilityLength = 14;
  const sustainabilityImagesArray = Array.from(
    { length: sustainabilityLength },
    (_, i) =>
      `src/assets/sustainability/sign system-${
        i + 1 < 10 ? "0" + (i + 1) : i + 1
      }.jpg`
  );
  const sliderLength = 3;
  const sliderImagesArray = Array.from(
    { length: sliderLength },
    (_, i) => `src/assets/banner/slider-${i + 1}.png`
  );
  console.log(sustainabilityImagesArray);
  // if (loading)
  //   return (
  //     <div className="h-screen w-screen flex justify-center items-center ">
  //       <div className="animate-spin">
  //         <FaSpinner />
  //       </div>
  //     </div>
  //   );

  return (
    <>
      <Slider
        images={sliderImagesArray}
        headings={[
          {
            heading:
              "Innovative Solutions",
            subtitle: "We offer",
          },
          {
            heading:
              "Modern, high-quality products",
            subtitle: "Proudly producing",
          },
          {
            heading: "35 Years of redefining hygiene standards in Egypt",
            subtitle: "Experience more than",
          },
        ]}
      />
      <Section style="relative">
        <HandyBackground />
        <div className="text-4xl text-center leading-10 font-bold mb-5">
          <h1 className="text-red-500 ">Your Premium Hygiene Partner</h1>
          <h1 className="text-textPrimary">for Everyday Freshness</h1>
        </div>
        <p className="text-center  ">
          At HANDY, we’ve been redefining hygiene since 1978, bringing you
          products that make everyday life fresher, easier, and more
          comfortable. Whether at home or in business, our high-quality products
          are designed for maximum convenience, offering the perfect balance of
          strength, softness, and eco-friendly solutions.
        </p>
        <AboutSection />
      </Section>
      <Section style={"bg-primary"}>
        <div className="text-5xl text-center leading-10 font-bold mb-20">
          <h1 className="text-white">Why Handy</h1>
        </div>
        <Features />
      </Section>

      <Section style={"bg-[aliceblue]"}>
        <div className="text-5xl text-center leading-10 font-bold mb-20">
          <h1 className="text-primary">Sectors</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="w-full bg-white">
            <div className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                01
              </p>
              <img src={sector2} alt="" />
            </div>

            <div className="p-7 ">
              <b className="text-3xl text-primary">Handy Paper</b>
              <p className="mt-5">
                Nestled in New Borg El-Arab City, Alexandria, our first factory
                houses the iconic ‘Recard’ machine from 1989, producing jumbo
                rolls. In 2016, we supercharged operations with RECARD
                technology, increasing capacity to 80 tons per day and launching
                a recycling initiative. This powerhouse serves markets across
                KSA, Lebanon, Greece, Cyprus, Kuwait, Morocco, Syria, Sudan,
                Kenya, the Caribbean, and West Africa.
              </p>
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                02
              </p>
              <img src={sector} alt="" />
            </div>

            <div className="p-7">
              <b className="text-3xl text-primary">Handy FMCG </b>
              <p className="mt-5">
                In 2018, we expanded with a state-of-the-art facility in 6th of
                October City, powered by South Korean technology. This facility
                is where we craft everything from facial tissues to toilet
                paper, kitchen towels, table napkins, and handkerchiefs, all
                with a touch of innovation.
              </p>
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="relative w-full group">
              <p className="absolute right-5 bottom-5 text-8xl font-bold text-white opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-2">
                03
              </p>
              <img src={sector3} alt="" />
            </div>

            <div className="p-7 ">
              <b className="text-3xl text-primary">Wet Wipes</b>
              <p className="mt-5">
                Our Wet Wipes Plant, established in 2018, creates top-tier wipes
                that meet both local and global standards, delivering the
                perfect blend of convenience, safety, and hygiene.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        style={
          "bg-[url(src/assets/banner.jpg)] bg-center bg-cover lg:py-[300px] py-[150px] text-center"
        }
      >
        <b className="text-[35px] lg:text-[40px] xl:text-[60px] leading-none text-white">
          Proudly producing modern and high-quality products, using advanced
          machinery under the guidance of a skilled team
        </b>
      </Section>
      <Section>
        <div className="text-5xl text-center leading-10 font-bold mb-20">
          <h1 className="text-primary">Sustainability</h1>
        </div>
        <p className="text-primary">
          We believe in sustainability at every step of our production. From
          eco-friendly materials to water purification systems meeting WHO
          standards, we strive to protect both the planet and your health. At
          HANDY, we create products that support a cleaner, greener future.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
          {sustainabilityImagesArray.map((e) => (
            <img src={e} />
          ))}
        </div>
      </Section>
      <Section style="relative">
        <HandyBackground />
        <div className="text-5xl text-center leading-10 font-bold mb-20">
          <h1 className="text-primary">Certificates</h1>
        </div>
        <Certificates />
      </Section>
      <Section
        style={
          "bg-[url(src/assets/slider-4.jpg)] bg-center bg-cover lg:py-[300px] py-[150px] text-center relative"
        }
      >
        <div className="absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.3)] "></div>
        <b className=" leading-relaxed text-2xl text-white z-10 relative">
          Since our founding, we've looked beyond commercial expectations,
          creating lasting value for society, nature, and humanity. Guided by
          the United Nations Global Compact and Sustainable Development Goals,
          we recycle high-quality waste paper with Recard and blend virgin pulp
          with selected recycled materials to reduce waste and promote
          circularity. We recently welcomed a school trip to our factory,
          sharing our commitment to sustainability with future generations and
          inspiring them to protect our planet.
        </b>
      </Section>

      <Section>
        <div className="text-5xl text-center leading-10 font-bold mb-20">
          <h1 className="text-primary">Contact Us</h1>
        </div>
        <ContactSection />
      </Section>
    </>
  );
}
