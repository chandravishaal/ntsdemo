import React from 'react';

import location from "../../assets/Images/OtcDesk/section6_location_icon.png";

import Canada from "../../assets/Images/OtcDesk/section6_icon1.png";
import United from "../../assets/Images/OtcDesk/section6_icon2.png";
import UK from "../../assets/Images/OtcDesk/section6_icon3.png";
import Europe from "../../assets/Images/OtcDesk/section6_icon4.png";
import India from "../../assets/Images/OtcDesk/section6_icon5.png";
import Australia from "../../assets/Images/OtcDesk/section6_icon6.png";
import { useState } from 'react';


const Footprint = () => {
  return (
    <section className="h-[61rem] py-10 bg-[#F6F9FC]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-century-gothic font-bold">Our Global Footprint</h2>
        <p className="text-gray-700 font-medium font-antipasto-pro text-4xl mt-2">
          Proudly serving the following countries
        </p>
      </div>

      <div
        className=" hidden lg:block map relative h-[50rem] bg-center bg-cover container mx-auto">

        {/*canada */}
        <div className="relative h-screen">
          {/* Parent Container with Group Class */}
          <div className="absolute top-[14%] left-[12.1%] flex items-center group">
            {/* Location Icon */}
            <div id="location" className='w-5 h-5'>
              <img src={location} alt="Location Icon" />
            </div>

            {/* Details Container */}
            <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
                <div className="absolute right-2 -bottom-7 w-0 h-0 
              border-t-[35px] border-t-white
              border-l-[45px] border-l-transparent">
                </div>
                <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
                  <img src={Canada} alt="Canada" className="w-8 h-8 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-center">Canada</h4>
                  <p className="text-gray-600 text-sm">CAD Market Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Location */}
        <div className="absolute top-[30%] left-[27.2%] flex items-center group">
          {/* Location Icon */}
          <div id="location" className='w-5 h-5'>
            <img src={location} alt="Location Icon" />
          </div>

          {/* Details Container */}
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 
              border-t-[35px] border-t-white
              border-l-[45px] border-l-transparent">
              </div>
              <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
                <img src={United} alt="United" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-center">United</h4>
                <p className="text-gray-600 text-sm">USD Market Rate</p>
              </div>
            </div>
          </div>
        </div>


        {/* UK 
         */}
        <div className="absolute top-[24%] left-[51.2%] flex items-center group">
          {/* Location Icon */}
          <div id="location" className='w-5 h-5'>
            <img src={location} alt="Location Icon" />
          </div>

          {/* Details Container */}
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 
              border-t-[35px] border-t-white
              border-l-[45px] border-l-transparent">
              </div>
              <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
                <img src={UK} alt="United" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-center">UK</h4>
                <p className="text-gray-600 text-sm">GBP Markett Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Europe 
       */}
        <div className="absolute top-[24%] left-[58.2%] flex items-center group">
          {/* Location Icon */}
          <div id="location" className='w-5 h-5'>
            <img src={location} alt="Location Icon" />
          </div>

          {/* Details Container */}
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 
              border-t-[35px] border-t-white
              border-l-[45px] border-l-transparent">
              </div>
              <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
                <img src={Europe} alt="United" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-center">Europe</h4>
                <p className="text-gray-600 text-sm">EUR Market Rate</p>
              </div>
            </div>
          </div>
        </div>


        {/* India 
        */}
        <div className="absolute top-[38%] left-[75.2%] flex items-center group">
          {/* Location Icon */}
          <div id="location" className='w-5 h-5'>
            <img src={location} alt="Location Icon" />
          </div>

          {/* Details Container */}
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 
              border-t-[35px] border-t-white
              border-l-[45px] border-l-transparent">
              </div>
              <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
                <img src={India} alt="United" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-center">India</h4>
                <p className="text-gray-600 text-sm">INR Market Rate</p>
              </div>
            </div>
          </div>
        </div>




        {/* Australia 
        */}

        <div className="absolute top-[67%] left-[91%] flex items-center group">
          {/* Location Icon */}
          <div id="location" className='w-5 h-5'>
            <img src={location} alt="Location Icon" />
          </div>

          {/* Details Container */}
          <div className="absolute -top-[7rem] left-[-8rem] hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div className="relative ml-4 px-2 py-1 bg-white rounded-3xl flex flex-col items-center shadow-lg border border-gray-300">
              <div className="absolute right-2 -bottom-7 w-0 h-0 
              border-t-[35px] border-t-white
              border-l-[45px] border-l-transparent">
              </div>
              <div id="img" className='h-9 w-9 bg-cyan-500 rounded-full flex items-center justify-center'>
                <img src={Australia} alt="United" className="w-8 h-8 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-center">Australia</h4>
                <p className="text-gray-600 text-sm">AUD Market Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className=" lg:hidden container mx-auto grid grid-cols-2 gap-10 sm:grid-cols-3 px-6">
        {/* Canada */}
        <div className="flex flex-col items-center ">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={Canada} alt="Canada" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center whitespace-nowrap">Canada</h4>
            <p className="text-gray-600 font-century-gothic text-sm whitespace-nowrap">CAD Market Rate</p>
          </div>
        </div>

        {/* United States */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center  w-[170px] h-[150px]">
            <img src={United} alt="United States" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center whitespace-nowrap">United States</h4>
            <p className="text-gray-600 font-century-gothic text-sm whitespace-nowrap">USD Market Rate</p>
          </div>
        </div>

        {/* United Kingdom */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center  w-[170px] h-[150px]">
            <img src={UK} alt="United Kingdom" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center whitespace-nowrap">UK</h4>
            <p className="text-gray-600 font-century-gothic text-sm whitespace-nowrap">GBP Market Rate</p>
          </div>
        </div>

        {/* Europe */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={Europe} alt="Europe" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center whitespace-nowrap">Europe</h4>
            <p className="text-gray-600 font-century-gothic text-sm whitespace-nowrap">EUR Market Rate</p>
          </div>
        </div>

        {/* India */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={India} alt="India" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center whitespace-nowrap">India</h4>
            <p className="text-gray-600 font-century-gothic text-sm whitespace-nowrap">INR Market Rate</p>
          </div>
        </div>

        {/* Australia */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-300 flex flex-col items-center w-[170px] h-[150px]">
            <img src={Australia} alt="Australia" className="w-12 h-12 mb-3" />
            <h4 className="font-bold font-century-gothic text-base text-center whitespace-nowrap">Australia</h4>
            <p className="text-gray-600 font-century-gothic text-sm whitespace-nowrap">AUD Market Rate</p>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Footprint;
