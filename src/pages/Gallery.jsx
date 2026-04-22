import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

import img1 from "../assets/abouthero amr.jpg";
import img2 from "../assets/amr project1.jpg";
import img3 from "../assets/gym amr.jpg";
import img4 from "../assets/amr clubhouse.jpg";
import img5 from "../assets/amr-living-pool.jpg";
import img6 from "../assets/amr-living-openspace.jpg";
import img8 from "../assets/amr-living-bedroom.jpg";
import img7 from "../assets/amr-living-elevation.jpg";
import img9 from "../assets/amr project1.jpg";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    { title: "AMR Legacy Villas", category: "Luxury Villas", image: img1 },
    { title: "Vakillu Project", category: "Premium Homes", image: img2 },
    { title: "Modern Interiors", category: "Interiors", image: img3 },
    { title: "Club House", category: "Amenities", image: img4 },
    { title: "Swimming Pool", category: "Lifestyle", image: img5 },
    { title: "Green Landscapes", category: "Open Spaces", image: img6 },
    { title: "Premium Elevation", category: "Architecture", image: img7 },
    { title: "Luxury Bedroom", category: "Interiors", image: img8 },
    { title: "Evening Exterior", category: "Community", image: img9 },
  ];

  return (
    <section className="w-full min-h-screen bg-[#f8f8f8] pt-28 sm:pt-32 md:pt-36 lg:pt-28 pb-16 sm:pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-20 overflow-hidden">
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
            Our Gallery
          </p>

          <h1 className="text-[28px] sm:text-[34px] md:text-[38px] font-medium text-[#1f2937] leading-tight px-2">
            Explore Our <span className="text-[#f57c00]">Spaces</span>
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 sm:leading-8 px-2">
            Discover elegant villas, premium communities, interiors, and lifestyle
            amenities crafted by AMR Living Spaces.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">

          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: false }}
              className="relative group cursor-pointer rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-xl h-[260px] sm:h-[290px] lg:h-[320px]"
              onClick={() => setActiveImage(item)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 lg:p-6 text-white w-full">
                <p className="text-[#f57c00] text-xs sm:text-sm tracking-[2px] sm:tracking-[4px] uppercase mb-2">
                  {item.category}
                </p>

                <div className="flex justify-between items-end gap-4">
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-tight">
                    {item.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition shrink-0"
                  />
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 sm:px-6"
            >
              {/* Close */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 sm:top-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <X size={20} />
              </button>

              {/* Popup */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-5xl w-full"
              >
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full max-h-[70vh] sm:max-h-[80vh] object-cover rounded-[22px] sm:rounded-[28px]"
                />

                <div className="text-white mt-4 sm:mt-6 text-center px-2">
                  <p className="text-[#f57c00] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm">
                    {activeImage.category}
                  </p>

                  <h3 className="text-[24px] sm:text-[30px] font-medium mt-2">
                    {activeImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;