import React from "react";
import light from "../assets/light.png";
import like from "../assets/like.png";
import moon from "../assets/moon.png";

const Features = () => {
  return (
    <div className="text-center pt-8 w-full bg-[#0E0F1A] md:pt-20 px-4">
      <div>
        <h3 className="text-2xl font-semibold md:text-5xl text-white ">
          An All-Round Plugin With Powerful Features
        </h3>
        <p className=" text-gray-400 py-4 md:px-40">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:py-12 px-6 ">
        <div className="card-bg rounded-3xl border-[#474764] border-2 flex flex-col items-start   ">
          <img src={light} alt="" />
          <h4 className="text-xl text-white font-semibold py-2 px-8">
            Light Weight
          </h4>
          <p className="text-gray-400 p-8">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>

        <div className="card-bg rounded-3xl border-[#474764] border-2 flex flex-col items-start ">
          <img src={like} alt="" />
          <h4 className="text-xl text-white font-semibold py-2 px-8">
            100% Responsive
          </h4>
          <p className="text-gray-400 p-8">
            Create a consistent visual experience across all devices.
          </p>
        </div>

        <div className="card-bg rounded-3xl border-[#474764] border-2 flex flex-col items-start  ">
          <img src={moon} alt="" />
          <h4 className="text-xl text-white font-semibold py-2 px-8">
            User Friendly Interface
          </h4>
          <p className="text-gray-400 p-8">
            Ensure a smooth experience for both applicants and adns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
