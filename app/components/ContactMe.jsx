"use client";
import { FaPhoneSquareAlt, FaWhatsappSquare } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { motion } from "framer-motion";
// import { container, item } from "./animated";



const ContactMe = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
    }


    return (
        <section id="contact" className='pt-20 pb-20' >
            <h1 className='text-center text-3xl lg:text-4xl font-bold text-white mt-4 mb-8 md:mb-6 md:mt-10'>
                Contact Me
            </h1>
            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
            >

                <div className='contactCont flex justify-center items-center '>

                    <motion.div variants={container} initial="hidden" animate="show" className='bgCont Contactme flex  justify-between w-[70vw] py-3 px-4'>

                        <motion.div variants={item} className='icon flex flex-col justify-center items-center'>
                            <a href="tel:+966539743309" className=''>
                                <FaPhoneSquareAlt className='w-[40px] h-[40px] hover:text-blue-600' />
                            </a>
                        </motion.div>

                        <motion.div variants={item} className='icon flex flex-col justify-center items-center '>
                            <a href="https://wa.me/966539743309" target="_blank" rel="noopener noreferrer">
                                <FaWhatsappSquare className='w-[40px] h-[40px] hover:text-blue-600' />
                            </a>
                        </motion.div>

                        <motion.div variants={item} className='icon flex flex-col justify-center items-center '>
                            <a href='mailto:aghaboon@gmail.com'>
                                <AiFillMail className='w-[40px] h-[40px] hover:text-blue-600' />
                            </a>
                        </motion.div>

                        <motion.div variants={item} className='icon flex flex-col justify-center items-center'>
                            <a href='https://github.com/aghaboon' target="_blank" rel="noopener noreferrer">
                                <AiFillGithub className='w-[40px] h-[40px] hover:text-blue-600' />
                            </a>
                        </motion.div>

                        <motion.div variants={item} className='icon flex flex-col justify-center items-center'>
                            <a href='https://www.linkedin.com/in/aghaboon' target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className='w-[40px] h-[40px] hover:text-blue-600' />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>

    );
}

export default ContactMe;