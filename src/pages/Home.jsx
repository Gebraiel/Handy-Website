import AboutSection from "../ui/AboutSection";
import Features from "../ui/Features";
import Section from "../ui/Section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="text-4xl text-center leading-10 font-bold">
          <h1 className="text-red-500 ">Your Premium Hygiene Partner</h1>
          <h1 className="text-textPrimary">for Everyday Freshness</h1>
        </div>
        <p className="text-center my-5 ">
          At HANDY, we’ve been redefining hygiene since 1978, bringing you
          products that make everyday life fresher, easier, and more
          comfortable. Whether at home or in business, our high-quality products
          are designed for maximum convenience, offering the perfect balance of
          strength, softness, and eco-friendly solutions.
        </p>
        <AboutSection />
      </Section>
      <Section style={"bg-primary"}>
        <Features />
      </Section>
    </>
  );
}
