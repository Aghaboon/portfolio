"use client";
import React, { useTransition, useState } from "react";


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const Space = '\u00A0\u00A0\u00A0\u00A0\u00A0';

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white pt-20' id="about">
      <div className=" gap-8 items-center py-6 px-4 ">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify leading-relaxed">
          {Space} I am software engineer with a deep passion for both front-end and back-end development.
            During my internship at Bineyes, I gained valuable experience in creating web prototypes and developing user interfaces, adhering to Agile-Scrum methodologies to ensure efficient project management.
            <br />
            {Space} Currently, I am pursuing a Bachelor's Degree in Software Engineering at Prince Mugrin University,
            where I have consistently excelled academically, earning accolades for my dedication to excellence.
            <br />
            {Space} Professionally, I am proficient in a range of programming languages and technologies, including HTML, CSS, JavaScript, and Python.
            My hands-on experience spans various projects, from web applications to chat rooms and puzzle-solving applications, showcasing my ability to tackle diverse challenges.
            <br />
            {Space} My commitment to continuous learning is evidenced by my certifications in JavaScript, CSS, HTML, and UI/UX design.
            Beyond my technical proficiency, I am an active member of esteemed student clubs such as the Google Developer Students Club and the Software Engineering Club.
            These involvements reflect my dedication to personal and professional growth within the software engineering field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
