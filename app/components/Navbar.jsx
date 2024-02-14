"use client";
import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Image from "next/image";


const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Education",
    path: "#education",
  },
  {
    title: "Work Experience",
    path: "#workExperience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Awards",
    path: "#awards",
  },
  {
    title: "ContactMe",
    path: "#contact",
  },

];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
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
        <div className="mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              id="close"
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path.slice(1)}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex flex-col py-4 items-center">
          {navLinks.map((link, index) => (
            <li key={index} >
              <ScrollLink
                to={link.path.slice(1)}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setNavbarOpen(false)}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
};

export default Navbar;
