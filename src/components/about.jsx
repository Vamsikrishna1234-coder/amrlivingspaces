
import React from "react";
import { motion } from "framer-motion";
import { Home, ShieldCheck } from "lucide-react";
import img1 from "../assets/about img amr.jpg";

const AboutAMRSection = () => {
  return (
    <section
      className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      id="our-story"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative order-1"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={img1}
              alt="AMR Living Spaces"
              className="w-full h-[320px] sm:h-[450px] md:h-[560px] lg:h-[650px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 bg-[#f57c00] text-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-xl max-w-[85%] sm:max-w-xs">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
              AMR Living Spaces
            </h3>

            <p className="text-xs sm:text-sm mt-2 leading-relaxed">
              Redefining premium living with elegant homes, quality construction,
              and a lifestyle of pride.
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="order-2"
        >
          <span className="text-[#f57c00] text-sm sm:text-base md:text-lg font-bold tracking-[3px] sm:tracking-[4px] uppercase">
            About Us
          </span>

          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-gray-900 mt-2 leading-tight">
            Creating Spaces Where{" "}
            <span className="text-[#f57c00]">Dreams Live</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mt-6">
            At <span className="font-semibold text-black">AMR Living Spaces</span>,
            we understand that owning a home is a lifelong dream—one built through
            years of dedication, hard work, and aspirations for a peaceful future.
            A home is more than walls and rooms; it is a sanctuary where families
            grow, memories are created, and happiness finds its place.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mt-5">
            <span className="font-semibold text-black">Mr. A.M. Reddy</span>
            {" "}founded the organization with a singular mission—to create luxurious
            living atmospheres and deliver uncompromising standards of quality.
            His dedication, passion, and leadership have become the cornerstone
            of every milestone we achieve.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 mt-5">
            Under his visionary guidance, we have developed remarkable projects
            such as <span className="font-semibold text-black">AMR Legacy Villa's</span>{" "}
            and <span className="font-semibold text-black">Vakillu</span>, each
            designed to blend modern architecture, elegant planning, and peaceful
            surroundings.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8">

            <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 flex gap-4 items-start">
              <Home className="text-[#f57c00] mt-1 shrink-0" size={26} />

              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  Dream Homes
                </h4>

                <p className="text-sm text-gray-600 mt-1">
                  Beautifully designed homes for modern families.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-4 sm:p-5 flex gap-4 items-start">
              <ShieldCheck
                className="text-[#f57c00] mt-1 shrink-0"
                size={26}
              />

              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  Trusted Quality
                </h4>

                <p className="text-sm text-gray-600 mt-1">
                  Reliable construction with uncompromised standards.
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-[#f57c00] text-white rounded-full font-semibold hover:bg-black transition duration-300 text-sm sm:text-base">
            Explore Our Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutAMRSection;