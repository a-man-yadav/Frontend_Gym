import React from 'react'
import { motion } from "motion/react" 

const Hero = () => {
    return (
        <motion.section className="relative w-full h-screen flex items-center justify-center">
            <img
                src='https://res.cloudinary.com/db0wuel0k/image/upload/v1756897117/background-min_wxrw6x.png'
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            {/* <div className="absolute bottom-0 left-0 w-full h-11 bg-gradient-to-t from-black to-red-300 blur-md"></div> */}


            <div className="relative z-10 text-center md:text-left max-w-3xl px-6">
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.1
                    }}
                    className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg ml-10">
                    <motion.span
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.1
                    }}>Push Past Limits,</motion.span> 
                    <br />
                    <motion.span
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5
                    }}
                    > Awake the Beast</motion.span>
                </motion.h1>
                <motion.p 
                initial={{opacity:0, x:200}}
                animate={{opacity:1, x:0}}
                transition={{
                    duration: 0.5,
                    delay:1.0
                }}
                className="mt-4 text-lg text-gray-300 font-body ml-10 drop-shadow">
                    Join My-Fit Gym today and start your journey towards a stronger,
                    healthier, and more confident you.
                </motion.p>

                <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center ml-10 md:justify-start">
                    <motion.button
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        duration:0.5,
                        delay:1,
                        ease:"easeIn"
                    }}
                    className="px-8 py-3 bg-[#E50914] hover:bg-[#b20710] text-white rounded-lg font-heading text-lg shadow-md transition">
                        Get Started
                    </motion.button>
                    <motion.button
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        duration:0.5,
                        delay:1,
                        ease:"easeIn"
                    }}
                    className="px-8 py-3 border-2 border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white rounded-lg font-heading text-lg shadow-md transition">
                        Learn More
                    </motion.button>
                </div>
            </div>

        </motion.section>
    )
}

export default Hero
