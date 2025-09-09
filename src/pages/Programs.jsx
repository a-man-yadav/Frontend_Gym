import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { Outlet, useNavigate } from 'react-router-dom'

const Programs = () => {


  const navigate = useNavigate();

  return (


    <div>
      <Navbar />

      <section className="relative w-full h-96 overflow-hidden">
        <img
          src="https://res.cloudinary.com/db0wuel0k/image/upload/v1757135693/unnamed_fashym.png"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-7xl max-w-4xl font-bold mb-4">
            Explore Our Programs
          </h1>
          <p className="text-gray-300 text-base md:text-xl mt-2">
            Find the perfect plan to achieve your fitness goals.
          </p>
        </div>
      </section>
      {/* user programs */}

      <section className='relative w-full mt-10 p-5 items-center justify-center mb-10'>
        <div className='flex justify-between'>
          <h1 className='text-white text-xl md:text-2xl lg:text-4xl ml-16 font-bold uppercase'>User Programs</h1>
          <button
            onClick={() => navigate('/create')}
            className=' bg-[#E50914] text-white  px-7 mt-2 rounded-lg py-4 font-bold hover:bg-[#9b252b] hover:cursor-pointer'>Create Your Own Program</button>
        </div>
      </section>

      {/* Search bar */}
      <SearchBar />

      <Outlet />

      
    </div>
  )
}

export default Programs
