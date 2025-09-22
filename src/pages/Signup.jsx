import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const panelVariants = {
  hiddenRight: { x: 300, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exitRight: { x: 300, opacity: 0 },
};

const Signup = () => {
  return (
    <div className="min-h-screen w-full bg-[#201e1e] flex items-center justify-center">
      <div className="bg-[#111] rounded-3xl shadow-xl relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
        
        {/* Signup Form */}
        <motion.div
        variants={panelVariants}
          initial="hiddenRight"
          animate="visible"
          exit="exitRight"
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
        className="w-1/2 absolute left-0">
          <form className="bg-[#111] h-full flex flex-col items-center justify-center px-10">
            <h1 className="text-4xl font-bold mt-10 mb-4 text-white">Sign Up</h1>
            <div className='mt-10 '>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-gray-900 border-none my-2 p-3 text-sm rounded-lg outline-none text-white placeholder-gray-400"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-gray-900 border-none my-2 p-3 text-sm rounded-lg outline-none text-white placeholder-gray-400"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-gray-900 border-none my-2 p-3 text-sm rounded-lg outline-none text-white placeholder-gray-400"
              />
            </div>
            <button className="bg-[#b4111e] text-white text-xs py-2 px-11 rounded-lg font-semibold uppercase tracking-wider mt-3 hover:bg-[#e50914] hover:cursor-pointer">
              Sign Up
            </button>
          </form>
        </motion.div>

        {/* Info Panel */}
        <motion.div
          variants={panelVariants}
          initial="hiddenRight"
          animate="visible"
          exit="exitRight"
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          className="absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-l-[150px] rounded-br-[100px] z-[1000]"
        >
          <div className="bg-[#e5091482] h-full w-full text-white flex items-center justify-center">
            <div className="px-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-sm leading-5 tracking-wide my-5 text-gray-200">
                If you already have an account Login from here!!!
              </p>
              <Link to="/login">
                <button className="border border-white bg-transparent text-white text-xs py-2 px-11 rounded-lg font-semibold uppercase tracking-wider mt-3 hover:bg-white/10 hover:cursor-pointer">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Signup;
