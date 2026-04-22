import React from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import About from "../components/about";
import VisionaryLeaders from "../components/visionaryleaders";
import Mission from "../components/visionmission";
import MilestonesSection from "../components/milestones";

const AboutIntro = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#0f172a] overflow-hidden flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600"
            alt="AMR Living Spaces"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Blur Effects */}
        <div className="absolute top-10 sm:top-20 left-0 sm:left-10 w-44 sm:w-72 h-44 sm:h-72 bg-[#f57c00]/20 blur-[100px] sm:blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 sm:bottom-10 right-0 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-[#f57c00]/10 blur-[100px] sm:blur-[140px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-20 sm:py-24 lg:py-28 w-full">
          <div className="max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Tag */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full mb-6 sm:mb-8">
                <Building2
                  size={16}
                  className="text-[#f57c00] sm:w-[18px] sm:h-[18px]"
                />

                <span className="text-white/90 text-[10px] sm:text-sm tracking-[2px] sm:tracking-[4px] uppercase">
                  About AMR Living Spaces
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-[32px] sm:text-[46px] md:text-[58px] lg:text-[70px] font-light leading-tight">
                Building Dreams,
                <br />
                Creating{" "}
                <span className="text-[#f57c00]">
                  Future Homes
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/75 text-sm sm:text-[16px] md:text-[18px] lg:text-[20px] leading-7 sm:leading-8 lg:leading-9 mt-6 sm:mt-8 max-w-2xl">
                At AMR Living Spaces, we believe every family deserves a home
                built with trust, elegance, and lasting value. Our journey is
                dedicated to creating premium communities where comfort meets
                modern living.
              </p>

              {/* Button */}
              <div className="mt-8 sm:mt-10">
                <a
                  href="#our-story"
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#f57c00] text-white text-sm sm:text-base font-medium hover:bg-orange-500 transition"
                >
                  Explore Our Story

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <About />

      <VisionaryLeaders />

      <Mission />
      
      <MilestonesSection />
    </>
  );
};

export default AboutIntro;