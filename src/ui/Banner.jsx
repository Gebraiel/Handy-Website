import Section from "./Section";

export default function Banner({ children = "", image, className = "" }) {
  return (
    <Section
      style={{ backgroundImage: `url(${image})` }}
      className={`bg-cover bg-center 2xl:h-[500px] xl:h-[250px] h-[400px] flex justify-center items-center overlay ${className}`}
    >
      {children && <div className="relative z-10">{children}</div>}
    </Section>
  );
}
