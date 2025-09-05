import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="pt-16 pb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Start Your Fitness Journey Today!
          </h2>
          <button className="mt-6 inline-block px-6 py-2 bg-[#E50914] hover:bg-[#b20710] hover:cursor-pointer text-white rounded-full font-semibold">
            Join Now
          </button>
        </div>

        <div className="border-t border-gray-800" />

        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">My-Fit Gym</h3>
            <p className="text-sm text-gray-300">123 Fitness St, Workout City, 10110</p>
            <a href="" className="block text-sm text-gray-300 mt-2">
              contact@myfitgym.com
            </a>
          </div>

          <div className="text-center md:text-left md:pl-6">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="" className="hover:text-white">FAQ</a></li>
              <li><a href="" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 mt-2">
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
  );
};

export default Footer;
