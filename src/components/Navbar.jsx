import React from "react";
import LogoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#0E0F1A] w-full h-[80px] flex items-center justify-between px-2 py-4 md:px-[60px]">
      <img
        src={LogoImg}
        alt="MotionArtEffect-logo"
        className="cursor-pointer"
      />
      <button className=" bg-white rounded-md font-medium py-4 px-10 hidden md:inline-block hover:bg-[#0E0F1A] hover:text-white hover:border-2 ">
        Purchase Now
      </button>
    </div>
  );
};

export default Navbar;
