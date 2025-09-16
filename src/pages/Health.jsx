import Banner from "../ui/Banner";
import Paragraph from "../ui/Paragraph";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
import FadeIn from "../ui/Animation/FadeIn";
import { useTranslation } from "react-i18next";

export default function Health() {
  const { t } = useTranslation("Health");
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <FadeIn>
      <Banner image={"/Safety/banner.webp"} />
      <Section>
        <SectionTitle>{t("Title")}</SectionTitle>
        <Paragraph size="lg">{t("Content-01")}</Paragraph>
        <ul className="list-disc pl-8 py-5 space-y-2">
          <li>
            <b>{t("Routine Inspections")} : </b>{" "}
            {t("Routine Inspections Content")}
          </li>
          <li>
            <b>{t("Emergency Preparedness")} : </b>{" "}
            {t("Emergency Preparedness Content")}
          </li>
          <li>
            <b>{t("Employee Training")} : </b> {t("Employee Training Content")}
          </li>
          <li>
            <b>{t("Personal Protective Equipment (PPE)")} : </b>{" "}
            {t("Personal Protective Equipment (PPE) Content")}
          </li>
          <li>
            <b>{t("Ergonomic Workstations")} : </b>{" "}
            {t("Ergonomic Workstations Content")}
          </li>
          <li>
            <b>{t("Clean Environment")} : </b> {t("Clean Environment Content")}
          </li>
          <li>
            <b>{t("Air Quality & Ventilation")} : </b>{" "}
            {t("Air Quality & Ventilation Content")}
          </li>
        </ul>
        <Paragraph size="lg" className="text-center text-primary font-semibold">
          {t("Content-02")}
        </Paragraph>
      </Section>
    </FadeIn>
  );
}
