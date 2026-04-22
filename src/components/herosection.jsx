import React from "react";
import Realestate from "../assets/realestate.mp4";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[420px] sm:min-h-[500px] md:min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={Realestate}
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 backdrop-blur-[0px]"></div>

    </section>
  );
};

export default HeroSection;