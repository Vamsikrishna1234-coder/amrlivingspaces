import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/realestate.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default HeroSection;