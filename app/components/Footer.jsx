"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between">
      <ScrollLink
          to="home" // Add an id to your main content section and use it here
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-2xl md:text-5xl text-white font-semibold cursor-pointer"
        >
          <Image
            src="/images/mylogo.png"
            alt="logo image"
            width={100}
            height={100}
          />
        </ScrollLink>
        <p className="text-slate-600 p-6">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
