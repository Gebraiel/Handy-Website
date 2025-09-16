import Banner from "../ui/Banner";
import SectionTitle from "../ui/SectionTitle";
import Section from "../ui/Section";
import Paragraph from "../ui/Paragraph";
import { useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
import FadeIn from "../ui/Animation/FadeIn";
import { useTranslation } from "react-i18next";

export default function CustomerSupport() {
  const { t } = useTranslation("CustomerSupport");
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <FadeIn>
      <Banner image={"/Customer-Support/banner.webp"} />

      <Section>
        <SectionTitle>{t("Title")}</SectionTitle>
        <ol className="space-y-3">
          <li className="space-y-2">
            <b className="text-lg">{t("Product-Information")}</b>
            <Paragraph size="md" className="text-justify">
              <ul className="list-disc ps-10">
                <li>{t("Product-Information-Content-01")}</li>
                <li>{t("Product-Information-Content-02")}</li>
              </ul>
            </Paragraph>
          </li>
          <li className="space-y-2">
            <b className="text-lg">{t("Quick-Easy")}</b>
            <Paragraph size="md" className="text-justify">
              <ul className="list-disc ps-10">
                <li>{t("Quick-Easy-Content-01")}</li>
                <li>{t("Quick-Easy-Content-02")}</li>
                <li>{t("Quick-Easy-Content-03")}</li>
              </ul>
            </Paragraph>
          </li>
          <li className="space-y-2">
            <b className="text-lg">{t("Social-Media")}</b>
            <Paragraph size="md" className="text-justify">
              <ul className="list-disc ps-10">
                <li>{t("Social-Media-Content-01")}</li>
                <li>{t("Social-Media-Content-02")}</li>
              </ul>
            </Paragraph>
          </li>
          <li className="space-y-2">
            <b className="text-lg">{t("Customer-Rewards")}</b>
            <Paragraph size="md" className="text-justify">
              <ul className="list-disc ps-10">
                <li>{t("Customer-Rewards-Content-01")}</li>
                <li>{t("Customer-Rewards-Content-02")}</li>
              </ul>
            </Paragraph>
          </li>
        </ol>
      </Section>
    </FadeIn>
  );
}
