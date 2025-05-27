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

export default function About() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const accordions = [
  {
    heading: "Quality Control : The Foundation of Excellence",
    content:
     "At Handy, quality is more than a process—it’s a core value embedded in every step we take. From planning to production, our commitment to excellence drives us to exceed expectations and deliver superior products every time.",
  },
  {
    heading: "Quality Planning: Setting the Stage for Excellence",
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>Defining Standards</b>
            <p>
              We establish clear, rigorous quality benchmarks that guide every aspect of our operations
            </p>
          </li>
          <li>
            <b>Proactive Approach</b>
            <p>
              We anticipate potential challenges and apply preventive measures to eliminate risks before they arise.
            </p>
          </li>
          <li>
            <b>Purpose-Driven Goals</b>
            <p>
               Measurable, strategic objectives keep our teams aligned and focused on continuous improvement.
            </p>
          </li>
        </ul>
      </>,
  },
  ,
  {
    heading: "Quality Assurance: Ensuring Consistency and Confidence",
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>Robust Systems</b>
            <p>
              Our comprehensive quality management systems ensure consistent performance and reliability.
            </p>
          </li>
          <li>
            <b>Skilled Teams</b>
            <p>
              Ongoing training empowers our employees to adopt best practices and uphold industry-leading standards.
            </p>
          </li>
          <li>
            <b>Performance Monitoring</b>
            <p>
                We continuously evaluate key metrics to drive improvements and maintain our competitive edge.
            </p>
          </li>
        </ul>
      </>,
  },
  ,
  {
    heading: "Quality Control: Precision at Every Stage",
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>Rigorous Inspections</b>
            <p>
              Detailed testing and evaluations are conducted throughout every phase of production.

            </p>
          </li>
          <li>
            <b>Data-Driven Accuracy</b>
            <p>
              We utilize Statistical Process Control (SPC) to detect and minimize variations.
            </p>
          </li>
          <li>
            <b>Immediate Action</b>
            <p>
                Any issues are swiftly addressed to maintain uninterrupted, high-quality operations.
            </p>
          </li>
        </ul>
      </>,
  },
  ,
  {
    heading: "Root Cause Analysis: Solving Problems at the Source",
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>In-Depth Investigation</b>
            <p>
               We go beyond the symptoms to uncover the true root causes of any issues.

            </p>
          </li>
          <li>
            <b>Sustainable Solutions</b>
            <p>
             Corrective actions are implemented with long-term success in mind, preventing future recurrence.

            </p>
          </li>
          
        </ul>
      </>,
  },
  ,
  {
    heading: "Continuous Improvement: Progress Through Innovation",
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>Insight-Led Evolution</b>
            <p>
               Trends and data are continuously analyzed to identify new areas for enhancement.
            </p>
          </li>
          <li>
            <b>Lean Principles</b>
            <p>
              We reduce waste and maximize efficiency by integrating lean manufacturing strategies.
            </p>
          </li>
          <li>
            <b>Collaborative Growth</b>
            <p>
              Innovation is encouraged across all teams, fostering a culture of shared progress.
            </p>
          </li>
          
        </ul>
      </>,
  },
  ,
  {
    heading: "The Handy Edge: Proven Quality Techniques",
    content:
      <>
        <ul className="list-disc list-inside">
          <li>
            <b>SPC (Statistical Process Control)</b>
            <p>
               Enhancing process stability through real-time data monitoring.
            </p>
          </li>
          <li>
            <b>TQM (Total Quality Management)</b>
            <p>
              Engaging all team members in a shared pursuit of quality.
            </p>
          </li>
          <li>
            <b>Six Sigma</b>
            <p>
              Driving precision and reducing defects through data-based decisions.
            </p>
          </li>
          <li>
            <b>Lean Manufacturing</b>
            <p>
              Optimizing operations for speed, flexibility, and minimal waste.
            </p>
          </li>
          <li>
            <b>ISO 9001</b>
            <p>
               Adhering to globally recognized quality standards for continuous competitive excellence.
            </p>
          </li>
          
        </ul>
      </>,
  }
];
  return (
    <>
      <Banner image={"/About/cover.webp"} />

      <Section>
        <SectionTitle className="!text-left">About Us</SectionTitle>

        <Paragraph size="md" className="">
          Alex Converta is an Egyptian leader in tissue paper production,
          specializing in both white and colored paper, and converting it into
          essential hygiene products like facial tissues, handkerchiefs, toilet
          rolls, table napkins, kitchen towels, and sanitary towels. "From a
          humble beginning to becoming a trusted household name, Handy's journey
          is marked by innovation, resilience, and a dedication to making
          everyday life better for millions." Handy Paper established its first
          manufacturing facility in New Borg El-Arab City, Alexandria, launching
          operations with the iconic Recard machine and a daily production
          capacity of up to 15 tons of jumbo tissue rolls.
        </Paragraph>
      </Section>
      <Section className="bg-[#f1eeee]">
        <SectionTitle>Our Journey</SectionTitle>
        <img src="/About/cover.webp"/>

        <Timeline />
      </Section>
      <Section className="!pb-0">
        <SectionTitle>What Makes Handy Stand Out ?</SectionTitle>
      </Section>
      <Tabs
        links={[
          "Product Differentiation",
          "Brand Differentiation",
          "Additional Strengths",
        ]}
      >
        <ProductDifferentiationTab />
        <BrandDifferentiationTab />
        <AdditionalStrengthsTab />
      </Tabs>
      <Section>
        <SectionTitle>People & Workplace Culture at Handy</SectionTitle>
        <Paragraph size="md" className="">
          At Handy, we are committed to creating a modern, inclusive, and
          inspiring work environment that values open communication over
          hierarchy. Across our factories and offices, employee health and
          safety remain a top priority, supported by regular training and
          inspections. Our head office is thoughtfully designed to encourage
          creativity, movement, and well-being—featuring sustainable materials,
          ergonomic furniture, and flexible workspaces. We believe that a
          vibrant and engaging workplace extends beyond daily tasks. Employees
          enjoy access to social events, seminars, and extracurricular
          activities like football and sailing clubs. Our office also offers
          inviting social areas, including a cafeteria and terrace for
          relaxation. We actively welcome employee feedback, using it to shape
          new initiatives that enrich our work culture. Through structured
          performance reviews, clear career paths, and a fair, role-based
          compensation system, we ensure personal growth aligns with company
          goals while maintaining competitive equity in the market.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>The Core of Handy’s Excellence</SectionTitle>

            <div className="flex flex-col gap-5 justify-center mt-5 bg-white">
            {accordions.map((accordion, index) => (
              <Accordion accordion={accordion} open={false} key={index} />
            ))}
          </div>
               
      </Section>
    </>
  );
}
