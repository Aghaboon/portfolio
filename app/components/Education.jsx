import React from 'react'

const university = [
    {
        title: "Bachelor’s Degree in Software Engineering",
        university: "Prince Mugrin University",
        graduation: "Expected Graduation: June 2024"
    }
]

const Education = () => {
    return (
        <section id='education' className='pt-20 text-white '>
            <div className='gap-8 items-center py-6 px-4 '>
            <h1 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-6 md:mt-10'>Education</h1>
            {university.map((item, index) => (
                <>
                <h2 className='text-3xl leading-relaxed'>{item.title}</h2>
                <ul className='list-disc list-inside text-xl ps-9 pb-1 leading-relaxed'>
                    <li>{item.university}</li>
                    <li>{item.graduation}</li>
                </ul>
                </>
            ))}
            {/* <ul>
        {universities.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong>
            <p>{item.university}</p>
            <p>{item.graduation}</p>
          </li>
        ))}
      </ul> */}
        </div>
        </section>
        
    )
}

export default Education