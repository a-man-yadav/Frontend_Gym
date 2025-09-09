import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Exercise = () => {

    const navigate = useNavigate() 

    const featured = [
        {
            id: 1,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        }
    ]

    const allPrograms = [
        {
            id: 1,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        },
        {
            id: 3,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        },
        {
            id: 4,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unname_autipp.png",
            title: "CARDIO BLAST",
            category: "Cardio",
            description: "High-intensity cardio to incinerate fat and boost endurance.",
            duration: "4 Weeks",
            level: "Intermediate"
        },
    ]

    return (
        <div>

            {/* featured programs part */}
            <section className='relative w-full mt-10 p-5 items-center justify-center mb-10'>
                <h1 className='text-white text-xl md:text-2xl lg:text-4xl ml-16 font-bold uppercase'>Featured Programs</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-16 text-white mt-8'>
                    {featured.map((p) => (
                        <div key={p.id} className='rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden bg-black/30' >
                            <div className='relative group'>
                                <img
                                    src={p.img}
                                    className='w-full h-56 object-cover group-hover:opacity-80 transition'
                                />

                                <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='px-6 py-2 border-2 border-[#E50914] text-white font-bold hover:bg-[#E50914] transition hover:cursor-pointer'>
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>

                            <div className='p-7'>

                                <div className='flex justify-between items-center '>
                                    <h2 className='font-extrabold  text-xl text-white'>{p.title}</h2>
                                    <span className='text-xs bg-[#5a1b1b] text-[#ff7d73] font-bold rounded-md px-3 py-1 uppercase'>{p.category}</span>
                                </div>


                                <p className='text-gray-300 text-sm mb-4'>
                                    {p.description}
                                </p>


                                <div className='flex justify-between text-sm'>
                                    <p className='text-white font-semibold'>Duration: <span className='text-gray-400'>{p.duration}</span></p>
                                    <p className='text-white font-semibold'>Level: <span className='text-gray-400'>{p.level}</span></p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <p className='text-white text-right mt-2 mr-20 hover:text-[#E50914] hover:underline hover:cursor-pointer hover:-translate-y-1'>More Programs By Us →</p>

            </section>


            {/* all programs part */}
            <section className='relative w-full mt-10 p-5 items-center justify-center mb-10'>
                <h1 className='text-white text-xl md:text-2xl lg:text-4xl ml-16 font-bold uppercase'>All Programs</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mx-16 text-white mt-8'>
                    {allPrograms.map((p) => (
                        <div key={p.id} className='rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden bg-black/30' >
                            <img
                                src={p.img}
                                className='w-full h-36 object-cover group-hover:opacity-80 transition'
                            />


                            <div className='p-5'>

                                <div className='flex justify-between items-center '>
                                    <h2 className='font-extrabold  text-xl text-white'>{p.title}</h2>
                                    <span className='text-xs bg-[#5a1b1b] text-[#ff7d73] font-bold rounded-md px-3 py-1 uppercase'>{p.category}</span>
                                </div>


                                <p className='text-gray-300 text-xs mt-1 mb-4'>
                                    {p.description}
                                </p>


                                <div className='flex justify-between text-sm'>
                                    <p className='text-white text-sm'>Duration: <span className='text-gray-400 text-xs'>{p.duration}</span></p>
                                    <p className='text-white text-sm'>Level: <span className='text-gray-400 text-xs'>{p.level}</span></p>
                                </div>

                                <button className='w-full bg-[#E50914] mt-2 rounded-md py-2 font-bold hover:bg-[#9b252b] hover:cursor-pointer'>View Details</button>

                            </div>
                        </div>
                    ))}
                </div>

                <p className='text-white text-right mt-2 mr-20 hover:text-[#E50914] hover:underline hover:cursor-pointer hover:-translate-y-1'>More Programs By Us →</p>

            </section>

           



            {/* Footer part */}
            <footer className="w-full bg-black/50 text-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="pt-16 pb-10 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Start Your Fitness Journey Today
                        </h2>
                        <p className='text-gray-400 pt-1'>Stop waiting. The best time to start was yesterday. The next best time is now.Join our community and transform your life.

                        </p>
                    
                    </div>

                    <div className="border-t border-gray-800" />

                    <div className="py-10 grid grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm md:text-lg md:font-semibold mb-2">My-Fit Gym</h3>
                            <p className="text-xs md:text-lg text-gray-300">123 Fitness , Workout City</p>
                            <a href="" className="block text-xs md:text-sm text-gray-300 mt-2">
                                contact@myfitgym.com
                            </a>
                        </div>

                        <div className="text-center md:text-left md:pl-6">
                            <h3 className="text-sm md:text-lg md:font-semibold mb-2">Quick Links</h3>
                            <ul className="text-xs md:text-sm text-gray-300 space-y-2">
                                <li><a href="" className="hover:text-white">FAQ</a></li>
                                <li><a href="" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="" className="hover:text-white">Terms of Service</a></li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start md:items-end">
                            <h3 className="text-sm md:text-lg md:font-semibold mb-2">Follow Us</h3>
                            <div className="flex text-xs md:text-lg gap-4 mt-2">
                                <a href="" className="p-2 bg-white/6 rounded-full hover:bg-white/10">
                                    <FaInstagram />
                                </a>
                                <a href="" className="p-2 bg-white/6 rounded-full hover:bg-white/10">
                                    <FaTwitter />
                                </a>
                                <a href="" className="p-2 bg-white/6 rounded-full hover:bg-white/10">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800" />

                    <div className="py-6 text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} My-Fit Gym. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Exercise
