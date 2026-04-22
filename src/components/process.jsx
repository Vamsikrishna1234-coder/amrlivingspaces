import React from "react";
import {
  Search,
  ClipboardCheck,
  Wallet,
  Building2,
  KeyRound,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const process = [
    {
      number: "01",
      title: "Consultation & Requirement",
      icon: Search,
      desc: "We understand your location preference, investment goals, and dream home expectations before suggesting the right AMR property.",
    },
    {
      number: "02",
      title: "Site Visit & Planning",
      icon: ClipboardCheck,
      desc: "Experience the project firsthand with guided site visits, floor plan walkthroughs, and detailed consultation support.",
    },
    {
      number: "03",
      title: "Booking & Documentation",
      icon: Wallet,
      desc: "Complete your booking with transparent pricing, legal clarity, and assistance for all required documentation.",
    },
    {
      number: "04",
      title: "Construction & Updates",
      icon: Building2,
      desc: "Secure your future home confidently while we ensure premium construction quality and timely progress updates.",
    },
    {
      number: "05",
      title: "Possession & Happiness",
      icon: KeyRound,
      desc: "Receive your keys with a seamless handover process and begin a new chapter in your dream home.",
      isFinal: true,
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#f57c00] tracking-[4px] sm:tracking-[6px] uppercase text-base sm:text-lg lg:text-xl font-semibold mb-3">
            OUR PROCESS
          </p>

          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-light text-[#1f2937] max-w-4xl mx-auto leading-tight">
            Turning Your Dream Into A{" "}
            <span className="text-[#f57c00]">Beautiful Reality</span>
          </h2>

          <p className="text-gray-600 mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-7 sm:leading-relaxed px-2">
            A transparent, customer-first process designed to make buying your dream home with AMR Living Spaces effortless and exciting.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop line */}
          <div className="hidden xl:block absolute top-20 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f57c00]/20 via-[#f57c00]/40 to-[#f57c00]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-6 relative">

            {process.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === process.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {/* Icon + Number */}
                  <div className="flex flex-col items-center xl:items-start mb-5 sm:mb-6 relative">

                    <div className="relative z-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center border border-[#f57c00]/10 group-hover:border-[#f57c00]/30 transition-all">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#f57c00]/10 flex items-center justify-center group-hover:bg-[#f57c00] transition-all duration-500">
                          <Icon
                            size={26}
                            className="text-[#f57c00] group-hover:text-white transition-all duration-500"
                          />
                        </div>
                      </div>

                      {/* Desktop dot */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-white border-4 border-[#f57c00] rounded-full hidden xl:block" />
                    </div>

                    <span className="mt-3 sm:mt-4 text-4xl sm:text-5xl font-light text-[#f57c00]/10 group-hover:text-[#f57c00]/20 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-[28px] shadow-xl border border-gray-100 
                      p-4 sm:p-5 md:p-6 lg:p-6 xl:p-9 
                      min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px] 
                      xl:h-[400px] 
                      hover:shadow-2xl transition-all duration-500 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#f57c00]/5 rounded-bl-[60px] group-hover:bg-[#f57c00]/10 transition-all" />

                    <h3 className="text-lg sm:text-[22px] font-medium text-[#1f2937] mb-4 sm:mb-5 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-[15px] leading-7 sm:leading-relaxed mb-6 sm:mb-8">
                      {item.desc}
                    </p>

                    {item.isFinal && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-medium rounded-full mb-5 sm:mb-6">
                        <CheckCircle size={16} />
                        Ready to Move In
                      </div>
                    )}

                    {!isLast && (
                      <div className="flex items-center gap-2 sm:gap-3 text-[#f57c00] font-medium group-hover:gap-4 transition-all duration-300 text-xs sm:text-sm">
                        Next Milestone
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition"
                        />
                      </div>
                    )}
                  </div>

                  {/* Mobile vertical line */}
                  {index !== process.length - 1 && (
                    <div className="xl:hidden absolute left-8 sm:left-10 top-20 sm:top-24 bottom-0 w-[3px] bg-[#f57c00]/30 -z-10" />
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 sm:mt-14 lg:mt-16 text-xs sm:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-2"
        >
          <div className="h-px w-8 sm:w-12 bg-gray-300" />
          100% Transparent • Zero Hidden Costs • Dedicated Relationship Manager
          <div className="h-px w-8 sm:w-12 bg-gray-300" />
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessSection;