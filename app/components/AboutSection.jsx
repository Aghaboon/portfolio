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
              {Space} I am software engineer with a deep passion for both front-end and back-end development.
              During my internship at Bineyes, I gained valuable experience in creating web prototypes and developing user interfaces, adhering to Agile-Scrum methodologies to ensure efficient project management.
            </p>
            <br />
            <p className=" leading-relaxed">
              {Space} Currently, I am pursuing a Bachelor's Degree in Software Engineering at Prince Mugrin University,
              where I have consistently excelled academically, earning accolades for my dedication to excellence.
            </p>
            <br />
            <p className=" leading-relaxed">
              {Space} Professionally, I am proficient in a range of programming languages and technologies, showing in skills section.
              My hands-on experience spans various projects, showcasing my ability to tackle diverse challenges.
            </p>
            <br />
            <p className=" leading-relaxed">
              {Space} Beyond my technical proficiency, I am an active member of esteemed student clubs such as the Google Developer Students Club and the Software Engineering Club.
              These involvements reflect my dedication to personal and professional growth within the software engineering field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
