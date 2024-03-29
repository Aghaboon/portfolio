"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WorkExperience = () => {
    const bineyes = ['Bineyes', 'June 2023 – August 2023'];
    const achievements = [
        'Contributed to creating a prototype design for a web application.',
        'Developed the front-end of the web application and documented the software.',
        'Followed Agile-Scrum software development methodology.',
        'Utilized: Figma, HTML, CSS, JavaScript, Django, Jira.',
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
                <div>
                    <h2 className='text-2xl lg:text-3xl leading-normal '>Front-end Developer | Intern</h2>
                    <p className='text-lg pb-2 leading-relaxed'>Bineyes | June 2023 – August 2023</p>
                    <article>
                        {Array.isArray(achievements) && renderList(achievements, 'list-disc list-inside text-lg lg:text-xl leading-relaxed ps-9 pb-1')}
                    </article>
                </div>
            </div>
        </section>

    );
};

export default WorkExperience;
