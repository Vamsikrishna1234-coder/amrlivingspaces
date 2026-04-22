import React from "react";
import {
  ShieldCheck,
  Building2,
  MapPin,
  Wallet,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyAMRSection = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      desc: "Premium materials, structural excellence, and long-lasting quality in every AMR project.",
    },
    {
      icon: Building2,
      title: "Modern Living",
      desc: "Elegant architecture, spacious layouts, vastu planning, and smart lifestyle features.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      desc: "Projects in high-growth areas with excellent connectivity and convenience.",
    },
    {
      icon: Wallet,
      title: "Smart Investment",
      desc: "Luxury living with practical pricing and strong future appreciation potential.",
    },
    {
      icon: Users,
      title: "Customer Trust",
      desc: "Transparent process, smooth documentation, and customer-first support.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-center mb-10 sm:mb-14 lg:mb-20"
        >
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-medium text-[#1f2937] leading-tight">
            Why <span className="text-[#f57c00]">AMR Living Spaces</span>
          </h2>

          <p className="text-gray-500 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7 sm:leading-8 px-2">
            Premium homes designed with trust, quality, and future-ready living.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="relative">

          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#f57c00] via-orange-200 to-[#f57c00]" />

          {/* Mobile line */}
          <div className="lg:hidden absolute left-6 sm:left-8 top-0 w-[2px] h-full bg-gradient-to-b from-[#f57c00] via-orange-200 to-[#f57c00]" />

          <div className="space-y-5 sm:space-y-6 lg:space-y-8">

            {reasons.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: left ? -100 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: false }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center"
                >
                  {/* Card */}
                  <div className={`${left ? "" : "lg:order-2"} pl-10 sm:pl-14 lg:pl-0`}>
                    <div className="bg-[#fafafa] border border-gray-200 rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl hover:border-[#f57c00]/50 transition duration-500 group">

                      <div className="flex items-start gap-4 sm:gap-5">
                        {/* Icon */}
                        <div className="w-12 h-12 sm:w-16 sm:h-16 min-w-[48px] sm:min-w-[64px] rounded-2xl bg-[#f57c00]/10 flex items-center justify-center group-hover:bg-[#f57c00] transition duration-500">
                          <Icon
                            size={24}
                            className="text-[#f57c00] group-hover:text-white transition duration-500 sm:w-[28px] sm:h-[28px]"
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-lg sm:text-xl lg:text-[24px] font-medium text-[#1f2937] mb-2 sm:mb-3 leading-snug">
                            {item.title}
                          </h3>

                          <p className="text-gray-500 leading-7 sm:leading-8 text-sm sm:text-[15px]">
                            {item.desc}
                          </p>

                          <div className="mt-4 sm:mt-5 flex items-center gap-2 text-[#f57c00] font-medium text-sm sm:text-base group-hover:gap-4 transition-all duration-300">
                            Learn More <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty side desktop */}
                  <div className="hidden lg:block"></div>

                  {/* Desktop dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-5 h-5 rounded-full bg-[#f57c00] border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Mobile dot */}
                  <div className="lg:hidden absolute left-6 sm:left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-[#f57c00] border-2 border-white shadow-lg"></div>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyAMRSection;