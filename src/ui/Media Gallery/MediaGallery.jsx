import Section from "../Section";
import { Link } from "react-router-dom/dist";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";

export default function MediaGallery({ gallery, error }) {
  const { t } = useTranslation("Common");
  if (error)
    return (
      <Section>
        <SectionTitle className="text-center">
          <p className="text-secondary">Something went wrong</p>
          <p>{error.message}</p>
        </SectionTitle>
      </Section>
    );
  return (
    <Section>
      <h2 className="text-3xl font-bold mb-12 text-gray-800">
        {t("Media Gallery")}
      </h2>

      <div className="space-y-16">
        {gallery.map((item) => (
          <div key={item.id} className="grid md:grid-cols-2 gap-8">
            <Link
              to={`gallery/${item.id}`}
              className="block overflow-hidden rounded-lg group"
            >
              <div className="relative">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              <p
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
