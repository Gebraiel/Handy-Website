import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from '../ui/Loader';
import { getGallery} from '../services/media-center';
import BlogsList from '../ui/Blogs/BlogsList';
import MediaGallery from '../ui/Media Gallery/MediaGallery';
import { useTranslation } from "react-i18next";
import Banner from "../ui/Banner";

export default function MediaCenter() {
  const {t,i18n} = useTranslation("Common");
  const {gallery,media_center_cover,galleryError} = useLoaderData();
  const navigation = useNavigation();
  console.log(media_center_cover)
  const isLoading = navigation.state === "loading";
  console.log(i18n.language)
  if (isLoading) return <Loader />;
  return (
    <>
      {/* Hero sec */}
      <Banner image={media_center_cover}>
        <h1 className="text-5xl font-bold text-white">
            {t("News From Us")}
          </h1>
      </Banner>
      {/* <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: {media_center_cover} }}>
        <div className="absolute inset-0 flex items-center justify-start lg:ps-[110px] ps-4">
          <h1 className="text-5xl font-bold text-white">
            {t("News From Us")}
          </h1>
        </div>
      </section> */}
    <BlogsList />
    <MediaGallery gallery={gallery} error={galleryError}/>
    </>
  )
}
export async function loader({params}){
    const lang = params.lang || "en";
    const {gallery,media_center_cover,error:galleryError} = await getGallery(lang);
    return {gallery,media_center_cover,galleryError};
}