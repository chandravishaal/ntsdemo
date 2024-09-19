import React from "react";
import '../../index.css';
import backgroundImg from '../../assets/Images/Blog/insta_background.png'; 
import right from '../../assets/Images/Blog/instaright.png';

const InstagramSection = () => {
  return (
    <div
      className="relative py-[-12%] w-full h-[700px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImg})` }} 
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-[22%] p-4 text-center lg:text-left">
          <div className="relative">
            <h1 className="text-3xl lg:text-6xl font-bold text-black relative z-10 font-montserrat">
              Latest on Our Instagram
            </h1>
            <p className="text-gray-600 mt-5 text-base lg:text-xl relative z-10 lg:w-[500px] font-century-gothic">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="mt-5 bg-cyan-500 text-white py-2 px-8 rounded relative z-10 font-century-gothic">
              More
            </button>
          </div>
        </div>

        {/* Right Section with Instagram-like posts */}
        <div className="w-full lg:w-auto mt-[25%] lg:mt-[7%]">
          <img
            src={right}
            className="w-full lg:w-[900px] h-auto max-w-full"
            alt="Instagram Posts"
          />
        </div>
        
      </div>
    </div>
  );
};

export default InstagramSection;
