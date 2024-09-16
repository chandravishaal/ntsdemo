import React from "react";
import '../../index.css';
import Group from '../../assets/Images/OtcDesk/mid_img.png'; 
import aiicon from '../../assets/Images/OtcDesk/section4_icon1.png'; 
import reward from '../../assets/Images/OtcDesk/section4_icon2.png';  
import risk from '../../assets/Images/OtcDesk/section4_icon3.png';  
import payment from '../../assets/Images/OtcDesk/section4_icon4.png';  
import onboarding from '../../assets/Images/OtcDesk/section4_icon5.png';  
import beginners from '../../assets/Images/OtcDesk/section4_icon6.png'; 

const WhatMakesUsDifferent = () => {
  return (
    <div className="bg-white py-12">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl font-semibold jost-uniquifier mb-8">What makes us Different</h2>
        <p className="mt-5 w-2/3 lg:w-1/2 jost-uniquifier mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative max-w-8xl jost-uniquifier mx-auto mt-24">
        {/* Centered Image */}
        <img
          src={Group}
          alt="Group difference"
          className="mx-auto w-1/3"
        />

        {/* Left Column Features */}
        <div className="absolute top-1/2 left-16 -translate-y-1/2 space-y-24 text-right">
          <div className="flex items-center space-x-4 flex-row-reverse">
            <img src={aiicon} alt="AI-Powered Trading Insights" className="w-12 h-12 ml-8" />
            <div>
              <h3 className="text-lg font-semibold ml-44">AI-Powered Trading Insights</h3>
              <p className="text-gray-500 text-sm w-64 ml-44">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-row-reverse">
            <img src={reward} alt="Reward programs" className="w-12 h-12 -ml-8 mr-20" />
            <div>
              <h3 className="text-lg font-semibold mr-14">Reward and Loyalty Programs</h3>
              <p className="text-gray-500 text-sm w-64 mr-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-row-reverse">
            <img src={risk} alt="Risk management" className="w-12 h-12 ml-12" />
            <div>
              <h3 className="text-lg font-semibold">Advanced Risk Management Tools </h3>
              <p className="text-gray-500 text-sm w-64  ml-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>

        {/* Right Column Features */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2 space-y-24 mr-24">
          <div className="flex items-center space-x-4">
            <img src={payment} alt="Localized Payment Methods" className="w-12 h-12 -ml-12 " />
            <div>
              <h3 className="text-lg font-semibold">Localized Payment Methods</h3>
              <p className="text-gray-500 text-sm w-64  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img src={onboarding} alt="Customized Onboarding Experience" className="w-12 h-12 ml-8" />
            <div>
              <h3 className="text-lg font-semibold">Customized Onboarding Experience</h3>
              <p className="text-gray-500 text-sm w-64">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img src={beginners} alt="Tailored for Beginners and Experts" className="w-12 h-12 -ml-12" />
            <div>
              <h3 className="text-lg font-semibold">Tailored for Beginners and Experts</h3>
              <p className="text-gray-500 text-sm w-64">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;

