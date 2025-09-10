import Gallery from "../ui/Sustainability/Gallery";
import FadeIn from "../ui/Animation/FadeIn";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useState } from "react";
import Lightbox from "../ui/Lightbox";
import { getSingleGallery } from "../services/media-center";
import { useLoaderData } from "react-router-dom/dist";
import Loader from "../ui/Loader";
import Error from "./ErrorPage";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import Banner from "../ui/Banner";

export default function MediaGallery() {
  const {t} = useTranslation("Common");
  const {gallery,media_center_cover,error} = useLoaderData();
  const galleryImages = gallery.images?.map((image)=>{
    return image.image
  })
  const isLoading = navigation.state === "loading";
  const [active,setActive] = useState(-1);
  function closeLightbox(){
    setActive(-1);
  }
  if (isLoading) return <Loader />;
  if(error) return <Error error={error}/>
  return (
    <>
    <FadeIn>
      <Banner image={media_center_cover}>
        <h1 className="text-5xl font-bold text-white">
           {gallery?.title}
        </h1>
      </Banner>


      <FadeIn>
        <Section className="!pt-30 !pb-0">
        <SectionTitle className="!mb-10">
            {t("Media Gallery")}
        </SectionTitle>


      </Section>
      </FadeIn>

      <Section className="!py-30">


        <Gallery handleClick={setActive} images={galleryImages}/>
        <AnimatePresence>
            {active > -1 &&  <Lightbox images={galleryImages} active={active} closeLightbox={closeLightbox}/>}
        </AnimatePresence>
          </Section>
    </FadeIn>
    </>
  )
}
export async function loader({params}){
  const {id} = params;
  const lang = params.lang || "en";
  const {gallery,media_center_cover,error} = await getSingleGallery(lang,id);
  return {gallery,media_center_cover,error};
}