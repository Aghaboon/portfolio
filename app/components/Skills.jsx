"use client";

import React, { useState } from "react";
import { Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Typography, 
    ThemeProvider, 
    createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from "framer-motion";

const Skills = () => {
    const skillsList = [
        {
            id: "programmingLanguages",
            title: "Programming Languages",
            content: ['Java', 'Python', 'JavaScript', 'SQL']
        },
        {
            id: "WebDevelopment",
            title: "Web Development",
            content: ['Next JS', 'React JS', 'Node.js', 'HTML', 'CSS']
        },
        {
            id: "TechnologiesTools",
            title: "Technologies Tools",
            content: ['GitHub', 'Jira', 'Lucidchart', 'Express', 'Sprint Boot', 'Swing', 'Tkinter']
        },
        {
            id: "SoftSkills",
            title: "Soft Skills",
            content: ['Problem-Solving', 'Teamwork', 'Communication']
        },
        {
            id: "Languages",
            title: "Languages",
            content: ['Fluent in Arabic', 'Good in English']
        },
    ];

    const [expanded, setExpanded] = useState(false);

    const handleExpansion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const darkTheme = createTheme({
        palette: {
            mode: 'dark', 
        },
    });

    return (
        <section id="skills" className='pt-20'>
            <ThemeProvider theme={darkTheme}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
            >
                <div className="conText flex flex-col justify-center items-center">
                    <h1 className='text-center text-4xl font-bold text-white mt-4 pb-6 mb-8 md:mb-6 md:mt-10'>
                        Skills
                    </h1>

                    {skillsList.map((skill) => (
                        <Accordion
                            expanded={expanded === skill.id}
                            onChange={handleExpansion(skill.id)}
                            sx={{
                                '& .MuiAccordionDetails-root': { display: expanded === skill.id ? 'block' : 'none' },
                            }}
                            key={skill.id}
                            className=" w-full"
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${skill.id}-content`} id={`${skill.id}-header`}>
                                <Typography className="text-left text-2xl font-samibold">{skill.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {skill.content.map((item, index) => (
                                    <ul className="ps-8">
                                        <li
                                            key={index}
                                            className=" list-disc text-lg">
                                            {item}
                                        </li>
                                    </ul>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </motion.div>
        </ThemeProvider>
        </section>
        
    );
};

export default Skills;
