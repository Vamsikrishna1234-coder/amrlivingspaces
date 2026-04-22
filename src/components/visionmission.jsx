import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Eye,
  CheckCircle2,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const MissionVision = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-end"
        >
          <div>
            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold text-gray-900 leading-tight">
              Mission & Vision
              <span className="block text-[#f57c00]">
                of AMR Living Spaces
              </span>
            </h2>
          </div>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 sm:leading-relaxed">
            We create landmark communities with timeless design, trusted quality,
            and future-ready value for every family and investor.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-10 sm:mt-14 lg:mt-20">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white rounded-[24px] sm:rounded-[32px] shadow-xl p-5 sm:p-7 lg:p-8 xl:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#f57c00]" />

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f57c00]/10 flex items-center justify-center">
              <Compass className="text-[#f57c00]" size={28} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-5 sm:mt-6">
              Our Mission
            </h3>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-5 sm:mt-6 leading-7 sm:leading-relaxed">
              To build premium homes and plotted communities that combine smart
              planning, quality construction, and peaceful surroundings.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed">
              We focus on customer trust, transparent processes, and on-time
              delivery that gives every buyer complete peace of mind.
            </p>

            <div className="space-y-4 mt-6 sm:mt-8">

              <div className="flex gap-3 items-start">
                <CheckCircle2
                  className="text-red-600 mt-1 shrink-0"
                  size={18}
                />
                <p className="text-gray-700 text-sm sm:text-base">
                  Premium locations with long-term value
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2
                  className="text-red-600 mt-1 shrink-0"
                  size={18}
                />
                <p className="text-gray-700 text-sm sm:text-base">
                  Quality standards in every detail
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2
                  className="text-red-600 mt-1 shrink-0"
                  size={18}
                />
                <p className="text-gray-700 text-sm sm:text-base">
                  Customer-first service experience
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <div className="lg:col-span-7 grid gap-6 sm:gap-8">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white rounded-[24px] sm:rounded-[32px] shadow-xl p-5 sm:p-7 lg:p-8 xl:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-red-600/20 rounded-full blur-3xl"></div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Eye className="text-[#f57c00]" size={28} />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mt-5 sm:mt-6">
                Our Vision
              </h3>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-5 sm:mt-6 leading-7 sm:leading-relaxed">
                To become the most trusted real estate brand by delivering
                landmark developments where families grow and investments prosper.
              </p>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed">
                We aim to redefine modern living through innovation,
                sustainability, and elegant communities.
              </p>
            </motion.div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-[22px] sm:rounded-[28px] shadow-xl p-5 sm:p-7 lg:p-8"
              >
                <Building2 className="text-[#f57c00]" size={26} />

                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">
                  What We Build
                </h4>

                <p className="text-gray-600 mt-4 leading-7 text-sm sm:text-base">
                  Homes, villas, plots, and communities designed for lifestyle,
                  comfort, and appreciation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f57c00] text-white rounded-[22px] sm:rounded-[28px] shadow-xl p-5 sm:p-7 lg:p-8"
              >
                <ArrowUpRight size={26} />

                <h4 className="text-xl sm:text-2xl font-bold mt-4">
                  Future Promise
                </h4>

                <p className="mt-4 leading-7 text-white/90 text-sm sm:text-base">
                  Every AMR project is planned to create pride today and value
                  for tomorrow.
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;