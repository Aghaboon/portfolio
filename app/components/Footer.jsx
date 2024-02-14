import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 flex justify-between">
        <Image
          src="/images/mylogo.png"
          alt="logo image"
          //className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={100}
          height={100}
        />
        <p className="text-slate-600 p-6">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
