import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose AMR Living Spaces for your dream home?",
      answer:
        "AMR Living Spaces is committed to delivering premium homes with modern architecture, vastu-friendly planning, quality construction, and customer-first service. We focus on creating communities that offer comfort, convenience, and long-term value.",
    },
    {
      question: "Where are AMR Living Spaces projects located?",
      answer:
        "Our projects are strategically located in prime growth corridors with excellent connectivity to schools, hospitals, workplaces, shopping hubs, and transport facilities, ensuring a better lifestyle for homeowners.",
    },
    {
      question: "Do you provide home loan assistance?",
      answer:
        "Yes, we assist customers with home loan guidance through leading banks and financial institutions, helping make the buying process smooth and stress-free.",
    },
    {
      question: "Are AMR projects approved and legally clear?",
      answer:
        "Absolutely. All our developments follow regulatory guidelines and come with clear documentation, approvals, and transparency to give buyers complete confidence.",
    },
    {
      question: "How can I schedule a site visit?",
      answer:
        "You can easily schedule a site visit by contacting our sales team through phone, WhatsApp, or website inquiry form. Our team will arrange a convenient time for you.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-[#f57c00] tracking-[4px] sm:tracking-[7px] uppercase text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">
            FAQ'S
          </p>

          <h2 className="text-[28px] sm:text-[32px] md:text-[35px] font-medium text-[#1f2937] leading-tight">
            Home Planning FAQ'S
          </h2>

          <p className="text-gray-500 mt-4 sm:mt-5 text-[15px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto leading-7 sm:leading-8 px-2">
            Everything you need to know about AMR Living Spaces and your future dream home.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start sm:items-center justify-between gap-4 text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#1f2937] leading-7 pr-2 sm:pr-6">
                    {faq.question}
                  </h3>

                  <span className="text-[#f57c00] shrink-0 mt-1 sm:mt-0">
                    {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 text-gray-500 leading-7 sm:leading-8 text-[14px] sm:text-[15px] md:text-[16px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;