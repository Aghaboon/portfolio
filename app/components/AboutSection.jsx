"use client";
import React, { useTransition, useState } from "react";


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const Space = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white pt-20' id="about">
      <div className=" gap-8 items-center  px-4 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="text-base lg:text-lg text-left leading-loose">
            <p className=" leading-relaxed">
              {Space}
              Software engineer specializing in front-end development, with expertise in React.js and Next.js to create dynamic, responsive, and high-performance web applications.
              Adept at building scalable solutions and ensuring quality through manual and automated testing using Cypress.
              Passionate about continuous learning, innovative problem-solving, and delivering solutions that meet both business objectives and user needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
