import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/fp4.jpg";
import img2 from "../assets/fp2.jpg";
import img3 from "../assets/fp3.jpg";

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "AMR LEGACY VILLA'S",
      location: "GOWRELLY, HYDERABAD",
      image: img1,
      desc: "A premium residential project offering spacious 2BHK and 3BHK apartments with Vaastu-compliant designs and world-class amenities.",
      slug: "/projects/",
    },
    {
      title: "VAKILLU",
      location: "HYDERABAD",
      image: img2,
      desc: "A premium residential development offering spacious living spaces with modern amenities and Vaastu-inspired architecture.",
      slug: "/projects/",
    },
    {
      title: "Krishna",
      location: "Hosapete, Karnataka",
      image: img3,
      desc: "A thoughtfully designed residential project in Hosapete, offering contemporary living spaces with premium comfort and quality.",
      slug: "/projects/",
    },
  ];

  const cardVariants = [
    {
      hidden: { opacity: 0, x: -120 },
      visible: { opacity: 1, x: 0 },
    },
    {
      hidden: { opacity: 0, y: -120 },
      visible: { opacity: 1, y: 0 },
    },
    {
      hidden: { opacity: 0, x: 120 },
      visible: { opacity: 1, x: 0 },
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-[#f57c00] tracking-[4px] sm:tracking-[7px] uppercase text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-5">
            Featured Projects
          </p>

          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-light text-[#1e2a39] leading-tight max-w-5xl mx-auto px-2">
            Discover our premium residential developments across Bangalore
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {projects.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants[index]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.9,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative h-[340px] sm:h-[380px] lg:h-[400px] rounded-[22px] overflow-hidden group shadow-xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 lg:p-7 text-white z-10">
                <h3 className="text-lg sm:text-xl font-medium mb-1 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1 text-[#f57c00] text-[13px] sm:text-[15px] mb-2 font-medium">
                  <MapPin size={15} />
                  <span className="line-clamp-1">{item.location}</span>
                </div>

                <p className="text-[12px] sm:text-[13px] text-gray-200 leading-5 sm:leading-6 mb-3 line-clamp-3">
                  {item.desc}
                </p>

                <button
                  onClick={() => navigate(item.slug)}
                  className="flex items-center gap-2 sm:gap-3 text-[#f57c00] text-sm sm:text-base font-semibold hover:gap-5 transition-all duration-300"
                >
                  View Project <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;