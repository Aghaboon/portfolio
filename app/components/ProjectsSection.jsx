"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next JS Portfolio Website",
    description: "A web application that showcases my portfolio (New Version). Next JS, Next UI",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "A web application that showcases my portfolio (Old Version). React.JS, Next UI",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aghaboon/myproject.git",
    previewUrl: "https://aghaboon.vercel.app/",
  },
  {
    id: 3,
    title: "Generic E-commerce Platform (Car4Sale) (In Progress)",
    description: "A generic system that supports the Uberization model which can be customized to fit various systems. This project is customized to car platform.",
    image: "/images/projects/Capstone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gang-of-4/core.git",
    previewUrl: "/#projects",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className='pt-20'>
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-6 md:mt-10">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 leading-relaxed">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 leading-relaxed">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
