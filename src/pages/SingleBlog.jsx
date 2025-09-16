import { useLoaderData } from "react-router-dom/dist";
import { getSingleBlog } from "../services/media-center";
import Error from "./ErrorPage";
import Loader from "../ui/Loader";
import BlogsList from "../ui/Blogs/BlogsList";
import Banner from "../ui/Banner";
export default function SingleBlog() {
  const { blog, media_center_cover, error } = useLoaderData();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <>
      <Banner image={media_center_cover}>
        <h1 className="text-5xl font-bold text-white">{blog?.title}</h1>
      </Banner>

      <section className="container mx-auto px-4  mt-10 max-w-8xl">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-[500px] object-cover"
          loading="lazy"
        />
      </section>

      <section className="container mx-auto px-4 py-16 max-w-8xl">
        <article className="prose lg:prose-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {blog?.title}
          </h2>

          <div className="space-y-6 text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
          </div>
        </article>
      </section>

      <BlogsList blogs={blog.recommended} />
    </>
  );
}
export async function loader({ params }) {
  const { id } = params;
  const lang = params.lang || "en";
  const { blog, media_center_cover, error } = await getSingleBlog(lang, id);
  return { blog, media_center_cover, error };
}
