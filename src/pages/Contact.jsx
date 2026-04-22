import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Send,
  Clock3,
} from "lucide-react";

const ContactPage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f8f8f8] py-24 sm:py-28 lg:py-30 px-4 sm:px-6 lg:px-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-10 left-0 sm:left-10 w-52 sm:w-72 h-52 sm:h-72 bg-[#f57c00]/10 blur-[120px] sm:blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-0 sm:right-10 w-52 sm:w-72 h-52 sm:h-72 bg-[#f57c00]/10 blur-[120px] sm:blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <p className="text-[#f57c00] uppercase tracking-[5px] sm:tracking-[7px] text-base sm:text-xl font-semibold mb-4">
            Contact Us
          </p>

          <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-medium text-[#1f2937] leading-tight">
            Let’s Build Your <span className="text-[#f57c00]">Dream Home</span>
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-[15px] sm:text-[16px] md:text-[18px] leading-7 sm:leading-8">
            Reach out to AMR Living Spaces for project details, site visits,
            pricing, or any inquiries. We’re here to help.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="space-y-6"
          >
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 lg:p-8 shadow-xl border border-gray-100">
              <h3 className="text-[24px] sm:text-[28px] font-medium text-[#1f2937] mb-6 sm:mb-8">
                Get In Touch
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <InfoCard
                  icon={<PhoneCall size={22} />}
                  title="Call Us"
                  text="+91 73386 28777"
                />

                <InfoCard
                  icon={<Mail size={22} />}
                  title="Email Address"
                  text="info@amrlivingspaces.com"
                />

                <InfoCard
                  icon={<MapPin size={22} />}
                  title="Office Address"
                  text="Hyderabad, Telangana, India"
                />

                <InfoCard
                  icon={<Clock3 size={22} />}
                  title="Working Hours"
                  text="Mon - Sun : 9:00 AM - 8:00 PM"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-white rounded-[24px] sm:rounded-[30px] p-5 sm:p-7 md:p-8 lg:p-5 shadow-2xl border border-gray-100"
          >
            <h3 className="text-[26px] sm:text-[30px] font-medium text-[#1f2937] mb-5 sm:mb-6">
              Send Message
            </h3>

            <form className="space-y-2 sm:space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <InputField
                  type="text"
                  placeholder="Your Name"
                />

                <InputField
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <InputField
                type="tel"
                placeholder="Phone Number"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full px-5 py-0 rounded-2xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#f57c00] transition resize-none text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                className="group w-full h-12 sm:h-14 rounded-full bg-[#f57c00] hover:bg-orange-500 text-white font-medium flex items-center justify-center gap-3 transition"
              >
                Send Inquiry
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* Input */
const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-11 sm:h-10 px-5 rounded-2xl border border-gray-200 bg-[#fafafa] outline-none focus:border-[#f57c00] transition text-sm sm:text-base"
    />
  );
};

/* Contact Card */
const InfoCard = ({ icon, title, text }) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-start group">
      <div className="w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] sm:min-w-[56px] rounded-2xl bg-[#f57c00]/10 text-[#f57c00] flex items-center justify-center group-hover:bg-[#f57c00] group-hover:text-white transition">
        {icon}
      </div>

      <div>
        <h4 className="text-[16px] sm:text-[18px] font-medium text-[#1f2937]">
          {title}
        </h4>

        <p className="text-gray-500 mt-1 leading-6 sm:leading-7 text-sm sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ContactPage;