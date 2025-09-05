import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDumbbell, FaUserCheck, FaClipboardList, FaTags } from "react-icons/fa";

const Aboutus = () => {

  const features = [
    {
      icon: <FaUserCheck className="text-[#E50914] text-2xl md:text-6xl mt-1" />,
      title: "Certified Trainers",
      desc: "Expert guidance to ensure you’re on the right track."
    },
    {
      icon: <FaDumbbell className="text-[#E50914] text-2xl md:text-6xl mt-1" />,
      title: "Modern Equipment",
      desc: "State-of-the-art machines for every workout need."
    },
    {
      icon: <FaClipboardList className="text-[#E50914] text-2xl md:text-4xl mt-1" />,
      title: "Personalized Plans",
      desc: "Tailored fitness journeys to match your goals."
    },
    {
      icon: <FaTags className="text-[#E50914] text-2xl md:text-6xl mt-1" />,
      title: "Affordable Pricing",
      desc: "Premium fitness experiences without the premium price."
    }
  ];


  const { ref: imgRef, inView: imgInView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  return ( 
    <section className="relative w-full min-h-screen flex items-center justify-center ">
      
      <img
        src="https://res.cloudinary.com/db0wuel0k/image/upload/v1756924435/about_bg_edityk.png"
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 px-6 md:px-15 py-16 max-w-6xl">

        <div className="flex-shrink-0">
          <motion.img
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.5, x: -100 }}
            animate={imgInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            src="https://res.cloudinary.com/db0wuel0k/image/upload/v1756924438/trainer_g5lpts.jpg"
            className="hidden lg:block rounded-2xl shadow-lg md:max-w-lg md:mt-10"
          />
        </div>

        <div className="text-center md:text-left text-white">
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6"
          >
            {"Why Choose Us?".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.05, delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            ref={headingRef}
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-gray-200 mb-10 max-w-xl">
            {"At My-Fit Gym, we’re dedicated to providing a supportive and effective environment for your fitness goals. Our commitment to excellence ensures you have the tools and guidance needed to succeed.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.05, delay: 1 + i * 0.05 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>


              {/* features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mx-20 md:mx-0">
            {features.map((f, i) => (
              <motion.div
                key={i}
                ref={headingRef}
                className="flex items-start gap-3"
                initial={{ opacity: 0, scale:0 }}
                animate={headingInView ?{ opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 2 + i * 0.2 }}
                viewport={{ once: true }}
              >
                {f.icon}
                <div>
                  <h4 className="font-semibold text-lg">{f.title}</h4>
                  <p className="text-sm text-gray-300">{f.desc}</p>
                </div>
              </motion.div>

            ))}
          </div>

          <div className='mt-4 text-right'>
            <a href="" className='text-[#ea6a70]  hover:underline hover:text-[#f02933]'>More About Us →</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Aboutus
