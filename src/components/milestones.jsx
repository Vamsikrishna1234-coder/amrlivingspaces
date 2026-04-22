import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  MapPinned,
  ShieldCheck,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const MilestonesSection = () => {
  const stats = [
    {
      icon: <Building2 size={28} />,
      end: 12,
      suffix: "+",
      title: "Years Experience",
      desc: "Building premium communities with trust.",
    },
    {
      icon: <Users size={28} />,
      end: 500,
      suffix: "+",
      title: "Happy Families",
      desc: "Families proudly choosing AMR Living Spaces.",
    },
    {
      icon: <MapPinned size={28} />,
      end: 20,
      suffix: "+",
      title: "Prime Acres",
      desc: "Strategically located lands & communities.",
    },
    {
      icon: <ShieldCheck size={28} />,
      end: 100,
      suffix: "%",
      title: "Legal Clarity",
      desc: "Transparent and secure documentation.",
    },
    {
      icon: <Trophy size={28} />,
      end: 10,
      suffix: "+",
      title: "Projects Delivered",
      desc: "Successful developments completed.",
    },
    {
      icon: <ArrowUpRight size={28} />,
      end: 95,
      suffix: "%",
      title: "ROI Growth",
      desc: "Strong future appreciation potential.",
    },
  ];

  return (
    <section className="w-full bg-[#f8f6f3] py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="uppercase tracking-[3px] sm:tracking-[5px] font-semibold text-sm sm:text-base"
            style={{ color: "#f57c00" }}
          >
            Our Milestones
          </span>

          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-bold text-gray-900 mt-3 sm:mt-4 leading-tight">
            Growth &
            <span style={{ color: "#f57c00" }}> Success</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 leading-7 sm:leading-relaxed px-2">
            Trusted by families and investors through consistent excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-10 sm:mt-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white"
                style={{ backgroundColor: "#f57c00" }}
              >
                {item.icon}
              </div>

              {/* Number */}
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 sm:mt-6"
                style={{ color: "#f57c00" }}
              >
                <Counter end={item.end} suffix={item.suffix} />
              </h3>

              {/* Title */}
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mt-3 sm:mt-4 leading-snug">
                {item.title}
              </h4>

              {/* Desc */}
              <p className="text-gray-600 mt-3 sm:mt-4 leading-7 text-sm sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip */}
        <div
          className="mt-10 sm:mt-14 lg:mt-16 rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-10 text-center text-white shadow-xl"
          style={{ backgroundColor: "#f57c00" }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Every Number Tells Our Story
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-7">
            Building value, trust, and premium communities for a brighter future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MilestonesSection;