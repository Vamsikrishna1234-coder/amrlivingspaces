import React from "react";
import { useNavigate } from "react-router-dom";
import buildingImg from "../assets/The Rise.jpg";

const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#E07B2A" strokeWidth="1.5" />
        <path
          d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
          stroke="#E07B2A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "12+",
    label: "YEARS",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 12L12 4l9 8"
          stroke="#E07B2A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9"
          stroke="#E07B2A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "15+",
    label: "PROJECTS",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="#E07B2A" strokeWidth="1.5" />
        <circle cx="17" cy="8" r="3" stroke="#E07B2A" strokeWidth="1.5" />
        <path
          d="M1 20c0-3.3 3.1-6 8-6"
          stroke="#E07B2A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M23 20c0-3.3-3.1-6-8-6"
          stroke="#E07B2A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "2K+",
    label: "FAMILIES",
  },
];

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Left Content */}
        <div className="flex-1 w-full order-2 lg:order-1">

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-[3px] sm:tracking-widest text-orange-500 uppercase mb-5 sm:mb-7 leading-snug">
            About AMR Living Spaces
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-[15px] md:text-[16px] leading-7 sm:leading-8 mb-8 sm:mb-10 text-justify">
            A dream all of us have is to own a home that we can proudly call our
            own. It is not an easy task. It will take plenteous time, hard work,
            and struggle to finally secure a place where you can be peaceful.
            Finding the perfect home is also time-consuming as it must match your
            dreams and aspirations. Our passion for nurturing a luxurious living
            atmosphere has motivated us to build Vakillu.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl py-4 px-4 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition"
              >
                <div>{stat.icon}</div>

                <span className="text-lg sm:text-xl font-bold text-gray-800">
                  {stat.value}
                </span>

                <span className="text-[10px] tracking-widest text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}

          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/about")}
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-[#c96a1e] transition-colors duration-200 text-white text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 rounded-md w-full sm:w-fit"
          >
            Discover Our Story

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-xl order-1 lg:order-2">
          <img
            src={buildingImg}
            loading="lazy"
            alt="Vakillu Homes Building"
            className="w-full h-[260px] sm:h-[360px] md:h-[430px] rounded-2xl object-cover shadow-md"
          />
        </div>

      </div>
    </section>
  );
}