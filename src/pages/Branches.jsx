import Banner from "../ui/Banner";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { FaMapMarkerAlt } from "react-icons/fa";
import Loader from "../ui/Loader";
import { useNavigation } from "react-router-dom";
import FadeIn from "../ui/Animation/FadeIn";
import { useTranslation } from "react-i18next";

export default function Branches() {
    const {t} = useTranslation("Branches")
  const navigation = useNavigation();
const isLoading = navigation.state === "loading";
if (isLoading) return <Loader />;
  return (
    <FadeIn>
      <Banner image={"/banner/slider-1.png"}/>
        <Section >
        <SectionTitle>{t("Title")}</SectionTitle>
        <div className="space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                <div className=" bg-primary bg-[url('/pattern.png')] bg-contain p-8 text-white text-center space-y-3 h-full flex flex-col items-center justify-center" >
                    <FaMapMarkerAlt className="text-3xl mb-3" />
                    <b className="sm:text-2xl text-lg">{t("Cairo Branch")}</b>
                    <address className="sm:text-md text-sm sm:w-11/12 mx-auto">{t("Cairo Branch Address")}</address>
                </div>
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3451.3069922766663!2d31.345777799999997!3d30.1140278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA2JzUwLjUiTiAzMcKwMjAnNDQuOCJF!5e0!3m2!1sar!2seg!4v1736845843638!5m2!1sar!2seg" width="100%" height="250"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                <div className=" bg-primary bg-[url('/pattern.png')] bg-contain p-8 text-white text-center space-y-3 h-full flex flex-col items-center justify-center" >
                    <FaMapMarkerAlt className="text-3xl mb-3" />
                    <b className="sm:text-2xl text-lg">{t("Alexandria Branch")}</b>
                    <address className="sm:text-md text-sm sm:w-11/12 mx-auto">{t("Alexandria Branch Address")}</address>
                </div>
                <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1706.3418415326923!2d30.0135061!3d31.2017828!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEyJzA2LjIiTiAzMMKwMDAnNTEuNiJF!5e0!3m2!1sar!2seg!4v1736851493012!5m2!1sar!2seg" width="100%" height="250"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                <div className=" bg-primary bg-[url('/pattern.png')] bg-contain p-8 text-white text-center space-y-3 h-full flex flex-col items-center justify-center" >
                    <FaMapMarkerAlt className="text-3xl mb-3" />
                    <b className="sm:text-2xl text-lg">{t("Mansoura Branch")}</b>
                    <address className="sm:text-md text-sm sm:w-11/12 mx-auto">{t("Mansoura Branch Address")}</address>
                </div>
                <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1709.4528202953682!2d31.3610879!3d31.0288785!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDAxJzQ1LjEiTiAzMcKwMjEnNDYuMyJF!5e0!3m2!1sar!2seg!4v1736851659040!5m2!1sar!2seg" width="100%" height="250"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                <div className=" bg-primary bg-[url('/pattern.png')] bg-contain p-8 text-white text-center space-y-3 h-full flex flex-col items-center justify-center" >
                    <FaMapMarkerAlt className="text-3xl mb-3" />
                    <b className="sm:text-2xl text-lg">{t("Damietta Branch")}</b>
                    <address className="sm:text-md text-sm sm:w-11/12 mx-auto">{t("Damietta Branch Address")}</address>
                </div>
                <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3404.565933810226!2d31.800194400000002!3d31.42608329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI1JzMzLjkiTiAzMcKwNDgnMDAuNyJF!5e0!3m2!1sar!2seg!4v1736851734821!5m2!1sar!2seg" width="100%" height="250"  allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
        </div>

        </Section>
    </FadeIn>
  );
}
