import React from "react";
import envato from "../assets/envato.png";
import stars from "../assets/stars.png";
import matrix from "../assets/matrix.png";
import wordPress from "../assets/wordPress.png";

const Rating = () => {
  return (
    <div className="w-full flex flex-col bg-[#0E0F1A] py-8 ">
      <h5 className="text-white text-lg text-center pb-10 md:text-2xl">
        Trusted by thousands of users around the world
      </h5>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-36">
        <div className="flex items-center justify-center gap-4">
          <div className="">
            <img src={envato} alt="envato" />
          </div>
          <div>
            <img src={stars} alt="5-star-rating" />
            <h6 className="text-gray-400">4.5 Stars, 9 Reviews </h6>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="">
            <img src={matrix} alt="envato" />
          </div>
          <div>
            <img src={stars} alt="5-star-rating" />
            <h6 className="text-gray-400">4.5 Stars, 9 Reviews </h6>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="">
            <img src={wordPress} alt="envato" />
          </div>
          <div>
            <img src={stars} alt="5-star-rating" />
            <h6 className="text-gray-400">4.5 Stars, 9 Reviews </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
