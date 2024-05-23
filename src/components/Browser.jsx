import React from "react";
import "../components/hero.css";
import browser from "../assets/browser.png";

const Browser = () => {
  return (
    <div className="text-center pt-8 w-full bg-[#0E0F1A] md:pt-20">
      <div className="card-bg mx-8 md:mx-36  rounded-3xl border-[#474764] border-2 p-6 flex flex-col gap-6 md:px-40 items-center">
        <h3 className="text-white text-xl font-semibold">
          Supported by All Popular Browser
        </h3>
        <p className="text-gray-400">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <img src={browser} alt="" className="md:w-[400px] " />
      </div>
    </div>
  );
};

export default Browser;
