import React from 'react'

import image from "../../assets/Images/OtcDesk/section5_img.png";
import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

const Works = () => {
  return (
    <section className="py-10 bg-cyan-50">
      <div className="container mx-auto text-center pt-10">
        <h2 className="text-4xl font-century-gothic font-bold text-gray-700 pb-10 ">How it works</h2>
        <p className="text-gray-500 font-century-gothic font-extrabold">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy <br /> text of the printing and typesetting industry.
        </p>

        {/* Main Content */}
        <div id="main" className="flex flex-col md:flex-row justify-center items-center pl-24 md:pl-0 pb-24 md:space-x-10  space-y-10 md:space-y-0 mt-10">

          {/* Left Section */}
          <div id="left" className="relative flex flex-col items-center md:w-1/3 w-full">
            <div className="relative flex flex-col items-center">
              <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
              <img src={icon1} alt="Icon 1" className="absolute top-10 left-7" />
              <div className="text-9xl font-black text-gray-800 absolute top-28 -left-32">1</div>
              <div className="absolute top-28 -left-16 w-60 text-center">
                <h1 className="text-3xl font-semibold font-century-gothic">Onboarding</h1>
                <p className="px-7 text-sm font-century-gothic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?</p>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div id="center" className="relative flex flex-col items-center md:w-1/3 w-full">
            <div className="relative flex flex-col items-center">
              <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
              <img src={icon2} alt="Icon 2" className="absolute top-10 left-7" />
              <div className="text-9xl font-black text-gray-800 absolute top-28 -left-32">2</div>
              <div className="absolute top-28 -left-16 w-60 text-center">
                <h1 className="text-3xl font-semibold font-century-gothic">Fund Deposit</h1>
                <p className="px-7 text-sm font-century-gothic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div id="right" className="relative flex flex-col items-center md:w-1/3 w-full">
            <div className="relative flex flex-col items-center">
              <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
              <img src={icon3} alt="Icon 3" className="absolute top-10 left-7" />
              <div className="text-9xl font-black text-gray-800 absolute top-28 -left-32">3</div>
              <div className="absolute top-28 -left-16 w-60 text-center">
                <h1 className="text-3xl font-semibold font-century-gothic">Settlement</h1>
                <p className="px-7 text-sm font-century-gothic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis non ullam tenetur?</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Works;
