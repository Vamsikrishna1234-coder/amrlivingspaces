import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Building2 } from "lucide-react";
import img1 from "../assets/amr hero3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AMR Legacy Villa's",
      location: "Gowrelly, Hyderabad",
      image: img1,
      desc: "A premium gated villa community designed with luxury living, spacious layouts, modern amenities, and long-term value.",
      link: "https://amrlegacy.in",
      button: "View Project",
    },
    {
      title: "Vakillu",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      desc: "An elegant residential project crafted for modern families with premium comfort, stylish architecture, and peaceful surroundings.",
      link: "/vakillu",
      button: "View Project",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] pt-36 sm:pt-40 md:pt-44 lg:pt-28 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-20 overflow-hidden">
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
            Our Projects
          </p>

          <h1 className="text-[28px] sm:text-[34px] md:text-[42px] font-medium text-[#1f2937] leading-tight px-2">
            Discover Premium{" "}
            <span className="text-[#f57c00]">Communities</span>
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 sm:leading-8 px-2">
            Explore AMR Living Spaces projects built with trust, elegance,
            premium quality, and future-ready living experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: false }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[22px] sm:rounded-[30px] shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[240px] sm:h-[280px] lg:h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[#f57c00] text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <Building2 size={15} />
                  Featured Project
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-8">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-medium text-[#1f2937] mb-3 leading-snug">
                  {item.title}
                </h2>

                <div className="flex items-center gap-2 text-[#f57c00] text-xs sm:text-sm font-medium mb-4 sm:mb-5">
                  <MapPin size={15} />
                  {item.location}
                </div>

                <p className="text-gray-500 leading-7 sm:leading-8 text-sm sm:text-[15px] mb-6 sm:mb-8">
                  {item.desc}
                </p>

                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full bg-[#f57c00] hover:bg-orange-500 text-white text-sm sm:text-base font-medium transition"
                >
                  {item.button}
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

export default Projects;