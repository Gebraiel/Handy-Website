import React from 'react';
import { Link, useNavigation } from "react-router-dom";
import Loader from '../ui/Loader';
import Banner from '../ui/Banner';


export const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and start building awesome applications. This comprehensive guide covers everything from component creation to state management. Discover how to structure your projects, implement hooks, and create reusable components that will streamline your development process...",
    image: "/categories/jumbo.jpg",
    link: `/media-center/${1}` // Update the link format
  },
  {
    id: 2,
    title: "Modern Web Development",
    description: "Explore modern web development techniques and best practices in 2025. Deep dive into responsive design, progressive web apps, and performance optimization. Learn about the latest tools, frameworks, and methodologies that professional developers use to create scalable and maintainable web applications...",
    image: "/categories/jumbo.jpg",
    link: `/media-center/${1}` // Update the link format
  },
  {
    id: 3,
    title: "React Hooks",
    description: "Discover the power of React Hooks and how to use them effectively in your applications. Master useState, useEffect, useContext, and custom hooks. Learn advanced patterns for state management, side effects, and component lifecycle. Real-world examples and practical use cases included...",
    image: "/categories/jumbo.jpg",
    link: `/media-center/${1}` // Update the link format
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Company Event 2025",
    description: "Annual gathering showcasing our latest innovations and achievements. Join us for an immersive experience featuring product demonstrations, interactive sessions, and networking opportunities with industry leaders. This year's event highlighted groundbreaking advancements in sustainable technology, artificial intelligence integration, and smart manufacturing solutions. Attendees had the unique opportunity to engage with our expert team, participate in hands-on workshops, and witness live demonstrations of our cutting-edge products. The event also featured keynote speeches from industry pioneers, discussing future trends and technological developments that are shaping our industry. Through collaborative discussions and strategic partnerships formed during the event, we continue to push the boundaries of innovation and excellence in our field.",
    image: "/categories/jumbo.jpg",
    link: `/gallery/${1}`
  },
  {
    id: 2,
    title: "Product Launch",
    description: "Witness the unveiling of our groundbreaking products that set new industry standards. Experience firsthand the future of technology and innovation through our latest releases. Our revolutionary product line combines cutting-edge engineering with sustainable practices, demonstrating our commitment to both technological advancement and environmental responsibility. The launch event featured comprehensive demonstrations of product capabilities, technical specifications, and real-world applications. Industry experts and early adopters praised the innovative features, exceptional quality, and forward-thinking design of our new releases. These products represent a significant milestone in our journey towards creating solutions that not only meet but exceed market expectations.",
    image: "/categories/jumbo.jpg",
    link: `/gallery/${1}`
  },
];


export default function MediaCenter() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;




  return (
    <>
      {/* Hero sec */}
<section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('/Banners/sustainability.webp')` }}>
        <div className="absolute inset-0 flex items-center justify-start lg:ps-[110px] ps-4">
          <h1 className="text-5xl font-bold text-white">
            News From Us
          </h1>
        </div>
      </section>


      <div className="container mx-auto 2xl:py-24 py-[50px] px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          
          <Link 
    to={blog.link}
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
        <p className="text-gray-600 mb-4">
          {blog.description}
        </p>
        <span 
          className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition-colors duration-300"
        >
          Read More
        </span>
      </div>
    </div>
  </Link>
        ))}
      </div>
    </div>



    <section className='container mx-auto px-5 pb-10'>
         <h2 className="text-3xl font-bold mb-12 text-gray-800">Media Gallery</h2>
        
        <div className="space-y-16">
          {galleryItems.map((item) => (
            <div key={item.id} className="grid md:grid-cols-2 gap-8">
              {/* Image Column */}
              <Link 
                to={item.link} 
                className="block overflow-hidden rounded-lg group"
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </div>
              </Link>

              {/* Content Column */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        

    </section>
    </>
  )
}
