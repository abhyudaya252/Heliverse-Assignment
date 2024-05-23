import React from "react";
import page from "../assets/page.png";
import section from "../assets/section.png";

const Apply = () => {
  return (
    <div className="bg-[#0E0F1A] w-full md:px-40 py-4  ">
      <h2 className="md:text-5xl text-white font-semibold text-center leading-relaxed px-10 text-3xl md:mb-6 py-4">
        Apply On Any Section Or Enable <br /> For Whole Page
      </h2>
      <div className="flex flex-col md:flex-row w-full gap-4 px-10">
        <div className="card-bg flex flex-col items-start gap-6 p-8 md:h-[70vh] rounded-3xl border-[#474764] border-2 md-w-[40%]">
          <h3 className="text-white text-2xl font-semibold">
            Apply on Section
          </h3>
          <p className="text-gray-400">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img src={section} alt="" />
        </div>

        <div className="card-bg flex flex-col items-start gap-6 p-8 mt-20 md:h-[70vh] rounded-3xl border-[#474764] border-2">
          <h3 className="text-white text-2xl font-semibold">Apply On Page</h3>
          <p className="text-gray-400">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={section} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Apply;
