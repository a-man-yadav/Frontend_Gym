import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const panelVariants = {
  hiddenLeft: { x: -300, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exitLeft: { x: -300, opacity: 0 },
};

const Login = () => {
  return (
    <div className='min-h-screen bg-[#201e1e] flex flex-col items-center justify-center'>
      <div className="flex items-center justify-center">
        <div className="bg-[#111] rounded-3xl shadow-xl relative overflow-hidden w-[768px] max-w-full min-h-[480px]">

          {/* Login Form */}
          <motion.div
            variants={panelVariants}
            initial="hiddenLeft"
            animate="visible"
            exit="exitLeft"
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="w-1/2 absolute right-0">
            <form className="bg-[#111] h-full flex flex-col items-center justify-center px-10">
              <h1 className="text-4xl font-bold mb-4 mt-10 mr-4 text-white">Login</h1>
              <div className='mt-10'>
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
              <a
                href="#"
                className="text-sm text-gray-300 my-4 hover:text-gray-100"
              >
                Forgot Your Password?
              </a>
              <button className="bg-[#b4111e] text-white text-xs py-2 px-11 rounded-lg font-semibold uppercase tracking-wider mt-3 hover:bg-[#e50914] hover:cursor-pointer">
                Login
              </button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            variants={panelVariants}
            initial="hiddenLeft"
            animate="visible"
            exit="exitLeft"
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="absolute top-0 left-0 w-1/2 h-full overflow-hidden rounded-r-[150px] rounded-bl-[100px] z-[1000]"
          >
            <div className="bg-[#e5091482] h-full w-full text-white flex items-center justify-center">
              <div className="px-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
                <p className="text-sm leading-5 tracking-wide my-5 text-gray-200">
                  If you are new here create your account & <br />START YOUR JOURNEY.
                </p>
                <Link to="/signup">
                  <button className="border hover:cursor-pointer border-white bg-transparent text-white text-xs py-2 px-11 rounded-lg font-semibold uppercase tracking-wider mt-3 hover:bg-white/10">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Login;
