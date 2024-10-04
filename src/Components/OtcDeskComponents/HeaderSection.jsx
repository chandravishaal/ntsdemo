

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import bg from "../../assets/Images/OtcDesk/bg.png";
import userIcon from "../../assets/Images/OtcDesk/userIcon.png";
import emailIcon from "../../assets/Images/OtcDesk/emailIcon.png";
import phoneIcon from "../../assets/Images/OtcDesk/phoneIcon.png";
import dealIcon from "../../assets/Images/OtcDesk/dealIcon.png";
import companyIcon from "../../assets/Images/OtcDesk/companyIcon.png";
import commentsIcon from "../../assets/Images/OtcDesk/commentsIcon.png";

const HeaderSection = () => {

  useEffect(() => {
    // GSAP animation for the left section
    gsap.from(".left-section", {
      x: -200,  // Start 200px from the left
      opacity: 0,  // Start with 0 opacity
      duration: 1.5,  // Duration of animation
      ease: "power2.out",  // Easing function
    });

    // GSAP animation for the right section
    gsap.from(".right-section", {
      x: 200,  // Start 200px from the right
      opacity: 0,  // Start with 0 opacity
      duration: 1.5,  // Duration of animation
      ease: "power2.out",  // Easing function
    });
  }, []);

  return (
    <div
      className="OtcHeader-background header-section bg-cover bg-center h-auto py-14 w-full flex items-center justify-center"
    >
      <div className="flex container mx-auto px-4 flex-col lg:flex-row items-center justify-between mb-10">
        {/* Left Section */}
        <div className="md:w-1/2 p-4 text-center md:text-center lg:text-left left-section">
          <h1 className="text-3xl md:text-4xl font-bold mb-[7%] text-gray-800 left-section-title mt-10 font-montserrat">
            Cryptocurrency OTC Over The Counter Exchange Desk Serving Globally
          </h1>
          <p className="left-section-text text-lg lg:text-xl text-gray-600 font-bold mb-[9%] font-century-gothic">
            Are you looking for an OTC (Over the Counter) Cryptocurrency Exchange Desk that can offer you several cryptocurrencies within seconds?
          </p>
          {/* Button Section */}
          <div className="flex justify-center lg:justify-start w-full">
            <button className="left-section-button bg-cyan-500 text-black px-6 py-3 rounded-lg font-medium text-lg font-century-gothic">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div
          className="w-full md:w-2/3 lg:1/2 rounded-xl p-2 lg:P-6 shadow-2xl mt-6 md:mt-0 relative right-section"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="bg-opacity-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center font-century-gothic">
              Contact the OTC desk
            </h2>
            <p className="text-white text-center mb-6 font-century-gothic">
              We will get back to you within one business day.
            </p>
            <form className="space-y-4">
              {/* Full Name Input with Icon */}
              <div className="relative">
                <img
                  src={userIcon}
                  alt="User Icon"
                  className="absolute ml-2 -left-[7%] lg:-left-7 md:-left-[6%] top-8 transform -translate-y-1/2 h-24 w-24 md:h-[12vw] md:w-[12vw] lg:h-28 lg:w-28"
                />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-4 pl-[22%] md:pl-[17%] lg:pl-[12%] rounded-xl bg-[#79D7EB] placeholder-gray-700 focus:outline-none font-century-gothic"
                />
              </div>

              {/* Email Input with Icon */}
              <div className="relative">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="absolute ml-2 -left-[9%] lg:-left-[6%] md:-left-[7%] md:top-[94%] lg:top-[100%] top-[96%] transform -translate-y-1/2 h-24 w-24 md:h-[12vw] md:w-[12vw] lg:h-28 lg:w-28"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-4 pl-[22%] md:pl-[17%] lg:pl-[12%] rounded-xl bg-[#79D7EB] placeholder-gray-700 focus:outline-none font-century-gothic"
                />
              </div>

              {/* Phone Input with Icon */}
              <div className="relative">
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  className="absolute ml-2 -left-[9%] lg:-left-[6%] md:-left-[7%] md:top-[94%] lg:top-[100%] top-[96%] transform -translate-y-1/2 h-24 w-24 md:h-[12vw] md:w-[12vw] lg:h-28 lg:w-28"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-4 pl-[21%] md:pl-[17%] lg:pl-[12%] rounded-xl bg-[#79D7EB] placeholder-gray-700 focus:outline-none font-century-gothic"
                />
              </div>

              {/* Deal Size Input with Icon */}
              <div className="relative">
                <img
                  src={dealIcon}
                  alt="Deal Icon"
                  className="absolute ml-2 -left-[9%] lg:-left-[6%] md:-left-[7%] md:top-[94%] lg:top-[100%] top-[96%] transform -translate-y-1/2 h-24 w-24 md:h-[12vw] md:w-[12vw] lg:h-28 lg:w-28"
                />
                <input
                  type="text"
                  placeholder="Deal size"
                  className="w-full p-4 pl-[21%] md:pl-[17%] lg:pl-[12%] rounded-xl bg-[#79D7EB] placeholder-gray-700 focus:outline-none font-century-gothic"
                />
              </div>

              {/* Company Name Input with Icon */}
              <div className="relative">
                <img
                  src={companyIcon}
                  alt="Company Icon"
                  className="absolute ml-2 -left-[9%] lg:-left-[6%] md:-left-[7%] md:top-[94%] lg:top-[100%] top-[96%] transform -translate-y-1/2 h-24 w-24 md:h-[12vw] md:w-[12vw] lg:h-28 lg:w-28"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full p-4 pl-[21%] md:pl-[17%] lg:pl-[12%] rounded-xl bg-[#79D7EB] placeholder-gray-700 focus:outline-none font-century-gothic"
                />
              </div>

              {/* Comments Textarea with Icon */}
              <div className="relative">
                <img
                  src={commentsIcon}
                  alt="Comments Icon"
                  className="absolute ml-2 -left-[9%] lg:-left-[5%] md:-left-[6%] md:top-[30%] lg:top-[30%] top-[30%] transform -translate-y-1/2 h-24 w-24 md:h-[12vw] md:w-[12vw] lg:h-28 lg:w-28"
                />
                <textarea
                  placeholder="Comments"
                  className="w-full p-4 pl-[21%] md:pl-[17%] lg:pl-[12%] rounded-xl bg-[#79D7EB] placeholder-gray-700 focus:outline-none font-century-gothic"
                  rows="3"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[60%] bg-cyan-700 text-white p-3 rounded-lg font-medium text-lg lg:p-4 mx-[20%] font-century-gothic"
              >
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
