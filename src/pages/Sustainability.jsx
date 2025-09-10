import { useState } from "react";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Banner from "../ui/Banner";
import Paragraph from "../ui/Paragraph";
import Gallery from "../ui/Sustainability/Gallery";
import Loader from "../ui/Loader";
import { useNavigation } from "react-router-dom";
import {AnimatePresence} from "motion/react"
import Lightbox from "../ui/Lightbox";
import FadeIn from "../ui/Animation/FadeIn";
import { useTranslation } from "react-i18next";
const sustainabilityLength = 14;
const sustainabilityImagesArray = Array.from(
  { length: sustainabilityLength },
  (_, i) =>
    `/sustainability/sign system-${i + 1 < 10 ? "0" + (i + 1) : i + 1}.jpg`
);
const lightBoxImagesLength = 14;
const lightBoxImages = Array.from(
  { length: lightBoxImagesLength },
  (_, i) =>
    `/School Visit/School${i + 1}.webp`
);

export default function Sustainability() {
  const{t}=useTranslation("Sustainability");
    function closeLightbox(){
        setActive(-1);
      }
  const [active,setActive] = useState(-1);
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;

  return (

    <FadeIn>
      <Banner
        image="/Banners/sustainability.webp"
        className="flex items-center justify-center"
      />
      <FadeIn>
        <Section>
        <SectionTitle>{t("Sustainability")}</SectionTitle>

        <div className="flex flex-col gap-5 justify-between">
          <div className="w-full space-y-5">
          <Paragraph className="text-justify" size="md">
            {t("Sustainability-Content-01")}
          </Paragraph>
          <Paragraph className="text-justify" size="md">
          {t("Sustainability-Content-02")}
          </Paragraph>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(14,1fr)] gap-5 mt-10 m-auto">
            {sustainabilityImagesArray.map((e,index) => (
              <FadeIn delay={0.02*index} key={index}>
                <img src={e}/>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
      </FadeIn>

      <Section >
        <SectionTitle>{t("School Visits")}</SectionTitle>

        <Paragraph className="text-justify mb-10" size="md">
          {t("School-Visits-Content")}
          </Paragraph>

        <Gallery handleClick={setActive} images={lightBoxImages}/>
        <AnimatePresence>
            {active > -1 &&  <Lightbox images={lightBoxImages} active={active} closeLightbox={closeLightbox}/>}
        </AnimatePresence>      </Section>
    </FadeIn>
  );
}
