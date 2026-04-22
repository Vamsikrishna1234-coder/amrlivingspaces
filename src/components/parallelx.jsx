import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/p2.jpeg";

const ParallelXSection = () => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[620px] md:min-h-[700px] lg:h-[65vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 w-full py-14 sm:py-16">
        <div className="max-w-3xl">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white text-[30px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-tight sm:leading-none font-light tracking-tight mb-6 sm:mb-8"
          >
            Where Architecture
            <br />
            Meets{" "}
            <span className="text-[#f57c00] font-medium">
              Lifestyle
            </span>
          </motion.h2>

          {/* Quote */}
          <div className="mb-8 sm:mb-10 lg:mb-12 space-y-3">

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-white/90 text-[15px] sm:text-[18px] md:text-[20px] lg:text-[21px] leading-7 sm:leading-tight font-light max-w-2xl"
            >
              Every home we create is a reflection of timeless elegance,
              thoughtful design, and unmatched quality.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-white/70 text-sm sm:text-base md:text-lg italic"
            >
              — AMR Living Spaces
            </motion.p>

          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 sm:gap-5"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 sm:gap-4 bg-[#f57c00] hover:bg-[#e66a00] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl font-medium text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl shadow-[#f57c00]/30 hover:shadow-2xl hover:shadow-[#f57c00]/40"
            >
              View All Projects

              <ArrowRight
                size={22}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ParallelXSection;