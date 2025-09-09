import React from "react";
import Navbar from "../components/Navbar"; 


const Blogs = () => {
  const posts = [
  {
    id: 1,
    title: "10 Best Warm-up Exercises",
    date: "Sep 8, 2025",
    excerpt: "Warming up is essential to avoid injuries and improve performance...",
    image: "https://source.unsplash.com/400x300/?fitness,warmup",
  },
  {
    id: 2,
    title: "Nutrition Tips for Muscle Growth",
    date: "Sep 5, 2025",
    excerpt: "Your diet plays a major role in building muscle mass and strength...",
    image: "https://source.unsplash.com/400x300/?nutrition,healthy",
  },
  {
    id: 3,
    title: "Best Leg Day Workouts",
    date: "Sep 1, 2025",
    excerpt: "Strong legs are the foundation of overall fitness. Here’s how to train them...",
    image: "https://source.unsplash.com/400x300/?gym,legs",
  },
];
  return (
    <div>    
      
      <Navbar/>

    <section className="bg-black min-h-screen py-16 px-6  text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 ">
        Our Blogs
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-400">{post.date}</p>
              <h3 className="text-xl font-semibold mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
              <button className="px-4 py-2 bg-[#E50914] text-white rounded-lg hover:bg-[#b20710] transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>

  );
};

export default Blogs;
