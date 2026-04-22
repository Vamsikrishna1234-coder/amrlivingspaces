import React from "react";
import { motion } from "framer-motion";
import { Quote, Award, ArrowRight } from "lucide-react";
import img1 from "../assets/AM-Reddy-image.png";
import img2 from "../assets/moulireddy amr.jpg";

const VisionaryLeaders = () => {
  return (
    <section className="w-full bg-[#f8f6f3] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="uppercase tracking-[3px] sm:tracking-[5px] text-[#f57c00] font-semibold text-xs sm:text-sm">
            Our Leadership
          </span>

          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold text-gray-900 mt-3 sm:mt-4 leading-tight">
            Visionaries Shaping{" "}
            <span className="text-[#f57c00]">Luxury Living</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed px-2">
            A legacy of trust, commitment, and innovation led by passionate minds.
          </p>
        </motion.div>

        {/* Main Director */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <img
                src={img1}
                alt="Mr A M Reddy"
                className="rounded-3xl h-[320px] sm:h-[480px] lg:h-[520px] w-full object-cover shadow-xl"
              />

              <div className="space-y-4">

                <img
                  src="https://www.amrlivingspaces.com/wp-content/uploads/2021/08/Image1.png"
                  alt="Meeting"
                  className="rounded-3xl h-[180px] sm:h-[230px] lg:h-[250px] w-full object-cover shadow-xl"
                />

                <div className="bg-[#f57c00] text-white rounded-3xl p-5 sm:p-6 h-[180px] sm:h-[230px] lg:h-[250px] flex flex-col justify-center shadow-xl">
                  <Award size={34} />

                  <h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4">
                    Forbes India
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed">
                    Featured on the prestigious Forbes India Marquee 2021.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-[#f57c00] font-semibold uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
              Founder & Managing Director
            </span>

            <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-gray-900 mt-3 sm:mt-4">
              Mr. A M Reddy
            </h3>

            <div className="mt-6 sm:mt-8 bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl border border-gray-100 relative">
              <Quote
                className="text-[#f57c00] absolute top-4 right-4 sm:top-6 sm:right-6"
                size={34}
              />

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-relaxed">
                Vakillu is headed by A M Reddy in association with AMR Living
                Spaces, a renowned entrepreneur in Indian Real Estate and
                Healthcare sectors.
              </p>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-relaxed mt-4 sm:mt-5">
                Founder & Director of Dr. Positive Group, with 20+ years of
                leadership, 1200+ employees, and 50+ branches, he built one of
                India’s leading clinic chains.
              </p>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-relaxed mt-4 sm:mt-5">
                His in-depth project expertise transformed into premium
                residential real estate developments, making AMR Living Spaces
                a trusted brand in Hyderabad.
              </p>

              <button className="mt-6 sm:mt-8 flex items-center gap-2 text-[#f57c00] font-semibold hover:gap-3 transition-all text-sm sm:text-base">
                Explore Leadership <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Second Director */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-14 sm:mt-18 lg:mt-24 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl order-2 lg:order-1"
          >
            <span className="text-[#f57c00] font-semibold uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
              Managing Director
            </span>

            <h3 className="text-[26px] sm:text-[32px] font-bold text-gray-900 mt-3 sm:mt-4">
              Mr. Mouli Reddy
            </h3>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-5 sm:mt-6 leading-7 sm:leading-relaxed">
              Mr. Mouli Reddy is an excellent inquisitive person and one of the most enthusiastic personalities in the construction industry.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed">
              With 6+ years of experience, he brings innovation, dedication,
              execution excellence, and customer-first leadership.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed">
              His strategic thinking and strong management skills help ensure
              every AMR Living Spaces project meets the highest standards.
            </p>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed">
              He is committed to delivering timely projects, premium quality,
              and creating long-term trust with every valued customer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src={img2}
              alt="Mr Mouli"
              className="rounded-3xl w-full h-[320px] sm:h-[420px] lg:h-[450px] object-cover shadow-xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default VisionaryLeaders;