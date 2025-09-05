import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const Services = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const programs = [
        {
            title: "Muscle Building",
            img: 'https://res.cloudinary.com/db0wuel0k/image/upload/v1756924436/muscle_iftrap.jpg',
            description: "Custom program based on your body type"
        },
        {
            title: "Strength Building",
            img: 'https://res.cloudinary.com/db0wuel0k/image/upload/v1756924435/strength_fuaklo.jpg',
            description: "Increase your bench press, deadlifts and squats"
        },
        {
            title: "Weight Loss",
            img: 'https://res.cloudinary.com/db0wuel0k/image/upload/v1756924804/weight_p2drq4.jpg',
            description: "Weight loss programs to help you reach your goals"
        },
        {
            title: "Diet & Nutrition Plans",
            img: 'https://res.cloudinary.com/db0wuel0k/image/upload/v1756927765/diets_oajcvd.jpg',
            description: "Diets and nutitions plans based on your preferences "
        },
        {
            title: "Medical Fitness",
            img: 'https://res.cloudinary.com/db0wuel0k/image/upload/v1756924437/medical_bjcoml.jpg',
            description: "Programs for people with medical conditions and rehebilitation"
        },
        {
            title: "Community",
            img: 'https://res.cloudinary.com/db0wuel0k/image/upload/v1756924437/community_snyepk.jpg',
            description: "Building a community of like minded people"
        },
    ]

    return (
        <section className='relative w-full min-h-screen flex items-center justify-center'>
            <img
                src='https://res.cloudinary.com/db0wuel0k/image/upload/v1756928341/programs_bg_bjyn6m.jpg'
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>


            <div className='"relative z-10 flex flex-col items-center w-full max-w-6xl px-6'>
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                        duration: 1,
                    }}
                    className="relative z-10 text-4xl md:text-5xl font-heading font-bold text-white mb-12">
                    Programs & Services
                </motion.h1>

                <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-6'>
                    {programs.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={(i%3==0)?{opacity:0.2, x:-200}: (i%3==1)?{opacity:0.2, scale:0.2}: (i%3==2)?{opacity:0.2, x:200}:{} }
                            animate={(i%3==0 && inView)?{opacity:1, x:0}: (i%3==1 && inView)?{opacity:1, scale:1}: (i%3==2 && inView)?{opacity:1, x:0}: {opacity:0} }
                            transition={{
                                duration:1,
                                delay:0.2,
                                
                            }}
                    className='relative group rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200'
                        >
                    <img
                        src={p.img}
                        className='w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-70'
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-center'>
                        <h3 className='text-xl font-semibold text-white mb-2 transition-all duration-500 group-hover:-translate-y-4'>
                            {p.title}
                        </h3>
                        <p className='text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            {p.description}
                        </p>
                    </div>
                </motion.div>
                    ))}
            </div>


        </div>
        </section >
    )
}

export default Services
