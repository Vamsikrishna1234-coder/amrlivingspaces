import React, { useState } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="shrink-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-gray-800 leading-tight">
              AMR{" "}
              <span className="text-orange-500 font-bold">
                LIVING SPACES
              </span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-7 text-gray-700 font-medium">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative hover:text-orange-500 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="px-5 h-11 rounded-full border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white transition font-medium">
              Download Brochure
            </button>

            <a
              href="tel:+917338628777"
              className="flex items-center gap-2 text-orange-500 font-medium"
            >
              <Phone size={18} />
              <span>+91 7338628777</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 w-full px-4 pt-3"
            >
              <div className="bg-white rounded-[28px] shadow-2xl border border-gray-100 overflow-hidden">

                {/* Header */}
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                  <p className="text-sm tracking-[4px] uppercase text-orange-500 font-semibold">
                    Menu
                  </p>

                  {/* Cross Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Links */}
                <div className="p-3">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-4 py-4 rounded-2xl text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition group"
                      >
                        <span className="font-medium">{item.name}</span>

                        <ChevronRight
                          size={18}
                          className="group-hover:translate-x-1 transition"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="p-4 border-t border-gray-100 space-y-3">

                  <button className="w-full h-12 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                    Download Brochure
                  </button>

                  <a
                    href="tel:+917338628777"
                    className="w-full h-12 rounded-full border border-orange-200 text-orange-500 font-medium flex items-center justify-center gap-2 hover:bg-orange-50 transition"
                  >
                    <Phone size={18} />
                    +91 7338628777
                  </a>

                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}