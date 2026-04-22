import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import favicon from "../assets/tact favicon.png";

const Footer = () => {
  const links = [
    "Home",
    "About Us",
    "Projects",
    "Gallery",
    "Blog",
    "Contact",
  ];

  return (
    <footer className="relative bg-[#0b1020] text-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px] sm:[background-size:24px_24px]"></div>

      {/* Top CTA Strip */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

          <div>
            <p className="text-[#f57c00] tracking-[4px] sm:tracking-[5px] uppercase text-xs sm:text-sm mb-2">
              Let’s Build Together
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
              Ready to Own Your Dream Home?
            </h2>
          </div>

          <a
            href="#"
            className="group px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-[#f57c00] hover:bg-orange-500 transition flex items-center gap-3 font-medium text-sm sm:text-base"
          >
            Book Site Visit
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-14 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#f57c00] flex items-center justify-center text-xl sm:text-2xl font-bold">
                A
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-light leading-tight">
                  AMR Living Spaces
                </h3>

                <p className="text-white/40 text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase mt-1">
                  Real Estate
                </p>
              </div>
            </div>

            <p className="text-white/65 leading-7 sm:leading-8 text-sm sm:text-[15px]">
              Premium villas and modern communities crafted with quality,
              trust, and elegant living experiences.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-7 sm:mt-8">
              <Social><FaFacebookF /></Social>
              <Social><FaInstagram /></Social>
              <Social><FaLinkedinIn /></Social>
              <Social><FaYoutube /></Social>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <h4 className="text-[#f57c00] uppercase tracking-[4px] text-sm mb-6 sm:mb-7">
              Navigation
            </h4>

            <ul className="space-y-3 sm:space-y-4">
              {links.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/65 hover:text-white transition flex items-center gap-2 text-sm sm:text-base group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f57c00] group-hover:scale-125 transition"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: false }}
          >
            <h4 className="text-[#f57c00] uppercase tracking-[4px] text-sm mb-6 sm:mb-7">
              Contact Info
            </h4>

            <div className="space-y-5 sm:space-y-6 text-white/65 text-sm sm:text-[15px]">

              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#f57c00] mt-1 shrink-0" />

                <p className="leading-7">
                  Near Tv5, Above Natural,
                  <br />
                  Road No.1, Jubilee Hills,
                  <br />
                  Hyderabad - 500033
                </p>
              </div>

              <a
                href="tel:+917338628777"
                className="flex gap-3 hover:text-white transition break-all"
              >
                <Phone size={18} className="text-[#f57c00] shrink-0" />
                +91 73386 28777
              </a>

              <a
                href="mailto:info@amrlivingspaces.com"
                className="flex gap-3 hover:text-white transition break-all"
              >
                <Mail size={18} className="text-[#f57c00] shrink-0" />
                info@amrlivingspaces.com
              </a>

            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h4 className="text-[#f57c00] uppercase tracking-[4px] text-sm mb-6 sm:mb-7">
              Newsletter
            </h4>

            <p className="text-white/65 leading-7 text-sm sm:text-[15px] mb-5 sm:mb-6">
              Subscribe to receive project launches, offers, and latest updates.
            </p>

            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 h-12 sm:h-14">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent outline-none flex-1 text-sm placeholder:text-white/35 min-w-0"
              />

              <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f57c00] flex items-center justify-center hover:scale-105 transition shrink-0">
                <Send size={16} />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col lg:flex-row justify-between items-center gap-5 text-xs sm:text-sm text-white/45 text-center lg:text-left">

          <p>
            © {new Date().getFullYear()} AMR Living Spaces. All Rights Reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-2">
            Designed by

            <a
              href="https://www.tactadvertising.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <img
                src={favicon}
                alt="Tact Advertising"
                className="w-4 h-4 object-contain group-hover:scale-110 transition"
              />

              <span className="text-white/45 hover:text-orange-400 transition">
                Tact Advertising
              </span>
            </a>
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

const Social = ({ children }) => {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f57c00] hover:border-[#f57c00] transition duration-300 hover:-translate-y-1"
    >
      {children}
    </a>
  );
};

export default Footer;