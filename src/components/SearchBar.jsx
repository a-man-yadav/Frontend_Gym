import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import {useNavigate, useLocation} from 'react-router-dom'

const SearchBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [activeFilter, setActiveFilter] = useState("Exercise")

    useEffect(() => {
        if(location.pathname.includes("/programs/diet")) {
            setActiveFilter("Diet")
        } else {
            setActiveFilter("Exercise")
        }
    }, [location.pathname])

    return (
        <div className="w-full flex justify-center mt-8 ">
            <div className="w-full max-w-6xl bg-[#0f0f10] rounded-2xl p-5 shadow-lg border border-[#262626] flex flex-wrap items-center gap-3">
                <div className="flex items-center bg-[#121212] rounded-lg px-3 py-2 flex-1 min-w-[180px]">
                    <FiSearch className="text-gray-400 mr-3" />
                    <input
                        type="search"
                        aria-label="Search programs"
                        placeholder="Search program name or keyword..."
                        className="bg-transparent outline-none text-gray-200 placeholder-gray-500 w-full"
                    />
                </div>

                

                {/* Toggles */}
                <div className="ml-auto flex gap-2 relative overflow-hidden rounded-lg">
                    <div
                        className={`absolute h-full w-1/2 bg-[#E50914] rounded-lg transition-transform duration-300 ease-in-out`}
                        style={{
                            transform:
                                activeFilter === "Exercise" ? "translateX(0%)" : "translateX(100%)",
                        }} 
                    />
                    <button
                        onClick={() => navigate("/programs")}
                        className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-300 ${activeFilter === "Exercise" ? "text-white" : "text-gray-300"
                            }`}
                        type="button"
                    >
                        Exercise
                    </button>

                    <button 
                        onClick={() => navigate("/programs/diets")}
                        className={`relative z-10 px-6 py-2 font-semibold transition-colors duration-300 ${activeFilter === "Diet" ? "text-white" : "text-gray-300"
                            }`}
                        type="button"
                    >
                        Diet
                    </button>
                </div>

            </div>
        </div>
        
    )
}

export default SearchBar
