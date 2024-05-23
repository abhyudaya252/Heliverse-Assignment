import React from "react";
import "../components/hero.css";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-[#0E0F1A] px-4 ">
      <div className="w-full text-center  pt-28 ">
        <div className="md:absolute top-40 left-10">
          <h3 className=" text-gradient text-xl font-bold">
            Transform Your <br /> <span>Website</span>
          </h3>
          <h4 className="font-md text-white text-lg py-4">
            With Motion Art Effect
          </h4>
        </div>
        <div className="flex justify-center flex-col  ">
          <h1 className="text-2xl font-bold text-white md:text-6xl ">
            Attract Your <br></br> Visitors Attention <br></br> With Colorful
          </h1>
          <h2 className="text-white text-2xl font-bold py-4 md:text-5xl">
            <span className="text-gradient text-6xl">Motion Art Effect</span>
          </h2>
          <p className="text-gray-400 pt-8">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
