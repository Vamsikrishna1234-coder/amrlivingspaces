import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Download,
  PhoneCall,
  Mail,
  ArrowRight,
} from "lucide-react";
import img1 from "../assets/p1.jpg";

const FloatingActionBar = () => {
  const quickActions = [
    {
      label: "Book Site Visit",
      icon: CalendarDays,
      link: "/contact",
      desc: "Schedule a guided tour",
    },
    {
      label: "Download Brochure",
      icon: Download,
      link: "/brochure",
      desc: "Project details & pricing",
    },
    {
      label: "Call Now",
      icon: PhoneCall,
      link: "tel:+917338628777",
      desc: "Talk to our expert",
    },
    {
      label: "Email Us",
      icon: Mail,
      link: "mailto:info@amrlivingspaces.com",
      desc: "Get quick response",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${img1}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/30" />

      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:50px_50px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-[#f57c00] uppercase tracking-[4px] sm:tracking-[6px] text-sm sm:text-base font-bold mb-3">
            TAKE THE NEXT STEP
          </p>

          <h2 className="text-white text-[28px] sm:text-[38px] md:text-[46px] lg:text-[54px] font-light leading-tight">
            Ready to Make Your
            <br />
            Dream Home a Reality?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

          {quickActions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.a
                key={index}
                href={action.link}
                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true }}
                className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/20 hover:border-[#f57c00]/40 flex flex-col items-center text-center overflow-hidden transition-all duration-500 min-h-[250px]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f57c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#f57c00]/10 flex items-center justify-center mb-5 group-hover:bg-[#f57c00] transition-all duration-500">
                  <Icon
                    size={28}
                    className="text-[#f57c00] group-hover:text-white transition-all duration-500"
                  />
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-[#1f2937] text-lg sm:text-xl lg:text-2xl font-medium group-hover:text-[#f57c00] transition-colors duration-300 leading-snug">
                    {action.label}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    {action.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 opacity-40 group-hover:opacity-100 transition-all duration-300">
                  <ArrowRight
                    size={20}
                    className="text-[#f57c00] group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>
            );
          })}

        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 sm:mt-14 lg:mt-16 text-white/95 text-xs sm:text-sm tracking-wide leading-6 px-2"
        >
          Trusted by hundreds of families • Transparent Process • On-time Delivery
        </motion.div>

      </div>
    </section>
  );
};

export default FloatingActionBar;