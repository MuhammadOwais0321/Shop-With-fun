import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="mt-8 border-t border-gray-800 bg-gray-950 p-6 text-center text-gray-500">
        <p className="text-sm flex justify-center items-center gap-1">
          &copy: 2025 WDMTech Labs. All Rights Reserved. | 
           <span className="font-semibold text-orange-700">
           Advanced E-commerce Simulation.
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
