import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import { Outlet } from 'react-router-dom'

const Programs = () => {
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

      {/* Search bar */}
      <SearchBar />

      <Outlet />
    </div>
  )
}

export default Programs
