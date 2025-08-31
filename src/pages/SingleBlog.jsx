import { Link, useParams } from 'react-router-dom';
import { blogs } from './MediaCenter';

export default function SingleBlog() {
//   const { id } = useParams();
//   console.log(id);
  
  const blog = {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and start building awesome applications. This comprehensive guide covers everything from component creation to state management. Discover how to structure your projects, implement hooks, and create reusable components that will streamline your development process...",
    image: "/categories/jumbo.jpg",

  }

  return (
    <>

    <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('/public/Banners/sustainability.webp')` }}>
        <div className="absolute inset-0 flex items-center justify-start lg:ps-[110px] ps-4">
          <h1 className="text-5xl font-bold text-white">
           {blog?.title}
          </h1>
        </div>
      </section>

      {/* Full width image section */}
      <section className="container mx-auto px-4  mt-10 max-w-8xl">
        <img 
          src={blog?.image} 
          alt={blog?.title}
          className="w-full h-[500px] object-cover"
          loading='lazy'
        />

      </section>

      {/* Content section */}
      <section className="container mx-auto px-4 py-16 max-w-8xl">
        <article className="prose lg:prose-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {blog?.title}
          </h2>
          
          <div className="space-y-6 text-gray-600">
            <p>
              {blog?.description}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </section>

      {/* More Articles Section */}
      <section className="bg-gray-50 py-16 max-w-8xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">More Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                to={blog.link}
                key={blog.id}
                className="block bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {blog.description}
                  </p>
                  <span className="inline-block mt-4 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors duration-300">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}