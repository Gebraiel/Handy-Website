import React, { useEffect } from "react";
import SectionTitle from "../ui/SectionTitle";
import Banner from "../ui/Banner";
import Section from "../ui/Section";
import Paragraph from "../ui/Paragraph";
import Tabs from "../ui/Tabs";
import ProductDifferentiationTab from "../ui/About/ProductDifferentiationTab";
import AdditionalStrengthsTab from "../ui/About/AdditionalStrengthsTab";
import { useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";
import Timeline from "../ui/About/Timeline";
import BrandDifferentiationTab from "../ui/About/BrandDifferentiationTab";
import Accordion from "../ui/Home/Accordion";
import handy from "../assets/handy.webp";
import FadeIn from "../ui/Animation/FadeIn";
import FadeLeft from "../ui/Animation/FadeLeft";
import { useTranslation } from "react-i18next";

export default function About() {
  console.log("About");
  const navigation = useNavigation();
  const {t:tCommon} = useTranslation("Common")
  const {t:tAbout} = useTranslation("About")
  const accordions = [
  {
    heading: tAbout("Quality-Control-Foundation-Heading"),
    content:
     tAbout("Quality-Control-Foundation-Content"),
  },
  {
    heading: tAbout("Quality-Planning-Heading"),
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>{tAbout("Defining-Standards-Heading")}</b>
            <p>
              {tAbout("Defining-Standards-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Proactive-Approach-Heading")}</b>
            <p>
              {tAbout("Proactive-Approach-Content")}
            </p>

          </li>
          <li>
            <b>{tAbout("Purpose-Driven-Goals-Heading")}</b>
            <p>
              {tAbout("Purpose-Driven-Goals-Content")}
            </p>
          </li>
        </ul>
      </>,
  },
  ,
  {
    heading: tAbout("Quality-Assurance-Heading"),
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>{tAbout("Robust-Systems-Heading")}</b>
            <p>
              {tAbout("Robust-Systems-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Skilled-Teams-Heading")}</b>
            <p>
              {tAbout("Skilled-Teams-Content")}
            </p>

          </li>
          <li>
            <b>{tAbout("Performance-Monitoring-Heading")}</b>
            <p>
              {tAbout("Performance-Monitoring-Content")}
            </p>

          </li>
        </ul>
      </>,
  },
  ,
  {
    heading: tAbout("Quality-Control-Precision-Heading"),
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>{tAbout("Rigorous-Inspections-Heading")}</b>
            <p>
              {tAbout("Rigorous-Inspections-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Data-Driven-Accuracy-Heading")}</b>
            <p>
              {tAbout("Data-Driven-Accuracy-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Immediate-Action-Heading")}</b>
            <p>
              {tAbout("Immediate-Action-Content")}
            </p>

          </li>
        </ul>
      </>,
  },
  ,
  {
    heading: tAbout("Root-Cause-Analysis-Heading"),
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>{tAbout("In-Depth-Investigation-Heading")}</b>
            <p>
              {tAbout("In-Depth-Investigation-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Sustainable-Solutions-Heading")}</b>
            <p>
              {tAbout("Sustainable-Solutions-Content")}
            </p>

          </li>

        </ul>
      </>,
  },
  ,
  {
    heading:tAbout("Continuous-Improvement-Heading"),
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>{tAbout("Insight-Led-Evolution-Heading")}</b>
            <p>
              {tAbout("Insight-Led-Evolution-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Lean-Principles-Heading")}</b>
            <p>
              {tAbout("Lean-Principles-Content")}
            </p>

          </li>
          <li>
            <b>{tAbout("Collaborative-Growth-Heading")}</b>
            <p>
              {tAbout("Collaborative-Growth-Content")}
            </p>
          </li>

        </ul>
      </>,
  },
  ,
  {
    heading: tAbout("Proven-Quality-Techniques-Heading"),
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>{tAbout("Statistical-Process-Control-Heading")}</b>
            <p>
              {tAbout("Statistical-Process-Control-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("Total-Quality-Management-Heading")}</b>
            <p>
              {tAbout("Total-Quality-Management-Content")}
            </p>

          </li>
          <li>
            <b>{tAbout("Six-Sigma-Heading")}</b>
            <p>
              {tAbout("Six-Sigma-Content")}
            </p>

          </li>
          <li>
            <b>{tAbout("Lean-Manufacturing-Heading")}</b>
            <p>
              {tAbout("Lean-Manufacturing-Content")}
            </p>
          </li>
          <li>
            <b>{tAbout("ISO-Heading")}</b>
            <p>
              {tAbout("ISO-Content")}
            </p>
          </li>

        </ul>
      </>,
  }
];
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;

  return (
    <FadeIn>
      <Banner image={"/About/cover.webp"} />

      <Section>
        <SectionTitle className="!text-start">{tCommon("About Us")}</SectionTitle>

        <Paragraph size="md" className="">
          {tAbout("About-Section-Content")}
        </Paragraph>
      </Section>
      <Section className="bg-[#f1eeee]">
        <SectionTitle>{tAbout("Our Journey")}</SectionTitle>
        <div className="mb-[100px]">
          <FadeLeft>
            <img className="lg:block hidden" src="/About/Our Journey.webp" alt="Our Joureny"/>
            <img className="block lg:hidden" src="/About/Our Journey Mobile.webp" alt="Our Joureny"/>
          </FadeLeft>
        </div>

        <Timeline />
      </Section>
      <Section className="!pb-0">
        <SectionTitle>{tAbout("Features")}</SectionTitle>
      </Section>
      <Tabs
        links={[
          tAbout("Product Differentiation"),
          tAbout("Brand Differentiation"),
          tAbout("Additional Strengths"),
        ]}
      >
        <ProductDifferentiationTab key={1} />
        <BrandDifferentiationTab key={2}/>
        <AdditionalStrengthsTab key={3}/>
      </Tabs>
      <FadeIn>
        <Section>
        <SectionTitle>{tAbout("People-Workplace-Heading")}</SectionTitle>
        <Paragraph size="md" className="">
          {tAbout("People-Workplace-Content")}

        </Paragraph>
      </Section>
      </FadeIn>
      <Section>
        <SectionTitle>{tAbout("Handy-Core")}</SectionTitle>

            <div className="flex flex-col gap-5 justify-center mt-5 bg-white">
            {accordions.map((accordion, index) => (
              <FadeLeft delay={0.01*index}>
                <Accordion accordion={accordion} open={false} key={index} />
              </FadeLeft>
            ))}
          </div>

      </Section>
    </FadeIn>
  );
}
