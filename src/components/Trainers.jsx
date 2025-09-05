import React, { useState } from 'react'
import { motion } from "framer-motion";


const Trainers = () => {
    const [index, setIndex] = useState(0);

    const trainer = [
        {
            name: "David",
            speciality: "Strength Trainer",
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1756997543/t5_t9ir3x.jpg",
            description: "David is a certified strength coach with over 10 years of experience helping athletes and beginners build muscle and improve performance through personalized training programs."
        },
        {
            name: "Tim",
            speciality: "BodyBuilding Coach",
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1756997544/t1_pw1upg.jpg",
            description: "Tim specializes in bodybuilding and physique development, guiding clients through structured workouts and nutrition plans to achieve maximum muscle growth and definition."
        },
        {
            name: "Lana",
            speciality: "BodyBuilding Coach",
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1756997543/t4_bjyvsh.jpg",
            description: "Lana is a professional bodybuilding coach with a passion for empowering women in fitness, offering expert guidance on lifting techniques and balanced nutrition."
        },
        {
            name: "Lindsey",
            speciality: "Yoga Instructor",
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1756997542/t3_ydv4es.jpg",
            description: "Lindsey combines modern yoga practices with mindfulness techniques to help clients improve flexibility, reduce stress, and achieve balance in their overall fitness journey."
        },
        {
            name: "Adam",
            speciality: "Boxing Coach",
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1756997543/t2_ziodtb.jpg",
            description: "Adam is a former competitive boxer who brings intensity and focus to his training sessions, teaching proper form, discipline, and endurance through boxing workouts."
        }
    ];

    const prev = () => setIndex((index - 1 + trainer.length) % trainer.length);
    const next = () => setIndex((index + 1) % trainer.length);

    return (
        <section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'>
            <img
                src="https://res.cloudinary.com/db0wuel0k/image/upload/v1756997667/black-texture-background_b0qgb9.jpg"
                alt=""
                className='absolute inset-0 w-full h-full object-cover'
            />

            <div className="relative z-10 w-full max-w-5xl px-6">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-heading font-bold text-white mb-10 text-center"
                >
                    Meet Our Trainers
                </motion.h1>
                <div className="w-24 h-1 bg-[#E50914] mx-auto mb-12 rounded"></div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {trainer.map((train, i) => (
                            <div key={i} className="min-w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
                                <div className="flex-shrink-0">
                                    <img
                                        src={train.img}
                                        alt={train.name}
                                        className="w-64 h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="text-white max-w-xl text-center md:text-left">
                                    <h3 className="text-3xl font-semibold">{train.name}</h3>
                                    <h4 className="text-[#E50914] mb-4">{train.speciality}</h4>
                                    <p className="text-gray-300">{train.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 text-2xl transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 text-2xl transition"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Trainers
