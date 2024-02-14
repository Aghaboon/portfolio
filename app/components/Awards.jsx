import React from 'react';

const awards = [
    {
        content: [
            "Awarded the Prince Faisal bin Abdulaziz Award for Academic Excellence in the preparatory year (2020 / 2021).",
            "Winner of the UPM Programming Competition Award in Third Place."
        ]
    }
];

const Awards = () => {
    return (
        <section id='awards' className='pt-20'>
            <div className='gap-8 items-center px-4'>
                <h1 className='text-center text-3xl lg:text-4xl font-bold text-white mt-4 mb-8 md:mb-6 md:mt-10'>
                    Awards
                </h1>
                {awards.map((item, index) => (
                    <ul key={index} className='list-disc list-inside text-lg lg:text-xl text-left leading-relaxed'>
                        {item.content.map((award, i) => (
                            <li key={i}>{award}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
};

export default Awards;
