import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    // const navigate = useNavigate()

    const items = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "About Us", path: "/about" },
        { id: 3, text: "Programs" },
        { id: 4, text: "Training" },
        { id: 5, text: "Blogs" },
    ];

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5

                }}
                className="hidden md:flex text-white bg-[#201e1e] shadow-md sticky z-50 top-0 left-0 items-center justify-between w-full px-6 py-4">
                <Link to={"/"} className="flex items-center gap-3">
                    <img src="https://res.cloudinary.com/db0wuel0k/image/upload/v1756924435/logo_jaogfi.jpg" alt="Logo" className="max-h-10 max-w-10 rounded-full" />
                    <h2 className="text-2xl font-heading font-bold text-[#E50914]">My-Fit</h2>
                </Link>

                <div>
                    <ul className="space-x-10 list-none hidden md:flex md:text-base lg:text-lg items-center">
                        {items.map(({ id, text, path }) => (
                            <li
                                key={id}
                                className="hover:text-[#E50914] duration-200 hover:cursor-pointer hover:underline"
                            >
                                <Link to={path}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex space-x-2">
                    <div className="flex mt-2 md:flex">
                        <a className="hover:text-[#E50914] duration-200 hover:underline hover:cursor-pointer mr-1">
                            Login
                        </a>
                        <p>/</p>
                        <a className="hover:text-[#E50914] duration-200 hover:underline hover:cursor-pointer mx-1">
                            Signup
                        </a>
                    </div>

                    <button className="px-2 py-2 bg-[#E50914] hover:bg-[#b20710] hover:cursor-pointer rounded-lg">
                        Join Now
                    </button>
                </div>
            </motion.nav>


            {/* MObile navbar */}
            <div className="flex md:hidden justify-between items-center bg-[#201e1e] text-white px-6 py-4 fixed top-0 left-0 w-full z-50">
                <div className="flex items-center gap-2">
                    <img src="https://res.cloudinary.com/db0wuel0k/image/upload/v1756924435/logo_jaogfi.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
                    <h2 className="text-xl font-heading font-bold text-[#E50914]">My-Fit</h2>
                </div>

                <button onClick={() => setMenu(true)} className="text-2xl">
                    <IoMenu />
                </button>

                <div
                    className={`fixed top-0 right-0 h-screen w-2/3 bg-[#201e1e] text-white transform ${menu ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out z-40`}
                >
                    <button
                        onClick={() => setMenu(false)}
                        className="absolute top-4 right-4 text-3xl"
                    >
                        <IoClose />
                    </button>

                    <div className="flex flex-col items-center mt-20 space-y-6">
                        <ul className="space-y-6 text-lg">
                            {items.map(({ id, text, path }) => (
                                <li
                                    key={id}
                                    className="hover:text-[#E50914] duration-200 cursor-pointer"
                                    onClick={() => setMenu(false)}
                                >
                                    <Link to={path}>{text}</Link>

                                </li>
                            ))}
                        </ul>

                        <div className="flex space-x-2">
                            <a className="hover:text-[#E50914] duration-200 hover:underline cursor-pointer">Login</a>
                            <p>/</p>
                            <a className="hover:text-[#E50914] duration-200 hover:underline cursor-pointer">Signup</a>
                        </div>
                        <button className="px-4 py-2 bg-[#E50914] hover:bg-[#b20710] text-white rounded-lg mt-6">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;
