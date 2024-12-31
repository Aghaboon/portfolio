"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WorkExperience = () => {
    const experiences = [
        {
            role: 'Admission and Registration Officer',
            type: 'Part-time',
            company: 'University of Prince Mugrin, Deanship of Admission and Registration – Madinah (On-Site)',
            duration: 'Jul 2024 - Present',
            achievements: [
                'Supervised students employed under the university\'s student employment program.',
                'Reviewed and advised students on academic study plans, enrolling them in courses.',
                'Contributed to processing student applicants’ files and completing their admission procedures.',
                'Assisted in the preparation and delivery of graduation certificates to graduates.'
            ],
        },
        {
            role: 'Software Engineer',
            type: 'Part-time',
            company: 'Rekaz – Riyadh (Remote)',
            duration: 'August 2024 – Dec 2024',
            achievements: [
                'Contributed to developing new components for the web builder using React.js, enhancing the user experience.',
                'Created detailed test cases to ensure features met both business and technical requirements.',
                'Conducted manual and automated testing using Cypress to ensure the system runs smoothly and all features function properly.',
                'Identified and tracked bugs during development, documenting them in Notion for the development team to address and resolve promptly.'
            ],
        },
        {
            role: 'Front-end Developer | Intern',
            type: 'Intern',
            company: 'Bineyes',
            duration: 'June 2023 – August 2023',
            achievements: [
                'Contributed to creating a prototype design for a web application.',
                'Developed the front-end of the web application and documented the software.',
                'Followed Agile-Scrum software development methodology.',
                'Utilized: Figma, HTML, CSS, JavaScript, Django, Jira.'
            ],
        },
    ];

    const renderList = (items, className) => (
        <ul className={className}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id='workExperience' className='pt-20'>
            <div className='flex flex-col px-4' id='WorkExperience'>
                <h1 className='text-center text-3xl lg:text-4xl font-bold text-white mt-4 mb-8 md:mb-6 md:mt-10'>
                    Work Experiences
                </h1>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial="initial"
                        animate={isInView ? 'animate' : 'initial'}
                        variants={cardVariants}
                        ref={ref}
                        className="mb-10"
                    >
                        <h2 className='text-2xl lg:text-3xl leading-normal'>{exp.role} | {exp.type} </h2>
                        <p className='text-lg pb-2 leading-relaxed'>{exp.company} | {exp.duration}</p>
                        <article>
                            {renderList(exp.achievements, 'list-disc list-inside text-lg lg:text-xl leading-relaxed ps-9 pb-1')}
                        </article>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
