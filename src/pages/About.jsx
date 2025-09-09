import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useInView } from 'framer-motion'

const About = () => {

  const {ref, inView} = useInView({
    threshold:0.1,
    triggerOnce: true,
  })

  const members = [
    {
      name: "Sarah M.",
      img: "https://via.placeholder.com/48",
      feedback:
        "Lost 8 kg in 12 weeks—without crash diets. The personal trainers at My-fit are incredibly knowledgeable and supportive.",
    },
    {
      name: "David L.",
      img: "https://via.placeholder.com/48",
      feedback:
        "Personal training fixed my form and boosted my confidence. I'm stronger than I've ever been, and I owe it all to this gym.",
    },
    {
      name: "Emily R.",
      img: "https://via.placeholder.com/48",
      feedback:
        "The group classes are so much fun and they keep me consistent. The community here is just amazing and so motivating!",
    },
  ];


  const facilities = [
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091590/gym-with-indoor-cycling-equipment-min_umsykn.jpg",
      heading: "Modern Equipment",
      description: "Top-tier cardio and strength machines."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091419/For-4k-stills.00_00_01_05.Still002-scaled_lqbh73.jpg",
      heading: "Strength Zone",
      description: "Dedicated area for heavy lifting."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091406/5-Steps-to-Create-a-Functional-Training-Space-for-Your-Commercial-Gym_toxvyi.jpg",
      heading: "Functional Area",
      description: "Space for dynamic, real-world training."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091591/interior-design-yoga-space-min_rorhkw.jpg",
      heading: "Yoga Studio",
      description: "A calm space for mind and body."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091407/destination-sports-nutrition-warje-malwadi-warje-pune-protein-supplement-dealers-bd3fw6ubeb_bs6tqv.webp",
      heading: "Nutrition Shop",
      description: "Expert guidance to fuel your body."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091591/indian-man-doing-excercisses-special-equipment-gym-with-personal-trainer-min_alycsk.jpg",
      heading: "Personal Training",
      description: "One-on-one focused sessions."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091592/top-view-wall-clock-still-life-min_v27sjb.jpg",
      heading: "Flexible Timings",
      description: "Open early, close late for your schedule."
    },
    {
      img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757091596/locker-train-station-min_ufgzgc.jpg",
      heading: "Clean Lockers",
      description: "Pristine showers and changing rooms."
    },
  ]

  return (
    <div>
      <Navbar />
      {/* TOP PART */}
      <section className='relative w-full min-h-screen flex items-center '>
        <img src="https://res.cloudinary.com/db0wuel0k/image/upload/v1757084651/about__bg_xjhxqq.jpg"
          className=' absolute inset-0 h-screen w-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='absolute inset-0 bg-black/60'></div>

        <div className='relative z-10 text-white text-left flex ml-10 mb-10 '>


          <div className='mt-16 pt-10'>

            <h3 className='text-gray-400'>About MY_FIT Gym</h3>
            <motion.h1
            initial={{opacity:0, x:-40}}
            animate={{opacity:1, x:0}}
            transition={{duration:1, delay:0.1, ease: "easeOut"}}
            className='text-4xl md:text-7xl font-bold '>Transforming Fitness,
              <br />
              One Member at a Time
            </motion.h1>
            <motion.p
            initial={{opacity:0, x:100}}
            animate={{opacity:1, x:0}}
            transition={{duration:1,
              delay:0.3,
              ease: "easeOut"}}
            className='mt-4 text-sm md:text-xl text-gray-300'>
              Our mission is to empower you to reach your full potential through world-class coaching and a motivating community.

            </motion.p>

            <motion.button
              ref={ref}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeIn"
              }}
              className="px-8 py-3 bg-[#E50914] hover:bg-[#b20710] text-white rounded-xl font-heading text-lg shadow-md transition mt-10 hover:cursor-pointer">
              Join Now
            </motion.button>

          </div>
          <motion.img
          ref={ref}

          initial={{opacity:0, scale :0}}
          animate={{opacity:1, scale:1}}
          transition={{
            duration: 0.5
          }}
          src="https://res.cloudinary.com/db0wuel0k/image/upload/v1757086329/got_chovs6.jpg"
            className='hidden md:block h-[25%] w-[25%] rounded-xl ml-10 mr-20 shadow-2xl z-20 ' />
        </div>

      </section>

      {/* STORY PART */}
      <section className='relative w-full min-h-screen flex items-center'>
        <div className="flex items-center justify-center gap-20 w-full mx-auto px-20">
          <img src="https://res.cloudinary.com/db0wuel0k/image/upload/v1757086795/portrait-confident-thai-boxers-min_f6zvec.jpg"
            className='hidden md:block h-1/4 w-1/4 rounded-lg ' />

          <div>
            <h3 className='text-[#ee2731] text-3xl md:text-6xl font-bold mb-10'>Our Story</h3>
            <p className='text-gray-300 text-sm md:text-lg max-w-2xl'>My-fit Gym was born from a simple idea: to create a fitness sanctuary that combines cutting-edge equipment with a passionate community. We started in a small garage, driven by the desire to help people overcome the hurdles of traditional gyms. Today, we've grown, but our core mission remains the same: to provide an inspiring, supportive, and results-driven environment for everyone.</p>
            <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
              <motion.div className='text-center'>
                <h3 className='text-3xl md:text-5xl font-bold md:my-6 text-[#E50914]'>5+</h3>
                <p className='text-sm sm:text-base text-gray-300'>Years of experience</p>
              </motion.div>

              <motion.div className='text-center'>
                <h3 className='text-3xl md:text-5xl font-bold md:my-6 text-[#E50914]'>600+</h3>
                <p className='text-sm sm:text-base text-gray-300'>Overall Global Clients</p>
              </motion.div>

              <motion.div className='text-center'>
                <h3 className='text-3xl md:text-5xl font-bold md:my-6 text-[#E50914]'>90%</h3>
                <p className='text-sm sm:text-base text-gray-300'>Positive Review</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION PART */}
      <section className='bg-black/30 relative text-white w-full max-h-[50%]   items-center justify-center'>
        <h2 className='pt-20 text-white  text-center text-3xl md:text-4xl font-bold'>Mission & values</h2>
        <p className='pt-3 text-center text-gray-300 text-sm md:text-lg '>Our core values guide everything we do, ensuring every member receives the highest quality fitness experience.</p>

        <div className='grid grid-cols-3 mt-16 mx-16 gap-5 pb-20'>
          <div className='border-2 border-gray-800 rounded-3xl bg-black/40'>
            <h3 className='px-2  md:text-xl text-center font-semibold mt-10 font-sans'>Science-Backed Coaching</h3>
            <p className='text-gray-300 text-xs md:text-base text-center p-4 '>We use proven, data-driven methods to create personalized programs that deliver maximum results.</p>
          </div>
          <div className='border-2 border-gray-800 rounded-3xl bg-black/40'>
            <h3 className='px-2 md:text-xl text-center font-semibold mt-10 font-sans'>Community First</h3>
            <p className='text-gray-300 text-xs md:text-base text-center p-4 '>We foster a supportive, inclusive atmosphere where everyone feels welcome and motivated.</p>
          </div>
          <div className='border-2 border-gray-800 rounded-3xl bg-black/40'>
            <h3 className='md:text-xl text-center font-semibold mt-10 font-sans'>Sustainable Results</h3>
            <p className='text-gray-300 text-xs md:text-base text-center p-4 '>We focus on building healthy, long-term habits for a lifetime of fitness and well-being.</p>
          </div>
        </div>
      </section>

      {/* Facilities part */}
      <section className='relative w-full min-h-screen'>
        <h2 className='pt-20 text-white  text-center text-3xl md:text-4xl font-bold'>Facilities by Us</h2>
        <p className='pt-3 px-3 text-center text-gray-300 text-sm md:text-lg' >Explore our state-of-the-art facility, designed to cater to all your fitness needs.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-20 mt-10 pb-20">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="bg-black/40 border border-gray-700 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#E50914]/30"
            >
              <img
                src={facility.img}
                alt={facility.heading}
                className="w-full h-40 object-cover brightness-[0.75]"
              />

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {facility.heading}
                </h3>
                <p className="text-sm text-gray-400">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

{/* testemony part */}
      <section className="py-20 bg-black/30 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            What Our Members Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <div
                key={i}
                className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-6 shadow-lg hover:shadow-[#E50914]/20 transition-all duration-300 mx-4"
              >
                <p className="text-gray-300 italic leading-relaxed">
                  "{member.feedback}"
                </p>
                <div className="flex items-center mt-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <p className="ml-3 font-semibold">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* location part */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Facility
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg shadow-black/40">
              <img
                src="https://res.cloudinary.com/db0wuel0k/image/upload/v1757094559/3d-view-map_nt4sfw.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#151515] border border-[#2A2A2A] rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-white">My-fit Gym, Kanpur</h3>
              <p className="text-gray-400 mt-2">
                Kalyanpur, Kanpur
              </p>

              <div className="mt-4 space-y-2 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Hours:</span> Mon-Fri:
                  5am – 11pm, Sat-Sun: 7am – 9pm
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span> 111 111 1111
                </p>
              </div>

              <button className="inline-block mt-6 px-6 py-3 rounded-full border border-[#E50914] text-[#E50914] font-semibold transition-all duration-300 hover:bg-[#E50914] hover:text-white hover:scale-105">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

<Footer/>


    </div>
  )
}

export default About
