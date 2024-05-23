import React from "react";

const Footer = () => {
  return (
    <div className="w-full gradient-container  flex flex-col justify-between px-20 py-5">
      <p className="text-white">
        © 2023 Copywrite. All rights reserved by QodeMatrix
      </p>
      <div className="flex justify-between gap-3 text-gray-400">
        <p>Documentation</p>
        <p>Support</p>
      </div>
    </div>
  );
};

export default Footer;
