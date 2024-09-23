


import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "../../assets/Images/OtcDesk/section5_img.png";
import icon1 from "../../assets/Images/OtcDesk/section5_icon1.png";
import icon2 from "../../assets/Images/OtcDesk/section5_icon2.png";
import icon3 from "../../assets/Images/OtcDesk/section5_icon3.png";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    // GSAP animation for each hexagon section
    gsap.from(".hexagon-section", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      stagger: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#main", // Target the main container of the section
        start: "top 70%", // Animation starts when the top of the section hits 80% of the viewport
        end: "bottom 20%", // Animation ends when the bottom hits 20%
        toggleActions: "play none none reset", // Play animation on enter, reverse on exit
      },
    });
  }, []);

  return (
    <section className="py-10 bg-cyan-50">
      <div className="container mx-auto text-center pt-10">
        <h2 className="text-4xl font-bold text-gray-700 pb-5 font-montserrat">How it works</h2>
        <p className="text-gray-500 font-extrabold font-century-gothic px-5">
        From quick onboarding to instant transactions, experience effortless crypto trading step by step
        </p>

        {/* Main Content */}
        <div id="main" className="flex flex-col lg:flex-row justify-center items-center pl-24 md:pl-24 pb-24 md:space-x-20 gap-10 lg:gap-0 space-y-10 md:space-y-0 mt-10">

          {/* Left Section */}
          <div id="left" className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section ml-10 md:ml-16 lg:ml-0">
            <div className="relative flex flex-col items-center">
              <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
              <img src={icon1} alt="Icon 1" className="absolute top-10 left-7" />
              <div className="text-9xl font-black text-gray-800 absolute top-24 -left-32">1</div>
              <div className="absolute top-24 -left-16 w-60 text-center">
                <h1 className="text-3xl font-semibold  font-montserrat">Onboarding</h1>
                <p className="px-7 text-sm font-century-gothic">Sign up and get verified in minutes. Speedy and Easy Onboarding.</p>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div id="center" className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section ml-10 md:ml-0">
            <div className="relative flex flex-col items-center">
              <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
              <img src={icon2} alt="Icon 2" className="absolute top-10 left-7" />
              <div className="text-9xl font-black text-gray-800 absolute top-24 -left-32">2</div>
              <div className="absolute top-24 -left-16 w-60 text-center">
                <h1 className="text-3xl font-semibold font-montserrat">Fund Deposit</h1>
                <p className="px-7 text-sm font-century-gothic">Deposit Funds with multiple payment options - safely and easily.</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div id="right" className="relative flex flex-col items-center md:w-1/3 w-full hexagon-section ml-10 md:ml-0">
            <div className="relative flex flex-col items-center">
              <img src={image} alt="Hexagon Shape" className="w-[220px] h-[240px]" />
              <img src={icon3} alt="Icon 3" className="absolute top-10 left-7" />
              <div className="text-9xl font-black text-gray-800 absolute top-24 -left-32">3</div>
              <div className="absolute top-24 -left-16 w-60 text-center">
                <h1 className="text-3xl font-semibold font-montserrat">Settlement</h1>
                <p className="px-7 text-sm font-century-gothic">Efficient transactions with instant settlements improve customer satisfaction and experience.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Works;
