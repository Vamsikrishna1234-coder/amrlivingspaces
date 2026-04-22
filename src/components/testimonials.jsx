import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramesh & Priya Kumar",
      project: "AMR Legacy Villas, Hyderabad",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      image2: "https://randomuser.me/api/portraits/women/44.jpg",
      text: `"Our villa at AMR Legacy Villas is more than a home — it is a lifestyle upgrade. The premium planning, peaceful surroundings, and timely delivery truly impressed us."`,
    },
    {
      id: 2,
      name: "Suresh & Kavya Reddy",
      project: "Vakillu, Hyderabad",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      image2: "https://randomuser.me/api/portraits/women/68.jpg",
      text: `"We were looking for comfort, trust, and quality. AMR Living Spaces gave us all three. The attention to detail and transparent process made everything stress free."`,
    },
    {
      id: 3,
      name: "Anil & Deepika Rao",
      project: "AMR Communities",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
      image2: "https://randomuser.me/api/portraits/women/33.jpg",
      text: `"Owning our dream home felt simple with AMR Living Spaces. The location, design, and overall value exceeded our expectations."`,
    },
    {
      id: 4,
      name: "Vikram & Ananya Singh",
      project: "AMR Legacy Villas, Hyderabad",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      image2: "https://randomuser.me/api/portraits/women/85.jpg",
      text: `"AMR Living Spaces made our home buying experience seamless. The quality of construction and the community vibe are outstanding."`,
    },
    {
      id: 5,
      name: "Rohit & Meera Sharma",
      project: "Vakillu, Hyderabad",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      image2: "https://randomuser.me/api/portraits/women/90.jpg",
      text: `"We are thrilled with our new home from AMR Living Spaces. The design, location, and customer service were all top-notch."`,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-[#f7f7f7] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-medium text-[#f57c00] leading-tight max-w-4xl mx-auto">
            Testimonials
          </h2>

          <h2 className="text-[26px] sm:text-[30px] md:text-[35px] font-medium text-[#1f2937] leading-tight px-2">
            Real Stories from Happy Homeowners
          </h2>
        </div>

        {/* Card */}
        <div className="relative">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55 }}
              className="bg-white rounded-[24px] sm:rounded-[28px] border border-gray-200 shadow-xl p-5 sm:p-8 md:p-10 lg:p-12"
            >
              {/* Top */}
              <div className="flex justify-between items-center gap-4 mb-6 sm:mb-8 lg:mb-10">

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#eab308"
                      className="text-yellow-500 sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]"
                    />
                  ))}
                </div>

                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>

              {/* Text */}
              <p className="text-[#1f2937] text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-8 sm:leading-9 lg:leading-10 mb-7 sm:mb-8 lg:mb-10">
                {testimonials[current].text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">

                <div className="flex -space-x-3 sm:-space-x-4">
                  <img
                    src={testimonials[current].image}
                    alt=""
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={testimonials[current].image2}
                    alt=""
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#1f2937] leading-snug">
                    {testimonials[current].name}
                  </h4>

                  <p className="text-gray-500 text-sm sm:text-base leading-snug">
                    {testimonials[current].project}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 mt-8 sm:mt-10 flex-wrap">

            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#f57c00] hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-6 bg-[#f57c00]"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-[#f57c00] hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;