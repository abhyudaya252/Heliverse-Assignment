import React from "react";
import magic from "../assets/magic.png";
import "../components/hero.css";
import { FaArrowRight } from "react-icons/fa";

const Purchase = () => {
  return (
    <div className="bg-[#0E0F1A] w-full flex-wrap flex-col flex items-center justify-between px-4  md:px-[80px] py-20  md:flex-row">
      <div className="text-left flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold py-8">
          Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
          Visitors
        </h2>
        <p className="text-gray-400 ">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse <br /> your website with visually stunning
          motion art elements.
        </p>
        <button className="gradient-container px-10 py-2 text-xl text-white rounded-xl my-8 flex items-center gap-2">
          Purchase from Envato <FaArrowRight />
        </button>
      </div>
      <div className=" py-10 ">
        <img src={magic} alt="" />
      </div>
    </div>
  );
};

export default Purchase;
