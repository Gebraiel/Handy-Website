import { useTranslation } from "react-i18next";
import Section from "../Section";
import { Link } from "react-router-dom/dist";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { getLocalizedPath } from "../../services/localization";

export default function BlogsList({error}) {
  const {t,i18n} = useTranslation("Common")
  if(error) return <h1>Something Went Wrong Please Referesh The Page</h1>
  return (
    <Section>
        <Pagination url={"media-center/blogs"} render={(blogs,loading)=>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? <div className="col-span-full"><Loading /></div>: blogs.map((blog) => (
              <Link
                to={getLocalizedPath(`/media-center/blogs/${blog.id}`,i18n.language)}
                key={blog.id}
                className="block bg-white rounded-lg overflow-hidden"
              >
                <div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="py-4">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html: blog.excerpt ? blog.excerpt : `${blog.description?.slice(0, 250)} ...`}}/>

                    <span className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors duration-300">
                      {t("Read More")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        }>
        </Pagination>
    </Section>
  );
}
