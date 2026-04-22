import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "5 Reasons Why Villas Are the Best Investment in Hyderabad",
      date: "April 2026",
      read: "5 min read",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
      desc: "Explore why villas in Hyderabad are becoming the top choice for investors seeking privacy, luxury living, and strong future appreciation.",
    },
    {
      title: "Benefits of Gated Communities for Families",
      date: "March 2026",
      read: "4 min read",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200",
      desc: "Discover how gated communities offer safety, lifestyle amenities, peaceful surroundings, and a better environment for families.",
    },
    {
      title: "Top Amenities Modern Homebuyers Look For Today",
      date: "February 2026",
      read: "6 min read",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      desc: "From clubhouses to swimming pools and green open spaces, see the top amenities buyers expect in premium modern communities.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#f57c00] uppercase tracking-[4px] sm:tracking-[7px] text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">
            Latest Blogs
          </p>

          <h1 className="text-[28px] sm:text-[34px] md:text-[38px] font-medium text-[#1f2937] leading-tight px-2">
            Real Estate <span className="text-[#f57c00]">Insights</span>
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 sm:leading-8 px-2">
            Stay informed with expert property tips, investment advice,
            and modern homebuyer trends from AMR Living Spaces.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {blogs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-xl border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[#f57c00] text-xs sm:text-sm font-medium flex items-center gap-2">
                  <CalendarDays size={14} />
                  {item.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">

                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  <Clock3 size={14} />
                  {item.read}
                </div>

                <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium text-[#1f2937] leading-snug mb-3 sm:mb-4 group-hover:text-[#f57c00] transition">
                  {item.title}
                </h2>

                <p className="text-gray-500 leading-7 sm:leading-8 text-sm sm:text-[15px] mb-5 sm:mb-7">
                  {item.desc}
                </p>

                <a
                  href="/blog-details"
                  className="inline-flex items-center gap-2 text-[#f57c00] text-sm sm:text-base font-medium hover:gap-4 transition-all duration-300"
                >
                  Read More
                  <ArrowUpRight size={18} />
                </a>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Blogs;