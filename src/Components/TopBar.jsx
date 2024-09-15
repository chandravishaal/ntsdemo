import React from 'react';
import 'remixicon/fonts/remixicon.css';

const TopBar = () => {
  return (
    <div className="bg-[#252525] w-full">
      <section className="">
        <div className="container mx-auto bg-[#252525] border border-[#252525] px-4 md:px-8 lg:px-10 flex items-center justify-between py-3 flex-col md:flex-row space-y-3 md:space-y-0">
          {/* Left Side: Contact & Social Icons */}
          <div className="flex items-center space-x-4">
            {/* Contact Info */}
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line text-cyan-300"></i>
              <span className="text-gray-500 hover:text-cyan-300 text-sm md:text-base">contact@ntsmetrics.com</span>
            </div>

            {/* Divider Line */}
            <div className="border-l border-gray-600 h-6"></div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2">
              <i className="ri-facebook-fill text-gray-500 hover:text-cyan-300"></i>
              <i className="ri-instagram-line text-gray-500 hover:text-cyan-300"></i>
              <i className="ri-linkedin-fill text-gray-500 hover:text-cyan-300"></i>
            </div>
          </div>

          {/* Right Side: Navigation Links and Sign In/Register */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Navigation Links */}
            <a href="#" className="hover:text-cyan-300 text-gray-500 text-sm md:text-base">FAQ&apos;s</a>
            <div className="border-l border-gray-600 h-6"></div>

            <a href="#" className="hover:text-cyan-300 text-gray-500 text-sm md:text-base">ICO Calendar</a>
            <div className="border-l border-gray-600 h-6"></div>

            <a href="#" className="hover:text-cyan-300 text-gray-500 text-sm md:text-base">Prices</a>

            <div className="hidden md:block mx-4"></div>

            {/* Sign In and Register */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="#" className="flex items-center space-x-1 hover:text-cyan-300 text-gray-500 text-sm md:text-base">
                <i className="ri-user-line text-cyan-300"></i>
                <span>Sign in</span>
              </a>
              <div className="border-l border-gray-600 h-6"></div>

              <a href="#" className="flex items-center space-x-1 hover:text-cyan-300 text-gray-500 text-sm md:text-base">
                <i className="ri-registered-line text-cyan-300"></i>
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBar;