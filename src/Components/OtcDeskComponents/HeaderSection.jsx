import React from 'react';
import '../../index.css';
import background from '../../assets/Images/OtcDesk/hero_section_background.png';
import bg from '../../assets/Images/OtcDesk/bg.png';
import userIcon from '../../assets/Images/OtcDesk/userIcon.png';  
import emailIcon from '../../assets/Images/OtcDesk/emailIcon.png';
import phoneIcon from '../../assets/Images/OtcDesk/phoneIcon.png';
import dealIcon from '../../assets/Images/OtcDesk/dealIcon.png';
import companyIcon from '../../assets/Images/OtcDesk/companyIcon.png';
import commentsIcon from '../../assets/Images/OtcDesk/commentsIcon.png';

const HeaderSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="z-10 flex flex-col lg:flex-row items-center justify-between container mx-auto px-2 ">
        {/* Left Section (Text) */}
        <div className="w-1/2 text-left px-4">
          <h1 className="text-4xl  jost-uniquifier font-semibold text-black mb-6">
            Cryptocurrency OTC Over The Counter Exchange Desk Serving Globally
          </h1>
          <p className="text-lg lg:text-2xl jost-uniquifier text-black mb-10">
            Are you looking for an OTC (Over the Counter) Cryptocurrency Exchange Desk that can offer you several cryptocurrencies within seconds?
          </p>
          <button className="bg-cyan-500 jost-uniquifier text-white px-6 py-3 rounded-lg font-medium text-lg">
            Get Started Now
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center px-4">
          {/* Form Background */}
          <img
            src={bg}
            className="absolute -inset-0 object-cover z-0 p-10 ml-28 max-w-xl  rounded-lg"
          />
          
          {/* Form Container */}
          <div className="relative z-10 w-full mt-11 -mr-[220px] max-w-lg p-12 bg-transparent">
            <h2 className="text-3xl jost-uniquifier font-semibold text-white text-center">
              Contact the OTC desk
            </h2>
            <p className="text-white mb-10 jost-uniquifier text-center">
              We will get back to you within one business day.
            </p>

            <form className="space-y-4 w-96 jost-uniquifier ml-3">
              <div className="relative">
                <img
                  src={userIcon}
                  className="absolute top-1/2 transform -translate-y-1/2 -left-6 w-30 h-34"
                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none"
                />
              </div>

              <div className="relative">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="absolute top-1/2 transform -translate-y-1/2  -left-7 w-30 h-34 mt-6"
                />
                <input

                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none"
                />
              </div>

              <div className="mb-4 relative">
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  className="absolute top-1/2 transform -translate-y-1/2 -left-7 w-30 h-34 mt-6"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none"
                />
              </div>

              <div className="mb-4 relative">
                <img
                  src={dealIcon}
                  alt="Deal Size Icon"
                  className="absolute top-1/2 transform -translate-y-1/2 -left-7 w-30 h-34 mt-6"
                />
                <input
                  type="text"
                  placeholder="Deal size"
                  className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none"
                />
              </div>

              <div className="mb-4 relative">
                <img
                  src={companyIcon}
                  alt="Company Icon"
                  className="absolute top-1/2 transform -translate-y-1/2 -left-7 w-30 h-34 mt-6"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full p-3 pl-12 rounded-lg bg-cyan-300 text-cyan-800 placeholder-cyan-800 focus:outline-none"
                />
              </div>

              <div className="mb-4 relative">
                <img
                  src={commentsIcon}
                  alt="Comments Icon"
                  className="absolute jost-uniquifier top-1/2 transform -translate-y-1/2 -left-6 w-30 h-34 -mt-2"
                />
                <textarea
                  placeholder="Comments"
                  className="w-full p-3 pl-12 rounded-lg bg-cyan-400 text-cyan-800 placeholder-cyan-800 focus:outline-none"
                  rows="2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-52 bg-cyan-800 text-white p-3 rounded-lg font-medium ml-24 text-lg"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;