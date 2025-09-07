import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Trainers from '../components/Trainers'
import { FiSearch } from 'react-icons/fi'

const Training = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalSrc, setModalSrc] = useState("")

    const openModal = (src) => {
        setModalSrc(src)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalSrc("")
        setModalOpen(false)
    }


    const exercises = [
        {
            id: 1,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757230792/curls1_tppy7t.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757230792/curls2_djlun7.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"

        },
        {
            id: 3,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757230791/bench_hvpovl.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 4,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757226748/1_lktzww.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 5,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757226748/2_rk5vrw.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 6,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757226748/3_aqgvwa.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 7,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unnamed_1_ynkmcm.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 8,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757230792/press_jqoft7.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 9,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757226748/2_rk5vrw.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 10,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757226748/3_aqgvwa.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 11,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757217231/unnamed_1_ynkmcm.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
        {
            id: 12,
            img: "https://res.cloudinary.com/db0wuel0k/image/upload/v1757230792/press_jqoft7.png",
            name: "Bicep Curls",
            muscle: "Biceps",
            duration: "1:40",
            video: "https://res.cloudinary.com/db0wuel0k/video/upload/v1757232132/6547796-uhd_2160_3840_24fps_yuzvby.mp4"


        },
    ]

    return (
        <div>
            <Navbar />

            <section className="relative w-full h-96 overflow-hidden">
                <img
                    src="https://res.cloudinary.com/db0wuel0k/image/upload/v1757227814/backgound_Training_nhccgc.png"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 bg-gradient-to-b from-[#201e1e]/40 via-[#302b2b]/10 to-[#292424]/80"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h1 className="text-white text-4xl md:text-7xl max-w-4xl font-bold mb-4">
                        Master Your Form
                    </h1>
                    <p className="text-gray-300 text-base md:text-xl mt-2">
                        Watch expert demos and train the right way to achieve your peak performance.
                    </p>
                </div>
            </section>

            {/* search bar */}
            <div className=' flex justify-center mt-10 p-5 mx-28 rounded-lg bg-[#1b1818]'>
                <div className="flex items-center bg-[#080707] border-2 border-gray-600 px-4 py-2 rounded-lg  flex-1 min-w-[180px]">
                    <FiSearch className="text-gray-400 mr-3" />
                    <input
                        type="search"
                        placeholder="Search for Exercise..."
                        className="bg-transparent outline-none text-gray-200 placeholder-gray-500 w-full"
                    />
                </div>
                <button className='bg-[#E50914] ml-4 px-5 rounded-lg py-2 text-white hover:cursor-pointer hover:bg-[#b20710]'>Search</button>
            </div>

            <section className='py-16 text-white'>
                <h2 className='text-center text-3xl md:text-4xl font-bold mb-10'>All Exercises</h2>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16'>
                    {exercises.map((exercise) => (
                        <div key={exercise.id}
                            onClick={() => openModal(exercise.video)}
                            className='cursor-pointer bg-[#151515] rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition transform duration-300'
                        >

                            <div className='relative'>
                                <img src={exercise.img} className='w-full h-44 object-cover' />
                                <span className='absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md'>{exercise.duration}</span>
                            </div>

                            <div className='p-4'>
                                <h3 className='font-bold text-lg mb-2'>{exercise.name}</h3>
                                <div className='flex gap-2'>
                                    <span className='px-3 py-1 bg-gray-800 rounded-full border-2 border-gray-700
                                     text-xs'>{exercise.muscle}</span>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
                {modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/70" onClick={closeModal}></div>
                        <div className="relative z-10 w-[90%] md:w-3/4 lg:w-2/4 bg-black rounded-lg overflow-hidden">
                            <button onClick={closeModal} className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 text-white">
                                ✕
                            </button>
                            <video src={modalSrc} controls autoPlay className="w-full h-auto max-h-[80vh] bg-black" />
                        </div>
                    </div>
                )}
            </section>


        </div>
    )
}

export default Training
